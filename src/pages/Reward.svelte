<script lang="ts">
  import { navigate } from "svelte-routing"
  import arrowBack from "/arrow-back.svg"
  import { Axios } from "@/lib/Axios"
  import SearchBar from "@/components/SearchBar.svelte"
  import UserCard from "@/components/UserCard.svelte"
  import type { UserResult } from "@/types/Response"

  let users: UserResult[] = []

  const searchUser = async (search: string) => {
    console.log(search)
    const res = await Axios.post("/api/staff/reward/phone", { phone: search })
    if (res.status === 200) {
      users = res.data.data
    }
  }
  const goBack = async () => {
    navigate("/")
  }
</script>

<div class="p-4 flex items-center">
  <button on:click={goBack} class="">
    <img src={arrowBack} class="w-8 h-8 stroke-navy filter" alt="" />
  </button>
  <span class="flex justify-center w-full mr-8">
    <h1 class="text-center text-xl md:text-2xl font-bold">รับรางวัล ✨</h1>
  </span>
</div>
<div class="flex flex-col justify-center items-center">
  <SearchBar {searchUser} />
  <br />

  {#each users as user}
    <div class="flex flex-col gap-x-5">
      <UserCard {user} />
    </div>
  {/each}
</div>
