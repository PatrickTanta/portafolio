<template>
  <div class="mt-5 w-full grid grid-cols-12">
    <transition v-if="!loading" :css="false" appear @before-enter="beforeEnter" @enter="enter">
      <div class="col-start-1 col-end-13 sm:col-start-2 sm:col-end-12 projects">
        <div
          v-for="item in items"
          :key="item"
          class="w-11/12 sm:w-96 h-96 p-3 bg-form rounded-3xl mb-5"
        >
          <img class="h-48 w-full mx-auto" src="/projects/usamedic.svg">
          <div class="px-3">
            <p class="text-4xl font-bold">
              Card Folio
            </p>
            <div class="text-description-truncate">
              <p class="text-base font-medium">
                Paths is the story of a peaceful forest dwelling Kodama that is thrust into the role of hero, a role through which he will save his family and home from an impending threat.peaceful forest dwpeaceful forest dwpeaceful forest dwpeaceful forest dw.
              </p>
            </div>
            <div class="flex items-center justify-between mt-5">
              <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="25" height="25" rx="3" fill="#A7A692" />
                <rect
                  x="8.18615"
                  y="2.97878"
                  width="25.3551"
                  height="25.3551"
                  rx="4"
                  transform="rotate(9.55184 8.18615 2.97878)"
                  fill="#A7A692"
                  stroke="#E7E6D5"
                  stroke-width="2"
                />
              </svg>
              <button
                class="ml-5 text-white flex-grow bg-section  rounded-md font-bold h-8 transition ease-in-out delay-150 hover:scale-110 duration-300"
              >
                Go to project
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div v-else class="w-full col-start-1 col-end-13 sm:col-start-2 sm:col-end-12 h-24">
      <div class="loader mx-auto" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: [Array, Number],
      default: 2
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    portfolio: [
      { name: 'Python', items: 3 },
      { name: 'Django', items: 5 },
      { name: 'Javascript', items: 2 },
      { name: 'Vue', items: 6 },
      { name: 'React', items: 2 }
    ]
  }),
  head: {
    script: [
      {
        // to add tooltip
        src: 'https://unpkg.com/@popperjs/core@2.9.1/dist/umd/popper.min.js'
      }
    ]
  },
  methods: {
    beforeEnter (el) {
      el.style.opacity = 0
      el.style.transform = 'scale(0, 0)'
    },
    enter (el, done) {
      this.$gsap.to(el, {
        duration: 0.5,
        opacity: 1,
        scale: 1,
        oncomplete: done
      })
    }
  }
}
</script>

<style scoped>
.text-description-truncate {
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 10px;
  place-items: center;
}
.loader {
  margin: auto;
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #1d2021;
  border-right: 5px solid #1d2021;
  border-bottom: 5px solid #7c6f64;
  border-left: 5px solid #7c6f64;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
