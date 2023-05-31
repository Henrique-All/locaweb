<template>
  <div class="login-page">
    <div class="login-content">
      <img src="@/assets/logo.png" alt="logo" />
      <div class="login-card">
        <div>
          <h1>Entre na sua conta</h1>
          <p>Para acessar sua conta informe seu e-mail e senha</p>
        </div>
        <form class="login-form">
          <div>
            <p>E-mail</p>
            <input type="email" placeholder="Seu e-mail" />
          </div>
          <div>
            <p>Senha</p>
            <input type="email" placeholder="Sua senha" />
            <div class="recovery">
              <RouterLink to="/">Esqueci minha senha</RouterLink>
            </div>
          </div>
          <button @click="$router.push('/home')" class="login-submit">
            FAZER LOGIN
          </button>
        </form>
      </div>
      <div class="login-create-account">
        <p>Ainda não tem conta?</p>
        <RouterLink to="/">Cadastre-se</RouterLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.login-page {
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-family: "Poppins";
}
.login-content img {
  width: 176px;
  height: 67px;
}

.login-content {
  position: absolute;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
}

.login-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  height: 46%;
  border-radius: 5px;
  border: 1px solid #e6eaf2;
  background-color: #ffffff;
  padding: 20px 30px;
}
.login-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.recovery {
  text-align: end;
  width: 100%;
}

.recovery a {
  color: #515d74;
  text-decoration: none;
}

.login-create-account {
  display: flex;
  gap: 5px;
  font-weight: 400;
  font-size: 18px;
}

.login-create-account a {
  color: #f30168;
}
input {
  width: 95%;
  height: 80px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  font-size: 16px;
  font-family: "Poppins";
  margin: 0;
  padding: 0 15px;
}

input::placeholder {
  color: #000000;
  font-size: 16px;
}
input[type="email"]:focus {
  outline: none;
}

.login-submit {
  height: 80px;
  color: #ffffff;
  background-color: #f30168;
  border-radius: 5px;
  font-size: 18px;
  border: none;
  cursor: pointer;
}
.login-submit:active {
  background-color: #f13f8c;
}
</style>
