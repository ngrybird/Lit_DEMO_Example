import { LitElement, html} from 'lit-element';
import { connect } from 'pwa-helpers';
import { addOneToCounter }  from '../actions/actions.js'
import { store } from '../redux/store.js';

class MyPage extends connect(store)(LitElement) {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  static get properties() {
    return { 
      counter: { type: Number }
    };
  }

  stateChanged(state) { 
    this.counter = state;
  }

  clickHandler(event) {
    store.dispatch(addOneToCounter());
  }

  render() {
    return html`
    <div>
      Counter : <span>${this.counter}</span>
      <button @click="${this.clickHandler}">Increment</button>
    </div>
      
    `;
  }
}

customElements.define('ex10-litelement', MyPage);
