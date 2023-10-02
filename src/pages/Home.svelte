<script lang="ts">
  import snorlaxRed from "/images/snorlax-red.png"
  import Login from "@/components/Login.svelte"
  import { onMount } from "svelte"
  import { User } from "@/stores/User"
  import Home from "@/components/Home.svelte"
  import { Axios } from "@/lib/Axios"

  onMount(async () => {
    try {
      const response = await Axios.get("/api/staff")
      if (response.status === 200) {
        $User = response.data.data
      }
    } catch (error) {
      console.log(error)
    }

    const interval = setInterval(() => {
      window.location.pathname = "/"
    }, 60000 * 5) // 60 sec x 5 = 5 min

    //ClearInterval
    // return () => clearInterval(interval);
  })
</script>

<div>
  {#if $User}
    <Home />
  {:else}
    <Login />
  {/if}
</div>
