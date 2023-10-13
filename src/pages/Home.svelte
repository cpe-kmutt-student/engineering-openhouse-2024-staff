<script lang="ts">
  import Login from "@/components/Login.svelte"
  import { onMount } from "svelte"
  import { User } from "@/stores/User"
  import Home from "@/components/Home.svelte"
  import { Axios } from "@/lib/Axios"
  import Loading from "@/components/Loading.svelte"

  let isLoading = true
  onMount(async () => {
    try {
      const response = await Axios.get("/api/staff")
      if (response.status === 200) {
        $User = response.data.data
      }
      isLoading = false
    } catch (error) {
      isLoading = false
      console.log(error)
    }
  })
</script>

<div>
  {#if isLoading}
    <Loading />
  {:else if $User}
    <Home />
  {:else}
    <Login />
  {/if}
</div>
