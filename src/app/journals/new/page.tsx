'use client'

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

import { cn } from "@/lib/utils"
import { Check, ChevronsUpDown } from "lucide-react"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"



export default function page() {

	const tags = [
		{
			value: "future",
			label: "future",
		},
		{
			value: "action",
			label: "action",
		},
		{
			value: "motivation",
			label: "motivation",
		},
		{
			value: "inspiration",
			label: "inspiration",
		},
		{
			value: "change",
			label: "change",
		},
		{
			value: "peace",
			label: "peace",
		},
		{
			value: "leadership",
			label: "leadership",
		},
		{
			value: "business",
			label: "business",
		},
		{
			value: "innovation",
			label: "innovation",
		},

	]

	const [open, setOpen] = useState(false)
	const [value, setValue] = useState("")



	return (
		<div className='flex items-center justify-center flex-col min-h-screen'>
			<div className='border p-6 rounded-2xl min-w-lg'>

				<h1 className='text-2xl font-bold mb-6'>Add Entry</h1>
				<form action="" className='flex flex-col gap-4'>
					<p className='flex flex-col'>
						<label htmlFor="" className='bloxk'>Entry</label>
						<Input />
					</p>
					<p className='flex flex-col'>
						<label htmlFor="" className='bloxk'>Author</label>
						<Input />
					</p>
					<p className='flex flex-col'>
						<label htmlFor="" className='bloxk'>Tag</label>
						<Popover open={open} onOpenChange={setOpen}>
							<PopoverTrigger asChild>
								<Button
									variant="outline"
									role="combobox"
									aria-expanded={open}
									className="w-[200px] justify-between"
								>
									{value
										? tags.find((tag) => tag.value === value)?.label
										: "Select tag..."}
									<ChevronsUpDown className="opacity-50" />
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-[200px] p-0">
								<Command>
									<CommandInput placeholder="Search tag..." className="h-9" />
									<CommandList>
										<CommandEmpty>No tag found.</CommandEmpty>
										<CommandGroup>
											{tags.map((tag) => (
												<CommandItem
													key={tag.value}
													value={tag.value}
													onSelect={(currentValue) => {
														setValue(currentValue === value ? "" : currentValue)
														setOpen(false)
													}}
												>
													{tag.label}
													<Check
														className={cn(
															"ml-auto",
															value === tag.value ? "opacity-100" : "opacity-0"
														)}
													/>
												</CommandItem>
											))}
										</CommandGroup>
									</CommandList>
								</Command>
							</PopoverContent>
						</Popover>
					</p>
				</form>
				<div className='flex gap-4 justify-end mt-6'>

					<Link href="/journals">
						<Button variant="secondary">Cancel</Button>
					</Link>
					<Button>Submit</Button>
				</div>
			</div>
		</div>
	)
}
