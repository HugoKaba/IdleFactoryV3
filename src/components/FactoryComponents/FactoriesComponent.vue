<script setup lang="ts">
import { useFactoriesStore } from '../../stores/FactoriesStore.js';
import FactoryUnitComponent from './FactoryUnitComponent.vue';
import {useUserStore} from "../../stores/UserStore.ts";
import {onMounted} from "vue";
import router from "../../router.ts";

const factoriesStore = useFactoriesStore();

// const user = useUserStore();
onMounted(()=>{
  const userCheck = useUserStore();
  if(!userCheck.user){
    router.push("/login")
  }
})

function openFactoryCreationForm(){

}

</script>

<template>
  <div>
    <p>Ceci est la page principale avec les usines.</p>
  </div>
  <div id="factoryListTop">
    <button @click="openFactoryCreationForm()">Créer une usine</button>
  </div>
  <div id="factoryList" v-for="factory in factoriesStore.factories">
    <FactoryUnitComponent :factoryData="factory"/>
  </div>
</template>