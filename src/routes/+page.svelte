<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	import MapPin from '@lucide/svelte/icons/map-pin';
	import CalendarDays from '@lucide/svelte/icons/calendar-days';
	import Clock from '@lucide/svelte/icons/clock';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Check from '@lucide/svelte/icons/check';
	import Mail from '@lucide/svelte/icons/mail';
	import Sparkles from '@lucide/svelte/icons/sparkles';

	import {
		conference,
		abstract,
		platforms,
		prerequisites,
		schedule,
		outcomes,
		organizers
	} from '$lib/content';

	const sections = [
		{ id: 'overview', label: 'Overview' },
		{ id: 'details', label: 'Tutorial Details' },
		{ id: 'outcomes', label: 'Outcomes' },
		{ id: 'signup', label: 'Sign up' },
		{ id: 'organizers', label: 'Organizers' }
	];

	let active = $state('overview');
	let email = $state('');
	let submitted = $state(false);

	function scrollTo(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	function submitSignup(event: SubmitEvent) {
		event.preventDefault();
		if (!email) return;
		submitted = true;
	}

	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) active = entry.target.id;
				}
			},
			{ rootMargin: '-45% 0px -50% 0px', threshold: 0 }
		);
		for (const section of sections) {
			const el = document.getElementById(section.id);
			if (el) observer.observe(el);
		}
		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>{conference.title} — {conference.kicker}</title>
	<meta name="description" content={abstract.slice(0, 155)} />
</svelte:head>

<!-- Sticky navigation -->
<header
	class="bg-background/80 supports-backdrop-filter:bg-background/60 sticky top-0 z-40 border-b backdrop-blur"
>
	<nav class="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
		<button class="text-sm font-semibold tracking-tight" onclick={() => scrollTo('overview')}>
			StoryWrangler <span class="text-muted-foreground font-normal">· Tutorial</span>
		</button>
		<div class="hidden items-center gap-1 md:flex">
			{#each sections as section (section.id)}
				<Button
					variant={active === section.id ? 'secondary' : 'ghost'}
					size="sm"
					onclick={() => scrollTo(section.id)}
				>
					{section.label}
				</Button>
			{/each}
		</div>
		<Button size="sm" class="md:hidden" onclick={() => scrollTo('signup')}>Sign up</Button>
	</nav>
</header>

<main class="mx-auto max-w-5xl px-4">
	<!-- Hero / Overview -->
	<section id="overview" class="scroll-mt-20 py-14 md:py-20">
		<Badge variant="secondary" class="mb-4">
			<Sparkles data-icon="inline-start" />
			{conference.kicker}
		</Badge>
		<h1 class="max-w-3xl text-4xl font-bold tracking-tight text-balance md:text-5xl">
			{conference.title}
		</h1>

		<div class="mt-6 flex flex-wrap gap-3">
			<div class="bg-card flex items-center gap-2 rounded-lg border px-3 py-2 text-sm">
				<MapPin class="text-muted-foreground size-4" />
				<span class="font-medium">{conference.room}</span>
			</div>
			<div class="bg-card flex items-center gap-2 rounded-lg border px-3 py-2 text-sm">
				<CalendarDays class="text-muted-foreground size-4" />
				<span class="font-medium">{conference.sessionDate}</span>
			</div>
			<div class="bg-card flex items-center gap-2 rounded-lg border px-3 py-2 text-sm">
				<Clock class="text-muted-foreground size-4" />
				<span class="font-medium">{conference.sessionTime}</span>
			</div>
		</div>

		<p class="text-muted-foreground mt-4 text-sm">
			Part of IC²S² · Conference runs {conference.conferenceDates}
		</p>

		<div class="mt-8 flex flex-wrap gap-3">
			<Button size="lg" onclick={() => scrollTo('signup')}>
				Get updates
				<ArrowRight data-icon="inline-end" />
			</Button>
			<Button size="lg" variant="outline" onclick={() => scrollTo('details')}>View schedule</Button>
		</div>

		<Card.Root class="mt-12">
			<Card.Header>
				<Card.Title>Abstract</Card.Title>
				<Card.Description>What this tutorial covers</Card.Description>
			</Card.Header>
			<Card.Content class="flex flex-col gap-5">
				<p class="text-base leading-relaxed text-pretty">{abstract}</p>
				<div class="flex flex-wrap gap-2">
					{#each platforms as platform (platform)}
						<Badge variant="outline">{platform}</Badge>
					{/each}
				</div>
			</Card.Content>
		</Card.Root>
	</section>

	<Separator />

	<!-- Tutorial Details: prerequisites + schedule -->
	<section id="details" class="scroll-mt-20 py-14 md:py-20">
		<h2 class="text-2xl font-semibold tracking-tight md:text-3xl">Tutorial details</h2>
		<p class="text-muted-foreground mt-2">
			Come prepared and know what to expect across the three-hour session.
		</p>

		<h3 class="mt-10 text-lg font-semibold">Prerequisites</h3>
		<div class="mt-4 grid gap-4 sm:grid-cols-2">
			{#each prerequisites as item (item.title)}
				<Card.Root>
					<Card.Header>
						<div class="flex items-start gap-3">
							<span
								class="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-full"
							>
								<Check class="size-4" />
							</span>
							<Card.Title class="text-base leading-snug">{item.title}</Card.Title>
						</div>
					</Card.Header>
					<Card.Content>
						<p class="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>

		<h3 class="mt-12 text-lg font-semibold">Schedule</h3>
		<p class="text-muted-foreground mt-1 text-sm">{conference.sessionTime} · {conference.room}</p>
		<div class="mt-4 flex flex-col gap-3">
			{#each schedule as block, i (block.time)}
				<Card.Root>
					<Card.Content class="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-6">
						<div class="flex items-center gap-3 sm:w-40 sm:shrink-0">
							<Badge variant="outline" class="tabular-nums">{i + 1}</Badge>
							<span class="text-sm font-medium tabular-nums">{block.time}</span>
						</div>
						<div class="flex flex-col gap-1">
							<span class="font-medium">{block.title}</span>
							<span class="text-muted-foreground text-sm leading-relaxed">{block.detail}</span>
						</div>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</section>

	<Separator />

	<!-- Learning outcomes -->
	<section id="outcomes" class="scroll-mt-20 py-14 md:py-20">
		<h2 class="text-2xl font-semibold tracking-tight md:text-3xl">Learning outcomes</h2>
		<p class="text-muted-foreground mt-2">By the end of the tutorial, you will be able to:</p>
		<div class="mt-6 grid gap-4 sm:grid-cols-2">
			{#each outcomes as outcome (outcome)}
				<div class="bg-card flex items-start gap-3 rounded-lg border p-4">
					<span
						class="bg-primary text-primary-foreground flex size-6 shrink-0 items-center justify-center rounded-full"
					>
						<Check class="size-3.5" />
					</span>
					<p class="text-sm leading-relaxed">{outcome}</p>
				</div>
			{/each}
		</div>
	</section>

	<Separator />

	<!-- Sign up -->
	<section id="signup" class="scroll-mt-20 py-14 md:py-20">
		<Card.Root class="overflow-hidden">
			<div class="grid md:grid-cols-2">
				<div class="bg-primary text-primary-foreground flex flex-col justify-center gap-3 p-8">
					<Badge variant="secondary" class="text-primary-foreground w-fit bg-white/15">
						<Sparkles data-icon="inline-start" />
						Stay tuned!
					</Badge>
					<h2 class="text-2xl font-semibold tracking-tight md:text-3xl">
						Save your spot & get updates
					</h2>
					<p class="text-primary-foreground/80 text-sm leading-relaxed">
						Leave your email and we’ll send tutorial materials, room details, and any schedule
						changes ahead of {conference.sessionDate}.
					</p>
				</div>
				<div class="flex flex-col justify-center p-8">
					{#if submitted}
						<div class="flex items-start gap-3">
							<span
								class="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-full"
							>
								<Check class="size-4" />
							</span>
							<div class="flex flex-col gap-1">
								<p class="font-medium">You’re on the list.</p>
								<p class="text-muted-foreground text-sm">We’ll reach out to {email} with updates.</p>
							</div>
						</div>
					{:else}
						<form class="flex flex-col gap-4" onsubmit={submitSignup}>
							<div class="flex flex-col gap-2">
								<Label for="email">Email address</Label>
								<Input
									id="email"
									type="email"
									required
									placeholder="you@university.edu"
									bind:value={email}
								/>
							</div>
							<Button type="submit">
								<Mail data-icon="inline-start" />
								Notify me
							</Button>
							<p class="text-muted-foreground text-xs">No spam — just tutorial-related updates.</p>
						</form>
					{/if}
				</div>
			</div>
		</Card.Root>
	</section>

	<Separator />

	<!-- Organizers -->
	<section id="organizers" class="scroll-mt-20 py-14 md:py-20">
		<h2 class="text-2xl font-semibold tracking-tight md:text-3xl">Organizers</h2>
		<p class="text-muted-foreground mt-2">The team behind the tutorial.</p>
		<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each organizers as person (person.name)}
				<Card.Root>
					<Card.Header>
						<div class="flex items-center gap-3">
							<Avatar.Root class="size-12">
								<Avatar.Image src="" alt={person.name} />
								<Avatar.Fallback>{person.initials}</Avatar.Fallback>
							</Avatar.Root>
							<div class="flex flex-col">
								<Card.Title class="text-base">{person.name}</Card.Title>
								<Card.Description>{person.role}</Card.Description>
							</div>
						</div>
					</Card.Header>
					<Card.Content class="flex flex-col gap-3">
						<Badge variant="outline">{person.affiliation}</Badge>
						<p class="text-muted-foreground text-sm leading-relaxed">{person.bio}</p>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</section>
</main>

<footer class="border-t">
	<div
		class="text-muted-foreground mx-auto flex max-w-5xl flex-col gap-1 px-4 py-8 text-sm md:flex-row md:items-center md:justify-between"
	>
		<span>{conference.kicker} · {conference.room}</span>
		<span>IC²S² {conference.conferenceDates}</span>
	</div>
</footer>
