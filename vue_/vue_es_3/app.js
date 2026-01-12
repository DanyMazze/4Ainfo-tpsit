const { createApp } = Vue;

createApp({
    data() {
        return {
            messaggio: '',
            username: '', 
            age: 0,
            carrello: [
                {nome: 'penna', prezzo: 1.5},
                {nome: 'quaderno', prezzo: 2.5},
                {nome: 'matita', prezzo: 1.0},
                {nome: 'gomma', prezzo: 0.5},
                {nome: 'righello', prezzo: 3.0},
            ],
            mostra_messaggio: false,
            messaggio_errore: 'il nome utente deve essere più lungo di 5 caratteri',
            risposta: '',
            salvataggio: '',       
            saveTimeout: null,      
        }
    },
    watch: { 
        username(nuovousername) {
            if (nuovousername && nuovousername.length < 5) { 
                this.mostra_messaggio = true;
            } else {
                this.mostra_messaggio = false;
            }
        },
        salvataggio() {
            this.getRisposta();
        }
    },
    methods: {
        getRisposta() {
            this.risposta = 'Sto salvando...';

            if (this.saveTimeout) {
                clearTimeout(this.saveTimeout);
                this.saveTimeout = null;
            }

            this.saveTimeout = setTimeout(() => {
                this.risposta = 'salvato.';
                this.saveTimeout = null;
            }, 1000);
        },
        maggiorenne() {
            if (this.age >= 18) {
                return 'Sei maggiorenne.';
            } else if (this.age > 0 && this.age < 18) {
                return 'Sei minorenne.';
            }else {
                return 'inserisci un età valida.';
            }
        },
        totale (){
            let somma = 0;
            for (let i = 0; i < this.carrello.length; i++) {
                somma += this.carrello[i].prezzo;
            }
        }
    }
}).mount('#app');
