class CardNews extends HTMLElement{
    constructor(){
        super();
        
        const shadwo = this.attachShadow({mode: "open"});

    }

}

customElements.define('card-nesw', CardNews);