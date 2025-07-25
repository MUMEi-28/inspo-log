import { NextResponse } from "next/server";

import { ZenQuote } from "@/types/quotes";

export async function GET()
{

	try
	{

		const response = await fetch("https://zenquotes.io/api/quotes");
		
		if(!response.ok)
			{
				return NextResponse.json({error: "Failed to fetch quotes"}, {status: 500});
			}
			
			const allQuotes:ZenQuote[] = await response.json();
			const limitedQuotes = allQuotes.slice(0,6);
			
			return NextResponse.json(limitedQuotes);
		}
		catch(err: unknown)
		{
			console.error("Error in api/route.ts: " + err);
			return NextResponse.json({error: "Failed to fetch quotes"}, {status: 500});
		}
}