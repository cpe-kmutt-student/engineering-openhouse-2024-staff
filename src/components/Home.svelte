<script lang="ts">
  import { Axios } from "@/lib/Axios"
  import { User } from "@/stores/User"
  import { onMount } from "svelte"
  import type { EventResponse } from "@/types/Response"
  import ListTableEvent from "./ListTableEvent.svelte"
  import { Link } from "svelte-routing"
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
      <br />
      <span>Department : <span class="font-bold">{$User.department_name}</span> </span>
    </p>
  </div>
  <!-- Table -->
  <div class="flex flex-col justify-center items-center mt-6">
    {#if events.length === 1 && events[0].department_name === "Central"}
      <Link to={"/event/" + events[0].id + "/" + events[0].detail}
        ><button class="btn-dark">สร้าง Qr Code ➡</button></Link
      >
      <br />
      <Link to={"/reward"}><button class="btn-dark">หน้ารับรางวัล✨ ➡</button></Link>
    {:else if events.length === 1}
      <Link to={"/event/" + events[0].id + "/" + events[0].detail}
        ><button class="btn-dark">สร้าง Qr Code ➡</button></Link
      >
    {:else if events.length > 1}
      <ListTableEvent {events} />
    {:else}
      <h1>Nothing</h1>
    {/if}
  </div>
</div>
