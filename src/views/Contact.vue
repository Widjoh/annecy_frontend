<template>
  <div class="isolate bg-white px-6 pb-20 sm:pb-28  pt-10 lg:px-8">
    <div class="mx-auto max-w-2xl sm:text-center">
      <h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl font-important mb-10">Restons en contact</h2>
    </div>
     <div class="!w-[300px] items-center w-full hidden md:flex relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 mx-auto">
      <img class="absolute inset-0 h-full w-full object-cover" :src="require(`@/assets/images/${bottomImage}.jpg`)" alt="" />
    </div>
                  <div class="flex flex-col sapce-y-6 justify-center">

    <div class="mx-auto mt-20 max-w-lg grid md:grid-cols-2 gap-12">
      <div class="flex gap-x-6">
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#56C2DF]">
          <PhoneIcon class="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <div>
          <h3 class="text-base font-semibold leading-7 text-gray-900 font-important">Appelez moi</h3>
          <p class="leading-7 text-gray-600 font-classic">{{phoneContact.numero}}</p>

        </div>
      </div>

      <div class="flex gap-x-6">
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#56C2DF]">
          <ChatBubbleLeftRightIcon class="h-6 w-6 text-white" aria-hidden="true" />
        </div>
           <div>
              <h3 class="text-base font-semibold leading-7 text-gray-900 font-important">Ecrivez moi</h3>
              <a :href="'mailto:' + mailContact.mail" class="mt-2 leading-7 text-gray-600 font-classic"> {{mailContact.mail}}</a>
           </div>
   
        </div>
 
     <div class="hidden w-[600px] md:flex relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 mx-auto">
      <img class="absolute inset-0 h-full w-full object-cover" :src="require(`@/assets/images/annecy.jpg`)" alt="" />
    </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {  ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/vue/24/outline'
import {UseContact} from "@/composables/UseContact.ts";

const {phoneContact, mailContact, bottomImage} = UseContact()
</script>