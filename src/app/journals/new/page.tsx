'use client'

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { SavedQuote } from '@/types/quotes'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'


export default function NewJournal() {

	const [quoteText, setQuoteText] = useState<string>('');
	const [authorName, setAuthorName] = useState<string>('');

	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();


		// Basic validation
		if (!quoteText.trim() || !authorName.trim()) {
			toast.error("Both entry and author fields are required");
			return;
		}

		try {
			const existingQuotesString = localStorage.getItem('savedQuotes');
			let existingQuotesArray: SavedQuote[] = [];

			if (existingQuotesString) {
				existingQuotesArray = JSON.parse(existingQuotesString)
			}

			// Duplication check
			const isDuplicate: boolean = existingQuotesArray.some((savedQuote) => savedQuote.q === quoteText.trim() && savedQuote.a === authorName.trim())

			if (isDuplicate) {
				toast.warning("This quote by the this author is already saved!");
				return;
			}

			const newSavedQuote: SavedQuote = {
				id: existingQuotesArray.reduce((max, quote) => Math.max(max, quote.id), 0) + 1,
				q: quoteText.trim(),
				a: authorName.trim()
			};

			existingQuotesArray.push(newSavedQuote);
			localStorage.setItem('savedQuotes', JSON.stringify(existingQuotesArray));
			toast.success("Added entry successfully");


			// Clear the form
			setQuoteText('');
			setAuthorName('');

			router.push('/journals');
		}
		catch (e: unknown) {
			toast.error("Error adding new entry: " + e);
			console.error("Error adding entry to localStorage" + e);
		}


	}
	return (
		<div className='flex items-center justify-start sm:justify-center flex-col  py-12 sm:py-0 min-h-screen '>
			<div className='border p-6 rounded-2xl sm:min-w-lg sm:min-h-l/2'>

				<h1 className='text-2xl font-bold mb-6'>Add Entry</h1>
				<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
					<p className='flex flex-col'>
						<label htmlFor="" className='bloxk'>Entry</label>
						<Input value={quoteText}
							onChange={(e) => setQuoteText(e.target.value)}
							placeholder='Add you quote here...'
							required />

					</p>
					<p className='flex flex-col'>
						<label htmlFor="" className='bloxk'>Author</label>
						<Input value={authorName}
							onChange={(e) => { setAuthorName(e.target.value) }}
							required
							placeholder='Who said it?' />
					</p>

					<div className='flex gap-4 justify-end mt-6'>

						<Link href="/journals">
							<Button type='button' variant="secondary">Cancel</Button>
						</Link>
						<Button type='submit' >Submit</Button>
					</div>
				</form>
			</div>
		</div>
	)
}
