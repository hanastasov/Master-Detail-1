import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcSelectComponent } from 'igniteui-webcomponents';

defineComponents(IgcSelectComponent);

@customElement('app-cascade-select')
export default class CascadeSelect extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 3rem;
      width: 1434px;
      min-width: 50px;
      min-height: 50px;
    }
    .select {
      width: 273px;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .select_1 {
      width: 275px;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .select_2 {
      width: 278px;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        <igc-select ?outlined="${true}" label="Country" class="select">
          <igc-select-item value="Option">
            Option
          </igc-select-item>
        </igc-select>
        <igc-select ?outlined="${true}" label="Region" class="select_1">
          <igc-select-item value="Option">
            Option
          </igc-select-item>
        </igc-select>
        <igc-select ?outlined="${true}" label="State" class="select_2">
          <igc-select-item value="Option">
            Option
          </igc-select-item>
        </igc-select>
      </div>
    `;
  }
}
