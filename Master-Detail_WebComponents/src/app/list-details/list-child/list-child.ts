import { LitElement, html } from "lit";
import { customElement } from 'lit/decorators.js';
// import { routings } from '../../app-routing';
import { getRouter } from '../../app-router';

@customElement('app-list-child')
export default class ListChild extends LitElement {
  render() {
    const router = getRouter();
    return html`
      <div class="content">Hi, ${router?.location?.params?.name}!</div>
    `
  }
}
