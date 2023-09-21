<script>
  import CreateEvent from "@/components/Admin/CreateEvent.svelte";
  import { Link } from "svelte-routing";
</script>

<div>
  <CreateEvent />
  <Link to="/admin" class="text-2xl text-red-600 underline">Back</Link>
</div>
