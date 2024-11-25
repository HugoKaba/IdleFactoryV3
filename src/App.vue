<script setup lang="ts">
  // import {instance} from "./utils/axiosInstance.ts";
  // import {useUserStore} from "./stores/UserStore.ts";
  // import {onMounted, ref} from "vue";
  // import router from "./router.ts";
  // import {onMounted} from "vue";
  import {useUserStore} from "./stores/UserStore.ts";

  const user = useUserStore()
  console.log(user.user)
  // console.log(user)
</script>

<template>
  <div id="navbar">
    <div v-if="user.user">
      <router-link to="/" class="mr-3">Usines</router-link>
      <router-link to="/inventory" class="mr-3">Inventaire</router-link>
      <router-link to="/market" class="mr-3">Marché</router-link>
      <router-link to="/achievements" class="mr-3">Succès</router-link>
    </div>
  </div>
  <div>
    <router-view />
  </div>
</template>

<style scoped>
#navbar{
  display: flex;
  justify-content: space-evenly;
}
</style>
