<script lang="ts">
  import { Link } from "svelte-routing";

  export let events = [];
  console.log(events);
</script>

<div>
  <!-- Table -->
  <table class="table-auto border">
    <thead>
      <tr>
        <th class="border-2">No</th>
        <th class="border-2">Detail</th>
        <th class="border-2">Department</th>
        <th class="border-2 text-red-600"> Edit </th>
      </tr>
    </thead>
    <tbody>
      {#each events as event, id}
        <tr class="text-center">
          <td class="border p-3">{id}</td>
          <td class="border p-3">{event.detail}</td>
          <td class="border p-3">{event.department_id}</td>
          <td class="border p-3 text-red-600 font-bold underline">
            <Link to={"/admin"}>แก้ไข</Link>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
