<script lang="ts">
  import { Route, Router } from "svelte-routing"
  import Home from "./pages/Home.svelte"
  import NotFound from "./components/NotFound.svelte"
  import About from "./pages/About.svelte"
  import Event from "./pages/Event.svelte"
  import { onMount } from "svelte"
  import { User } from "./stores/User"
  import { Axios } from "./lib/Axios"
  import Reward from "./pages/Reward.svelte"
  export let url = ""

  onMount(async () => {
    try {
      const response = await Axios.get("/api/staff")
      if (response.status === 200) {
        $User = response.data.data
        // console.log("user", response.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  })
</script>

<Router {url}>
  <main>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/reward" component={Reward} />
    <Route path="/event/:id/:eventName" component={Event} />
    <!-- <Route path="/admin" component={Admin} />
    <Route path="/admin/create" component={AdminCreate} /> -->
    <Route component={NotFound} />
  </main>
</Router>
