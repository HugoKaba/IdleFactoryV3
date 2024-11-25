<template>
  <div class="create-ads">
    <h1>Mise en Vente</h1>
    <label for="resource">Ressource :</label>
    <select id="resource" v-model="selectedResource">
      <option v-for="resource in resources" :value="resource.name" :key="resource.id">
        {{ resource.name }}
      </option>
    </select>
    <label for="quantity">Quantité :</label>
    <input type="number" id="quantity" v-model="quantity" />
    <label for="price">Prix :</label>
    <input type="number" id="price" v-model="price" />
    <div class="price-with-tax">
      Prix avec 3% de taxe : {{ calculatePriceWithTax() }}
    </div>
    <button class="bg-gray-200 mx-10 my-0 p-1" @click="addAdvertisement">Valider</button>
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useResourcesStore } from '../stores/RessourcesStore2.js';
import { useOfferStore } from '../stores/OfferStores';
import { useUserStore } from '../stores/UserStore';


export default {
  setup() {
    const selectedResource = ref('');
    const quantity = ref(1);
    const price = ref(0);

    const resourcesStore = useResourcesStore();
    const offerStore = useOfferStore();
    const userStore = useUserStore();
    const user = computed(() => userStore.user);


    onMounted(async () => {
      await resourcesStore.getRessourceTypes();
      await userStore.getUserInfos();
      selectedResource.value = resourcesStore.resources[0]?.name || '';
    });

    const resources = computed(() => resourcesStore.resources);

    const calculatePriceWithTax = () => {
      const totalPrice = price.value + (price.value * 3) / 100;
      return totalPrice.toFixed(2);
    };

    const addAdvertisement = async () => {
      const newOffer = {
        seller: user.value.username,
        resource: selectedResource.value,
        quantity: quantity.value,
        price: calculatePriceWithTax(),
        createdAt: new Date().toISOString(),
        unitPrice: price.value / quantity.value,
      };
      await offerStore.createNewOffer(newOffer);

      selectedResource.value = resourcesStore.resources[0]?.name || '';
      quantity.value = 1;
      price.value = 0;
    };

    return {
      selectedResource,
      quantity,
      price,
      resources,
      calculatePriceWithTax,
      addAdvertisement,
    };
  },
};
</script>

<style scoped>
.create-ads {
  max-width: 400px;
  margin: 0 auto;
}

label {
  display: block;
  margin-top: 10px;
}

select,
input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
}

.price-with-tax {
  margin-top: 10px;
  font-weight: bold;
}
</style>
