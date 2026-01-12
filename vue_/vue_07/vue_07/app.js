const { createApp } = Vue;

createApp({
    data() {
        return {
            nome: 'Paolo',
            cognome: 'Bianchi',
            tasks: [
                { id: 1, testo: 'Fare la spesa', completato: true },
                { id: 2, testo: 'Studiare Vue', completato: false },
                { id: 3, testo: 'Portare fuori il cane', completato: true }
            ]
        }
    },
    methods: {
        getNomeCompleto() {
            console.log("Metodo eseguito!");
            return `${this.nome} ${this.cognome}`;
        }
    },
    computed: {
        nomeCompleto() {
            // Questa funzione viene eseguita solo se 'nome' o 'cognome' cambiano.
            console.log("Computed eseguita!");
            return `${this.nome} ${this.cognome}`;
        },
        taskCompletati() {
            // Filtra l'array e restituisce solo i task completati
            return this.tasks.filter(task => task.completato);
        }
    }
}).mount('#app');
