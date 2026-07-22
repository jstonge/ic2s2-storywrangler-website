export const conference = {
	title: 'Computational Tools for Measuring Collective Attention in Corpora of Text',
	kicker: 'IC²S² 2026 Tutorial',
	room: 'Chittenden (413)',
	sessionDate: 'July 28, 2026',
	sessionTime: '9:00 AM – 12:00 PM',
	conferenceDates: 'July 28–31, 2026'
};

export const abstract =
	'This tutorial introduces the "StoryWrangler" project, a platform for analyzing massive large-scale corpora such as Twitter, Wikipedia, Bluesky, Reddit, and Google Books. Despite their differences, these platforms exhibit similar heavy-tailed statistical properties, allowing consistent analytical frameworks while respecting platform-specific dynamics. We show how the StoryWrangler platform implements principled measurements such as rank-turbulence divergence to detect and quantify changes in text over time. These instruments help identify when language use shifts dramatically, track the rise and fall of narratives, and compare patterns across timescales and platforms. We discuss the technical challenge of providing different levels of technical accessibility: front-end portals for visual exploration without coding, Python packages for custom analyses, and API access for large-scale studies.';

export const platforms = ['Twitter', 'Wikipedia', 'Bluesky', 'Reddit', 'Google Books'];

export const prerequisites = [
	{
		title: 'A laptop with internet access',
		detail: 'The hands-on portions run in the browser and against live APIs — no local GPU or heavy setup required.'
	},
	{
		title: 'Working knowledge of Python 3',
		detail: 'You should be comfortable running scripts and notebooks. Familiarity with pandas is helpful but not required.'
	},
	{
		title: 'Basic data-analysis intuition',
		detail: 'We keep the math light. A conceptual grasp of distributions and time series is all you need to follow along.'
	},
	{
		title: 'No prior StoryWrangler experience',
		detail: 'We start from the front-end portal, so newcomers and experienced analysts can both jump in.'
	}
];

export const schedule = [
	{
		time: '9:00 – 9:20',
		title: 'Welcome & motivation',
		detail: 'Why measure collective attention? Framing the problem across platforms and timescales.'
	},
	{
		time: '9:20 – 10:00',
		title: 'The StoryWrangler platform & data',
		detail: 'Heavy-tailed statistics of language and a tour of the corpora: Twitter, Wikipedia, Bluesky, Reddit, and Google Books.'
	},
	{
		time: '10:00 – 10:30',
		title: 'Rank-turbulence divergence',
		detail: 'Principled measurement for detecting and quantifying how text shifts over time.'
	},
	{
		time: '10:30 – 10:45',
		title: 'Coffee break',
		detail: 'Stretch, refill, and bring your questions to the hands-on session.'
	},
	{
		time: '10:45 – 11:30',
		title: 'Hands-on: Python package & API',
		detail: 'From the visual portal to custom analyses in code, then scaling up with API access.'
	},
	{
		time: '11:30 – 12:00',
		title: 'Cross-platform case studies & wrap-up',
		detail: 'Tracking the rise and fall of narratives, comparing platforms, and where to go next.'
	}
];

export const outcomes = [
	'Navigate the StoryWrangler front-end portal to explore large-scale text corpora without writing code.',
	'Explain the heavy-tailed statistical properties shared across social and cultural text platforms.',
	'Apply rank-turbulence divergence to detect and quantify changes in language use over time.',
	'Choose the right level of access — portal, Python package, or API — for a given research question.',
	'Design cross-platform comparisons that respect each platform’s distinct dynamics.'
];

export type Organizer = {
	name: string;
	role: string;
	affiliation: string;
	bio: string;
	initials: string;
};

// Placeholder organizer cards — replace names, roles, and bios with the confirmed lineup.
export const organizers: Organizer[] = [
	{
		name: 'Organizer One',
		role: 'Tutorial Lead',
		affiliation: 'Computational Story Lab, University of Vermont',
		bio: 'Researcher working on large-scale text measurement and the StoryWrangler platform. Bio to be finalized.',
		initials: 'O1'
	},
	{
		name: 'Organizer Two',
		role: 'Co-organizer',
		affiliation: 'Computational Story Lab, University of Vermont',
		bio: 'Focuses on measurement instruments for collective attention across social platforms. Bio to be finalized.',
		initials: 'O2'
	},
	{
		name: 'Organizer Three',
		role: 'Co-organizer',
		affiliation: 'Computational Story Lab, University of Vermont',
		bio: 'Works on data infrastructure and accessible tooling for corpus-scale analysis. Bio to be finalized.',
		initials: 'O3'
	}
];
