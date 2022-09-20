<template>
  <form action="" @submit.prevent="onSubmitEmail">
    <AppInput
      type="email"
      placeholder="Your email"
      v-model="inputEmailModel"
      :error="inputEmailError"
    />
    <AppDefaultBtn typeBtn="secondary">
      <template #title>
        <p class="text-3">Register to Newsletter</p>
      </template>
    </AppDefaultBtn>
  </form>
</template>

<script setup>
// import components

import AppInput from "@/components/App/AppInput";
import AppDefaultBtn from "@/components/App/AppDefaultBtn";

// Global imports

import { useForm } from "vee-validate";

// Imports Field

import createEmailField from "@/utils/form/createEmailField";

// validation

const { handleSubmit, isSubmitting, resetForm } = useForm();

// Email

const { inputEmailModel, inputEmailError, handleBlur } = createEmailField();

const onSubmitEmail = handleSubmit((values) => {
  if (isSubmitting) {
    const message = {
      values,
    };
    alert("Your email has been sent!");
    resetForm();
  }
});
</script>

<style scoped></style>
