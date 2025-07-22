import React from 'react'

export default function page() {
	return (
		<div className='flex items-center justify-center flex-col min-h-screen'>
			<div className='border p-6 rounded-2xl min-w-lg'>

				<h1 className='text-2xl font-bold mb-6'>Add Entry</h1>
				<form action="" className='flex flex-col gap-4'>
					<p className='flex flex-col'>
						<label htmlFor="" className='bloxk'>Entry</label>
						<input type="text" className='border-2 border-gray-300 rounded-md p-2' />
					</p>
					<p className='flex flex-col'>
						<label htmlFor="" className='bloxk'>Author</label>
						<input type="text" className='border-2 border-gray-300 rounded-md p-2' />
					</p>
					<p className='flex flex-col'>
						<label htmlFor="" className='bloxk'>Tag</label>
						<input type="text" className='border-2 border-gray-300 rounded-md p-2' />
					</p>
				</form>
				<div className='flex gap-4 justify-end mt-6'>
					<button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Submit</button>
					<button className='bg-red-500 text-white px-4 py-2 rounded-md'>Cancel</button>
				</div>
			</div>
		</div>
	)
}
