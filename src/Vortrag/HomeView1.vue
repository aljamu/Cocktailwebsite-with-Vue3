<script setup>
import { onMounted } from 'vue';
import { useCocktailStore } from '@/stores/CocktailStore';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import CocktailKarte from '@/components/CocktailKarte.vue';
const Buchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // start 2.; weiter in template mit <router-link to="/" v-for="letter of letters" :key="letter">
  const breakpoints = useBreakpoints(breakpointsTailwind) // 3.
const largerThanSm = breakpoints.greater('sm')            // 3. 

const cocktailsStore = useCocktailStore();                // start 5.
onMounted(() => {
  cocktailsStore.getCocktails();
})                                                        // Ende 5.
</script>

<template>
  <div class="text-center  mt-5">               <!-- Start 1. -->
    <h1 class="font-bold text-3xl">Willkommen auf CocktailsVue</h1>
    <h2 class=" text-xl">Eine Cocktailwebseite für das HTWK-Modul Webtechnologie</h2>
  </div>                                        <!-- Ende 1. -->
  <div class="flex justify-center gap-2 mt-5">  <!-- Start 2.1 -->
    <h2 v-if="largerThanSm" class="text-xs text-zinc-600 my-auto">Nach Buchstabe sortieren</h2> <!-- 3.1 v-if="largerThanSm" -->
    <router-link to="/" v-for="buchstabe of Buchstaben" :key="buchstabe">
    {{  buchstabe }}
    </router-link>                              <!-- Ende 2.1 -->
  </div>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">      <!-- Start 7.. -->
    <CocktailKarte v-for="cocktail in cocktailsStore.cocktails.drinks" 
    :key="cocktail.idDrink" 
    :cocktail="cocktail" 
    ></CocktailKarte>                                                     <!-- Ende 7. -->
  </div>
  <!-- <h1> {{ cocktailsStore }}</h1> -->     <!-- für 5.1 -->
</template>
@/stores/CocktailStore