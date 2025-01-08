<script setup>
import { onMounted, ref } from 'vue';
import { useMessage } from '../../store/api';
import BalloonMessage from './BalloonMessage.vue';

const messageStore = useMessage();
const balloons = ref([]);

onMounted(async () => {
  await messageStore.fetchMessages();

  const maxBalloons = messageStore.getAllMessages.length;
  const usedPositions = [];

  balloons.value = messageStore.getAllMessages.map((message) => {
    let x, y;

    do {
      x = Math.floor(Math.random() * 90) + 5;
      y = Math.floor(Math.random() * 70) + 5;
    } while (usedPositions.some(p => Math.abs(p.x - x) < 10 && Math.abs(p.y - y) < 10))

    usedPositions.push({ x, y });

    return {
      id: message.id,
      message: message.mensagem,
      name: message.name,
      position: { x, y }
    };
  });
});
</script>

<template>
  <div class="main">
    <div class="balloon-container">
      <BalloonMessage
        v-for="balloon in balloons"
        :key="balloon.id"
        :message="balloon.message"
        :name="balloon.name"
        :position="balloon.position"
      />
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.balloon-container {
  position: relative;
  width: 100%;
  height: 100%;
  gap:20px;
}
</style>
