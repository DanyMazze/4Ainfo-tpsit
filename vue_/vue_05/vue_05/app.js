const { createApp } = Vue;

createApp({
    data() {
        return {
            contatore: 0
        }
    },
    
    methods: {
        incrementa() {
            // 'this' si riferisce all'istanza Vue
            this.contatore++;
        },
        decrementa(valore) {
            this.contatore -= valore;
        },
        mostraMessaggio(msg) {
            alert(msg);
        },
        inviaModulo() {
            alert('Modulo inviato con successo!');
        }
    }
}).mount('#app');
