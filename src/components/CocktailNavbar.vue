<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch px-8 2xl:px-80" >
      
        
        <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full px-2 2xl:px-0">
          <img class="w-10 h-10" src="@/assets/logo.svg" alt="Logo">
          <strong>CocktailsVUE</strong>
        </router-link>

        
        <div class="flex items-center gap-1"> <!-- Start 14.2-->
          <router-link :to="{ name: 'cocktailSuche' }" class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100">
            Suche
          </router-link>                     <!-- 14.2 -->
          <router-link :to="{ name: 'about' }" class="inline-flex items-center transition-colors  px-2 h-full hover:bg-purple-100">
            About
          </router-link>
        </div>                              <!--Ende 14.2 -->
    </header>
</template>