<script lang="ts">
  import snorlaxRed from "/images/snorlax-red.png";

  let email: any = "";
  let password: any = "";
  const handleLogin = () => {};
</script>

<div class="flex flex-col items-center justify-center p-6">
  <div class="flex justify-center place-content-center">
    <img src={snorlaxRed} class="max-w-xs" alt="" />
  </div>
  <div class="flex-grow">
    <div class="flex items-center justify-center">
      <div
        class="px-8 py-6 mt-4 text-left bg-white rounded-xl border-2 border-black shadow-lg"
      >
        <h3 class="text-2xl font-bold text-center text-red-600 mt-2">
          Staff Login
        </h3>
        <form action="">
          <div class="mt-4">
            <div>
              <label class="block font-medium" for="username"
                >Username<label>
                  <input
                    type="text"
                    placeholder="Username"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                    bind:value={email}
                    required
                  />
                </label></label
              >
            </div>
            <div class="mt-4">
              <label class="block font-medium"
                >Password<label>
                  <input
                    type="password"
                    placeholder="Password"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                    bind:value={password}
                    required
                  />
                </label></label
              >
            </div>
            <div class="flex justify-center my-1">
              <button
                class="px-6 py-2 mt-4 text-white font-semibold bg-red-600 rounded-lg hover:bg-black hover:text-white transition ease-linear duration-200"
                on:click={handleLogin}>Login</button
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
