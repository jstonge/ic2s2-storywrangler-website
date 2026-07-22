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
		time: '9:00 – 9:50',
		duration: '50 min',
		title: 'Introduction to the StoryWrangler platform',
		detail: 'We present the web interfaces and Python package by which users can conduct their own analysis of Twitter, Wikipedia, Reddit, and Google Books. We go over a few results from ongoing scientific projects using the StoryWrangler platform when measuring collective attention on a set of interconnected ecological time series. We provide Jupyter notebooks to access the data and platform.'
	},
	{
		time: '9:50 – 10:00',
		duration: '10 min',
		title: 'Break',
		detail: 'Stretch and refill before the next session.'
	},
	{
		time: '10:00 – 10:50',
		duration: '50 min',
		title: 'Introduction to divergence metrics and other instruments',
		detail: 'We offer a brief explainer of the mathematics behind our rank divergence metric of choice: the rank-turbulence divergence (RTD). RTD is a visualization instrument designed for the comparison of any two ranked lists of heavy-tailed distributions which exhibit type turbulence. Following this introduction to RTD, we introduce a number of tools building on divergence metrics to capture collective attention (Allotaxonometry and Ousiometry).'
	},
	{
		time: '10:50 – 11:00',
		duration: '10 min',
		title: 'Break',
		detail: 'Stretch and refill before the final session.'
	},
	{
		time: '11:00 – 12:00',
		duration: '60 min',
		title: 'Infrastructure considerations',
		detail: 'How do we make a unified platform integrating diverse large-scale corpora maintainable, interoperable, and performant? How can people participate and collaborate in the future?'
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
