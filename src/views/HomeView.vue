<script setup>
import { onMounted, watchEffect } from 'vue';
import { useCocktailStore } from '@/stores/CocktailStore';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import CocktailKarte from '@/components/CocktailKarte.vue';
//import Navbar from '@/components/Navbar.vue';
const Buchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const breakpoints = useBreakpoints(breakpointsTailwind) 
const largerThanSm = breakpoints.greater('sm')            

const cocktailsStore = useCocktailStore();    
watchEffect(() => {                                                 //start 9.2
  cocktailsStore.getCocktails(cocktailsStore.buchstabe)             //Watchers in Vue beobachten reaktive Eigenschaften und können erkennen, 
                                                                        //wenn sich eine Eigenschaft ändert. Es fungiert im Wesentlichen als Ereignis-Listener 
                                                                        //für die reaktiven Daten unserer Komponente.
})                                                                  //Ende 9.2      
onMounted(() => {
  cocktailsStore.getCocktails();
})    
console.log(cocktailsStore.buchstabe)                                                    
</script>

<template>
                                                        <!--12.2 <Navbar /> hier her dann wieder ausklammern für 13. -->
  <div class="text-center  mt-5">               
    <h1 class="font-bold text-3xl">Willkommen auf CocktailsVue</h1>
    <h2 class=" text-xl">Eine Cocktailwebseite für das HTWK-Modul Webtechnologie</h2>
  </div>
  <div class=" bg-white border shadow mt-3">            <!-- start 10.1. alles folgende in dieses div verschieben-->                                     
    <div class="flex justify-center gap-2 mt-5">  
      <h2 v-if="largerThanSm" class="text-xs text-zinc-600 my-auto">Nach Buchstabe sortieren</h2> 

                                                        <!-- Start 9. Überarbeiten :to und @click -->
      <router-link :to="{name: 'mitBuchstabe', params: {buchstabe}}" 
      v-for="buchstabe of Buchstaben" 
      @click="cocktailsStore.buchstabe = buchstabe" :key="buchstabe.buchstabeId">
      {{  buchstabe }}
      </router-link>   
                                                        <!-- Ende 9.--> 

    </div>  
      <div class="px-8 2xl:px-80" id="CocktailAnzeige"> <!-- start 10.2 -->
        <div class="pb-1 text-stone-500">               <!-- Start 11.2 -->
          <p  v-if="cocktailsStore.isLoading">Lade Inhalte...</p>
          <p  v-else>alles geladen</p>
        </div>                                          <!-- Ende 11.2 -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">      
          <CocktailKarte v-for="cocktail in cocktailsStore.cocktails.drinks" 
          :key="cocktail.idDrink" 
          :cocktail="cocktail" 
          ></CocktailKarte>                                                    
        </div>
      </div>                                            <!-- Ende 10.2 -->
    
  </div>                                                <!-- Ende 10.1. -->
</template>
