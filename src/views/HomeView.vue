<template>
  <div class="relative">
    <img class="h-96 w-full" :src="require(`@/assets/svg/LogoAALPI_Couleur.svg`)" alt="AALPI LOGO" />

    <Header :title="headerData.title" :subtitle="headerData.subtitle"
            :back-ground-colors="headerData.background_colors"/>
    <MainSection class="pb-56 md:!pb-40"/>

  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import {UseHeader} from "@/composables/UseHeader.ts";
import MainSection from "@/components/main/MainSection.vue";

export default {
  name: 'HomeView',
  components: {
    MainSection,
    Header,

  },
  setup() {

    const {headerData} = UseHeader();

    return {
      headerData
    };
  },

}
</script>
