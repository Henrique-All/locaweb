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
            <input
              type="email"
              v-model="email"
              placeholder="Seu e-mail"
              required
            />
            <p v-if="emailValidation" style="color: red">Email Invalido</p>
          </div>
          <div>
            <p>Senha</p>
            <input
              type="password"
              v-model="password"
              placeholder="Sua senha"
              required
            />
            <p v-if="emailValidation" style="color: red">Senha Invalido</p>

            <div class="recovery">
              <RouterLink to="/">Esqueci minha senha</RouterLink>
            </div>
          </div>
          <button class="login-submit" @click="login">FAZER LOGIN</button>
        </form>
      </div>
      <div class="login-create-account">
        <p>Ainda não tem conta?</p>
        <RouterLink to="/escolha-seu-plano">Cadastre-se</RouterLink>
      </div>
    </div>
  </div>
</template>

<script src="../script/scriptLogin.vue" />
<style src="../styles/LoginStyles.css" />
