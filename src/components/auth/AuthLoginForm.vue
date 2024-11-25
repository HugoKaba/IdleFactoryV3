<script setup lang="ts">

import {ref} from "vue";
  import { useUserStore } from "../../stores/UserStore.ts";
  import router from "../../router.ts";

  const username = ref()
  const password = ref()

  const user = useUserStore()
  const handleSubmit = async(e) => {
    e.preventDefault()
    const data = {
      username: username.value,
      password: password.value
    }
    await user.loginUser(data)
    await router.push("/")
  }


</script>

<template>
  <div class="min-h-[600px] flex items-center justify-center content-center ">
    <div class="flex items-center justify-center content-center p-6 bg-gray-900 rounded-lg">
      <form class="flex flex-col content-center items-center justify-items-center ">
        <input type="text" v-model="username" class="mt-6 min-w-full">
        <input type="password" v-model="password" class="mt-2 min-w-full">
        <button type="submit" @click="handleSubmit" class="mt-6 min-w-full">Me connecter</button>
        <router-link to="/register">M'inscrire</router-link>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>