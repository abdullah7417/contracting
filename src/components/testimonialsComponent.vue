<template>
  <div class="testimonials position-relative" id="testimonials">
    <div class="container">
      <div class="blur-background position-absolute"></div>
      <div class="main-title text-center">
        <p class="sub-title">Testimonials</p>
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
      <div class="row g-4">
        <div class="col-sm-6 col-md-4 gap-4">
          <div class="card border-0 shadow-sm rounded-3 mb-4">
            <div class="card-body">
              <div class="mb-2 d-flex align-items-center gap-1">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <p class="card-text mt-3 fst-italic">
                "It’s intuitive, functional, easy-to-setup and presents content
                in an interactive and interesting way."
              </p>
            </div>
            <div
              class="card-footer bg-transparent border-0 d-flex align-items-center"
            >
              <img
                src="/public/img/user_1.png.png"
                class="rounded-circle me-2"
                style="width: 48px; height: 48px"
                alt="User"
              />
              <p>Anna White</p>
            </div>
          </div>
          <div class="card border-0 shadow-sm rounded-3">
            <div class="card-body">
              <div class="mb-2 d-flex align-items-center gap-1">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <p class="card-text mt-3 fst-italic">
                "It’s intuitive, functional, easy-to-setup and presents content
                in an interactive and interesting way."
              </p>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-md-4">
          <div class="card border-0 shadow-sm rounded-3 mb-4">
            <div class="card-body">
              <div class="mb-2 d-flex align-items-center gap-1">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <p class="card-text mt-3 fst-italic">
                "It’s intuitive, functional, easy-to-setup and presents content
                in an interactive and interesting way."
              </p>
            </div>
          </div>
          <div class="card border-0 shadow-sm rounded-3">
            <div class="card-body">
              <div class="mb-2 d-flex align-items-center gap-1">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <p class="card-text mt-3 fst-italic">
                "It’s intuitive, functional, easy-to-setup and presents content
                in an interactive and interesting way."
              </p>
            </div>
            <div
              class="card-footer bg-transparent border-0 d-flex align-items-center"
            >
              <img
                src="/public/img/user_2.png.png"
                class="rounded-circle me-2"
                style="width: 48px; height: 48px"
                alt="User"
              />
              <p>Anna White</p>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-md-4 d-flex flex-column last-test">
          <div class="card border-0 shadow-sm rounded-3 mb-4 last">
            <div class="card-body">
              <div class="mb-2 d-flex align-items-center gap-1">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <p class="card-text mt-3 fst-italic">
                "It’s intuitive, functional, easy-to-setup and presents content
                in an interactive and interesting way."
              </p>
            </div>
            <div
              class="card-footer bg-transparent border-0 d-flex align-items-center"
            >
              <img
                src="/public/img/user_1.png.png"
                class="rounded-circle me-2"
                style="width: 48px; height: 48px"
                alt="User"
              />
              <p>Anna White</p>
            </div>
          </div>
          <div class="card border-0 shadow-sm rounded-3">
            <div class="card-body">
              <div class="mb-2 d-flex align-items-center gap-1">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <p class="card-text mt-3 fst-italic">
                "It’s intuitive, functional, easy-to-setup and presents content
                in an interactive and interesting way."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.testimonials {
  margin-bottom: 5rem;
}
.card {
  box-shadow: 0px 0px 0px 1px #18181b0a, 0px 8px 32px 0px #18181b0f;

  .card-body {
    i,
    p {
      color: var(--text-color);
    }
    p {
      line-height: 32px;
    }
  }
  .card-footer {
    p {
      font-weight: 700;
      margin-bottom: 0;
      margin-left: 0.7rem;
      color: var(--text-color);
    }
  }
}

.blur-background {
  top: 40% !important;
  height: 75% !important;
}
@media (min-width: 576px) and (max-width: 767px) {
  .last-test {
    width: 100% !important;
    flex-direction: row !important;
    gap: 20px;
  }
  .blur-background {
    top: 25%;
  }
  .last-test .last {
    margin-bottom: 0 !important;
  }
}
</style>
