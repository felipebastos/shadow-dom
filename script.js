class Lista extends HTMLElement {
    constructor() {
        super();


    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });



        const lista = eval(this.getAttribute("texto"));

        const ul = document.createElement('ul');

        for (let item of lista) {
            const li = document.createElement('li')
            li.innerText = item;
            ul.appendChild(li);
        }
        shadow.appendChild(ul);

    }
}
customElements.define("app-lista", Lista);