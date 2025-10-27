const { createApp } = Vue;

createApp({
    data() {
        return {
            messaggio_tooltip: 'Questo è un tooltip',
            isLoggedId: false,
            semaforo: 'giallo',
            team_sportivi: ['Juventus', 'Milan', 'Inter'],
            prodotti: [
                { nome: 'Penna', prezzo: 1.5, id: 345 },
                { nome: 'Quaderno', prezzo: 2.0, id: 123 },
                { nome: 'Matita', prezzo: 0.5, id: 345 },
                { nome: 'Gomma', prezzo: 0.8, id:567 }
            ]
        }
    }
}).mount('#app');