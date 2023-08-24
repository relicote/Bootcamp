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

        // Criando elementos do card left
        const autor = document.createElement('span');
        autor.textContent = 'By ' + (this.getAttribute('autor') || 'Anonymous');

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute('link-url');
 
        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('content');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        

        // Criando card right
        const cardRight = document.createElement("div");
        cardRight.setAttribute('class', 'card_right');

        //Criando elementos do card right
        const newsImage = document.createElement('img');
        newsImage.src = this.getAttribute('photo') || "assets/default.jpg";
        newsImage.alt = "Foto do vader";
        cardRight.appendChild(newsImage);


        //Pendurando os cards filhos ao Root
        componetRoot.appendChild(cardLeft);
        componetRoot.appendChild(cardRight);

        return componetRoot;
    }

    styles(){

        const style = document.createElement("style");

        style.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
        }
        
        .card{
            width: 75%;
            border: 1px solid gray;
            box-shadow: 10px 10px 24px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 10px 10px 24px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 24px 0px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card_left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        
        .card_left > p {
            color: gray;
        }
        
        .card_left > span {
            font-weight: 400;
        }
        
        
        .card_right img{
            width: 300px;
        }
        `;

        return style;
    }
}

customElements.define('card-news', CardNews);