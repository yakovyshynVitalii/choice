<template>
  <div class="all-comments">
    <div class="container">
      <h2 class="title-2">Our reviews</h2>
      <div class="add-comment-block">
        <h3 class="title-3">Add new comment</h3>
        <AppForm />
      </div>
      <div class="row">
        <div class="col-12 comment-item" v-for="(comment, index) in comments">
          <div class="row">
            <div class="col-4">
              <h3 class="title-3">{{ comment.name }}</h3>
            </div>
            <div class="col-6">
              <h3 class="title-3">{{ comment.email }}</h3>
            </div>
            <div class="col-12 comment-body">
              {{ comment.body }}
            </div>
            <div class="col-12 comment-btn row">
              <AppDefaultBtn @action="removeComment(index, comment.id)">
                <template #title>
                  <p class="text-2">Delete</p>
                </template>
              </AppDefaultBtn>
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
import AppForm from "@/components/App/AppForm";

// import global

import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";

// get all coments

const store = useStore();

const comments = computed(() => {
  return store.getters["comments/comments"];
});

// get all comments

onMounted(() => {
  store.dispatch("comments/getAllCommentsAsync");
});

// remove comment

const removeComment = (index, id) => {
  store.commit("comments/removeComment", index, id);
};
</script>
