import React from 'react'

import { dummyEntries } from '@/lib/data/Entries'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from "@/components/ui/badge"
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination"

export default function page() {
	return (
		<div className='min-h-[90vh] p-12 flex flex-col justify-between'>

			<div className='grid grid-cols-3 gap-4 '>
				{
					dummyEntries.map((entry, key) =>
						<Card key={key} className='flex flex-col items-between'>

							<CardHeader>
								<CardTitle>{entry.author}</CardTitle>
								<CardDescription>
									<p className='text-start w-full'>{entry.date}</p>
								</CardDescription>
								<CardAction>
									<Button>Save</Button>
								</CardAction>
							</CardHeader>

							<CardContent className='flex items-center justify-center gap-8'>
								<img src={entry.image} alt="Placeholder" className='bg-white size-24' />
								<q className='text-2xl'>{entry.quote}</q>
							</CardContent>

							<CardFooter>
								{
									entry.tags.map((tag, key) => <p key={key} className=''>
										<Badge className='mr-2 border-2 p-2' variant="outline">{tag}</Badge>
									</p>)
								}
							</CardFooter>

						</Card>
					)
				}
			</div>


			{/* PAGINATION */}
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#" isActive>
							2
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">3</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	)
}
