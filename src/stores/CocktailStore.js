import { defineStore } from 'pinia' // 4.1
import { ref } from "vue"

export const useCocktailStore = defineStore('cocktails', {  //start 4.2
  state: () => ({                                           //start 4.3
    cocktails: [],
    isLoading: true,
    // buchstabe: "a"                                       //!!!Das hier verwenden bei 4.3
    buchstabe: ref("a")                                     //das hier kommt erst bei Schritt 9.1   
}),                                                         //Ende 4.3
actions: {                                                  //start 4.4
  async getCocktails() {
    const result = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + this.buchstabe)
    const response = await result.json();
    this.cocktails = response;
    this.isLoading = false
},                                                          //Ende 4.4
}
})                                                          //Ende 4.2
