'use client'

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from './ui/card'
import { toast } from 'sonner'

interface ZenQuote {
	q: string; // The quote text
	a: string; // The author
	h: string; // The HTML version
}

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

				console.log(data);
			}
			catch (error: any) {
				toast.error("" + error)
				console.error("Error fetching quote:", error);
			}
			finally {
				setIsLoading(false);
			}
		}

		fetchRandomQuote();
	}, [])


	function OnClickSave() {
		// TODO: implement local storage
		toast.success("Saved to your journals")
	}

	return (
		<div className='  flex items-center justify-center min-w-screen'>
			{isLoading && <p className="text-center text-lg">Loading quote...</p>}
			{error && <p className="text-center text-lg text-red-500">{error}</p>}

			{!isLoading && !error && (
				<Card className='absolute bottom-20 right-20 p-6'>
					<h1 className='text-4xl font-bold text-center mb-4'>Quote of the day</h1>
					<CardHeader>


						<CardTitle>{quote?.a}</CardTitle>
						<CardAction>
							<Button onClick={() => OnClickSave()}>Save</Button>
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
