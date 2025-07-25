'use client'

import Link from 'next/link'
import React from 'react'


// SHADCN
import { Button } from "@/components/ui/button"
import RandomQuote from '@/components/RandomQuoteFetcher'
import QuoteListFetcher from '@/components/QuoteListFetcher'
import { AnimatePresence, easeIn, easeInOut, motion } from 'framer-motion'


export default function page() {

  function generateRandomDelayAnimation(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
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

          className='text-8xl font-bold text-center mb-15'>InspoLog - Collect <br /> Your Daily Spark</motion.h2>

        <motion.p initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: .5,
            delay: 0.3,
            ease: "easeIn",
            type: "spring",
            stiffness: 100
          }}
          className='text-center mb-10 text-2xl'>Save quotes, thoughts, and lessons that inspire you. One moment at a time.</motion.p>

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
