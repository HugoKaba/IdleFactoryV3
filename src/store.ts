import { reactive, ref } from 'vue';

const state = reactive({
    resources: [
        { type: 'terre', price: 10 },
        { type: 'bois', price: 20 },
        { type: 'eau', price: 30 },
        { type: 'sable', price: 15 },
        { type: 'electricité', price: 25 },
        { type: 'feu', price: 18 },
        { type: 'argile', price: 22 },
    ],
    ads: [
        { id: 1, vendeur: 'teo', resource: 'terre', quantity: 5, price: 15, acheteur: '', createdAt: '', buyAt: '', unitPrice: 3 },
        { id: 2, vendeur: 'teo', resource: 'terre', quantity: 10, price: 10, acheteur: '', createdAt: '', buyAt: '', unitPrice: 0.10 },
        { id: 4, vendeur: 'teo', resource: 'bois', quantity: 8, price: 60, acheteur: '', createdAt: "1/11/2023 11:39:19", buyAt: '', unitPrice: 10 },
        { id: 3, vendeur: 'teo', resource: 'bois', quantity: 8, price: 1, acheteur: '', createdAt: "3/11/2023 11:39:19", buyAt: '', unitPrice: 10 },
    ],
    user: [
        { id: 1, username: "hugo", credit: 10 },
        { id: 2, username: "teo", credit: 10 },
    ]
});

const selectedTab = ref('resources');
const selectedResource = ref('');
const showAll = ref(false);
const currentIndex = ref(0);

export default {
    state,
    selectedTab,
    selectedResource,
    showAll,
    currentIndex,
};
