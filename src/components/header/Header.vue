<template>
  <div class="bg-white pb-24 sm:pb-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl font-important">{{title}}</p>
        <p v-if="subtitle" class="mt-6 text-lg leading-8 text-gray-600 font-classic">{{subtitle}}</p>
      </div>
<!--      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">-->
<!--        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">-->
<!--          <div v-for="feature in features" :key="feature.name" class="relative pl-16">-->
<!--            <dt class="text-base font-semibold leading-7 text-gray-900">-->
<!--              <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">-->
<!--                <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />-->
<!--              </div>-->
<!--              {{ feature.name }}-->
<!--            </dt>-->
<!--            <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>-->
<!--          </div>-->
<!--        </dl>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script setup>
// import {UseHeader} from "@/composables/UseHeader.ts";

// const { features } = UseHeader();

// eslint-disable-next-line no-undef
 defineProps({  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  backGroundColors: {
    type: String,
    required: false,
  },})




</script>

<style scoped>
/* Add your component-specific styles here */
</style>
