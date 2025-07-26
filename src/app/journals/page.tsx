'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardAction, CardContent, } from '@/components/ui/card'
import { toast } from 'sonner'
import { SavedQuote } from '@/types/quotes'
import { Loader2 } from 'lucide-react'
import { AnimatePresence, easeIn, easeInOut, motion } from 'framer-motion'

export default function Journals() {

	const [savedQuotes, setSavedQuotes] = useState<SavedQuote[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

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
		catch (e: unknown) {
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
		catch (e: unknown) {
			console.log(e);
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

	function generateRandomDelayAnimation(min: number, max: number): number {
		return Math.random() * (max - min) + min;
	}

	return (
		<div className='flex items-center  flex-col min-h-screen p-12'>

			<div className='flex justify-between w-full p-4'>
				<h1 className='text-xl sm:text-4xl font-bold'>Saved Journals</h1>
				<div className='flex flex-col-reverse gap-2 sm:flex-row sm:gap-6'>

					<Link href="/explore">
						<Button variant="outline">Browse</Button>
					</Link>

					<Link href="/journals/new">
						<Button>Add Entry</Button>
					</Link>

				</div>
			</div>

			<AnimatePresence mode="popLayout">
				<motion.div
					className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6'
				>
					{
						savedQuotes.map((entry) => (
							<motion.div
								key={entry.id}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.5 }}
								exit={{
									opacity: 0, y: -20, scale: 0.8,
									transition: {
										duration: 0.3, ease: easeInOut
									}
								}}
								transition={{
									duration: 0.8,
									ease: easeIn,
									delay: generateRandomDelayAnimation(0.1, 0.5),
									type: "spring"
								}}
								className="inline-block w-full break-inside-avoid-column"
							>
								<Card className='flex flex-col justify-between h-full'>
									<CardHeader className="flex-row items-start justify-between">
										<CardTitle className="flex-grow">{entry.a}</CardTitle>
										<CardAction>
											<Button variant="destructive"
												onClick={() => onClickDelete(entry.id)}>
												Delete
											</Button>
										</CardAction>
									</CardHeader>
									<CardContent className='flex flex-grow items-center justify-center p-6'>
										<q className='text-2xl text-center  leading-relaxed'>{entry.q}</q>
									</CardContent>
								</Card>
							</motion.div>
						))
					}
				</motion.div>
			</AnimatePresence>
		</div >
	)
}
