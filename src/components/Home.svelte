<script lang="ts">
  import { User } from "@/stores/User";

  let qrImage = "";
  const genQr = () => {
    qrImage = "https://eliasnogueira.github.io/selenium-read-qrcode/qrcode.png";
  };
</script>

<div>
  <!-- Header -->
  <div class="text-center">
    <p class="bg-red-600 text-xl text-white py-2">
      Login as
      <span class="ml-2 text-gray-100 font-bold"> {$User.user_name} </span>
      <button class="bg-red-500 p-2 m-4 text-white rounded-lg"> Logout </button>
    </p>
  </div>
  
  <!-- Create QR -->
  <div class="flex justify-center">
    <button
      on:click={genQr}
      class="px-4 py-2 mt-4 text-white font-semibold bg-black rounded-lg hover:bg-red-600 hover:text-white transition ease-linear duration-200"
    >
      สร้าง Qr Code
    </button>
  </div>
  {#if qrImage != ""}
    <img src={qrImage} alt="qrCode" width="500" height="500" />
  {/if}
</div>
