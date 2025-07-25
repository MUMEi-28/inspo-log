'use client'

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from './ui/card'
import { toast } from 'sonner'
import { ZenQuote, SavedQuote } from '@/types/quotes'


export default function RandomQuoteFetcher() {

	const [quote, setQuote] = useState<ZenQuote | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, seterror] = useState<string | null>(null);

	useEffect(() => {
		async function fetchRandomQuote() {
			setIsLoading(true);
			seterror(null);
			try {

				const response = await fetch("api/quote");

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data: ZenQuote = await response.json();
				setQuote(data);
			}
			catch (error: any) {
				toast.error("Something went wrong!")
				console.error("Error fetching quote:", error);
			}
			finally {
				setIsLoading(false);
			}
		}

		fetchRandomQuote();
	}, [])


	function OnClickSave(quoteToSave: ZenQuote) {

		try {
			const existingQuotes = localStorage.getItem('savedQuotes');
			let existingQuotesArray: SavedQuote[] = [];

			if (existingQuotes) {
				existingQuotesArray = JSON.parse(existingQuotes);
			}

			const maxId = existingQuotesArray.reduce((max, quote) => Math.max(max, quote.id), 0);
			const newId = maxId + 1;

			const newSavedQuote: SavedQuote = {
				id: newId,
				a: quoteToSave.a || "",
				q: quoteToSave.q || "",
			}
			const isDuplicate: boolean = existingQuotesArray.some((savedQuote) => savedQuote.q === quoteToSave.q && savedQuote.a === quoteToSave.a);

			if (isDuplicate) {
				toast.warning("Quote already saved", {
					description: quoteToSave.q
				});
				return;
			}
			existingQuotesArray.push(newSavedQuote);

			localStorage.setItem('savedQuotes', JSON.stringify(existingQuotesArray))
			toast.success("Saved to your journals",
				{
					description: quote?.q,
				}
			)
		}
		catch (e: any) {
			console.log(e)
			toast.error("Something went wrong!")
		}

	}

	return (
		<div className='  flex items-center justify-center min-w-screen'>
			{error && <p className="text-center text-lg text-red-500">{error}</p>}

			{!isLoading && !error && quote && (
				<Card className='fade-in-100 absolute bottom-20 right-20 p-6'>
					<h1 className='text-4xl font-bold text-center mb-4'>Quote of the day</h1>
					<CardHeader>

						<CardTitle>{quote?.a}</CardTitle>
						<CardAction>
							<Button onClick={() => OnClickSave(quote!)}>Save</Button>
						</CardAction>

					</CardHeader>

					<CardContent className='flex items-center justify-center gap-8'>
						<q className='text-2xl'>{quote?.q}</q>
					</CardContent>

				</Card>
			)}
		</div>
	)
}
