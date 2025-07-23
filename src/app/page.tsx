'use client'

import Link from 'next/link'
import React from 'react'


// SHADCN
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { dummyEntries } from '@/lib/data/Entries'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import RandomQuote from '@/components/RandomQuoteFetcher'


export default function page() {

  function OnClickSave(key: number) {
    toast.success("Saved to your journals", {
      description: dummyEntries[key].quote,
    })
  }

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

        <Separator className='border-2' />
        <div className='min-h-screen  px-12 flex flex-col items-center justify-around'>
          <h1 className='text-4xl font-bold my-6'>Journals</h1>

          {/* QUOTES */}
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
                      <Button onClick={() => OnClickSave(key)}>Save</Button>
                    </CardAction>
                  </CardHeader>

                  <CardContent className='flex items-center justify-center gap-8'>
                    <img src={entry.image} alt="Placeholder" className='bg-white size-24' />
                    <q className='text-2xl'>{entry.quote}</q>
                  </CardContent>

                  <CardFooter>
                    {
                      entry.tags.map((tag, key) => <p key={key} className=''>
                        <Badge className='mr-2 border-2 p-2' variant="secondary">{tag}</Badge>
                      </p>)
                    }
                  </CardFooter>
                </Card>
              )
            }

          </div>

          <Link href="/explore">
            <Button>See More</Button>
          </Link>

        </div>
      </main >

    </div >
  )
}
