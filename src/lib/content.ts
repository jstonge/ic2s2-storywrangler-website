export const conference = {
	title: 'Computational Tools for Measuring Collective Attention in Corpora of Text',
	kicker: 'IC²S² 2026 Tutorial',
	room: 'Chittenden (413)',
	sessionDate: 'July 28, 2026',
	sessionTime: '9:00 AM – 12:00 PM',
	conferenceDates: 'July 28–31, 2026'
};

export const abstract = [
	'This tutorial introduces the "StoryWrangler" project, a platform for analyzing massive large-scale corpora such as Twitter, Wikipedia, Bluesky, Reddit, and Google Books. Each dataset offers a distinct window into collective discourse: Twitter captures real-time conversation, Wikipedia documents collaborative knowledge construction, Reddit preserves threaded community discussions, and Google Books provides historical context. Despite their differences, these platforms exhibit similar heavy-tailed statistical properties, allowing consistent analytical frameworks while respecting platform-specific dynamics. We cast them into a set of interconnected time series that track the changing usage rates of words, phrases, and topics.',
	'We show how the StoryWrangler platform implements principled measurements such as rank-turbulence divergence to detect and quantify changes in text over time. These instruments help identify when language use shifts dramatically, track the rise and fall of narratives, and compare patterns across timescales and platforms. Drawing on the work of research engineers at the Vermont Complex Systems Institute, we offer a window into a suite of scientific tools for measuring collective attention, working toward a unified StoryWrangler for everything.',
	'The platform offers three levels of technical accessibility: front-end portals for visual exploration without coding, Python packages for custom analyses, and API access for large-scale studies. We discuss the technical challenges that come with ensuring accessibility for researchers across all technical backgrounds.'
];

export const platforms = ['Twitter', 'Wikipedia', 'Bluesky', 'Reddit', 'Google Books'];

export const prerequisitesIntro =
	'No prior knowledge of computational analysis will be necessary. Some familiarity with Python will be beneficial for following along with notebooks, but anyone should be able to use the web interface if they would like to take a no-code route.';

export const prerequisites = [
	{
		title: 'No prior experience required',
		detail: 'No prior knowledge of computational analysis is necessary. The web interface lets anyone take a no-code route through the material.'
	},
	{
		title: 'Python is a bonus, not a requirement',
		detail: 'Some familiarity with Python is beneficial for following along with the notebooks, but it is not needed to take part.'
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
