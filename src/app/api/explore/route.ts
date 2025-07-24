import { error } from "console";
import { NextResponse } from "next/server";

interface ZenQuote{
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
		const data: ZenQuote[] = await response.json();
		return NextResponse.json(data);
	}
	catch(error: any)
	{
		console.error("Error on api/explore/route.ts: " + error);
		return NextResponse.json({error: "Failed to fetch quotes"}, {status: 500});
	}
}