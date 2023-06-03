<template>
  <div class="content">
    <div class="logo">
      <img src="../../../assets/logo.png" alt="" />
    </div>
    <div class="subtitle">
      <h2>Você está muito próximo de mudar a forma de</h2>
      <h2>hospedar seu site</h2>
    </div>
    <p>Escolha o seu plano</p>
    <div class="card-content">
      <HostComponentOne v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>
<script src="../script/scriptInfraComponent.vue" />

<style scoped>
.content {
  display: flex;
  align-items: center;
  padding: 20px 0 0 0;
  flex-direction: column;
  gap: 20px;
  font-family: "Poppins";
  min-height: 100%;
}
.subtitle {
  text-align: center;
}

.subtitle h2:nth-child(2) {
  color: #f30168;
  text-decoration: underline;
}

.card-content {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 40px;
  flex-wrap: wrap;
}
</style>
