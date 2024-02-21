class Lista extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });

        const lista = eval(this.getAttribute("texto"));

        const ul = document.createElement('ul');

        for (let item of lista) {
            let click = 0;

            const li = document.createElement('li')
            li.innerText = item;
            li.onclick = () => {
             click++;
             li.innerText = `${item} (Clicou ${click} vezes)`;
            }
            ul.appendChild(li);
        }
        shadow.appendChild(ul);

    }
}
customElements.define("app-lista", Lista);