import {LitElement, html} from 'lit-element';

class FirstElement extends LitElement {
    render() {
        return html`
        <p> This is a paragraph. </p>
        `
    }
}

customElements.define('first-element', FirstElement);