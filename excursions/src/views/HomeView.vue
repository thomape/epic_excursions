<template>
  <div class="home">
    <HeroComp />
  </div>
</template>

<script>
// @ is an alias to /src
// import AboutComp from "@/components/AboutComp.vue";
// import FooterComp from "@/components/FooterComp.vue";
import HeroComp from "@/components/HeroComp.vue";
// import JournalComp from "@/components/JournalComp.vue";
// import NavComp from "@/components/NavComp.vue";

export default {
  name: "HomeView",
  components: {
    HeroComp,
  },
};
</script>
