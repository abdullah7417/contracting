<template>
  <div class="pricing" id="pricing">
    <div class="container">
      <div class="main-title text-center">
        <p class="sub-title">Pricing</p>
        <h2>Lorem Ipsumis simply dummy text of the printing.</h2>
        <p class="desc">
          Lorem Ipsumis simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since
        </p>

        <a href="#" class="btns"
          ><span>Learn more about Feature</span
          ><i class="fa-solid fa-arrow-right"></i
        ></a>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-4 position-relative mb-5">
          <div class="card p-4">
            <div class="card-head d-flex justify-content-between">
              <header>
                <p class="pro mb-4">Profissional</p>
                <div class="price d-flex align-items-center gap-2">
                  <p class="cur">$</p>
                  <p class="num">56</p>
                </div>
              </header>
              <div class="header-icon position-absolute">
                <div class="inner">
                  <div class="final">
                    <i class="fa-solid fa-paper-plane"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="package">
              <p>{{ cardOne }}</p>
            </div>
            <div class="card-body ps-0 mb-2">
              <div
                v-for="adv in advs"
                :key="adv"
                class="d-flex align-items-center gap-2 mb-2"
              >
                <img :src="rightIcon" alt="" />
                <p class="m-0">{{ adv }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 position-relative mb-5">
          <div class="position-absolute best-value text-center">Best Value</div>
          <div class="card special-card p-4">
            <div class="card-head d-flex justify-content-between">
              <header>
                <p class="pro mb-4 text-center">Team</p>
                <div class="price d-flex align-items-center gap-2">
                  <p class="cur">$</p>
                  <p class="num">112</p>
                </div>
              </header>
              <div class="header-icon position-absolute">
                <div class="inner">
                  <div class="final">
                    <i class="fa-solid fa-paper-plane"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="package">
              <p>{{ cardTwo }}</p>
            </div>
            <div class="card-body ps-0 mb-2">
              <div
                v-for="adv in advs"
                :key="adv"
                class="d-flex align-items-center gap-2 mb-2"
              >
                <img :src="rightIcon" alt="" />
                <p class="m-0">{{ adv }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 position-relative mb-5">
          <div class="card p-4">
            <div class="card-head d-flex justify-content-between">
              <header>
                <p class="pro mb-4">Enterprise</p>
                <div class="price d-flex align-items-center gap-2">
                  <p class="cur">$</p>
                  <p class="num">224</p>
                </div>
              </header>
              <div class="header-icon position-absolute">
                <div class="inner">
                  <div class="final">
                    <i class="fa-solid fa-paper-plane"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="package">
              <p>{{ cardThree }}</p>
            </div>
            <div class="card-body ps-0 mb-2">
              <div
                v-for="adv in advs"
                :key="adv"
                class="d-flex align-items-center gap-2 mb-2"
              >
                <img :src="rightIcon" alt="" />
                <p class="m-0">{{ adv }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-center">
        <a href="#" class="btns get-start">
          <i class="fa-solid fa-fire"></i> <span>Get Started</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  box-shadow: 0px 0px 1px 0px #2426293d, 0px 1px 2px 0px #24262914,
    0px 16px 48px 0px #24262914;

  border: 3px solid transparent;
  transition: all 0.7s;
  &:hover {
    transform: scale(1.01);
    box-shadow: var(--shadow);
  }
  .card-head {
    .pro {
      background: #6e3d981f;
      color: var(--main-color);
      padding: 5px 12px;
      border-radius: 6px;
    }
    .price {
      .cur {
        color: #a5abb6;
        font-size: 28px;
      }
      .num {
        font-size: 48px;
        line-height: 48px;
        font-weight: 700;
      }
    }
  }
  .header-icon {
    width: 140px;
    height: 140px;
    top: 0;
    right: 0;
    border: 1px solid #ccc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--main-color);
    .inner {
      width: 110px;
      height: 110px;
      border: 0.5px solid #ccc;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
      .final {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 0.5px solid var(--main-color);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fbf7ff;
      }
      i {
        font-size: 20px;
      }
    }
  }
  .package {
    p {
      color: var(--text-color);
      font-size: 18px;
      line-height: 28px;
    }
  }
  .card-body {
    p {
      color: var(--text-color);
      font-size: 18px;
      line-height: 28px;
    }
  }
}
.special-card {
  border: 3px solid var(--main-color);
  border-radius: 18px;
  height: 100% !important;
}
.best-value {
  left: 35%;
  top: -37px;
  background-color: var(--main-color);
  color: white;
  border-radius: 18px 18px 0 0;
  padding: 5px 10px;
  font-size: 18px;
  font-weight: bold;
}

.get-start {
  color: white;
  padding: 16px 40px !important;
  background: linear-gradient(0deg, #6e3d98, #6e3d98),
    radial-gradient(
      50% 50% at 50% 50%,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  box-shadow: 0px 16px 32px -8px #6e3d987a, 0px 4px 8px 0px #6e3d981f,
    0px 2px 6px 0px #6e3d983d, 0px 1px 3px 0px #6e3d983d,
    1px 1px 2px 0px #ffffff3d inset;
  margin-top: 3rem;
  margin-bottom: 6rem;
  transition: all 0.7s;
  &:hover {
    transform: scale(1.1);
  }
}
@media (max-width: 991px) {
  .get-start {
    margin-bottom: 4rem;
    margin-top: 2rem;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .best-value {
    left: 29%;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .best-value {
    left: 28%;
  }
}
@media (min-width: 576px) and (max-width: 991px) {
  .card-head {
    .price {
      .cur {
        font-size: 20px !important;
        margin-bottom: 0 !important;
      }
      .num {
        font-size: 28px !important;
        line-height: 46px !important;
        margin-bottom: 0 !important;
      }
    }
  }
  .package {
    p {
      font-size: 16px !important;
      line-height: 24px !important;
      margin-bottom: 0 !important;
    }
  }
  .header-icon {
    width: 80px !important;
    height: 80px !important;
    .inner {
      width: 60px !important;
      height: 60px !important;
    }
    .final {
      width: 40px !important;
      height: 40px !important;
    }
    i {
      font-size: 14px !important;
    }
  }
  .card-body {
    p {
      font-size: 14px !important;
      line-height: 24px !important;
    }
    img {
      width: 20px;
    }
  }
}
@media (max-width: 575px) {
  .card-head {
    p {
      margin-bottom: 0.5rem;
    }
    .price {
      .cur {
        font-size: 16px !important;
      }
      .num {
        font-size: 24px !important;
        line-height: 40px !important;
      }
    }
  }
  .package {
    font-size: 16px !important;
    line-height: 22px !important;
  }
  .header-icon {
    width: 110px !important;
    height: 110px !important;
    .inner {
      width: 90px !important;
      height: 90px !important;
    }
    .final {
      width: 70px !important;
      height: 70px !important;
    }
    i {
      font-size: 14px !important;
    }
  }
  .card-body {
    p {
      font-size: 15px !important;
      line-height: 26px !important;
    }
    img {
      width: 18px;
    }
  }
}
</style>

<script setup>
import { ref } from "vue";

const rightIcon = ref("./img/image.png");
const cardOne = ref("For freelancers, indie developers or solopreneurs.");
const cardTwo = ref("For fast-growing teams, up to 6library users.");
const cardThree = ref("For large teams, an unlimitednumber of library users.");
const advs = ref([
  "Single user license",
  "Lifetime updates",
  "5,000+ icons",
  "6 unique styles",
  "Live stroke & corners",
  "Powered by variants",
  "IconJar & SVG library",
  "Unlimited projects",
]);
</script>
