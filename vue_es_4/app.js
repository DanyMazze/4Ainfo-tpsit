const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            success: false,
            error: false,
            coloreAttivo: '#333333',
            larghezza: 50, 
            lunghezza: 50   
        }
    },
    methods: {
        messaggio_error(){
            this.error = true;
            this.success = false;
        },
        messaggio_success(){
            this.success = true;
            this.error = false;
        }
    }
});

app.component('messaggio_benvenuto', {
    data() {
        return {
            messaggio: "Benvenuto nella nostra  applicazione!"
        }
    },
    template: `
        <div>
            <h2>{{ messaggio }}</h2>
        </div>
    `
});

app.component('info_card', {
    data() {
        return {
            titolo: "Card Informativa",
            contenuto: "Qui puoi trovare tante informazioni utili."
        }
    },
    template: `
        <div class="box">
            <h3>{{ titolo }}</h3>
            <p>{{ contenuto }}</p>
        </div>
    `
});

app.mount('#app');
