<template>
  <div class="header">
    <nav class="header-navigation">
      <img src="../../assets/logo.png" alt="" />
      <div class="user">
        <button @click.stop.prevent="toogle()">J</button>
        <router-link to="/" @click="clearLocal" v-if="isOpen">Sair</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    clearLocal() {
      localStorage.removeItem("token");
    },
    toogle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  font-family: "Poppins";
  padding: 0px;
}

.header-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

@media (max-width: 800px) {
  .header-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
}

.header-navigation button {
  border-radius: 1000px;
  width: 52px;
  height: 52px;
  border: none;
  background-color: #d9d9d9;
}

.user {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.user a {
  position: absolute;
  top: 10%;
  color: #292d32;
  text-decoration: none;
  animation: slidy 400ms cubic-bezier(0.39, 0.575, 0.565, 1);
}

@keyframes slidy {
  from {
    top: 8%;
  }
  to {
    top: 10%;
  }
}
</style>
