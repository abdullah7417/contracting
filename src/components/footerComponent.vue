<template>
  <div class="footer">
    <div class="container">
      <div
        class="foot d-flex flex-column justify-content-center align-items-center gap-3 pt-5"
      >
        <div class="logo">
          <img src="/img/Group.png" alt="logo" />
        </div>
        <div class="text text-center">
          <h2>Stay tuned for updates</h2>
          <p class="text-white">
            Lorem Ipsumis simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div class="follow d-flex align-items-center justify-content-around">
          <img src="/img/follow.svg.png" alt="follow" />
          <p class="mb-0">Follow Us On Social media</p>
        </div>
        <div
          class="social d-flex align-items-center justify-content-around gap-2 mt-3"
        >
          <div class="cont d-flex align-items-center justify-content-center cr">
            <a href="https://x.com/"><i class="fa-brands fa-twitter"></i></a>
          </div>

          <div class="cont d-flex align-items-center justify-content-center cr">
            <a href="https://www.instagram.com/"
              ><i class="fa-brands fa-instagram"></i
            ></a>
          </div>
          <div class="cont d-flex align-items-center justify-content-center cr">
            <a href="#"><i class="fa-solid fa-basketball"></i></a>
          </div>
          <div class="cont d-flex align-items-center justify-content-center cr">
            <a href="tttps://www.gmail.com/"
              ><i class="fa-regular fa-envelope"></i
            ></a>
          </div>
        </div>

        <div class="copy-right">
          <p class="mx-auto">
            ©2024 Contrackting. All rights reserved codebasetech.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background-color: var(--main-color);
  .logo {
    background: white;
    border-radius: 14px;
    padding: auto;
    width: 60px;
    height: 60px;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .text {
    h2 {
      color: white;
      margin-bottom: 1rem;
      font-size: 40px;
      font-weight: bold;
      line-height: 42px;
    }
    p {
      font-size: 22px;
      line-height: 35px;
    }
  }
  .follow {
    background: radial-gradient(
        70.71% 70.71% at 50% 50%,
        rgba(255, 255, 255, 0.12) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      #6e3d98;
    box-shadow: 0 1px 3px #6e3d983d, 0 2px 6px #6e3d983d, 0 4px 8px #6e3d981f,
      0 16px 32px -8px #6e3d987a;

    padding: 10px 15px;
    border-radius: 32px;
    p {
      margin-left: 15px;
      color: white;
    }
  }
  .cont {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: all 0.7s;
    background: radial-gradient(
      70.71% 70.71% at 50% 50%,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    box-shadow: 0 1px #ffffff14 inset, 0 0 0 1px #ffffff14 inset;
    &:hover {
      background-color: #e03160;
    }
    i {
      color: white;
    }
  }
  .copy-right {
    color: #ebebeb80;
  }
}
@media (max-width: 540px) {
  .text {
    h2 {
      font-size: 28px;
      line-height: 38px;
    }
    p {
      font-size: 18px;
      line-height: 30px;
    }
  }
  .copy-right {
    text-align: center;
  }
}
</style>
