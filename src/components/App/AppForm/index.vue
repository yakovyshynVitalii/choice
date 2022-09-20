<template>
  <form action="" @submit.prevent="onSubmit">
    <AppInput
      type="text"
      :hasBg="true"
      placeholder="Name"
      v-model="inputNameModel"
      :error="inputNameError"
    />
    <AppInput
      type="email"
      :hasBg="true"
      placeholder="Email"
      v-model="inputEmailModel"
      :error="inputEmailError"
    />
    <AppInput
      type="text"
      :hasBg="true"
      placeholder="Enter Text"
      v-model="inputTextModel"
      :error="inputTextError"
    />
    <AppDefaultBtn typeBtn="secondary">
      <template #title>
        <p class="text-3">Send</p>
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
import createNameField from "@/utils/form/createNameField";
import createTextField from "@/utils/form/createTextField";
import { useStore } from "vuex";

// validation

const { handleSubmit, isSubmitting, resetForm } = useForm();

// Email

const { inputEmailModel, inputEmailError, handleBlur } = createEmailField();

// Name

const { inputNameModel, inputNameError, nameBlur } = createNameField();

// Text

const { inputTextModel, inputTextError, textBlur } = createTextField();

// onSubmit footer form

const store = useStore();

const onSubmit = handleSubmit((values) => {
  if (isSubmitting) {
    const message = {
      postId: 1,
      id: Math.random(),
      ...values,
    };
    store.commit("comments/addComment", message);
    console.log(message);
    resetForm();
  }
});
</script>

<style scoped></style>
