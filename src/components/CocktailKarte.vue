<script setup> //Start 6.
defineProps({
      cocktail: Object
})
</script>
<template>
  <router-link :to="`/cocktails/${cocktail.idDrink}`"> <!-- Das hier erst bei 16.3 -->

    <div class="max-w-sm bg-white shadow rounded-lg border border-grey-200 m-auto"><!--max-w-sm bg-pink rounded-lg border border  shadow-md-->
        
        <div class="flex justify-center">
          <img class="rounded-t-lg" :src="cocktail.strDrinkThumb" alt="Test">
        </div>

        <div class="p-5 flex items-center justify-evenly text-center">
          <h5 class="mb-2 text-2xl font-bold">
            {{ cocktail.strDrink }}
          </h5>
          <h6>
              {{ cocktail.strAlcoholic }}
          </h6>
        </div>
      
    </div>                                            <!--Ende 6. nach template-->

  </router-link>                                      <!-- Das hier erst bei 16.3 -->
</template>   