const { createApp } = Vue;

createApp({
    data() {
        return {
            messaggio: "clicca il pulsante",
            luceaccesa: true,
            peso_kg: 0,
            nome: "",
            genere: "",
            paese: "",
        }
    },
    methods: {
        toggleluce() {
            this.luceaccesa = !this.luceaccesa;
        },
    }
}).mount('#app');