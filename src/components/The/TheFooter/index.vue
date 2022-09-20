<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-xl-8">
            <h3 class="title-2 --bold">
              Subscribe and become a part of Choicie
            </h3>
            <p class="text-1">
              Leave your email and get all the information about product
              updates, blog updates, exclusive updates.
            </p>
          </div>
          <div class="col-lg-12 col-xl-4">
            <AppEmailForm />
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <div class="row justify-content-between">
          <div class="logo-box col-lg-12 col-xl-2">
            <router-link to="/">
              <img src="@/assets/images/logo-2.svg" alt="logo" />
            </router-link>
            <p class="text-4">You know what you choose!</p>
          </div>
          <nav class="footer-nav row col-lg-12 col-xl-4">
            <div class="nav-block col-6">
              <router-link to="/">Home</router-link>
              <a class="" href="#" target="_blank">Universal Menu</a>
              <a href="#" target="_blank">How do use</a>
              <a href="#" target="_blank">Growth Factor</a>
              <a href="#" target="_blank">Contact</a>
              <a href="#" target="_blank">Privacy Policy</a>
            </div>
            <div class="nav-block col-6">
              <a href="#" target="_blank">Facebook</a>
              <a href="#" target="_blank">Twitter</a>
              <a href="#" target="_blank">Instagram</a>
              <a href="#" target="_blank">LinkedIn</a>
            </div>
          </nav>
          <div class="col-lg-12 col-xl-3">
            <AppForm />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
@import "./style.css";
</style>

<script setup>
// import components

import AppEmailForm from "@/components/App/AppEmailForm";
import AppForm from "@/components/App/AppForm";
</script>
