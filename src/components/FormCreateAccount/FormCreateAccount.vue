<template>
  <div class="main">
    <div class="header">
      <h2>Dados pessoais</h2>
      <p>Informe seus dados pessoais para acesso à sua conta</p>
    </div>
    <form>
      <div>
        <p>Nome completo</p>
        <input
          type="text"
          placeholder="Informe seu nome completo"
          v-model="name"
        />
      </div>
      <div>
        <p>Celular</p>
        <input
          type="tel"
          placeholder="(99) 99999-0000"
          keyboard="numeric"
          v-model="phone"
        />
      </div>
      <div>
        <p>E-mail</p>
        <input
          type="email"
          placeholder="Informe seu e-mail"
          v-model="email"
          required
        />
        <p v-if="emailValidation" style="color: red">Senha Invalido</p>
      </div>
      <div>
        <p>Senha</p>
        <input type="password" v-model="password" required />
        <p v-if="emailValidation" style="color: red">Senha Invalido</p>
        <p style="color: #515d74">No mínimo 8 caracteres</p>
        <p>{{ password }}</p>
      </div>
      <div>
        <p>Confirme sua senha</p>
        <input type="password" v-model="confirmPassword" required />
        <p v-if="confirmPasswordValidation" style="color: red">
          Senhas diferentes
        </p>
        {{ confirmPassword }}
      </div>
      <div class="separation"></div>
      <div>
        <h2>Dados do seu site</h2>
        <p>Nome do seu site</p>
        <input type="text" placeholder="Meu site" v-model="site" required />
        <p style="color: #515d74">Exatamente igual o título do seu site</p>
      </div>
      <div class="separation"></div>
      <label class="container"
        >Ao concluir com seu cadastro você concorda com nossos termos de uso e
        politicas de privacidade.

        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>
      <div class="create">
        <button @click="singIn()">CRIAR CONTA</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      site: "",
      emailValidation: false,
      passwordValidation: false,
      confirmPasswordValidation: false,
      loginInvalido: false,
    };
  },
  methods: {
    validationPassword() {
      if (!this.email && this.email === "") {
        this.emailValidation = true;
        return;
      }
      if (!this.password && this.password === "") {
        this.passwordValidation = true;
        return;
      } else {
        this.$router.push("/home");
      }
    },

    singIn() {
      try {
        this.validationPassword();
        fetch("https://fakestoreapi.com/users", {
          method: "POST",
          body: JSON.stringify({
            email: this.email,
            username: this.name,
            password: this.password,
            phone: this.phone,
          }),
        })
          .then((res) => res.json())
          .then((json) => console.log(json));
      } catch (err) {
        console.log(err);
        this.loginInvalido = true;
      } finally {
        setTimeout(() => {
          this.emailValidation = false;
          this.passwordValidation = false;
          this.confirmPasswordValidation = false;
          this.loginInvalido = false;
        }, 4000);
      }
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid #e6eaf2;
  padding: 15px 0;
  font-family: "Poppins";
  gap: 20px;
  border-radius: 5px;
}

.header {
  width: 90%;
}

.main input {
  height: 60px;
  width: 90%;
}

@media (max-width: 800px) {
  .main input {
    width: 90%;
  }
}

.main form {
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.separation {
  width: 100%;
  height: 1px;
  background: rgba(196, 196, 196, 0.5);
  margin-top: 10px;
}

.container {
  display: flex;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 4px;
  left: 0;
  height: 16px;
  width: 14.24px;
  background-color: #eee;
  border: solid #f30168;
  border-radius: 4px;
}

.container:hover input ~ .checkmark {
  background-color: #faf1f5;
}

.container input:checked ~ .checkmark {
  background-color: #faf1f5;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 4.5px;
  top: 0.5px;
  width: 2px;
  height: 10px;
  border: solid #f30168;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.create {
  width: 100%;
}

.create button {
  width: 100%;
  height: 60px;
  background: #f30168;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
}
</style>
