'use client'

import React, { useEffect, useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardAction, CardContent } from '@/components/ui/card'
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination"
import { toast } from 'sonner'
import { Loader, RotateCcw } from 'lucide-react'
import { SavedQuote, ZenQuote } from '@/types/quotes'

export default function Explore() {

	const [quotes, setQuotes] = useState<ZenQuote[] | null>(null);
	const [isLoading, setIsloading] = useState<boolean>(true);

	// Pagination states
	const [currentPage, setCurrentPage] = useState<number>(1);
	const itemsPerPage: number = 6; // configure if needed
	const pageRangeDisplayed: number = 1;

	useEffect(() => {
		async function getAllQuotes() {
			setIsloading(true);
			try {
				const response = await fetch("/api/explore");

				if (!response.ok) {
					throw new Error("Error on /api/explore: " + response.status);
				}
				const data: ZenQuote[] = await response.json();
				setQuotes(data);
			}
			catch (err: unknown) {
				console.error("Error on explore/page.tsx: " + err);
			}
			finally {
				setIsloading(false);
			}
		}
		getAllQuotes();
	}, [])

	// page range
	const getPageNumbers = () => {
		const pages = [];
		const startPage = Math.max(1, currentPage - pageRangeDisplayed);
		const endPage = Math.min(totalPages, currentPage + pageRangeDisplayed);

		if (startPage > 1) {
			pages.push(1);
			if (startPage > 2) { // Add ellipsis if there's a gap
				pages.push('...');
			}
		}

		for (let i = startPage; i <= endPage; i++) {
			pages.push(i);
		}

		if (endPage < totalPages) {
			if (endPage < totalPages - 1) { // Add ellipsis if there's a gap
				pages.push('...');
			}
			pages.push(totalPages);
		}

		return pages;
	};


	// PAGINATION LOGIC
	const totalPages = useMemo(() => {
		if (!quotes) {
			return 0;
		}
		return Math.ceil(quotes.length / itemsPerPage);

	}, [quotes, itemsPerPage]) // recalculate if these two changes

	const currentQuotes = useMemo(() => {
		if (!quotes) {
			return [];
		}
		const startIndex = (currentPage - 1) * itemsPerPage; // 0
		const endIndex = startIndex + itemsPerPage; // 6
		return quotes.slice(startIndex, endIndex); // 0 to 6
	}, [quotes, currentPage, itemsPerPage]) // recalcualte if these three change

	const handlePageChange = (page: number) => {
		if (page > 0 && page <= totalPages) {
			setCurrentPage(page);
		}
	};


	function onCLickSave(quoteToSave: ZenQuote) {

		try {
			const existingQuotes = localStorage.getItem('savedQuotes');
			let existingQuotesArray: SavedQuote[] = [];

			if (existingQuotes) {
				existingQuotesArray = JSON.parse(existingQuotes);
			}

			const isDuplicate: boolean = existingQuotesArray.some((savedQuote) => savedQuote.q === quoteToSave.q && savedQuote.a === quoteToSave.a);

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
				a: quoteToSave.a || "",
				q: quoteToSave.q || "",
			}

			existingQuotesArray.push(newSavedQuote);

			localStorage.setItem('savedQuotes', JSON.stringify(existingQuotesArray));

			toast.success("Saved to your journals")
		}
		catch (e: unknown) {
			console.log(e);
			toast.error("Something went wrong!")
		}
	}


	// RENDER LOGIC

	if (isLoading) {
		return (
			<div className='flex items-center justify-center min-h-[90vh]'>
				<Loader className='animate-spin' />
			</div>
		)
	}

	if (!quotes || quotes.length === 0) {
		return (
			<div className='flex items-center justify-center min-h-[90vh] flex-col'>
				<RotateCcw />
				<h1 className='text-2xl font-bold'>No Quotes Available ): </h1>
				<p className='text-sm '>Try again later</p>
			</div>
		)
	}


	return (
		<div className='min-h-[90vh] p-12 flex flex-col justify-between'>

			<div className='flex items-center justify-center min-h-[90vh]'>
				<div className='grid grid-cols-3 gap-4 '>
					{
						currentQuotes?.map((entry, key) =>
							<Card key={key} className='flex flex-col items-between'>

								<CardHeader>
									<CardTitle>{entry.a}</CardTitle>

									<CardAction>
										<Button onClick={() => onCLickSave(entry)}>Save</Button>
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


			{/* PAGINATION */}
			{totalPages > 1 && ( // Only show pagination if there's more than 1 page
				<Pagination className='mt-8' style={{ userSelect: "none" }}>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious
								onClick={() => handlePageChange(currentPage - 1)}
								className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
							/>
						</PaginationItem>

						{/* --- MODIFIED PAGINATION LINK RENDERING --- */}
						{getPageNumbers().map((pageNumber, index) => (
							<PaginationItem key={index}> {/* Use index as key if pageNumber can be '...' */}
								{pageNumber === '...' ? (
									<PaginationEllipsis />
								) : (
									<PaginationLink
										onClick={() => handlePageChange(pageNumber as number)}
										isActive={pageNumber === currentPage}
									>
										{pageNumber}
									</PaginationLink>
								)}
							</PaginationItem>
						))}

						<PaginationItem>
							<PaginationNext
								onClick={() => handlePageChange(currentPage + 1)}
								className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			)}
		</div>
	)
}
