<template>
  <div class="partener">
    <Swiper
      :modules="[Autoplay, Navigation, Pagination]"
      :slides-per-view="5"
      :loop="true"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
      :navigation="false"
      class="my-swiper"
    >
      <SwiperSlide>
        <img src="./img/googleplus logo.png" class="w-50" alt="googleplus" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/microsoft logo.png" class="w-50" alt="microsoft" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./img/metallb-horizontal-white logo.png"
          class="w-50"
          alt="metallb-horizontal-white"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./img/linkedin-plain-wordmark logo.png"
          class="w-50"
          alt="linkedin"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/Frame 2.png" class="w-50" alt="instegram" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/Frame 3.png" class="w-25" alt="apple" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slides = ref([
      {
        image: "./img/linkedin-plain-wordmark logo.png",
      },
      {
        image: "./img/metallb-horizontal-white logo.png",
      },
      {
        image: "./img/microsoft logo.png",
      },
      {
        image: "./img/googleplus logo.png",
      },
      {
        image: "./img/Frame 2.png",
      },
    ]);

    return { slides, Autoplay, Navigation, Pagination };
  },
};
</script>

<style>
.partener {
  margin-top: 1rem;
  margin-bottom: 4rem;
}
.my-swiper {
  width: 100%;
  /* max-width: 800px; */
  margin: auto;
  padding-bottom: 2rem;
}
@media (max-width: 767px) {
  .partener {
    margin-bottom: 2rem;
  }
}
</style>
