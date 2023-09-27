<script>
  import { Axios } from "@/lib/Axios"
  import { onMount } from "svelte"
  import { User } from "@/stores/User"
  import QrCode from "svelte-qrcode"

  export let id

  let qrText = ""
  const frontUrl = import.meta.env.VITE_FRONTEND_URL || "http://localhost:3000"

  onMount(async () => {
    if (!$User) {
      window.location.pathname = "/"
    }
    const res = await Axios.post("/api/qrcode", { event_id: id })
    if (res.data.data) {
      qrText = res.data.data.id
    }
    console.log(res.data.data)
  })
  // TODO : Check interval to check expired
  const intervalCheckExpired = () => {}

  const genQR = async () => {
    await Axios.post("/api/qrcode/create", { event_id: id })
  }
</script>

<div>
  <div class="flex justify-center">
    <button on:click={genQR} class="btn-dark"> สร้าง Qr Code </button>
  </div>
  <h1>{qrText}</h1>
  {#if qrText}
    <QrCode value={frontUrl + "/stamp?code=" + qrText} />
  {/if}
</div>
