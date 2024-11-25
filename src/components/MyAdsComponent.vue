<template>
  <div class="my-ads">
    <div class="intitulé">
      <span>Utilisateur</span>
      <span>Ressource</span>
      <span>Quantité</span>
      <span>Prix</span>
    </div>

    <div  v-for="(ad, index) in ads" :key="index" class="annonce overflow-y-scroll">

      <div class="annonce-info">
        <span>{{ ad.seller }}</span>
        <span>{{ ad.resource }}</span>
        <span>{{ ad.quantity }}</span>
        <span>{{ ad.price }}</span>
        <button @click="showDeletePopup(ad)" class="delete-button">Delete</button>
      </div>
    </div>
    <div v-if="showDeleteConfirmation" class="popup-container">
      <div class="popup">
        <p>Êtes-vous sûr de vouloir supprimer cette annonce ?</p>
        <button @click="deleteAd">Oui</button>
        <button @click="cancelDelete">Annuler</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useOfferStore } from '../stores/OfferStores';
import { useUserStore } from '../stores/UserStore';

export default {
  setup() {
    const offerStore = useOfferStore();
    const userStore = useUserStore();
    const user = computed(() => userStore.user);
    const offer = computed(() => offersStore.offers)

    const showDeleteConfirmation = ref(false);
    const adToDelete = ref(null);

    onMounted(async () => {
      await userStore.getUserInfos();
      await offerStore.fetchOffers();
    });

    const ads = computed(() => {
      return offerStore.offers
        .filter((ad) => ad.offer.seller === user.value.username && !ad.offer.buyer)
        .map((ad) => ad.offer);
    });

    const showDeletePopup = async (ad) => {
      showDeleteConfirmation.value = true;
      adToDelete.value = ad;
    };

    const deleteAd = async () => {
      const ad = adToDelete.value;
      const matchingOffer = offerStore.offers
        .filter((offer) =>
          offer.offer.resource === ad.resource &&
          offer.offer.price === ad.price &&
          offer.offer.quantity === ad.quantity &&
          offer.offer.createdAt === ad.createdAt);

      if (matchingOffer.length > 0) {
        const adId = matchingOffer[0]._id;
        await offerStore.cancelAd(adId);
      }
      closeDeletePopup();
    };

    const cancelDelete = () => {
      closeDeletePopup();
    };

    const closeDeletePopup = () => {
      showDeleteConfirmation.value = false;
      adToDelete.value = null;
    };

    return {
      ads,
      showDeleteConfirmation,
      adToDelete,
      showDeletePopup,
      deleteAd,
      cancelDelete,
      closeDeletePopup,
    };
  },
};
</script>


<style scoped>
.my-ads {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

.annonce-info {
  display: flex;
  justify-content: space-between;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  transition: background-color 0.3s;
  margin: 0 10px;
  cursor: pointer;
}

button:focus,
button:focus-visible {
  outline: none;
}

.delete-button {
  background-color: #ff6b6b;
  color: white;
}

.delete-button:hover {
  background-color: #ff3333;
}

.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
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