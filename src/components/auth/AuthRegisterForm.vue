<script setup lang="ts">
import {ref} from "vue";
import axios from "axios";
import {useUserStore} from "../../stores/UserStore.ts";
import {instance} from "../../utils/axiosInstance.ts";
import router from "../../router.ts";


const user = useUserStore()
const username = ref()
const password = ref()

const handleSubmit = async(e) => {
  e.preventDefault()

  const data = {
    username: username.value,
    password: password.value
  }
  await user.registerUser(data)
  await router.push("/")
}

</script>

<template>
  <div class="min-h-[600px] flex items-center justify-center content-center ">
    <div class="flex items-center justify-center content-center p-6 bg-gray-900 rounded-lg">
      <form action="" class="flex flex-col content-center items-center justify-items-center ">
        <input type="text" v-model="username" class="mt-6 min-w-full">
        <input type="password" v-model="password" class="mt-2 min-w-full">
        <button type="submit" @click="handleSubmit" class="mt-6 min-w-full">M'inscrire</button>
        <router-link to="/login">Me connecter</router-link>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>