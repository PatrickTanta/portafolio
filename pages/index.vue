<template>
  <div
    class="relative flex flex-col items-center justify-center min-h-screen sm:items-center p-0 bg-secondary"
  >
    <Home />
    <AboutMe />
    <ContactForm />
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import Home from '~/components/Home/HomeIndex.vue'
import AboutMe from '~/components/Home/AboutMe.vue'
import ContactForm from '~/components/Home/ContactForm.vue'

export default {
  name: 'IndexPage',
  components: { Home, AboutMe, ContactForm },
  setup () {
    const items = ref(['GAMES', 'APPS', 'VIDEOS'])
    return {
      items
    }
  }
}
</script>
<style scopde>

</style>
