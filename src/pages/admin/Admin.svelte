<script lang="ts">
  import ListTableEvent from "@/components/ListTableEvent.svelte"
  import { Axios } from "@/lib/Axios"
  import type { EventResponse } from "@/types/Response"
  import { onMount } from "svelte"
  import toast from "svelte-french-toast"
  import { Link, navigate } from "svelte-routing"

  let events: EventResponse[] = []

  onMount(async () => {
    const adminPass = localStorage.getItem("adminPass")
    if (!adminPass) navigate("/")
    
    try {
      const response = await Axios.post("/api/event/getall", {
        adminPass: adminPass,
      })
      if (response.status === 200) {
        events = response.data.data
      }
    } catch (error) {
      toast.error("รหัสผ่านผิด")
      navigate("/")
    }
  })
</script>

<div>
  <!-- Header -->
  <div class="text-center">
    <p class="bg-red-600 text-xl text-white py-2">
      <span class="ml-2 text-gray-100 font-bold"> Admin Page</span>
    </p>
  </div>
  <button
    class="px-6 py-2 my-4 text-2xl text-white font-semibold bg-black rounded-lg hover:bg-red-600 hover:text-white"
  >
    <Link to="/admin/create">Create Event</Link>
  </button>

  <ListTableEvent {events} />
</div>
