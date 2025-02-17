<script setup>
import PartenarsSwiperComponent from "./partenarsSwiperComponent.vue";

import { onMounted } from "vue";
import ScrollReveal from "scrollreveal";
import SeperatorComponent from "./seperatorComponent.vue";

onMounted(() => {
  ScrollReveal().reveal(".reveal", {
    origin: "bottom",
    distance: "50px",
    duration: 1500,
    delay: 300,
    easing: "ease-in-out",
    reset: true,
  });
});
</script>

<template>
  <div class="hero position-relative" id="home">
    <div class="container">
      <div class="d-flex flex-column position-relative">
        <div class="hero-text">
          <h1 class="reveal">
            Sum
            <strong style="color: #ed3261">is Semply dummy</strong> text of the
            printing and typesetting
          </h1>
          <p>
            Resolve issues faster and boost customer satisfaction — all while
            reducing team workload — with the only customer service solution
            you'll ever need.
          </p>
          <a href="#" class="btns hero-btn"
            ><span>Start Free Trail</span><i class="fa-solid fa-arrow-right"></i
          ></a>

          <img src="./img/img2.png" class="w-75 mt-3" alt="home-img" />

          <p class="mt-2">TRUSTED BY +25,000 BUSINESSES</p>
        </div>

        <PartenarsSwiperComponent />
      </div>
      <SeperatorComponent />
    </div>
  </div>
</template>
<style scoped lang="scss">
.hero {
  background-image: url("/public/img/backgroundimg.png");
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  .hero-text {
    margin: 0 1rem;
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 22px;
    h1 {
      text-align: center;
      color: white;
      font-size: 65px;
      font-weight: bold;
    }
    p {
      text-align: center;
      color: white;
      font-size: 24px;
      line-height: 36px;
    }
    .hero-btn {
      background: linear-gradient(0deg, #ee315f, #ee315f),
        radial-gradient(
          50% 50% at 50% 50%,
          rgba(255, 255, 255, 0.12) 0%,
          rgba(0, 0, 0, 0) 100%
        );
      box-shadow: 0px 16px 32px -8px #ee315f7a, 0px 4px 8px 0px #ee315f1f,
        0px 2px 6px 0px #ee315f3d, 0px 1px 3px 0px #ee315f3d,
        1px 1px 2px 0px #ffffff3d inset;

      color: white;
      width: 235px;
      height: 56px;
      i {
        font-size: 16px;
      }
      &:hover {
        i {
          animation: moving-arrow 0.6s linear infinite;
        }
      }
    }
  }

  @keyframes moving-arrow {
    100% {
      transform: translateX(10px);
    }
  }
}
@media (max-width: 776px) {
  .hero-text {
    h1 {
      font-size: 33px !important;
    }
    p {
      font-size: 16px !important;
      line-height: 28px !important;
    }
    .hero-btn {
      width: 200px !important;
      height: 48px !important;
    }
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .hero-text {
    h1 {
      font-size: 50px !important;
    }
    p {
      font-size: 18px !important;
      line-height: 32px !important;
    }
    .hero-btn {
      width: 220px !important;
      height: 48px !important;
    }
  }
}
</style>
