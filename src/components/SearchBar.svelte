<script lang="ts">
  let search = ""
  export let searchUser: (search: string) => void
</script>

<form class="p-4 flex items-center" on:submit|preventDefault={() => searchUser(search)}>
  <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
  <div class="flex items-center justify-center">
    <input
      type="text"
      id="search"
      class="block w-full p-3 pl-4 text-sm text-gray-900 border border-black focus:border-black focus:ring-black rounded-lg bg-gray-50"
      placeholder="เบอร์โทรศัพท์"
      bind:value={search}
      required
    />
    <button type="submit" class="btn-dark inline-flex ml-2"> ค้นหา </button>
  </div>
</form>
