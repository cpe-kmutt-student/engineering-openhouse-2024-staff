<script>
  import { Axios } from "@/lib/Axios"
  import { onMount } from "svelte"
  import { User } from "@/stores/User"
  import QrCode from "svelte-qrcode"
  import { navigate } from "svelte-routing"
  import arrowBack from "/arrow-back.svg"
  import Timer from "@/components/Timer.svelte"
  //query params
  export let id
  export let eventName

  let qrId = ""
  let shortCode = ""
  let isTimeOut = false
  const frontendUrl = import.meta.env.VITE_FRONTEND_URL || "http://localhost:3000"

  const getQrcode = async () => {
    const res = await Axios.post("/api/qrcode", { event_id: id })
    if (res.data.data) {
      qrId = res.data.data.id || ""
      shortCode = res.data.data.short_code
      // console.log(res.data.data)
    }
  }

  $: if (isTimeOut) goBack()
  onMount(async () => {
    if (!$User) {
      window.location.pathname = "/"
    }
    await getQrcode()
    intervalCheckExpired
  })

  const intervalCheckExpired = setInterval(async () => {
    await getQrcode()
    if (qrId == "") window.location.pathname = "/"
  }, 60000) // 60 sec

  const createQR = async () => {
    await Axios.post("/api/qrcode/create", { event_id: id })

    await getQrcode()
  }

  const disableQR = async () => {
    await Axios.patch("/api/qrcode", { id: qrId, status: false }) //disable qr
    qrId = ""
  }

  const goBack = async () => {
    if (qrId) {
      await Axios.patch("/api/qrcode", { id: qrId, status: false }) //disable qr
    }
    navigate("/")
  }
</script>

<div>
  <!-- Header -->
  <div class="p-4 flex items-center">
    <button on:click={goBack} class="">
      <img src={arrowBack} class="w-8 h-8 stroke-navy filter" alt="" />
    </button>
    <span class="flex justify-center w-full mr-8">
      <h1 class="text-center text-xl md:text-2xl font-bold">🎡{eventName}🎪</h1>
    </span>
  </div>
  <div class="flex justify-center">
    {#if qrId == ""}
      <button on:click={createQR} class="btn-dark"> สร้าง Qr Code </button>
    {/if}
  </div>
  {#if qrId}
    <div class="flex flex-col justify-center items-center">
      <div class="flex justify-center">
        <QrCode value={frontendUrl + "/profile/stamp?code=" + qrId} size="350" />
      </div>
      <h1 class="text-center text-2xl">{shortCode}</h1>
      <Timer bind:isTimeOut />
      <button on:click={disableQR} class="btn-dark mt-6"> ❌ปิด Qr Code </button>
    </div>
  {/if}
</div>
