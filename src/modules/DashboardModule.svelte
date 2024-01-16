<script lang="ts">
	import { client } from "../lib/trpc-client"
	import TicketSkeleton from "../components/TicketSkeleton.svelte";


	const ticketRequest = client.tickets.getTickets.query({
		cursor: 0,
		limit: 10
	})
</script>

<div class="flex flex-col gap-4">
	{#await ticketRequest}
		{#each {length: 10} as _, i}
		<TicketSkeleton></TicketSkeleton>
		{/each}
	{:then tickets}
		{#each tickets as ticket}
		<div class="flex items-center justify-between">
			<div class="flex flex-row gap-4 items-center">
				<div>
					<h4 class="text-base font-semibold">{ticket.title}</h4>
					<span class="text-gray-500 text-sm">{ticket.description}</span>
				</div>
			</div>
			<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
		</div>
		{/each}
	{:catch}
		<h1>
			Something went wrong loading the tickets.
		</h1>
	{/await}
</div>