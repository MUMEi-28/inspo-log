/* import { NextResponse } from "next/server";

async function POST(request: Request) {
	const { quote, author } = await request.json();

	const newEntry = {
		id: Date.now().toString(),
		quote,
		author,
		date: new Date().toISOString(),
		tags: [],
	}

	const entries = JSON.parse(localStorage.getItem("entries") || "[]");
	entries.push(newEntry);
	localStorage.setItem("entries", JSON.stringify(entries));

	return NextResponse.json(newEntry);
} */