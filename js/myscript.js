const app = new Vue ({

    el: '#app',

    data: {

        active: 0,
        scrollfn: null,
        time: 3000,

        guzzantiCharacter: [
            {
                name: "Quelo",
                quote:" 'Ti chiedi Come mai?, ti chiedi Quasi quasi? Dov'è la risposta?.La risposta non la devi cercare fuori, la risposta è dentro di te. E però è sbagliata!.' ",
                image: "https://giusepperamerini.it/wp-content/uploads/2016/02/Quelo.jpg",
            },
            {
                name: "Robertetti",
                quote:"A questo mondo nessuno ti dà niente per niente, sarebbe una perdita di tempo per tutti e due.",
                image: "https://i.ytimg.com/vi/Q6jIxUHGY3M/hqdefault.jpg",
            },
            {
                name: "Gianfranco Funari",
                quote:" 'Vedi, io sono sempre stato un personaggio scomodo, ma mica per niente è la sciatica, io nun riesco a stà seduto.'",
                image: "https://static.nexilia.it/nextquotidiano/2019/03/corrado-guzzanti.jpg",
            },
            {
                name: "Vulvia",
                quote:"'Mbuto. 'Mbuto. Chi ha inventato il primo 'mbuto? Chi ha usato il primo 'mbuto per travasare l'acqua? Come faceva il primo 'mbuto? Si servivano di uno solo, o più due o più 'mbuti? 'mbuto, su rieducational channel... due o più 'mbuti... 'mbuto! bù'",
                image:"https://pbs.twimg.com/media/EYph7JkX0AcLtKr.jpg",
            },
            {
                name: "Padre Pizarro",
                quote:"'A noi ce interessa la vita dar concepimento alla nascita: già dopo un quarto d'ora nun gliene frega più niente a nessuno. Prova te a cercà un asilo nido.'",
                image: "https://cdn-static.dagospia.com/img/foto/03-2018/corrado-guzzanti-padre-pizzarro-993536.jpg",
            }
        ],
        
    },

    methods: {

        nextImage(){

            if(this.active === this.guzzantiCharacter.length - 1){
                this.active = 0;
            } else{
                this.active++;
            }
            
        },

        prevImage(){

            if(this.active === 0){
                this.active = this.guzzantiCharacter.length - 1;
            } else {
                this.active--;
            }
        },

        activateImage(index){
            this.active = index;
        },

        scroll(){
            this.scrollfn = setInterval( () => {
                this.nextImage();
                console.log(this);
            }, this.time);
        },

        stopScroll(){
            clearInterval(this.scrollfn);
            this.scrollfn = null;
        },

        handleKeydown(event){

            if(event.keyCode == 37){
                this.prevImage();
            } else if(event.keyCode == 39){
                this.nextImage();
            }

        }
    },

    beforeMount() {
        window.addEventListener("keydown",this.handleKeydown,null);
    },

    beforeDestroy() {
        window.addEventListener("keydown",this.handleKeydown);
    }


});