<script lang="ts">
	import { dialogs } from "svelte-dialogs";
	import CrudDeleteConfirm from "../components/Modals/CrudDeleteConfirm.svelte";


</script>

<div class="flex flex-col gap-4 max-w-sm mx-auto">
	<button on:click={async () => {
		console.log(await dialogs.modal(CrudDeleteConfirm, {
			
		}))
	}}>Erstellen</button>
</div>