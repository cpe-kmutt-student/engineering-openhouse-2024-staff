<script lang="ts">
  import { Axios } from "@/lib/Axios";
  import { User } from "@/stores/User";
  import QrCode from "svelte-qrcode";

  let showQr = false;
  let qrShortCode = "";

  const genQr = async () => {
    showQr = true;

    const response = await Axios.post("/api/qr");
    if (response.status === 200) {
      qrShortCode = response.data.shortCode;
    }
  };

  const handleLogout = async () => {
    await Axios.post("/api/staff/logout");
    window.location.pathname = "/";
  };
</script>

<div>
  <!-- Header -->
  <div class="text-center">
    <p class="bg-red-600 text-xl text-white py-2">
      Login as
      <span class="ml-2 text-gray-100 font-bold"> {$User.user_name} </span>
      <button
        on:click={handleLogout}
        class="bg-red-500 p-2 m-4 text-white rounded-lg"
      >
        Logout
      </button>
    </p>
  </div>

  <!-- Create QR -->
  <div class="flex justify-center">
    <input
      type="text"
      placeholder="Qr"
      class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
      bind:value={qrShortCode}
      required
    />
    <button
      on:click={genQr}
      class="px-4 py-2 mt-4 text-white font-semibold bg-black rounded-lg hover:bg-red-600 hover:text-white transition ease-linear duration-200"
    >
      สร้าง Qr Code
    </button>
  </div>
  {#if showQr}
    <QrCode value={qrShortCode} />
  {/if}
</div>
