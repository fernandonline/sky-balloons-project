<script setup>
import { ref, onMounted } from 'vue'
  
const skyCanvas = ref(null)
  
onMounted(() => {
  const canvas = skyCanvas.value
  const skyItem = canvas.getContext('2d')
  
  skyItem.fillStyle = 'black'
  skyItem.fillRect(0, 0, canvas.width, canvas.height)
  
  function drawStars(skyItem, count) {
    for (let i = 0; i < count; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const radius = Math.random() * 1.5
      skyItem.beginPath()
      skyItem.arc(x, y, radius, 0, Math.PI * 2)
      skyItem.fillStyle = 'white'
      skyItem.fill()
    }
  }
  drawStars(skyItem, 100)
  
  skyItem.beginPath()
  skyItem.arc(150, 150, 40, 0, Math.PI * 2)
  skyItem.fillStyle = 'lightgray'
  skyItem.fill()
})

</script>
  
<template>
  <canvas ref="skyCanvas" width="1080" height="1920"></canvas>
</template>


<style scoped>
  canvas {
    width: 100%;
    height: auto;
    position: fixed;
  }
</style>