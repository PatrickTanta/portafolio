<template>
  <div class="w-full">
    <div class="w-full mx-auto sm:w-96 p-3 sm:p-0">
      <p class="text-4xl font-bold text-primary mt-8 text-center">
        Patrick Tanta
      </p>
      <br>
      <p class="text-3xl text-white text-center">
        Portfolio
      </p>
      <HeaderTypes @setType="setType" />
      <br>
      <HeaderStack :active-items="activeItems" @setActive="setActive" />
      <br>
      <button class="text-white mb-5 w-full border-2 rounded-md mt-5 hover:bg-yellow-50 hover:text-black font-bold h-8" @click="activeItem=0">
        All Projects
      </button>
    </div>
    <MainProjects :items="results" :loading="loading" />
  </div>
</template>
<script>
import { ref, computed } from '@nuxtjs/composition-api'
import HeaderTypes from './HeaderTypes.vue'
import HeaderStack from './HeaderStack.vue'
import MainProjects from './MainProjects.vue'

export default {
  components: { HeaderTypes, HeaderStack, MainProjects },
  setup () {
    const activeItems = ref([0, 0, 0, 0, 0])
    const activeItem = ref(0)
    const activeType = ref(0)
    const loading = ref(false)
    const setActive = (id) => {
      loading.value = true
      setTimeout(() => {
        activeItem.value = id
        loading.value = false
      }, 300)
    }
    const setType = (id) => {
      activeType.value = id
    }
    const results = computed(() => {
      activeItems.value = activeItems.value.map((item, index) => {
        return index === activeItem.value - 1 ? 1 : 0
      })
      if (activeItem.value === 0) {
        return 10
      } else if (activeItem.value === 1) {
        return 4
      } else if (activeItem.value === 2) {
        return 3
      } else if (activeItem.value === 3) {
        return 7
      } else if (activeItem.value === 4) {
        return 5
      } else if (activeItem.value === 5) {
        return 2
      }
    })
    return {
      activeItems,
      activeItem,
      activeType,
      setActive,
      setType,
      results,
      loading
    }
  }
}
</script>
