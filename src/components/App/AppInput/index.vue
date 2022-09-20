<template>
  <div class="input-box">
    <input
      :class="[{ '-has-bg': hasBg, '-not-valid': error }]"
      :type="inputType"
      :value="modelValue"
      :placeholder="placeholder"
      @input="change"
    />
    <p class="error text-3" v-if="error">{{ error }}</p>
  </div>
</template>

<style>
@import "./style.css";
</style>

<script setup>
// import global

import { defineProps, defineEmits } from "vue";

// emits

const emits = defineEmits(["update:modelValue"]);

// props

const props = defineProps({
  modelValue: {
    type: String,
  },

  error: {
    type: String,
  },

  hasBg: {
    type: Boolean,
    default: false,
  },

  inputType: {
    type: String,
    default: "text",
  },

  placeholder: {
    type: String,
    default: "",
  },
});

// update value

const change = () => {
  emits("update:modelValue", event.target.value);
};
</script>
