<script lang="ts">

	import { client } from "../lib/trpc-client"

let title: string;
let description: string;

async function createTicket() {
	const response = await client.hello.query()
}
</script>

<div class="flex flex-col gap-4 max-w-sm mx-auto">
	<input type="text" placeholder="Title" bind:value={title}>
	<textarea placeholder="Description" cols="30" rows="10" bind:value={description}></textarea>
	<button class="bg-gray-50" on:click={createTicket}>Ticket erstellen</button>
</div>