const { createApp } = Vue;

createApp({
    data() {
        return {
            domanda: '',
            risposta: 'Le domande di solito contengono un "?"'
        }
    },
    watch: {
        // Ogni volta che 'domanda' cambia, questa funzione viene eseguita
        domanda(nuovaDomanda, vecchiaDomanda) {
            if (nuovaDomanda.includes('?')) {
                this.getRisposta();
            }
        }
    },
    methods: {
        getRisposta() {
            this.risposta = 'Sto pensando...';
            // Simula una chiamata API
            setTimeout(() => {
                this.risposta = 'Certo! Vue è fantastico.';
            }, 2000);
        }
    }
}).mount('#app');
