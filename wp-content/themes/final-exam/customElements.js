class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class BuynDev extends HTMLElement{
	connectedCallback(){
		this.innerHTML = `<a href="buy-kits">Buy Kits Here</a>&nbsp;<a href="develop-kits">Develop Kits Here</a>`;
	}
}

customElements.define("x-buydev", BuynDev);