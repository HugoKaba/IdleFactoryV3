// offer.interface.ts
// src/interfaces/offer.interface.ts
export interface Offer {
    id: number;
    seller: string;
    resource: string;
    quantity: number;
    price: number;
    acheteur: string;
    createdAt: string;
    buyAt: string;
    unitPrice: number;
}

import { defineStore } from 'pinia';
import { ref } from 'vue';
import { instance } from '../utils/axiosInstance.ts';

export const useOfferStore = defineStore('offerStore', () => {
    const offers = ref<Offer[]>([]);

    const fetchOffers = async () => {
        try {
            const response = await instance.get('/market/offers');
            offers.value = response.data.offers;
        } catch (error) {
            console.error('Error fetching offers:', error);
        }
    };

    const createNewOffer = async (offer: Offer) => {
        try {
            await instance.post('/market/offer', { offer});
            fetchOffers();
        } catch (error) {
            console.error('Error creating offer:', error);
        }
    };

    const buyOfferById = async (offerId: number, offer: Offer) => {
        try {
            await instance.post('/market/buy', {offerId,offer});
            fetchOffers();
        } catch (error) {
            console.error('Error buying offer:', error);
        }
    };
    const updateOffer = async (offerId: number, update: Offer) => {
        try {
            await instance.put('/market/update', { offerId, update });
            fetchOffers();
        } catch (error) {
            console.error('Error updating offer:', error);
        }
    };
    const cancelAd = async (offerId: number) => {
        try {
            await instance.post('/market/cancel', { offerId });
            fetchOffers();
        } catch (error) {
            console.error('Error cancelling ad:', error);
            throw error; // Re-throw the error to propagate it to the calling code
        }
    };


    return {
        cancelAd,
        offers,
        fetchOffers,
        createNewOffer,
        buyOfferById,
        updateOffer,
    };
}, {
    persist: {
        storage: localStorage,
    },
});
