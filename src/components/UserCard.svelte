<script lang="ts">
  import type { UserResult } from "@/types/Response"
  import { Axios } from "@/lib/Axios"

  export let user: UserResult

  const onCheckReward = async () => {
    await Axios.post(`/api/staff/reward`, {
      email: user.email,
      reward_1: user.reward_1,
      reward_2: user.reward_2,
    })
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err))
  }
</script>

<div class="w-80 max-w-lg bg-white border border-gray-200 rounded-lg mb-6 shadow">
  <div class="flex justify-end px-4 pt-4">
    <!-- Top -->
  </div>
  <div class="flex flex-col items-center pb-10">
    <img src={user.profileUrl} class="w-24 h-24 mb-3 rounded-full shadow-lg" alt="" />
    <!-- UserName -->
    <h3 class="mb-1 text-xl font-medium text-gray-900">
      {user.prefix}
      {user.firstName}
      {user.lastName}
    </h3>
    <h3 class="mb-1 text-xl font-medium text-gray-900">{user.phone}</h3>
    <h4 class="mb-1 text-xl font-medium text-gray-900">{user.email}</h4>
    <table class="table-auto border">
      <thead>
        <tr>
          <th class="border-2 px-2"> เข็มกลัด </th>
          <th class="border-2 px-2"> พวงกุญแจ </th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <td class="border p-3"
            ><input
              type="checkbox"
              class="w-6 h-4 accent-red-500"
              name="reward_1"
              bind:checked={user.reward_1}
              on:change={onCheckReward}
            /></td
          >
          <td class="border p-3"
            ><input
              type="checkbox"
              class="w-6 h-4 accent-red-500"
              name="reward_2"
              bind:checked={user.reward_2}
              on:change={onCheckReward}
            /></td
          >
        </tr>
      </tbody>
    </table>
  </div>
</div>
