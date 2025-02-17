<template>
  <div class="nav">
    <nav
      class="navbar navbar-expand-lg bg-white z-3 position-fixed top-0 w-100"
      ref="myNav"
    >
      <div class="container">
        <a href="#" class="navbar-brand"
          ><img src="./Group.png" alt="logo"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleNavbar"
        >
          <span class="navbar-toggler-icon"
            ><i class="fa-solid fa-bars"></i
          ></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-between"
          :class="{ show: isNavOpen }"
          id="navbarNavAltMarkup"
          ref="navbarNav"
        >
          <div class="navbar-nav ms-auto nav-links gap-2" ref="navLinks">
            <a href="#home" class="nav-link active" @click="closeNavbar"
              >Home</a
            >
            <a href="#solutions" class="nav-link" @click="closeNavbar"
              >Solutions</a
            ><a href="#features" class="nav-link" @click="closeNavbar"
              >Features</a
            ><a href="#testimonials" class="nav-link" @click="closeNavbar"
              >Testimonials
            </a>
            <a href="#pricing" class="nav-link" @click="closeNavbar"
              >Pricing
            </a>
          </div>
          <div class="navbar-nav ms-auto gap-2">
            <a href="#" class="nav-link btns trail"
              ><span>Start Free Trail</span
              ><i class="fa-solid fa-arrow-right"></i
            ></a>
            <a href="#" class="nav-link btns login"
              ><span>Log in</span><i class="fa-solid fa-arrow-right"></i
            ></a>
            <a href="#" class="nav-link btns lang">العربيه</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
.navbar {
  transition: all 0.7s;
  box-shadow: var(--shadow);
  .nav-links {
    a {
      color: black;
      transition: all 0.7s;
      &:hover {
        color: var(--main-color);
      }
      &.active {
        color: var(--main-color) !important;
      }
    }
  }
  .trail {
    background-color: var(--main-color);
    color: white;
    i {
      font-size: 16px;
    }
    &:hover {
      i {
        animation: moving-arrow 0.6s linear infinite;
      }
    }
  }
  .login {
    background-color: white;
    color: var(--main-color);
    border: 2px solid var(--main-color);
    transition: all 0.7s;
    &:hover {
      background-color: var(--main-color);
      color: white;
    }
  }
  .lang {
    color: var(--main-color);
    background: #6e3d981f;
  }
}
.navbar-toggler-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-image: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  text-align: center;
  color: var(--main-color);
  font-size: 32px;
}
.navbar-toggler {
  border: none;
}
.navbar-toggler:focus {
  box-shadow: none;
}

@media (max-width: 771px) {
  .navbar {
    align-items: flex-start;
  }
}
@keyframes moving-arrow {
  100% {
    transform: translateX(10px);
  }
}
</style>

<script setup>
import { ref } from "vue";
const isNavOpen = ref(false);
const myNav = ref(null);
// const navLinks = ref(document.querySelectorAll(".nav-link"));

const toggleNavbar = () => {
  isNavOpen.value = !isNavOpen.value;
  myNav.value.classList.toggle("h-100");
};

const closeNavbar = () => {
  isNavOpen.value = false;
  myNav.value.classList.remove("h-100");
};

// navLinks.value.forEach((link) => {
//   link.addEventListener("click", function () {
//     navLinks.value.forEach((nav) => {
//       nav.classList.remove("active");
//     });
//     this.classList.add("active");
//   });
// });
</script>
