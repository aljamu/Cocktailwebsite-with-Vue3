<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const cocktail = ref({
      drinks: []  // Leeres Array als Standardwert
    });
const isLoading = ref(true)
const route = useRoute();
onMounted(async()=>{
    const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${route.params.id}`)
    const response = await result.json();
    cocktail.value = response.drinks[0];
    isLoading.value = false
})
</script>
<template>
 
    <div class="max-w-[800px] mx-auto mt-3 p-5 pt-2 bg-white border rounded-3xl shadow-md"> 
        <p class="text-red-600" v-if="isLoading">Lade Daten...</p>                          <!-- Wenn keine Daten da, dann Lade Daten...-->
        <div id="Einzelansicht" v-else >                                                    <!-- API Daten geladen -> Zeugt unsere Einzelansicht an-->
            <div class="m-auto flex flex-col justify-center">      
                <h1 class="text-5xl font-bold mb-5">{{ cocktail.strDrink }}</h1>            <!-- Titel und Bild -->
                <img class="max-w-[100%]" :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink">
            </div>

            <div class="grid grid-cols-3 sm:grid-cols-3 text-lg p-2 text-center">           <!-- Kategorie, Alkohol, Glass -->
                <div>
                    <strong>Kategorie:</strong> {{ cocktail.strCategory }}
                </div>
                <div>
                    <strong>Alkohol:</strong> {{ cocktail.strAlcoholic }}
                </div>
                <div>
                    <strong>Glas:</strong> {{ cocktail.strGlass }}
                </div>
            </div>                                                                          
            <div class="grid grid-cols-2 sm:grid-cols-2">                                   <!-- Zutaten und Mengenangaben -->
                <div id="Zutaten">                                                          <!-- Zutaten -->
                    <h2 class="text-2xl font-semibold mb-2">Zutaten:</h2>
                    <ul>
                        <div v-for="(element, index) of new Array(20)" :key="index.id">                    <!-- Wir erzeugen neues Array von 1-20, denn es können bis zu 20 Zutaten-->
                            <li v-if="cocktail[`strIngredient${index + 1}`]">               <!-- wenn strIngedient im Objekt kein "null" -> also Wert hat. Index + 1 weil kein strIngredient0 existiert -->
                                {{ index + 1 }}. {{ cocktail[`strIngredient${index + 1}`] }}
                            </li>
                        </div>
                    </ul>
                </div>
                <div id="Mengenangaben">                                                    <!-- Mengenangaben -->
                    <h2 class="text-2xl font-semibold mb-2">Mengen:</h2>
                    <span v-for="(element, index) of new Array(20)" :key="index.id">
                        <li class="list-none" v-if="cocktail[`strMeasure${index + 1}`]">
                            {{ cocktail[`strMeasure${index + 1}`] }}
                        </li>
                    </span>
                </div>
            </div>
      </div>
        <br>
        <p class="text-xs">Cocktail ID: {{ $route.params.id}}</p>    
    </div>
<pre>{{ cocktail }}</pre>  <!-- Das hier einblenden, um den Code hier unten im Folgenden zu verstehen-->
</template>