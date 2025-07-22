import React from 'react'

export default function page() {
  return (
    <div>
      <header className='flex justify-between border-b items-center p-4'>
        <h1 className='text-2xl font-bold'>InspoLog</h1>
        <div className='flex min-w-sm items-center justify-around'>
          <p>My Journals</p>
          <p>DarkMode</p>
        </div>
      </header>
      <main className='border-b '>
        <div className='flex flex-col items-center justify-center h-screen'>
          <h2 className='text-8xl font-bold text-center mb-15'>InspoLog - Collect <br /> Your Daily Spark</h2>
          <p className='text-center mb-10 text-2xl'>Save quotes, thoughts, and lessons that inspire you. One moment at a time.</p>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
            Start Journal
          </button>
        </div>

        <div className='min-h-screen border-t px-12 flex flex-col items-center'>
          <h1 className='text-4xl font-bold my-6'>Journals</h1>
          <button className='bg-blue-500 text-white px-4 py-2 mb-12 rounded-md'>Search</button>

          {/* QUOTES */}
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

          <button className='bg-blue-500 text-white px-4 py-2 mt-12 rounded-md'>See More</button>

        </div>
      </main>

      <footer className='flex justify-between items-center p-4'>
        <p>InspoLog</p>
        <p>© 2025 InspoLog. All rights reserved.</p>
      </footer>
    </div>
  )
}
