import React from 'react'

export default function page() {
	return (
		<div className='flex items-center  flex-col min-h-screen'>
			<div className='flex justify-between w-full p-4'>
				<h1 className='text-4xl font-bold'>Saved Journals</h1>
				<div className='flex gap-6 '>

					<button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Browse</button>
					<button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Add Entry</button>
				</div>
			</div>

			<div className='grid grid-cols-3 gap-4'>

				<div className='mx-auto flex items-center justify-center'>
					<div className='min-h-[20vh] min-w-[10vw] flex flex-col gap-2 justify-center items-center border-white border p-6 rounded-2xl '>
						<img src="" alt="Placeholder" className='bg-white size-24' />
						<p className='text-start w-full'>Quote</p>
						<p className='text-start w-full'>Date</p>
						<div className='flex gap-2'>
							<p className='border-white border p-2 rounded-2xl'>tag1</p>
							<p className='border-white border p-2 rounded-2xl'>tag2</p>
						</div>
						<button className='bg-blue-600 text-white px-4 py-2 mt-2 rounded-2xl '>save</button>
					</div>
				</div>

				<div className='mx-auto flex items-center justify-center'>
					<div className='min-h-[20vh] min-w-[10vw] flex flex-col gap-2 justify-center items-center border-white border p-6 rounded-2xl '>
						<img src="" alt="Placeholder" className='bg-white size-24' />
						<p className='text-start w-full'>Quote</p>
						<p className='text-start w-full'>Date</p>
						<div className='flex gap-2'>
							<p className='border-white border p-2 rounded-2xl'>tag1</p>
							<p className='border-white border p-2 rounded-2xl'>tag2</p>
						</div>
						<button className='bg-blue-600 text-white px-4 py-2 mt-2 rounded-2xl '>save</button>
					</div>
				</div>

				<div className='mx-auto flex items-center justify-center'>
					<div className='min-h-[20vh] min-w-[10vw] flex flex-col gap-2 justify-center items-center border-white border p-6 rounded-2xl '>
						<img src="" alt="Placeholder" className='bg-white size-24' />
						<p className='text-start w-full'>Quote</p>
						<p className='text-start w-full'>Date</p>
						<div className='flex gap-2'>
							<p className='border-white border p-2 rounded-2xl'>tag1</p>
							<p className='border-white border p-2 rounded-2xl'>tag2</p>
						</div>
						<button className='bg-blue-600 text-white px-4 py-2 mt-2 rounded-2xl '>save</button>
					</div>
				</div>

				<div className='mx-auto flex items-center justify-center'>
					<div className='min-h-[20vh] min-w-[10vw] flex flex-col gap-2 justify-center items-center border-white border p-6 rounded-2xl '>
						<img src="" alt="Placeholder" className='bg-white size-24' />
						<p className='text-start w-full'>Quote</p>
						<p className='text-start w-full'>Date</p>
						<div className='flex gap-2'>
							<p className='border-white border p-2 rounded-2xl'>tag1</p>
							<p className='border-white border p-2 rounded-2xl'>tag2</p>
						</div>
						<button className='bg-blue-600 text-white px-4 py-2 mt-2 rounded-2xl '>save</button>
					</div>
				</div>
			</div>
		</div>
	)
}
