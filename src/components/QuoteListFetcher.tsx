import { Separator } from '@radix-ui/react-separator'
import Link from 'next/link'

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, } from './ui/card'
import { toast } from "sonner"
import { Loader2 } from 'lucide-react'
import { SavedQuote, ZenQuote } from '@/types/quotes'


import { easeIn, motion } from 'framer-motion'

export default function QuoteListFetcher() {

	const [quotes, setQuotes] = useState<ZenQuote[] | null>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [error, setError] = useState<string>('');

	useEffect(() => {
		async function GetQuotes() {
			setIsLoading(true);

			try {
				const response = await fetch("/api");

				if (!response.ok) {
					throw new Error("HTTP error stats:" + response.status);
					return;
				}
				const data: ZenQuote[] = await response.json();
				setQuotes(data);
				console.log(data);

			}
			catch (err: unknown) {
				toast.error("Something went wrong!")
				console.log(err);

				setError("Can't load quotes")
			}
			finally {
				setIsLoading(false);
			}
		}


		GetQuotes();
	}, [])


	function OnClickSave(quoteToSave: ZenQuote) {
		try {
			const existingQuotes = localStorage.getItem('savedQuotes');
			let existingQuotesArray: SavedQuote[] = [];


			if (existingQuotes) {
				existingQuotesArray = JSON.parse(existingQuotes);
			}

			const isDuplicate: boolean = existingQuotesArray.some((savedQuote) =>
				savedQuote.q === quoteToSave.q && savedQuote.a === quoteToSave.a);

			if (isDuplicate) {
				toast.warning("Quote already saved", {
					description: quoteToSave.q
				});
				return;
			}




			const maxId = existingQuotesArray.reduce((max, quote) => Math.max(max, quote.id), 0);
			const newId = maxId + 1;

			const newSavedQuote: SavedQuote = {
				id: newId,
				q: quoteToSave.q || "",
				a: quoteToSave.a || "",
			}
			existingQuotesArray.push(newSavedQuote);

			localStorage.setItem('savedQuotes', JSON.stringify(existingQuotesArray));

			toast.success("Saved to your journals")
		}
		catch (err: unknown) {
			toast.error("Something went wrong!")
			console.log(err);
		}

	}

	if (error) {
		return (
			<div className='flex items-center justify-center h-screen'>
				<p className='text-2xl'>{error}</p>
			</div>
		)
	}

	return (
		<div>
			<Separator className='border-2' />
			{
				isLoading ? (
					<div className='flex items-center justify-center h-screen'>
						<Loader2 className='animate-spin' />
					</div>
				) : (
					<div className='min-h-screen  px-12 flex flex-col items-center justify-around'>
						<h1 className='text-4xl font-bold my-6'>Journals</h1>

						{/* QUOTES */}
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
							{
								quotes?.map((entry, key) =>
									<Card key={key} className='flex flex-col items-between'>

										<CardHeader>
											<CardTitle>{entry.a}</CardTitle>
											<CardDescription>
											</CardDescription>
											<CardAction>
												<Button onClick={() => OnClickSave(entry)}>Save</Button>
											</CardAction>
										</CardHeader>

										<CardContent className='flex items-center justify-center gap-8'>
											<q className='text-2xl'>{entry.q}</q>
										</CardContent>


									</Card>
								)
							}
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: ((quotes?.length || 0) * 0.1) + 0.5,
								ease: easeIn,
								type: "spring",
								stiffness: 100
							}}
							className="w-full flex justify-center"
						>
							<Link href="/explore">
								<Button className='my-12'>See More</Button>
							</Link>
						</motion.div>

					</div>
				)
			}


		</div>
	)
}
