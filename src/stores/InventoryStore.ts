import { defineStore } from 'pinia'

export const useInventoryStore = defineStore('inventoryStore', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // dummy values for now, until we connect to db
      inventoryItems: [{
        ressource: "wood", //we store name instead of id because we won't use id anyways from here (probably)
        quantity: 500
      },{
        ressource: "iron",
        quantity: 200
      },{
        ressource: "money",
        quantity: 3000
      }]
    }
  },
  /**
   * Actions:
   * -getInventoryData
   * -updateInventoryData (maybe not useful idk)
   * -removeItems
   * -addItems
   */
  actions: {
    getInventoryData(){

    },
    updateInventoryData(){

    },
    removeItems(){

    },
    addItems(){

    }
  }
})