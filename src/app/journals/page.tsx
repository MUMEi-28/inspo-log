'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { dummyEntries } from '@/lib/data/Entries'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from "@/components/ui/badge"
import { toast } from 'sonner'
import { ZenQuote, SavedQuote } from '@/types/quotes'
import { Loader2 } from 'lucide-react'

export default function page() {

	const [savedQuotes, setSavedQuotes] = useState<SavedQuote[]>([]);
	const [isLoading, setIsLoading] = useState<Boolean>(true);

	useEffect(() => {
		try {
			setIsLoading(true);

			const savedQuotesString = localStorage.getItem('savedQuotes');
			if (savedQuotesString) {
				setSavedQuotes(JSON.parse(savedQuotesString));
			}
			else {
				setSavedQuotes([]);
			}
		}
		catch (e: any) {
			console.error(e);
			toast.error("Something went wrong!")
		}
		finally {
			setIsLoading(false);
		}
	}, [])


	function onClickDelete(idToDelete: number): void {

		try {

			const previousQuotes = JSON.parse(JSON.stringify(savedQuotes)); // Deep clone for safety

			const updatedQuotes = savedQuotes?.filter((quote) => quote.id !== idToDelete);
			setSavedQuotes(updatedQuotes);
			localStorage.setItem('savedQuotes', JSON.stringify(updatedQuotes));

			toast('Removed from journals', {
				action: {
					label: 'Undo',
					onClick: () => {

						localStorage.setItem('savedQuotes', JSON.stringify(previousQuotes));
						setSavedQuotes(previousQuotes);
						toast.success('Restored from journals');
					}
				},
				duration: 5000,
			})
		}
		catch (e: any) {
			toast.error("Something went wrong!")
		}
	}

	if (isLoading) {
		return (
			<div className='flex items-center justify-center h-screen'>
				<Loader2 className='animate-spin' />
			</div>
		)
	}

	if (savedQuotes.length === 0) {
		return (
			<div className='flex items-center justify-center h-screen'>
				<Card className='flex flex-col items-between'>

					<CardContent className='flex items-center justify-center gap-8'>
						<p className='text-2xl'>No saved quotes</p>
					</CardContent>

					<CardHeader className='items-center justify-center'>
						<Link href="/explore">
							<Button>Browse</Button>
						</Link>
					</CardHeader>
				</Card>
			</div>
		)
	}

	return (
		<div className='flex items-center  flex-col min-h-screen p-12'>

			<div className='flex justify-between w-full p-4'>
				<h1 className='text-4xl font-bold'>Saved Journals</h1>
				<div className='flex gap-6 '>

					<Link href="/explore">
						<Button variant="outline">Browse</Button>
					</Link>

					<Link href="/journals/new">
						<Button>Add Entry</Button>
					</Link>

				</div>
			</div>

			<div className='grid grid-cols-3 gap-4 '>
				{
					savedQuotes.map((entry) =>
						<Card key={entry.id} className='flex flex-col items-between'>

							<CardHeader>
								<CardTitle>{entry.a}</CardTitle>

								<CardAction>
									<Button variant="destructive" onClick={() => onClickDelete(entry.id)}>Delete</Button>
								</CardAction>
							</CardHeader>

							<CardContent className='flex items-center justify-center gap-8'>
								<q className='text-2xl'>{entry.q}</q>
							</CardContent>

						</Card>
					)
				}

			</div>
		</div>
	)
}
