<template>
  <div class="header-content">
    <div class="logo">
      <img src="../../../assets/logo.png" alt="" />
    </div>
    <div class="subtitle">
      <h2>Você está muito próximo de mudar a forma de</h2>
      <h2>hospedar seu site</h2>
    </div>
  </div>

  <div class="content">
    <div class="left">
      <FormCreateAccount />
    </div>
    <div class="right">
      <div class="plan">PLANO ESCOLHIDO</div>
      <HostComponentOne :item="this.item" :show-more-button="true" />
      <div class="gradient"></div>
      <button @click="this.$router.go(-1)">TROCAR PLANO</button>
    </div>
  </div>
</template>
<script src="../script/scriptCreateAccount.vue" />

<style src="../styles/createAccountStyles.css" />
