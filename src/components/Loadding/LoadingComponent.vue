<template>
  <div class="main-loader">
    <div class="loader">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
      <div class="bar4"></div>
      <div class="bar5"></div>
      <div class="bar6"></div>
      <div class="bar7"></div>
      <div class="bar8"></div>
      <div class="bar9"></div>
      <div class="bar10"></div>
      <div class="bar11"></div>
      <div class="bar12"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.main-loader {
  cursor: wait;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.5);
  z-index: 99;
}
.loader {
  position: relative;
  width: 54px;
  height: 54px;
  border-radius: 10px;
  background-color: transparent;
}

.loader div {
  width: 8%;
  height: 24%;
  background: rgb(128, 128, 128);
  position: absolute;
  left: 50%;
  top: 30%;
  opacity: 0;
  border-radius: 50px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  animation: fade458 1s linear infinite;
}

@keyframes fade458 {
  from {
    opacity: 1;
  }

  to {
    opacity: 0.25;
  }
}

.loader .bar1 {
  transform: rotate(0deg) translate(0, -130%);
  animation-delay: 0s;
}

.loader .bar2 {
  transform: rotate(30deg) translate(0, -130%);
  animation-delay: -1.1s;
}

.loader .bar3 {
  transform: rotate(60deg) translate(0, -130%);
  animation-delay: -1s;
}

.loader .bar4 {
  transform: rotate(90deg) translate(0, -130%);
  animation-delay: -0.9s;
}

.loader .bar5 {
  transform: rotate(120deg) translate(0, -130%);
  animation-delay: -0.8s;
}

.loader .bar6 {
  transform: rotate(150deg) translate(0, -130%);
  animation-delay: -0.7s;
}

.loader .bar7 {
  transform: rotate(180deg) translate(0, -130%);
  animation-delay: -0.6s;
}

.loader .bar8 {
  transform: rotate(210deg) translate(0, -130%);
  animation-delay: -0.5s;
}

.loader .bar9 {
  transform: rotate(240deg) translate(0, -130%);
  animation-delay: -0.4s;
}

.loader .bar10 {
  transform: rotate(270deg) translate(0, -130%);
  animation-delay: -0.3s;
}

.loader .bar11 {
  transform: rotate(300deg) translate(0, -130%);
  animation-delay: -0.2s;
}

.loader .bar12 {
  transform: rotate(330deg) translate(0, -130%);
  animation-delay: -0.1s;
}
</style>
