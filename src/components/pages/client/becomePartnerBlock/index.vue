<template>
  <div class="become-partner-block">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-xl-8">
          <h2 class="title-2">
            Choicie for cafes and restaurants.<br />Five growth drivers for your
            development
          </h2>
          <p class="text-3">
            Choicie helps you analyze user actions and improve your cafe or
            restaurant.
          </p>
          <div class="row card-box">
            <div class="col-md-12 col-lg-4 card-item">
              <img
                src="@/assets/images/client_page/client-icon-1.svg"
                alt="icon"
              />
              <p class="text-3">Quality of Service</p>
            </div>
            <div class="col-md-12 col-lg-6 card-item">
              <img
                src="@/assets/images/client_page/client-icon-2.svg"
                alt="icon"
              />
              <p class="text-3">Reputation and promotion on the web</p>
            </div>
            <div class="col-md-12 col-lg-2 card-item">
              <img
                src="@/assets/images/client_page/client-icon-3.svg"
                alt="icon"
              />
              <p class="text-3">Visibility</p>
            </div>
            <div class="col-md-12 col-lg-4 card-item">
              <img
                src="@/assets/images/client_page/client-icon-4.svg"
                alt="icon"
              />
              <p class="text-3">Number of orders</p>
            </div>
            <div class="col-md-12 col-lg-5 card-item">
              <img
                src="@/assets/images/client_page/client-icon-5.svg"
                alt="icon"
              />
              <p class="text-3">Convenience of work with clients</p>
            </div>
          </div>
          <h2 class="title-3">What Does it Take?</h2>
          <router-link to="/about">
            <AppDefaultBtn>
              <template #title>
                <p class="text-2">Become a Choicie partner!</p>
              </template>
            </AppDefaultBtn>
          </router-link>
        </div>
      </div>
    </div>
    <div class="bg-block">
      <img src="@/assets/images/client_page/client-bg.svg" alt="" />
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
