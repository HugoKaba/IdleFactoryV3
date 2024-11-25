<template>
  <div class="market-popup">
    <h1>Marché</h1>
    <div class="resource-tabs">
      <div class="tab" :class="{ 'active-tab': selectedTab === 'resources' }" @click="selectedTab = 'resources'">
        Ressources
      </div>
      <div class="tab" :class="{ 'active-tab': selectedTab === 'Vente' }" @click="selectedTab = 'Vente'">
        Mettre en Vente
      </div>
      <div class="tab" :class="{ 'active-tab': selectedTab === 'MyVente' }" @click="selectedTab = 'MyVente'">
        Mes Annonce en Vente
      </div>
      <div class="tab" :class="{ 'active-tab': selectedTab === 'Historique' }" @click="selectedTab = 'Historique'">
        Historique
      </div>
    </div>
    <div class="content-container">
      <div class="content" v-if="selectedTab === 'resources'">
        <Ads />
      </div>
      <div class="content" v-if="selectedTab === 'Vente'">
        <CAds />
      </div>
      <div class="content" v-if="selectedTab === 'MyVente'">
        <MyAds />
      </div>
      <div class="content" v-if="selectedTab === 'Historique'">
        <Historique />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import AdsComponent from './AdsComponent.vue';
import CreateAdsComponent from './CreateAdsComponent.vue';
import HistoriqueComponent from './HistoriqueComponent.vue';
import MyAdsComponent from './MyAdsComponent.vue';

export default defineComponent({
  components: {
    Ads: AdsComponent,
    CAds: CreateAdsComponent,
    Historique: HistoriqueComponent,
    MyAds: MyAdsComponent,
  },
  setup() {
    const selectedTab = ref('resources');
    const showAll = ref(false);
    const currentIndex = ref(0);

    return {
      selectedTab,
      showAll,
      currentIndex,
    };
  },
});
</script>


<style scoped>
.market-popup {
  height: 80vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-height: 80%;
  overflow: hidden;
  text-align: center;
}

.resource-tabs {
  display: flex;
  justify-content: space-around;
}

.tab {
  cursor: pointer;
  color: #777777;
  padding: 10px 50px;
}

.tab.active-tab {
  color: #ffff;
  background-color: #444444;
  border-radius: 20px 20px 0 0;
}

.content-container {
  background-color: #444444;
  padding: 20px;
  border-radius: 20px;
  height: calc(100% - 40px);
}

.content {
  color: #777777;
}
</style>

