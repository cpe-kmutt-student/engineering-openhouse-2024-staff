<script>
  import ListTableEvent from "@/components/ListTableEvent.svelte";
  import { Axios } from "@/lib/Axios";
  import { onMount } from "svelte";
  import { Link } from "svelte-routing";

  let events = [];
  onMount(async () => {
    const response = await Axios.get("/api/staff/events");
    if (response.status === 200) {
      events = response.data.data;
      console.log(events);
    }
  });
</script>

<div>
  <!-- Header -->
  <div class="text-center">
    <p class="bg-red-600 text-xl text-white py-2">
      Login as
      <span class="ml-2 text-gray-100 font-bold"> Admin </span>
    </p>
  </div>
  <button
    class="px-6 py-2 my-4 text-2xl text-white font-semibold bg-black rounded-lg hover:bg-red-600 hover:text-white"
  >
    <Link to="/admin/create">Create Event</Link>
  </button>

  <ListTableEvent {events} />
</div>
