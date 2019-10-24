import { LitElement, html, css } from 'lit-element';
import { customButtonStyle } from './some-global-styles.js';

class MyPage extends LitElement {

  static get styles() {
    return [
      customButtonStyle(),

      css`
        .test-class-2 {
          background-color: blue;
          height: 100px;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="test-class-1"></div>
      <div class="test-class-2"></div>
    `;
  }
}

customElements.define('ex9-litelement', MyPage);