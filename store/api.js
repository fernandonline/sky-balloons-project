import { defineStore } from 'pinia';
import { useRuntimeConfig } from '#app';

export const useMessage = defineStore('message', {
  state: () => ({
    messages: [],
    error: null,
    loading: false,
  }),

  actions: {
    async fetchMessages() {
      const apiBase = useRuntimeConfig().public.apiBase;
      this.loading = true;
      this.error = null;

      try {
        const response = await $fetch(`${apiBase}/mensagem`);
        if (response && response.mensagens) {
          this.messages = response.mensagens;
          return this.messages;
        } else {
          throw new Error('Resposta inesperada do servidor');
        }
      } catch (err) {
        console.error('Erro ao buscar mensagens:', err);
        this.error = err.data?.message || 'Erro ao buscar mensagens. Tente novamente mais tarde.';
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async sendMessage({ name, mensagem }) {
      const apiBase = useRuntimeConfig().public.apiBase;
      this.loading = true;
      this.error = null;
    
      try {
        await $fetch(`${apiBase}/mensagem`, {
          method: 'POST',
          body: { name, mensagem },
        });
        
        await this.fetchMessages();
        return true;
        
      } catch (err) {
        console.error('Erro ao enviar mensagem:', err);
        this.error = err.message || 'Erro ao enviar mensagem. Por favor, tente novamente.';
        throw err;
      } finally {
        this.loading = false;
      }
    },
  },
  
  getters: {
    getAllMessages: (state) => state.messages,
  },
});