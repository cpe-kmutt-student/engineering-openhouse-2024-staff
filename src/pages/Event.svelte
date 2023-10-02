<script>
  import { Axios } from "@/lib/Axios"
  import { onMount } from "svelte"
  import { User } from "@/stores/User"
  import QrCode from "svelte-qrcode"
  import { navigate } from "svelte-routing"
  import arrowBack from "/arrow-back.svg"
  //query params
  export let id
  export let eventName

  let qrText = ""
  let shortCode = ""
  const frontendUrl = import.meta.env.VITE_FRONTEND_URL || "http://localhost:3000"

  const getQrcode = async () => {
    const res = await Axios.post("/api/qrcode", { event_id: id })
    if (res.data.data) {
      qrText = res.data.data.id || ""
      shortCode = res.data.data.short_code
      console.log(res.data.data)
    }
  }

  onMount(async () => {
    if (!$User) {
      window.location.pathname = "/"
    }
    await getQrcode()
    intervalCheckExpired
  })

  const intervalCheckExpired = setInterval(async () => {
    await getQrcode()
    if (qrText == "") window.location.pathname = "/"
  }, 60000) // 60 sec

  const createQR = async () => {
    await Axios.post("/api/qrcode/create", { event_id: id })

    await getQrcode()
  }
</script>

<div>
  <!-- Header -->
  <div class="p-4 flex items-center">
    <button on:click={() => navigate("/")} class="">
      <img src={arrowBack} class="w-8 h-8 stroke-navy filter" alt="" />
    </button>
    <span class="flex justify-center w-full mr-8">
      <h1 class="text-center text-xl md:text-2xl font-bold">{eventName}</h1>
    </span>
  </div>
  <div class="flex justify-center">
    {#if qrText == ""}
      <button on:click={createQR} class="btn-dark"> สร้าง Qr Code </button>
    {/if}
  </div>
  {#if qrText}
    <div class="flex flex-col justify-center">
      <QrCode value={frontendUrl + "/profile/stamp?code=" + qrText} color="#dc2626" />
      <h1 class="text-center text-2xl">{shortCode}</h1>
    </div>
  {/if}
</div>
