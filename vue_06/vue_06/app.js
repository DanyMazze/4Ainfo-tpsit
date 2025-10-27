const { createApp } = Vue;

createApp({
    data() {
        return {
            messaggio: '',
            descrizione: '',
            confermato: false
        }
    }
}).mount('#app');
