import { NextResponse } from "next/server";

interface ZenQuote
{
	q: string; // quote
    a: string; // author
}

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
		catch(error: any)
		{
			console.error("Error in api/route.ts: " + error);
			return NextResponse.json({error: "Failed to fetch quotes"}, {status: 500});
		}
}