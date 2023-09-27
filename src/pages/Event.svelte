<script>
  import { Axios } from "@/lib/Axios"
  import { onMount } from "svelte"
  import { User } from "@/stores/User"
  import QrCode from "svelte-qrcode"

  export let id

  let qrText = ""
  const frontUrl = import.meta.env.VITE_FRONTEND_URL || "http://localhost:3000"

  const getQrcode = async () => {
    const res = await Axios.post("/api/qrcode", { event_id: id })
    if (res.data.data) {
      qrText = res.data.data.id || ""
    }
  }

  onMount(async () => {
    if (!$User) {
      window.location.pathname = "/"
    }
    getQrcode()
  })
  // TODO : Check interval to check expired
  const intervalCheckExpired = () => {}

  const genQR = async () => {
    const res = await Axios.post("/api/qrcode/create", { event_id: id })

    await getQrcode()
  }
</script>

<div>
  <div class="flex justify-center">
    {#if qrText == ""}
      <button on:click={genQR} class="btn-dark"> สร้าง Qr Code </button>
    {/if}
  </div>
  <h1>{qrText}</h1>
  {#if qrText}
    <QrCode value={frontUrl + "/stamp?code=" + qrText} />
  {/if}
</div>
