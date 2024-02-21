class Lista extends HTMLElement {
    constructor() {
        super();

        this.clicados = 0;

    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });

        const lista = eval(this.getAttribute("texto"));
        const h2 = document.createElement('h2');
        h2.className = "clicados";
        h2.innerText = `Você clicou ${this.clicados} vezes em itens`;

        shadow.appendChild(h2);

        const ul = document.createElement('ul');

        for (let item of lista) {
            const li = document.createElement('li')
            li.innerText = item;
            li.onclick = () => {
             this.clicados++;
             this.shadowRoot.querySelector(".clicados").innerText = `Você clicou ${this.clicados} vezes em itens`;
            }
            ul.appendChild(li);
        }
        shadow.appendChild(ul);

    }
}
customElements.define("app-lista", Lista);