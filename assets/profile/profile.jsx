class ProfileElement extends HTMLElement{

    connectedCallback() {
        this.innerHTML = "Bonjour JS"
    }

}

customElements.define('user-profile', ProfileElement)