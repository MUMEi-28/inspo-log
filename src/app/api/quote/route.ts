import { NextResponse } from "next/server";

interface ZenQuote { // Define the interface here too, or import from '@/types'
    q: string;
    a: string;
    h: string;
}
export async function GET()
{
	const response = await fetch("https://zenquotes.io/api/today/");

	if(!response.ok)
	{
		return NextResponse.json({error: "Failed to fetch quote"}, {status: 500});
	}

	const data:ZenQuote[] = await response.json();
	return NextResponse.json(data[0]);
}