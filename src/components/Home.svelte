<script lang="ts">
  import { Axios } from "@/lib/Axios"
  import { User } from "@/stores/User"
  import { onMount } from "svelte"
  import type { EventResponse } from "@/types/Event"
  import ListTableEvent from "./ListTableEvent.svelte"
  let events: EventResponse[] = []

  onMount(async () => {
    try {
      const response = await Axios.get("/api/event")
      if (response.status === 200) {
        events = response.data.data
        console.log(events)
      }
    } catch (error) {
      console.log(error)
    }
  })

  const handleLogout = async () => {
    await Axios.post("/api/staff/logout")
    window.location.pathname = "/"
  }
</script>

<div>
  <!-- Header -->
  <div class="text-center">
    <p class="bg-red-600 text-xl text-white py-2">
      Login as
      <span class="ml-2 text-gray-100 font-bold"> {$User.username} </span>
      <button on:click={handleLogout} class="bg-red-500 p-2 m-4 text-white rounded-lg"> Logout </button>
    </p>
  </div>
  <!-- Table -->
  <div class="flex justify-center">
    {#if events.length > 1}
      <ListTableEvent {events} />
    {:else}
      <h1>Nothing</h1>
    {/if}
  </div>
</div>
