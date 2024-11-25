<template>
  <div>
    <div class="tabs">

      <button class="bg-gray-200 mx-10 my-0 p-1" @click="showAchete">Acheté</button>
      <button class="bg-gray-200 mx-10 my-0 p-1" @click="showVendu">Vendu</button>

    </div>
    <div class="intitulé">
      <span>Utilisateur</span>
      <span>Ressource</span>
      <span>Quantité</span>
      <span>Prix</span>
    </div>
    <div class="pourScroll" v-if="selectedTab === 'achete'" style="max-height: 300px; overflow-y: auto;">
      <div class="historique-item" v-for="ad in historiqueAchete" :key="ad.id">
        <div class="annonce-info">
          <span>{{ ad.seller }}</span>
          <span>{{ ad.resource }}</span>
          <span>{{ ad.quantity }}</span>
          <span>{{ ad.price }}</span>
        </div>
      </div>
    </div>
    <div class="pourScroll" v-if="selectedTab === 'vendu'" style="max-height: 300px; overflow-y: auto;">
      <div class="historique-item" v-for="ad in historiqueVendu" :key="ad.id">
        <div class="annonce-info">
          <span>{{ ad.buyer }}</span>
          <span>{{ ad.resource }}</span>
          <span>{{ ad.quantity }}</span>
          <span>{{ ad.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted } from 'vue';

import { useUserStore } from '../stores/UserStore';
import { useOfferStore } from '../stores/OfferStores';

export default {
  setup() {
    const selectedTab = ref('achete');
    const offersStore = useOfferStore();
    const user = computed(() => userStore.user);
    const userStore = useUserStore();
    const offer = computed(() => offersStore.offers)

    onMounted(async () => {
      await userStore.getUserInfos();
      await offersStore.fetchOffers();
    });


    const historiqueAchete = computed(() => {
      const offers = offersStore.offers
        .filter((ad) => ad.offer.buyer === user.value.username)
        .map((ad) => ad.offer);
      return offers;
    }
    );

    const historiqueVendu = computed(() => {
      const offers = offersStore.offers
      .filter((ad) => ad.offer.seller === user.value.username && ad.offer.buyer)
      .map((ad) => ad.offer);
      return offers;
    }
    );

    const showAchete = () => {
      selectedTab.value = 'achete';
    };

    const showVendu = () => {
      selectedTab.value = 'vendu';
    };

    return {
      selectedTab,
      historiqueAchete,
      historiqueVendu,
      showAchete,
      showVendu,
    };
  },
};
</script>


<style scoped>
.tabs {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.tabs button {
  margin: 0 10px;
  cursor: pointer;
}


.intitulé {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.intitulé span {
  width: 200px;
}

.historique-item {
  width: 100%;
  padding: 10px;
  background-color: #ddd;
  border-radius: 10px;
  margin-bottom: 10px;
  border-top: 1px solid #999;
}

.annonces {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.annonce-info {
  overflow: scroll;
  display: flex;
  justify-content: space-between;
}

.annonce-info span {
  margin-right: 10px;
  width: 200px;
}
.pourScroll{
  overflow: scroll;
}
.intitulé {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.intitulé span {
  width: 200px;
}

.annonce {
  width: 100%;
  padding: 10px;
  background-color: #ddd;
  border-radius: 10px;
  margin-bottom: 10px;
  border-top: 1px solid #999;
}

.annonces {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
}

.annonce-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.annonce-info span {
  width: 200px;
}
</style>
