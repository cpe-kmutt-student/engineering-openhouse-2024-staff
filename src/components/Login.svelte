<script lang="ts">
  import snorlaxRed from "/images/snorlax-red.png"
  import toast, { Toaster } from "svelte-french-toast"
  import { Axios } from "@/lib/Axios"
  import { User } from "@/stores/User"

  let username = ""
  let password = ""

  let isVisiblePassword = false
  $: type = isVisiblePassword ? "text" : "password"

  const toggleVisibility = () => {
    isVisiblePassword = !isVisiblePassword
  }
  function onInputPassword(event) {
    password = event.target.value
  }

  const handleLogin = async () => {
    try {
      const response = await Axios.post("/api/staff/login", {
        username: username,
        password: password,
      })
      if (response.status === 200) {
        toast.success("Success")
        $User = response.data.data
        window.location.pathname = "/"
      }
    } catch (error) {
      toast.error("รหัสผ่านผิด")
      console.log(error)
    }
  }
</script>

<div class="flex flex-col items-center justify-center p-6">
  <div class="flex justify-center place-content-center">
    <img src={snorlaxRed} class="max-w-xs" alt="" />
  </div>
  <Toaster />
  <div class="flex-grow">
    <div class="flex items-center justify-center">
      <div class="px-8 py-6 mt-4 text-left bg-white rounded-xl border-2 border-black shadow-lg">
        <h3 class="text-2xl font-bold text-center text-red-600 mt-2">Staff Login</h3>

        <!-- Form -->
        <form on:submit|preventDefault={handleLogin}>
          <div class="mt-4">
            <div>
              <label class="block font-medium" for="username"
                >Username<label>
                  <input
                    type="text"
                    placeholder="Username"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                    bind:value={username}
                    required
                  />
                </label></label
              >
            </div>

            <div class="mt-4">
              <label class="block font-medium"
                >Password<label>
                  <input
                    {type}
                    placeholder="Password"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                    on:input={onInputPassword}
                    required
                  />
                </label></label
              >
            </div>
            <div class="flex items-start mt-4">
              <div class="flex items-center h-5">
                <input
                  on:change={toggleVisibility}
                  id="showPass"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-red-300 rounded accent-red-500 bg-red-500 focus:ring-3 focus:ring-red-500"
                />
              </div>
              <label for="showPass" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Show Password</label
              >
            </div>

            <div class="flex justify-center my-1">
              <button
                type="submit"
                class="px-6 py-2 mt-4 text-white font-semibold bg-red-600 rounded-lg hover:bg-black hover:text-white transition ease-linear duration-200"
                >Login</button
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
