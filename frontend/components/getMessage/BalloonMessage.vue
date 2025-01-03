<script setup>
defineProps({
  message: String,
  name: String,
  position: Object
});
</script>

<template>
  <div
    class="balloon"
    :style="{
      left: `${position.x}%`,
      top: `${position.y}%`,
      animationDuration: `${Math.random() * 4 + 2}s`
    }"
  >
    <img class="balloon-image" src="/images/skyballoon140px.png" loading="lazy" />
    <div class="balloon-message">
      <p class="message-text">{{ message }}</p>
      <p class="message-author">{{ name }}</p>
    </div>
  </div>
</template>

<style scoped>
.balloon {
  position: absolute;
  animation: float ease-in-out infinite;
}

.balloon-image {
  width: 60px;
}

.balloon-message {
  position: absolute;
  min-width: 260px;
  width: 260px;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s;
}

.balloon:hover .balloon-message,
.balloon:focus-within .balloon-message {
  opacity: 1;
}

.message-text {
  color: black;
}

.message-author {
  color: #666;
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

@media (max-width: 768px) {
  .balloon-image {
    width: 40px;
  }

  .balloon-message {
    font-size: 12px;
  }
}
</style>
