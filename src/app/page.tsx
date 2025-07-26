'use client'

import Link from 'next/link'
import React from 'react'


// SHADCN
import { Button } from "@/components/ui/button"
import RandomQuote from '@/components/RandomQuoteFetcher'
import QuoteListFetcher from '@/components/QuoteListFetcher'
import { motion } from 'framer-motion'


export default function page() {

  return (

    <main className=''>

      <div className='flex flex-col items-center justify-center h-screen'>
        <motion.h2 initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: .5,
            delay: 0.2,
            ease: "easeIn",
            type: "spring",
            stiffness: 100
          }}

          className='flex flex-col items-center justify-center gap-1 font-bold text-center '>
          <span className='text-4xl sm:text-6xl '>InspoLog</span>
          <span className='text-2xl sm:text-4xl'>Collect Your Daily Spark</span>

        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: .5,
            delay: 0.3,
            ease: "easeIn",
            type: "spring",
            stiffness: 100
          }}
          className='text-center  text-xl sm:text-2xl p-6'>Save quotes, thoughts, and lessons that inspire you. One moment at a time.</motion.p>

        <motion.div initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: .5,
            delay: 0.4,
            ease: "easeIn",
            type: "spring",
            stiffness: 100
          }}>

          <Button asChild variant='outline' className='text-xl px-4 py-2 rounded-md'>
            <Link href="/journals">
              Start Journal
            </Link>
          </Button>
        </motion.div>
      </div>


      <RandomQuote />

      <QuoteListFetcher />


    </main >

  )
}
