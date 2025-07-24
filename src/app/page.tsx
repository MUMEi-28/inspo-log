'use client'

import Link from 'next/link'
import React from 'react'


// SHADCN
import { Button } from "@/components/ui/button"
import RandomQuote from '@/components/RandomQuoteFetcher'
import QuoteListFetcher from '@/components/QuoteListFetcher'


export default function page() {


  return (
    <div>
      <main className=''>

        <RandomQuote />

        <div className='flex flex-col items-center justify-center h-screen'>
          <h2 className='text-8xl font-bold text-center mb-15'>InspoLog - Collect <br /> Your Daily Spark</h2>
          <p className='text-center mb-10 text-2xl'>Save quotes, thoughts, and lessons that inspire you. One moment at a time.</p>

          <Button asChild variant='outline' className='text-xl px-4 py-2 rounded-md'>
            <Link href="/journals">
              Start Journal
            </Link>
          </Button>
        </div>

        <QuoteListFetcher />

      </main >

    </div >
  )
}
