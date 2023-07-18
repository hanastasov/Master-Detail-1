import { LitElement, css, html } from "lit";
import { customElement } from 'lit/decorators.js';
import { routings } from '../../app-routing';

@customElement('app-list-child')
export default class ListChild extends LitElement {
  render() {
    return html`
      <div class="content">Hi, ${routings.router?.location?.params?.name}!</div>
    `
  }
}
