
export interface InspoEntry {
	id: string;
	quote: string;
	author: string;
	image?: string;
	date: string;
	tags: string[];
}


export const dummyEntries: InspoEntry[] = [
	{
		id: '1',
		quote: 'The best way to predict the future is to create it.',
		author: 'Abraham Lincoln',
		image: 'https://zenquotes.io/img/abraham-lincoln.jpg',
		date: '2025-07-22',
		tags: ['future', 'action', 'motivation'],
	},
	{
		id: '2',
		quote: 'Be the change that you wish to see in the world.',
		author: 'Mahatma Gandhi',
		image: 'https://zenquotes.io/img/abraham-lincoln.jpg',
		date: '2025-07-21',
		tags: ['inspiration', 'change', 'peace'],
	},
	{
		id: '3',
		quote: 'Innovation distinguishes between a leader and a follower.',
		author: 'Steve Jobs',
		image: 'https://zenquotes.io/img/abraham-lincoln.jpg',
		date: '2025-07-20',
		tags: ['innovation', 'leadership', 'business'],
	},
	{
		id: '4',
		quote: 'The best way to predict the future is to create it.',
		author: 'Abraham Lincoln',
		image: 'https://zenquotes.io/img/abraham-lincoln.jpg',
		date: '2025-07-22',
		tags: ['future', 'action', 'motivation'],
	},
	{
		id: '5',
		quote: 'Be the change that you wish to see in the world.',
		author: 'Mahatma Gandhi',
		image: 'https://zenquotes.io/img/abraham-lincoln.jpg',
		date: '2025-07-21',
		tags: ['inspiration', 'change', 'peace'],
	},
	{
		id: '6',
		quote: 'Innovation distinguishes between a leader and a follower.',
		author: 'Steve Jobs',
		image: 'https://zenquotes.io/img/abraham-lincoln.jpg',
		date: '2025-07-20',
		tags: ['innovation', 'leadership', 'business'],
	},
]