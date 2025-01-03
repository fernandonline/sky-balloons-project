<script setup>
import { ref } from 'vue';
import { useMessage } from '../../store/api';

const messageStore = useMessage()
const name = ref('')
const message = ref('')
const errors = ref([])
const successMessage = ref('')
const isLoading = ref(false)

const sendMessage = async () => {
    if (isLoading.value) return

    isLoading.value = true
    errors.value = []
    successMessage.value = ''

    const trimmedMessage = message.value.trim()
    if (!trimmedMessage) {
        errors.value.push('O campo de mensagem é obrigatório.');
    } else if (trimmedMessage.length < 10) {
        errors.value.push('A mensagem deve ter pelo menos 10 caracteres.');
    } else if (trimmedMessage.length > 140) {
        errors.value.push('A mensagem não pode exceder 140 caracteres.');
    }

    if (errors.value.length > 0) {
        isLoading.value = false
        return
    }

    const senderName = name.value.trim() || 'Anônimo'

    try {
        await messageStore.sendMessage({ name: senderName, mensagem: trimmedMessage })
        name.value = ''
        message.value = ''
        successMessage.value = 'Mensagem enviada com sucesso!'
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error)
        errors.value.push('Erro ao enviar mensagem. Tente novamente.')
    } finally {
        isLoading.value = false
    }
}
</script>

<template>
    <div class="post">
        <h1>Envie aqui: </h1>

        <input class="post_input"
            type="text" 
            placeholder="Insira seu nome ou deixe vazio" 
            v-model="name" 
        />
        
        <textarea class="post_input post_input--message"
            placeholder="Digite aqui a sua mensagem"
            v-model="message"
            rows="4"
            :class="{ 'is-invalid': errors.length > 0 }"
        ></textarea>

        <div v-if="errors.length" class="error-messages">
            <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </div>

        <div v-if="successMessage" class="success-message">
            {{ successMessage }}
        </div>

        <div class="post_button">
            <button @click="sendMessage" :disabled="isLoading">
                <template v-if="isLoading">
                    <svg xmlns="http://www.w3.org/2000/svg" class="loading-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10" stroke-opacity="0.25" />
                        <path d="M12 2a10 10 0 0110 10h-4" />
                    </svg>
                </template>
                <template v-else>Enviar</template>
            </button>
        </div>
    </div>
</template>


<style scoped>
  .post {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 5svh;
        gap: 1.5svh;
        background-color: #393E46;
    }

    h1 {
        color: #fff;
    }

    .post_input {
        width: 60svw;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 18px;
    }

    .post_input--message {
        resize: none;
        height: 80px;
        max-height: auto;
        font-family: 'popins', sans-serif;
    }

    .post_button {
        display: flex;
        flex-direction: column;
        align-items: end;
        width: 55svw;
    }
    
    button {
        cursor: pointer;
        width: 30svw;
        padding: 10px;
        border: none;
        border-radius: 18px;
        font-size: 1.2rem;
        color: #000;
        background-color: #ffffff;
    }

    .loading-icon {
        animation: spin 1s linear infinite;
        width: 20px;
        height: 20px;
        margin: auto;
    }
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }

    button:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }
    
    .is-invalid {
        border-color: rgb(255, 70, 70);
    }

    .error-messages {
        color: rgb(255, 103, 103);
    }
    
    .success-message {
        color: rgb(103, 255, 103);
        margin-top: 10px;
    }

@media (min-width: 768px) {
   .post_input {
       max-width: 30svw;
   }

   .post_button {
       width: 30svw;
   }

   button {
       width: 12svw;
   }
}
</style>