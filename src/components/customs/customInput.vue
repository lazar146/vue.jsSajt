<template>
    <div class="form-group mb-3">
      <label :for="id" class="form-label">{{ label }}</label>
      <input
        class="form-control"
        :type="type"
        :id="id"
        :placeholder="hint"
        v-model="inputValue"
      />
      <p v-if="greskaPoruka" class="err">{{ greskaPoruka }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "customInput",
    props: {
      type: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      hint: {
        type: String,
        default: "",
      },
      greskaPoruka: {
        type: String,
        default: "",
      },
      value: {
        type: String, 
        default: "", 
      },
    },
    data() {
      return {
        inputValue: this.value, 
      };
    },
    watch: {
      inputValue: function () {
        this.$emit("input", this.inputValue);
      },
      value: function (newValue) {
        this.inputValue = newValue; 
      },
    },
  };
  </script>
    
    <style>
    .err {
      color: red;
      margin-top: 5px;
    }
    </style>
    