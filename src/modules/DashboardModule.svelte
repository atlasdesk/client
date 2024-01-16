<script lang="ts">
	import { client } from "../lib/trpc-client"

	let title: string;
	let description: string;

	async function createTicket() {
		const response = await client.ticket.createTicket.mutate({
			title,
			description
		})

		console.log(response);
		
	}
</script>

<div class="flex flex-col gap-4 max-w-sm mx-auto">
	<input type="text" bind:value={title} placeholder="Title">
	<textarea bind:value={description} cols="30" rows="10" placeholder="Description"></textarea>
	<button on:click={createTicket}>Create Ticket</button>
</div>