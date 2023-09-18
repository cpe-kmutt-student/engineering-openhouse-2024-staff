<script lang="ts">
  import snorlaxRed from "/images/snorlax-red.png";
  import { Link } from "svelte-routing";
  import Login from "@/components/Login.svelte";
  import { onMount } from "svelte";
  import { User } from "@/stores/User";

  onMount(() => {
    //Check Login
    console.log($User);
  });

</script>

<div class="flex justify-center place-content-center">
  <img src={snorlaxRed} class="max-w-xs" alt="" />
</div>
<div class="flex flex-col justify-center items-center">
  {#if $User}
    <h1>Hello</h1>
  {:else}
    <Login />
  {/if}
</div>
