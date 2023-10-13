<script lang="ts">
  import type { EventResponse } from "@/types/Response"
  import { Link } from "svelte-routing"

  export let events: EventResponse[] = []
  // console.log(events)
</script>

<div>
  <!-- Table -->
  <table class="table-auto border">
    <thead>
      <tr>
        <th class="border-2">กิจกรรม</th>
        <th class="border-2 text-red-600"> เลือก </th>
      </tr>
    </thead>
    <tbody>
      {#each events as event}
        <tr class="text-center">
          <td class="border p-3">{event.detail}</td>
          <td class="border p-3 text-red-600 font-bold underline">
            <Link to={"/event/" + event.id + "/" + event.detail}>เลือก</Link>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
