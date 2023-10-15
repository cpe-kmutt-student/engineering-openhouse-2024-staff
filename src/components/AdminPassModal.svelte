<script>
  import { navigate } from "svelte-routing"
  import Modal from "./Modal.svelte"
  import { onMount } from "svelte"

  let showModal = false
  let pass = ""
  let adminPass = ""
  onMount(() => {
    adminPass = localStorage.getItem("adminPass")
  })
  const onSubmit = () => {
    localStorage.setItem("adminPass", pass)
    navigate("/admin")
  }
</script>

{#if !adminPass}
  <button on:click={() => (showModal = true)} class="btn-dark">Admin</button>
{:else}
  <button on:click={() => navigate("/admin")} class="btn-dark">Admin</button>
{/if}
<Modal bind:showModal>
  <form class="flex flex-col space-y-6" on:submit|preventDefault={onSubmit}>
    <!-- <h3 class=" text-xl font-medium text-gray-900 dark:text-white">Admin Password</h3> -->
    <div class="mt-2">
      <label class="block font-medium"
        >Password<label>
          <input
            type="password"
            placeholder="Password" 
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
            bind:value={pass}
            required
          />
        </label></label
      >
    </div>
    <button type="submit" class="btn-dark">Login</button>
  </form>
</Modal>
