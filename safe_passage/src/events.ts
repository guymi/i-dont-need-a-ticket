import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {state} from "lit/decorators/state.js";
// const Web3 = require("web3");
import Web3 from "web3";

@customElement('sp-events')
export class EventElement extends LitElement {
  @state()
  selectedEvent = '';

  render(){
    return html`<div>
      <form>
        <select value="${this.selectedEvent}" name="events" id="events" @change=${this.onEventSelected}>
          <option></option>
          <option value="Swimming_class15_16">Swimming class 25/5/2022 15:00-16:00</option>
          <option value="Shlomo Artzi">Shlomo Artzi 1/1/2023 21:00-23:00</option>
        </select>
        <div>
            <button @click=${() => this.createRequest()}>bla</button>
        </div>
      </form>
      <h6>${this.selectedEvent}</h6>
    </div>`
  }

  onEventSelected(e: Event) {
    const eventName = (e.target as HTMLSelectElement).value;
    this.selectedEvent = eventName;
  }

  private async createRequest() {
    if (window.ethereum) {
      await window.ethereum.request({method: 'eth_requestAccounts'});
      // window.web3 = new Web3(window.ethereum);
      return true;
    }

    return false;
  }
}
