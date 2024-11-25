<script setup lang="ts">

import {onMounted} from "vue";
import {useUserStore} from "../stores/UserStore.ts";
import router from "../router.ts";

onMounted(()=>{
  const userCheck = useUserStore();
  if(!userCheck.user){
    router.push("/login")
  }
})
</script>

<template>
    <div>
        <p>Ceci est la page inventaire.</p>
    </div>
</template>