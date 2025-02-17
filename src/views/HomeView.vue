<script setup>
import FeaturesComponent from "@/components/firstFeaturesComponent.vue";
import HeroSectionComponent from "@/components/heroSectionComponent.vue";
import MainFeatureComponent from "@/components/secondFeatureComponent.vue";
import PricingComponent from "@/components/pricingComponent.vue";
import SolutionsComponent from "@/components/solutionsComponent.vue";
import TestimonialsComponent from "@/components/testimonialsComponent.vue";
</script>

<template>
  <div class="home">
    <HeroSectionComponent />
    <SolutionsComponent />

    <FeaturesComponent />
    <MainFeatureComponent />
    <TestimonialsComponent />
    <PricingComponent />
  </div>
</template>

<style scoped lang="scss">
.home {
  color: black;
  margin-top: 4.7rem;
}
</style>
