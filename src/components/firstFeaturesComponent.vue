<template>
  <div class="features" id="features">
    <div class="container">
      <div class="main-title text-center">
        <p class="sub-title">Main feature name</p>
        <h2>Lorem Ipsumis simply dummy text of the printing.</h2>
        <p class="desc">
          Lorem Ipsumis simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since
        </p>

        <a href="#" class="btns sol-btn"
          ><span>Learn more about Feature</span
          ><i class="fa-solid fa-arrow-right"></i
        ></a>
      </div>
      <div class="row">
        <div class="col-md-12 main-feature text-center p-5">
          <img
            :src="features[0]?.image"
            :alt="features[0]?.name"
            class="w-100"
          />
        </div>
        <div class="col-md-4 mt-5" v-for="adv in advantages" :key="adv.id">
          <div class="d-flex align-items-center gap-3">
            <img :src="adv.img" alt="advantage" />
            <p class="mb-0 text-color">
              {{ adv.adv }}
            </p>
          </div>
        </div>
        <div
          class="col-md-6 mt-5"
          v-for="feature in features[0]?.sub_features"
          :key="feature.id"
        >
          <div class="card w-100 pt-4 h-100 pe-0 pb-0">
            <header class="ps-4 text-color">
              <h4>{{ feature.name }}</h4>
              <p>{{ feature.description }}</p>
            </header>
            <div class="card-body pb-0 pe-0">
              <img :src="feature.image" class="w-100" :alt="feature.name" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.features {
  padding-top: 2rem;
  margin-bottom: 5rem;
  .main-feature {
    background-image: url("/public/img/Vector (1).png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0 0 24px 24px;
  }
  .card {
    border: 1px solid #d3d5d8;
    background: linear-gradient(
      90deg,
      rgba(245, 233, 255, 0.3) -0.08%,
      rgba(236, 213, 255, 0.3) 49.95%,
      rgba(239, 221, 255, 0.3) 99.98%
    );
    border-radius: 20px;
    h4 {
      font-size: 24px;
      line-height: 27px;
      margin-bottom: 0.7rem;
      font-weight: bold;
    }
    .card-body {
      img {
        border-radius: 0 0 20px 0;
      }
    }
  }
}
</style>
<script setup>
import { ref } from "vue";
import { getFeaturesImg } from "../composables/features/featuresApi";

const { features } = getFeaturesImg();

const advantages = ref([
  {
    id: 1,
    adv: "Lorem Ipsumis simply dummy text of the printing.",
    img: "/img/image.png",
  },
  {
    id: 2,
    adv: "Lorem Ipsumis simply dummy text of the printing.",
    img: "/img/image.png",
  },
  {
    id: 3,
    adv: "Lorem Ipsumis simply dummy text of the printing.",
    img: "/img/image.png",
  },
]);
</script>
