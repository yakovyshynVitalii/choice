<template>
  <header
    :class="['header', { '-home-page': HomePageHeader, '-active': menuIsOpen }]"
  >
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div
          :class="[
            'col-1',
            'col-sm-1',
            'burger-menu',
            { '-active': menuIsOpen },
          ]"
          @click="openMenu"
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="col-5 col-sm-5 col-lg-2">
          <div class="header__logo-box">
            <router-link to="/">
              <img
                src="@/assets/images/logo-2.svg"
                alt="logo"
                v-if="HomePageHeader || menuIsOpen"
              />
              <img src="@/assets/images/logo.svg" alt="logo" v-else />
            </router-link>
          </div>
        </div>
        <div class="col-1 col-sm-1 col-lg-6">
          <nav :class="['header__nav', { '-active': menuIsOpen }]">
            <ul>
              <li class="text-2">
                <router-link to="/">Home</router-link>
              </li>
              <li class="text-2">
                <router-link to="/about">About</router-link>
              </li>
              <li class="text-2">
                <router-link to="/client">Client</router-link>
              </li>
              <li class="text-2">
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-5 col-sm-5 col-lg-4">
          <div :class="['header__btn-box', { '-active': menuIsOpen }]">
            <AppDefaultBtn typeBtn="primary" sizeBtn="-size-m">
              <template #icon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18C6 18.55 6.45 19 7 19H8V22.5C8 23.33 8.67 24 9.5 24C10.33 24 11 23.33 11 22.5V19H13V22.5C13 23.33 13.67 24 14.5 24C15.33 24 16 23.33 16 22.5V19H17C17.55 19 18 18.55 18 18V8H6V18ZM3.5 8C2.67 8 2 8.67 2 9.5V16.5C2 17.33 2.67 18 3.5 18C4.33 18 5 17.33 5 16.5V9.5C5 8.67 4.33 8 3.5 8ZM20.5 8C19.67 8 19 8.67 19 9.5V16.5C19 17.33 19.67 18 20.5 18C21.33 18 22 17.33 22 16.5V9.5C22 8.67 21.33 8 20.5 8ZM15.53 2.16L16.83 0.86C17.03 0.66 17.03 0.35 16.83 0.15C16.63 -0.05 16.32 -0.05 16.12 0.15L14.64 1.63C13.8217 1.21559 12.9173 0.999759 12 1C11.04 1 10.14 1.23 9.34 1.63L7.85 0.15C7.65 -0.05 7.34 -0.05 7.14 0.15C6.94 0.35 6.94 0.66 7.14 0.86L8.45 2.17C7.69056 2.72569 7.0729 3.45267 6.6472 4.29191C6.2215 5.13115 5.99976 6.05897 6 7H18C18 5.01 17.03 3.25 15.53 2.16ZM10 5H9V4H10V5ZM15 5H14V4H15V5Z"
                    fill="black"
                  />
                </svg>
              </template>
              <template #title> <p>Android</p></template>
            </AppDefaultBtn>
            <AppDefaultBtn typeBtn="secondary" sizeBtn="-size-m">
              <template #icon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3542 16.4872C20.0162 15.9812 19.1212 14.7662 19.0202 13.3172C18.9212 11.9052 19.6132 10.6512 20.8712 9.96216L21.9172 9.38916L21.1702 8.45916C19.9152 6.89616 18.1192 5.96216 16.3662 5.96216C15.1512 5.96216 14.3082 6.28016 13.6312 6.53616C13.1532 6.71716 12.7762 6.85916 12.3622 6.85916C11.8902 6.85916 11.4242 6.69316 10.8842 6.50116C10.1762 6.24916 9.37422 5.96316 8.34422 5.96316C6.35422 5.96316 4.34722 7.15116 3.10722 9.06116C1.25622 11.9102 1.76422 16.7952 4.31522 20.6772C5.32622 22.2152 6.74322 23.9822 8.75022 24.0002C8.76322 24.0002 8.77622 24.0002 8.78922 24.0002C10.4322 24.0002 10.7922 23.1242 12.3872 23.1142C14.1292 23.1962 14.3492 24.0072 15.9762 23.9962C17.9372 23.9782 19.3512 22.2252 20.4752 20.5122C21.1392 19.5052 21.3962 18.9782 21.9132 17.8342L22.3512 16.8642L21.3542 16.4872Z"
                    fill="black"
                  />
                  <path
                    d="M15.1003 3.45008C15.7503 2.61608 16.2432 1.43908 16.0642 0.236084C15.0022 0.309084 13.7622 0.984084 13.0372 1.86408C12.3792 2.66308 11.8363 3.84708 12.0473 4.99908C13.2053 5.03508 14.4043 4.34308 15.1003 3.45008Z"
                    fill="black"
                  />
                </svg>
              </template>
              <template #title> <p>IOS</p></template>
            </AppDefaultBtn>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
@import "./style.css";
</style>

<script setup>
// import global

import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

// import components

import AppDefaultBtn from "@/components/App/AppDefaultBtn";

// get header type

const HomePageHeader = ref(false);

const route = useRoute();
const router = useRouter();

watch(
  () => route.meta.layout,
  (newValue) => {
    if (window.innerWidth <= 768) {
      HomePageHeader.value = false;
    } else {
      if (newValue === undefined) {
        HomePageHeader.value = true;
      }

      HomePageHeader.value = newValue === "main";
    }
  }
);

watch(
  () => window.innerWidth,
  (newValue) => {
    console.log(window.innerWidth);
    if (newValue <= 768) {
      HomePageHeader.value = false;
    }
  }
);

// open mobile menu

const menuIsOpen = ref(false);

const openMenu = () => {
  menuIsOpen.value = !menuIsOpen.value;
};

// close menu after route

router.beforeEach(() => {
  menuIsOpen.value = false;
});
</script>
