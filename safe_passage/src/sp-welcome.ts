import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {state} from 'lit/decorators/state.js';
import './tickets.ts';
import './events.ts';


@customElement('sp-welcome')
export class WelcomeElement extends LitElement {

  @state()
  userType = '';

  render(){
    return html`
      <h1>Welcome, you are a ${this.userType}</h1>
      ${
        this.userType ? html`` : html`
          <button @click=${() => this.userType='Accompanied'}>Accompanied</button>
          <button @click=${() => this.userType='Companion'}>Companion</button>
        `
      }
      ${this.userType == 'Companion' ? html`<p>Your tickets:</p>
        <sp-tickets></sp-tickets>
      `: html``}
      ${this.userType == 'Accompanied' ? html`<p>Select event:</p>
      <sp-events></sp-events>
      `: html``}

      ${this.userType ? html`<button @click=${() => this.userType = ''}>Change</button>` : html``}
    `;
  }
}
