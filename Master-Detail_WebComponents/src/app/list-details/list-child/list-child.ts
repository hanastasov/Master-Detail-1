import { LitElement, html } from "lit";
import { customElement } from 'lit/decorators.js';
import { BeforeEnterObserver, RouterLocation } from "@vaadin/router";

@customElement('app-list-child')
export default class ListChild extends LitElement implements BeforeEnterObserver {
  private name!: string;
  public onBeforeEnter(location: RouterLocation) {
    this.name = location.params.name as string;
  }

  render() {
    return html`
      <div class="content">Hi, ${this.name}!</div>
    `
  }
}
