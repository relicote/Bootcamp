class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        //base do component
        const componentRoot = document.createElement("H1");
        componentRoot.textContent = this.getAttribute('noticia');
        debugger

        //estilizar o componente
        const style = document.createElement("style");
        style.textContent = `
        h1{
            color: red;
        }
        `;
        //enviar para shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
        
    }
}

customElements.define('titulo-dinamico', TituloDinamico);