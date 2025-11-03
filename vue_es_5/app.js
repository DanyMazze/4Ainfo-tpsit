const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            prodotti: [
                { id: 1, nome: 'pc', prezzo: 2 },
                { id: 2, nome: 'astuccio', prezzo: 9 },
                { id: 3, nome: 'libro', prezzo: 5.99 }
            ],
            modaleAperta: true,
            valutazione: 0
        }
    },
    methods: {
        chiudiModale() {
            this.modaleAperta = false;
        },
    chiudiModale() {
        this.modaleAperta = false;
    },
    setValutazione(n) {
        this.valutazione = n;
    }
    }
});


app.component('product-card', {
    props: {
        nome_prodotto: String,
        prezzo: Number
    },
    template: `
        <div class="box">
            <h3>{{ nome_prodotto }}</h3>
            <p>{{ prezzo }} $</p>
        </div>
    `
});

app.component('alert-box', {
    props: {
        messaggio: String,
        tipo: String
    },
    template: `
        <div class="box" :class="tipo">
            {{ messaggio }}
        </div>
    `
});

app.component('modal-dialog', {
    data() {
        return {
            testoVisibile: true
        }
    },
    methods: {
        nascondiTesto() {
            this.testoVisibile = false;
        }
    },
    template: `
        <div class="box">
            <div v-if="testoVisibile">
                <p>testo</p>
            </div>
            <button class="modal-button" @click="nascondiTesto">
                chiudi
            </button>
        </div>
    `
});

app.component('star-rating', {
    data() {
        return {
            selected: 0
        }
    },
    emits: ['imposta-valutazione'],
    methods: {
        rate(n) {
            this.selected = n;
            this.$emit('imposta-valutazione', n);
        }
    },
    template: `
        <div class="box" style="display:flex;align-items:center;gap:6px;">
            <button v-for="n in 5" :key="n" @click="rate(n)">
                {{ n }}
            </button>
        </div>
    `
});

app.mount('#app');
