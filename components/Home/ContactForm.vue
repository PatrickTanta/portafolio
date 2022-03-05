<template>
  <div class="bg-section w-full p-8 mt-5">
    <p class="text-secondary font-bold text-4xl text-center">
      Contact
    </p>
    <p class="text-primary font-semibold my-5 text-center">
      Let’s work together on the next big thing
    </p>
    <form class="rounded-xl w-full sm:w-96 bg-form m-auto flex flex-col justify-center px-5 py-7">
      <label class="text-xl font-bold my-3 text-start">Full name</label>
      <input
        type="text"
        class="rounded-xl h-14 w-full p-5"
        placeholder="Your full name here…"
      >
      <label class="text-xl font-bold my-3 text-start">Email</label>
      <input
        type="text"
        class="rounded-xl h-14 w-full p-5"
        placeholder="Your email here…"
      >
      <label class="text-xl font-bold my-3 text-start">Message</label>
      <input
        type="text"
        class="rounded-xl h-14 w-full p-5"
        placeholder="Your message here…"
      >
      <button type="submit" class="text-form w-full border-2 rounded-md my-5 bg-section hover:bg-yellow-50 hover:text-black font-bold h-10">
        Meet the team
      </button>
    </form>
  </div>
</template>
<script>
export default {
}
</script>
