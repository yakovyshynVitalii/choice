<template>
  <div class="main-block">
    <div class="container">
      <div class="row main-block-top">
        <div class="col-md-12 col-lg-6 col-xl-6">
          <div class="title-block">
            <h1 class="title-1">
              All the restaurants in the world -
              <br class="--PC-visible --tablet-remove --mobile-visible" />
              with one tap
            </h1>
            <p class="text-3">
              And a good friend with the same name. He understands that feeling
              of being an alien in another country, so here is Choicie, an app.
              It can make your journey, date or meeting with friends much
              better.
            </p>
            <router-link to="/about" class="text-2">
              <AppDefaultBtn typeBtn="secondary">
                <template #title> Get Started </template>
              </AppDefaultBtn>
            </router-link>
          </div>
        </div>
        <div class="col-md-12 col-lg-6 col-xl-6">
          <div class="img-block">
            <img src="@/assets/images/home_page/home-main.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="row main-block-bottom">
        <h3 class="col-md-12 col-lg-12 col-xl-12 text-1">
          We are the first of our kind!
          <span class="--mobile-remove">Here you can find:</span>
        </h3>
        <div class="row col-md-12 col-lg-9 col-xl-9">
          <div class="col-md-6 col-lg-6 col-xl-6 main-block__card">
            <div>
              <img
                class="--PC-remove --mobile-visible"
                src="@/assets/images/home_page/home-main-mob_icon-1.svg"
                alt=""
              />
              <img
                class="--PC-visible --mobile-remove"
                src="@/assets/images/home_page/home-main-icon-1.svg"
                alt=""
              />
            </div>
            <div>
              <h4 class="main-block__card-title text-3">Restaurant Review</h4>
              <p class="main-block__card-text text-4">
                Get best tips from our users and Choicie
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-6 main-block__card">
            <div>
              <img
                class="--PC-remove --mobile-visible"
                src="@/assets/images/home_page/home-main-mob_icon-2.svg"
                alt=""
              />
              <img
                class="--PC-visible --mobile-remove"
                src="@/assets/images/home_page/home-main-icon-2.svg"
                alt=""
              />
            </div>
            <div>
              <h4 class="main-block__card-title text-3">
                Map with Restaurant Tags
              </h4>
              <p class="main-block__card-text text-4">
                Make simple selection by your criteria
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-6 main-block__card">
            <div>
              <img
                class="--PC-remove --mobile-visible"
                src="@/assets/images/home_page/home-main-mob_icon-3.svg"
                alt=""
              />
              <img
                class="--PC-visible --mobile-remove"
                src="@/assets/images/home_page/home-main-icon-3.svg"
                alt=""
              />
            </div>
            <div>
              <h4 class="main-block__card-title text-3">QR Code Menu</h4>
              <p class="main-block__card-text text-4">
                Use fast and convenient way to create orders
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-6 main-block__card">
            <div>
              <img
                class="--PC-remove --mobile-visible"
                src="@/assets/images/home_page/home-main-mob_icon-4.svg"
                alt=""
              />
              <img
                class="--PC-visible --mobile-remove"
                src="@/assets/images/home_page/home-main-icon-4.png"
                alt=""
              />
            </div>
            <div>
              <h4 class="main-block__card-title text-3">
                Bonus Points for Clients
              </h4>
              <p class="main-block__card-text text-4">
                Spend it and get free drinks and dishes
              </p>
            </div>
          </div>
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
</script>
