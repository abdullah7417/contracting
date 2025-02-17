<template>
  <div class="features position-relative">
    <div class="container">
      <div class="main-title mb-0 text-center">
        <p class="sub-title">Main feature name</p>
        <h2 class="text-white">
          Lorem Ipsumis simply dummy text of the printing.
        </h2>
        <p class="desc text-white">
          Lorem Ipsumis simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since
        </p>
      </div>
      <div class="row">
        <div class="col-md-12 main-feature text-center p-5">
          <img
            :src="features[0]?.image"
            :alt="features[0]?.name"
            class="w-100 h-100"
            style="object-fit: contain"
          />
        </div>
        <div
          class="col-sm-6 col-md-4 mb-2"
          v-for="adv in advantages"
          :key="adv.id"
        >
          <div class="d-flex align-items-center gap-3">
            <img :src="adv.img" alt="advantage" />
            <p class="mb-0 text-white">
              {{ adv.adv }}
            </p>
          </div>
        </div>

        <div
          class="col-md-6 mt-5"
          v-for="feature in features[1]?.sub_features"
          :key="feature.id"
        >
          <div class="card w-100 pt-4 h-100 pe-0 pb-0">
            <header class="ps-4 text-white">
              <h4>{{ feature.name }}</h4>
              <p>{{ feature.description }}</p>
            </header>
            <div class="card-body pb-0 pe-0">
              <img
                :src="feature.image"
                class="w-100 h-100"
                :alt="feature.name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <SeperatorComponent />
  </div>
</template>

<style lang="scss" scoped>
.features {
  padding-top: 3rem;
  background-color: var(--main-color);

  .sub-title {
    background: linear-gradient(90.66deg, #f6ebff 0%, #e0bbff 100%);
  }
  .main-feature {
    margin-bottom: 3rem;
    background: linear-gradient(
      90deg,
      rgba(245, 233, 255, 0.1) -0.08%,
      rgba(236, 213, 255, 0.1) 49.95%,
      rgba(239, 221, 255, 0.1) 99.98%
    );
    border-radius: 0 0 24px 24px;
  }
  .card {
    border: none;
    background: linear-gradient(
      90deg,
      rgba(245, 233, 255, 0.1) -0.08%,
      rgba(236, 213, 255, 0.1) 49.95%,
      rgba(239, 221, 255, 0.1) 99.98%
    );

    border-radius: 20px;
    h4 {
      font-size: 24px;
      line-height: 27px;
      margin-bottom: 0.7rem;
      font-weight: bold;
    }
  }
  .card-body {
    img {
      border-radius: 0 0 20px 0;
    }
  }
}
.row {
  padding-bottom: 8rem;
}
</style>
<script setup>
import { ref } from "vue";
import { getFeaturesImg } from "../composables/features/featuresApi";
import SeperatorComponent from "./seperatorComponent.vue";

const { features } = getFeaturesImg();
const advantages = ref([
  {
    id: 1,
    adv: "Lorem Ipsumis simply dummy text of the printing.",
    img: "img/image-w.png",
  },
  {
    id: 2,
    adv: "Lorem Ipsumis simply dummy text of the printing.",
    img: "img/image-w.png",
  },
  {
    id: 3,
    adv: "Lorem Ipsumis simply dummy text of the printing.",
    img: "img/image-w.png",
  },
]);
</script>
