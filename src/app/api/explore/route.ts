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
		const data: ZenQuote[] = await response.json();
		return NextResponse.json(data);
	}
	catch(err: unknown)
	{
		console.error("Error on api/explore/route.ts: " + err);
		return NextResponse.json({error: "Failed to fetch quotes"}, {status: 500});
	}
}