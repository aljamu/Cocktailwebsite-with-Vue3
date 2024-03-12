<script setup>
import { watchEffect, onMounted } from "vue";
import { useCocktailSuche} from "@/stores/CocktailSuche";
import CocktailKarte from "@/components/CocktailKarte.vue";

const cocktailsSuche = useCocktailSuche();                      //Start 15.1
watchEffect(() => {
  cocktailsSuche.sucheCocktails(cocktailsSuche.query)
})
onMounted(() => {
  cocktailsSuche.sucheCocktails();
})                                                              //Ende 15.1
</script>

<template>
    <div class="px-8 2xl:px-80">                                <!-- Start 15.1 -->

        <div class="py-8">
        <input type="text" v-model="cocktailsSuche.query" class="rounded border-2 border-gray-200 w-full" placeholder="Suche..."
          @change="searchCocktails">
        </div>                                                  <!-- Ende 15.1 (mit </div> weiter unten) -->

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">    <!-- Start 15.4-->
          <CocktailKarte v-for="cocktail in cocktailsSuche.cocktailsSuche" 
          :key="cocktail.idDrink" 
          :cocktail="cocktail" 
          ></CocktailKarte>                                                    
        </div>                                                                <!-- Ende 15.4-->
        
    </div>                                                      <!-- gehört zu 15.1 -->
    
</template>