<template>
  <div class="main">
    <div class="card" :class="{ 'card-active': !showMore }">
      <div
        class="card-use"
        v-if="this.showMoreButton === true ? '' : item.used"
      >
        <p>{{ item.used }}</p>
      </div>
      <div class="card-header">
        <h1>{{ item.title }}</h1>
        <p class="place">{{ item.price }}</p>
        <p>{{ item.info }}</p>
        <p>{{ item.rate }}</p>
        <div class="separation"></div>
      </div>

      <div class="card-subtitle">
        <p>
          {{ item.recommendable }}
        </p>
        <div class="separation"></div>
      </div>
      <div class="card-button" v-if="!this.showMoreButton">
        <RouterLink
          :to="{ name: 'cadastro', query: { item: JSON.stringify(this.item) } }"
          >ESCOLHER ESSE PLANO</RouterLink
        >
      </div>
      <div v-if="showMore">
        <div class="card-body">
          <h4>{{ item.hosting }}</h4>
          <p>
            <i class="bx bx-check" style="color: #292d32"></i>{{ item.local }}
          </p>
          <p>
            <i class="bx bx-check" style="color: #292d32"></i>{{ item.version }}
          </p>
          <p>
            <i class="bx bx-check" style="color: #292d32"></i>{{ item.users }}
          </p>
          <p>
            <i class="bx bx-check" style="color: #292d32"></i>{{ item.account }}
          </p>
          <p>
            <i class="bx bx-check" style="color: #292d32"></i
            >{{ item.subdomain }}
          </p>
        </div>
        <div class="card-body-content">
          <h4>Suporte 24 horas, 7 dias por semana grátis;</h4>
          <h4>Aplicativos disponíveis;</h4>

          <p>
            <i class="bx bx-check" style="color: #292d32"></i>{{ item.app1 }}
          </p>
          <p>
            <i class="bx bx-check" style="color: #292d32"></i>{{ item.app2 }}
          </p>
          <p>
            <i class="bx bx-check" style="color: #292d32"></i>{{ item.app3 }}
          </p>

          <div v-if="item.migrated">
            <h4>{{ item.migratedTitle }}</h4>
            <p>{{ item.migrated }}</p>
          </div>

          <h4>Você ainda tem</h4>
          <p>
            <i class="bx bx-check" style="color: #292d32"></i>{{ item.extras1 }}
          </p>
          <p>
            <i class="bx bx-check" style="color: #292d32"></i>{{ item.extras2 }}
          </p>
          <p>
            <i class="bx bx-check" style="color: #292d32"></i>{{ item.extras3 }}
          </p>
          <p>
            <i class="bx bx-check" style="color: #292d32"></i>{{ item.extras4 }}
          </p>
          <p>
            <i class="bx bx-check" style="color: #292d32"></i>{{ item.extras5 }}
          </p>
          <p>
            <i class="bx bx-check" style="color: #292d32"></i>{{ item.extras6 }}
          </p>
          <p>
            <i class="bx bx-check" style="color: #292d32"></i>{{ item.extras7 }}
          </p>
        </div>
      </div>
    </div>
    <button class="card-more" @click="toogle" v-if="!this.showMoreButton">
      {{ `${showMore ? "Ver menos" : "Ver mais"}` }}
    </button>
  </div>
</template>
<script>
export default {
  props: ["item", "showMoreButton"],
  data() {
    return {
      showMore: this.showMoreButton || false,
    };
  },

  methods: {
    toogle() {
      this.showMore = !this.showMore;
    },
  },
};
</script>
<style scoped>
@keyframes openCard {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.01);
  }
}
@keyframes closeCard {
  from {
    transform: scale(1.02);
  }

  to {
    transform: scale(1);
  }
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 280px;
  padding: 10px 50px;
  border: 1px solid #e6eaf2;
  border-radius: 5px;
  animation: openCard 900ms linear;
}

.card-active {
  background-color: #ffffff;
  width: 280px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #e6eaf2;
  animation: closeCard 900ms linear;
}

.card-use {
  top: 0;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
}
.card-use p {
  display: flex;
  justify-content: center;
  background-color: #10c300;
  width: 139px;
  height: 33px;
  color: #ffffff;
  align-items: center;
  border-radius: 10px;
}
.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 15px 0;
}

.card-header h1 {
  color: #666666;
}

.place {
  font-weight: 700;
  font-size: 34px;
  color: #f30168;
}

.card-subtitle {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  margin: 10px;
}
.card-button {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

.card-button a {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #ffffff;
  background: #f30168;
  border-radius: 5px;
  border: none;
  width: 245px;
  height: 56px;
  font-weight: 400;
  font-family: "Poppins";
  font-size: 16px;
  cursor: pointer;
}

.separation {
  width: 300px;
  height: 1px;
  background: rgba(196, 196, 196, 0.5);
  margin-top: 10px;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 17px;
}

.card-body-content {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 17px;
}

.card-body h2 {
  font-weight: 700;
  font-size: 17px;
  color: #666666;
}

.card-more {
  color: #f30168;
  background: transparent;
  border-radius: 5px;
  border: none;
  height: 56px;
  font-weight: 400;
  font-family: "Poppins";
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  text-align: center;
}
</style>
