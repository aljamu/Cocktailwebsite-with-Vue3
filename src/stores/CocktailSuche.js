import { defineStore } from "pinia";                        //start 15.2

export const useCocktailSuche = defineStore("cocktailsSuche", {
    state: () => ({
        cocktailsSuche: [],
        query: '',
    }),
    getters: {
        
    },
    actions: {
        async sucheCocktails() {
            const result = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + this.query)
            const response = await result.json();
            this.cocktailsSuche = response.drinks;
        }
    }
})                                                         // Ende 15.2