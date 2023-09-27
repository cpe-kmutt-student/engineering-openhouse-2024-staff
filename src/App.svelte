<script lang="ts">
  import { Route, Router } from "svelte-routing"
  import Home from "./pages/Home.svelte"
  import NotFound from "./components/NotFound.svelte"
  import About from "./pages/About.svelte"
  import Event from "./pages/Event.svelte"
  export let url = ""
</script>

<Router {url}>
  <main>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/event/:id" component={Event} />
    <!-- <Route path="/admin" component={Admin} />
    <Route path="/admin/create" component={AdminCreate} /> -->
    <Route component={NotFound} />
  </main>
</Router>
