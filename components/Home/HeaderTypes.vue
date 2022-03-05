<template>
  <div class="flex gap-3 justify-between mt-8">
    <div
      class="rounded-xl h-16 w-1/3 sm:w-28 bg-green-400 flex flex-col justify-between items-center p-2"
    >
      <div class="h-12 w-12 flex justify-center" @click="$emit('setType', 1)">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 20 20" fill="#FFFF">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      </div>
      <p class="text-primary text-sm font-bold ">
        GAMES
      </p>
    </div>
    <div
      class="rounded-xl h-16 w-1/3 sm:w-28 bg-apps flex flex-col justify-between items-center p-2"
    >
      <div class="h-12 w-12 flex justify-center" @click="$emit('setType', 2)">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="#FFFF">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd" />
        </svg>
      </div>
      <p class="text-primary text-sm font-bold">
        APPS
      </p>
    </div>
    <div
      class="rounded-xl h-16 w-1/3 sm:w-28 bg-videos flex flex-col justify-between items-center p-2"
    >
      <div class="h-12 w-12 flex justify-center" @click="$emit('setType', 3)">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="#FFFF">
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
      </div>

      <p class="text-primary text-sm font-bold">
        VIDEOS
      </p>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
