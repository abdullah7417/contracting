<template>
  <div class="solutions position-relative" id="solutions">
    <div class="container">
      <div class="blur-background position-absolute"></div>
      <div class="main-title text-center">
        <p class="sub-title">Contrackting soultions</p>
        <h2>Provide powerful solutions at all the time</h2>
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

      <div class="row g-4">
        <div class="col-sm-6 col-md-4 sol" v-for="card in cards" :key="card.id">
          <div class="card">
            <div class="card-body">
              <img :src="card.image" :alt="card.title" />

              <h5 class="card-title">{{ card.title }}</h5>

              <p class="card-text">
                {{ card.pargraph }}
              </p>
              <a href="#" class="card-link"
                ><img :src="card.arrow" alt="arrow"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.solutions {
  padding-top: 2rem;
  margin-bottom: 5rem;
}

.card {
  border: none;
  border-radius: 12px !important;
  box-shadow: 0px 0px 0px 1px #18181b0a, 0px 8px 32px 0px #18181b0f;
  transition: all 0.7s;
  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 44px;
    height: 44px;
  }
  h5 {
    margin: 1.5rem 0;
    font-size: 24px;
    line-height: 27px;
  }
  p {
    font-size: 14px;
    color: var(--text-color);
  }
  .card-link {
    width: 25%;
    display: inline-block;
    background: #fcfcfd;
    text-align: center;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 32px;
    transition: all 0.7s;
    &:hover {
      border-color: var(--main-color);
    }
    img {
      width: 24px;
      height: 24px;
    }
  }
}
@media (max-width: 575px) {
  .card {
    padding: 0 20px;
  }
}
@media (max-width: 767px) {
  .blur-background {
    top: 16% !important;
  }
}
</style>

<script setup>
import { ref } from "vue";
// import { getSolutions } from "@/composables/solutions/solutionsApi";
// const { getSol } = getSolutions();

const cards = ref([
  {
    id: 1,
    title: "solution Title",
    pargraph: ` Some quick example text to build on the card title and make up
                  the bulk of the card's content.`,
    image: "/public/img/sol-1.svg fill.png",
    arrow: "/public/img/arrow.svg.png",
  },
  {
    id: 2,
    title: "solution Title",
    pargraph: ` Some quick example text to build on the card title and make up
                  the bulk of the card's content.`,
    image: "/public/img/sol-2.svg fill.png",
    arrow: "/public/img/arrow.svg.png",
  },
  {
    id: 3,
    title: "solution Title",
    pargraph: ` Some quick example text to build on the card title and make up
                  the bulk of the card's content.`,
    image: "/public/img/sol-3.svg fill.png",
    arrow: "/public/img/arrow.svg.png",
  },
  {
    id: 4,
    title: "solution Title",
    pargraph: ` Some quick example text to build on the card title and make up
                  the bulk of the card's content.`,
    image: "/public/img/sol-4.svg fill.png",
    arrow: "/public/img/arrow.svg.png",
  },
  {
    id: 5,
    title: "solution Title",
    pargraph: ` Some quick example text to build on the card title and make up
                  the bulk of the card's content.`,
    image: "/public/img/sol-5.svg fill.png",
    arrow: "/public/img/arrow.svg.png",
  },
  {
    id: 6,
    title: "solution Title",
    pargraph: ` Some quick example text to build on the card title and make up
                  the bulk of the card's content.`,
    image: "/public/img/sol-6.svg fill.png",
    arrow: "/public/img/arrow.svg.png",
  },
]);
</script>
