<template>
  <button
    :class="['button', typeBtn, sizeBtn]"
    :disabled="disableBtn"
    @click="$emit('action')"
  >
    <slot name="icon"></slot>
    <slot name="title"></slot>
  </button>
</template>

<style>
@import "./style.css";
</style>

<script setup>
// import global

import { defineProps, defineEmits, computed } from "vue";

// props

const props = defineProps({
  typeBtn: {
    type: String,
    default: "primary",
    validator(value) {
      return ["primary", "secondary"].includes(value);
    },
  },
  sizeBtn: {
    type: String,
    default: "-size-m",
    validator(value) {
      return ["-size-m", "-size-s"].includes(value);
    },
  },
  disableBtn: {
    type: Boolean,
    default: false,
  },
});

// emits

const emits = defineEmits(["action"]);
</script>
