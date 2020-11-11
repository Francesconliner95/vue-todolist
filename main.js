var app = new Vue({
    el: '#root',
    data: {
        item: 'Ciao!',
        array_items: [],
        },
    methods: {
        add_item: function(){
            this.array_items.push(this.item);
            console.log(this.array_items);
        },
        remove_item: function(item){
            console.log(item);
            /*con la funzione splice abbiamo la possibilità di modificare o sostituire il nostro array, il primo valore corrisponealla posizione sulla quale vogliamo andare ad agire, il secondo valore se settato ad 0 inserisce un elelmento in quella posizione facendo scalare tutti gli altri, se settato ad 1 sostituisce l'elemento con un dato impostato da noi nel terzo valore*/
            this.array_items.splice(item, 1);
            console.log(this.array_items);
        },
    },
    /*'l'oggetto' created: ci permette di eseguire al suo interno pozioni di codice in maniera automatica*/
    created: function() {
	},

})
