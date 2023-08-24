class CardNews extends HTMLElement{
    constructor(){
        super();     
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){

        // Criando a Div Pai - Principal
        const componetRoot = document.createElement("div");
        componetRoot.setAttribute('class', 'card');

        // Criando card left
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute('class', 'card_left');

        const autor = document.createElement('span');
        const linkTitle = document.createElement('a');
        const newsContent = document.createElement('p');
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        

        // Criando card right
        const cardRight = document.createElement("div");
        cardRight.setAttribute('class', 'card_right');
        const newsImage = document.createElement('img');
        cardRight.appendChild(newsImage);


        //Pendurando os cards filhos ao Root
        componetRoot.appendChild(cardLeft);
        componetRoot.appendChild(cardRight);

        return componetRoot;
    }

    styles(){

    }
}

customElements.define('card-news', CardNews);