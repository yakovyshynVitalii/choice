<template>
  <div class="about-block">
    <div class="container">
      <div class="row about-block__top">
        <div class="col-md-12 col-lg-6 col-xl-6 text-box">
          <h2 class="title-2">
            Choicie is a universal <br />
            menu for all restaurants.
          </h2>
          <p class="text-3">
            Foreign language names are no longer a problem. <br />
            <br />
            Try new dishes when you travel or just go outside — with Choicie,
            you can order anything using automatic menu translation pictures of
            dishes. Place your order on the way to the restaurant, then just
            show the QR-code to the waiter.
          </p>
          <router-link to="/about" class="text-2">
            <AppDefaultBtn>
              <template #title> Get Started </template>
            </AppDefaultBtn>
          </router-link>
        </div>
        <div class="col-md-12 col-lg-6 col-xl-6 img-box">
          <img
            class="--mobile-remove"
            src="@/assets/images/home_page/home-about-1.svg"
            alt=""
          />
          <img
            class="--PC-remove --mobile-visible"
            src="@/assets/images/home_page/home-about-mob1.svg"
            alt=""
          />
        </div>
      </div>
      <div class="row about-block__bottom">
        <div class="col-md-12 col-lg-6 col-xl-6 img-box">
          <img
            class="--mobile-remove"
            src="@/assets/images/home_page/home-about-2.svg"
            alt=""
          />
          <img
            class="--PC-remove --mobile-visible"
            src="@/assets/images/home_page/home-about-mob2.svg"
            alt=""
          />
        </div>
        <div class="col-md-12 col-lg-6 col-xl-6 text-box">
          <h2 class="title-2">And a new social network</h2>
          <p class="text-3">
            For those who love food! Become an Influencer: add new restaurants
            to the city map, earn points, get followers.
            <br />
            <br />
            Keep private important ordering information in your account: mark
            the dishes you liked and didn't like, and the foods you're allergic
            to.
          </p>
          <router-link to="/about" class="text-2">
            <AppDefaultBtn>
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
// import componetns

import AppDefaultBtn from "@/components/App/AppDefaultBtn";
</script>
