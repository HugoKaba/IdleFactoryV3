<script setup lang="ts">
import {useUserStore} from "../../stores/UserStore.ts";
import {onMounted, ref} from "vue";

const user = useUserStore()
const achievementList = ref()
onMounted(async()=>{
  // mock achievement for testing
  // const achievement = await user.addUserAchievement("firstFactory")
  await user.getUserInfos()
  achievementList.value = user.user.achievements;
})

</script>

<template>
  <div class="justify-items-center justify-center flex"><p class="text-7xl font-bold justify-items-center">Succès Accomplis</p></div>
  <div v-for="item in achievementList" class="items-center flex flex-col mt-4">
    <div class="font-light bg-neutral-700 min-w-[50%] justify-center content-center flex">{{item.description}} : crédits gagnés {{item.reward}}</div>
  </div>
</template>

<style scoped>

</style>