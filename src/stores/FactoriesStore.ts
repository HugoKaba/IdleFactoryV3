import { defineStore } from 'pinia'

export const useFactoriesStore = defineStore('factoriesStore', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // dummy values for now, until we connect to db
      factories: [{
        id: "123456789",
        type: "iron",
        cost: [{ressource: "wood", quantity: 10},{ressource: "money", quantity:500}],
        prod: 200,
        level: 3,
        user: {name: "Léo"}
      },{
        id: "1827667389",
        type: "wood",
        cost: [{ressource: "leaves", quantity: 3},{ressource: "money", quantity:100}],
        prod: 80,
        level: 2,
        user: {name: "Léo"}
      }]
    }
  },
  /**
   * Actions:
   * -createFactory
   * -deleteFactory
   * -upgradeFactory
   * -getAllFactories
   */
  actions: {
    createFactory(){

    },
    deleteFactory(){

    },
    upgradeFactory(){

    },
    getAllFactories(){

    }
  }
})