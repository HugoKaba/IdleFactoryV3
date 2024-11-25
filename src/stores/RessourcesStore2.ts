// ressourcesStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { instance } from "../utils/axiosInstance.ts";

export const useResourcesStore = defineStore('ressourcesStore', () => {
  const resources = ref("")

  const getRessourceTypes = async () => {
    try {
      const response = await instance.get("/resources");
      resources.value = response.data.resources
    } catch (e) {
      console.error(e);
    }
  }
  return { resources, getRessourceTypes }
},{
  persist: {
    storage: localStorage,
  }
})
