<template>
  <div class="how-do-block">
    <div class="container -pc-version">
      <h2 class="title-2">How do I use Choicie?</h2>
      <div class="d-flex">
        <div class="cards-box">
          <div class="info-card item-1">
            <img
              src="@/assets/images/home_page/home-how-img-1.svg"
              alt="icon"
            />
            <p class="text-3">Scan the QR-code on the foreign language menu.</p>
          </div>
          <div class="info-card item-2">
            <img
              src="@/assets/images/home_page/home-how-img-2.svg"
              alt="icon"
            />
            <p class="text-3">
              Automatically get to the online version of menu — it will be
              translated into your native language.
            </p>
          </div>
          <div class="info-card item-3">
            <img
              src="@/assets/images/home_page/home-how-img-3.svg"
              alt="icon"
            />
            <p class="text-3">
              Choose and order one or more dishes you like, then show your
              QR-code from Choicie to the waiter.
            </p>
          </div>
          <div class="info-card item-4">
            <img
              src="@/assets/images/home_page/home-how-img-4.svg"
              alt="icon"
            />
            <p class="text-3">
              Share your impressions, tips, and ratings to help other Choicie
              users.
            </p>
          </div>
        </div>
        <div class="inform-wrapper">
          <div class="info-box">
            <img src="@/assets/images/home_page/home-how-icon-1.svg" alt="" />
            <p class="text-2">No language barrier</p>
          </div>
          <div class="info-box">
            <img src="@/assets/images/home_page/home-how-icon-2.svg" alt="" />
            <p class="text-2">
              No need to search for reviews — all collected in one place
            </p>
          </div>
          <div class="info-box">
            <img src="@/assets/images/home_page/home-how-icon-3.svg" alt="" />
            <p class="text-2">
              No need to install any translator — all you need is Choicie
            </p>
          </div>
          <router-link to="/about">
            <AppDefaultBtn sizeBtn="-size-m" typeBtn="secondary">
              <template #title> Get Started </template>
            </AppDefaultBtn>
          </router-link>
        </div>
      </div>
    </div>
    <div class="-mob-version">
      <h2 class="title-2">How do I use Choicie?</h2>
      <div class="slider-block">
        <swiper :slidesPerView="'auto'" :spaceBetween="30">
          <swiper-slide>
            <div class="info-card item-1">
              <img
                src="@/assets/images/home_page/home-how-img-1.svg"
                alt="icon"
              />
              <p class="text-3">
                Scan the QR-code on the foreign language menu.
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="info-card item-2">
              <img
                src="@/assets/images/home_page/home-how-img-2.svg"
                alt="icon"
              />
              <p class="text-3">
                Automatically get to the online version of menu — it will be
                translated into your native language.
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="info-card item-3">
              <img
                src="@/assets/images/home_page/home-how-img-3.svg"
                alt="icon"
              />
              <p class="text-3">
                Choose and order one or more dishes you like, then show your
                QR-code from Choicie to the waiter.
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="info-card item-4">
              <img
                src="@/assets/images/home_page/home-how-img-4.svg"
                alt="icon"
              />
              <p class="text-3">
                Share your impressions, tips, and ratings to help other Choicie
                users.
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="container">
        <div class="inform-wrapper">
          <div class="info-box">
            <img src="@/assets/images/home_page/home-how-icon-1.svg" alt="" />
            <p class="text-2">No language barrier</p>
          </div>
          <div class="info-box">
            <img src="@/assets/images/home_page/home-how-icon-2.svg" alt="" />
            <p class="text-2">
              No need to search for reviews — all collected in one place
            </p>
          </div>
          <div class="info-box">
            <img src="@/assets/images/home_page/home-how-icon-3.svg" alt="" />
            <p class="text-2">
              No need to install any translator — all you need is Choicie
            </p>
          </div>
          <router-link to="/about">
            <AppDefaultBtn sizeBtn="-size-m" typeBtn="secondary">
              <template #title> Get Started </template>
            </AppDefaultBtn>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "./style.css";
</style>

<script setup>
// import components

import AppDefaultBtn from "@/components/App/AppDefaultBtn";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "./style.css";
</script>
