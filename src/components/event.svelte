<script lang="ts">
    import { Axios } from "@/lib/Axios";
    import type { EventResponse } from "@/types/Event";
    import { onMount } from "svelte";

    let events: EventResponse[] = [];

    onMount(async () => {
        try {
            const response = await Axios.get("/api/event");
            if (response.status === 200) {
                events = response.data.data;
                console.log(response.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    });
</script>

<div>
    {#each events as data}
        <div>
            <button>
                {data.detail}
            </button>
        </div>
    {/each}
</div>
