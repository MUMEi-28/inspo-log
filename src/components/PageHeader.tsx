import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from 'react'
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

export default function PageHeader() {
	return (
		<div>
			<header
				className='flex justify-between border-b items-center p-4'>
				<Link href="/">
					<h1 className='text-2xl font-bold'>InspoLog</h1>
				</Link>

				<div
					className='flex items-center justify-around'

				>
					<Button asChild variant="link">

						<Link href="/journals">
							<p>My Journals</p>
						</Link>
					</Button>
					<ModeToggle />
				</div>
			</header>
			<Separator className='border-2' />
		</div>
	)
}
