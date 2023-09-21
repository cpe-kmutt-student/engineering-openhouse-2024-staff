<script lang="ts">
  import { Axios } from "@/lib/Axios";
  import toast, { Toaster } from "svelte-french-toast";

  let detail = "";
  let department_id = 0;

  const handleCreateEvent = async () => {
    try {
      const response = await Axios.post("/api/event/create", {
        detail: detail,
        department_id: department_id,
      });

      if (response.status === 200) {
        toast.success("Success");
      }
    } catch (error) {
      toast.error("Error");
      console.log(error);
    }
  };
</script>

<div class="flex flex-col items-center justify-center p-6">
  <Toaster />

  <div class="flex-grow">
    <div class="flex items-center justify-center">
      <div
        class="px-8 py-6 mt-4 text-left bg-white rounded-xl border-2 border-black shadow-lg"
      >
        <h3 class="text-2xl font-bold text-center text-red-600 mt-2">
          Create Event
        </h3>

        <!-- Form -->
        <form on:submit|preventDefault={handleCreateEvent}>
          <div class="mt-4">
            <div>
              <label class="block font-medium" for="event_name"
                >Detail<label>
                  <input
                    type="text"
                    placeholder="detail"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                    bind:value={detail}
                    required
                  />
                </label></label
              >
            </div>

            <div class="mt-4">
              <label class="block font-medium"
                >Department<label>
                  <input
                    type="number"
                    placeholder="department"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                    bind:value={department_id}
                    required
                  />
                </label></label
              >
            </div>

            <div class="flex justify-center my-1">
              <button
                type="submit"
                class="px-6 py-2 mt-4 text-white font-semibold bg-red-600 rounded-lg hover:bg-black hover:text-white transition ease-linear duration-200"
                >Add</button
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
