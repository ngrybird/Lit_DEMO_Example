import {LitElement, html} from 'lit-element';

class APModal extends LitElement {
    
    render() {
        return html`
        <p> This is a paragraph. </p>
        `
    }
}

customElements.define('ap-modal', APModal);