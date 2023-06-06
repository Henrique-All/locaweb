<template>
  <HeaderComponent />
  <div class="home">
    <div class="home-content">
      <div>
        <div>
          <h1>Olá João</h1>
          <p>Seja bem vindo a sua conta de hospedagem.</p>
        </div>
        <div>
          <img src="../../../assets/frag.png" alt="frame" />
        </div>
        <div>
          <p>Caso tenha alguma dúvida, visite nossa central de ajuda.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent.vue";

export default {
  components: { HeaderComponent },

  methods: {
    getUsers() {
      fetch("https://fakestoreapi.com/users")
        .then((res) => res.json())
        .then((json) => console.log(json));
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafc;
  font-family: "Poppins";
}

.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

@media (max-width: 1000px) {
  .home-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 90%;
  }
  .home-content img {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
}

@media (max-width: 800px) {
  .home-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 90%;
  }
  .home-content img {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
}
</style>
