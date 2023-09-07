import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcCardComponent, IgcInputComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import { northwindService } from '../service/northwind-service';

defineComponents(IgcInputComponent, IgcButtonComponent, IgcRippleComponent, IgcCardComponent);

@customElement('app-input-details-search')
export default class InputDetailsSearch extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 2rem;
      width: 100%;
      min-width: 50px;
      min-height: 50px;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 2rem 0 3rem;
      min-width: 50px;
      min-height: 50px;
    }
    .group_2 {
      background-color: hsla(var(--ig-gray-100));
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      height: 747px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      display: flex;
      flex-wrap: wrap;
      max-height: 80vh;
      overflow-y: scroll;
    }
    .card {
      margin: 1rem;
      width: 320px;
      height: max-content;
      min-width: 320px;
      flex-shrink: 0;
      flex-direction: row;
    }
    .group_4 {
      width: 100%;
    }
    .h5 {
      height: max-content;
      min-width: min-content;
    }
    .media-content {
      width: 64px;
      height: 64px;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .divider {
      display: none;
    }
    .input {
      margin: 0 1rem 0 0;
      width: 356px;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .button {
      width: 127px;
      height: max-content;
      flex-shrink: 0;
    }
    .button_1 {
      height: max-content;
    }
  `;
  constructor() {
    super();
    northwindService.getEmployees().then((data) => {
      this.employeenorthwindCloudAppEmployees = data;
      this.filteredValues = data;
    });
  }

  onChange(ev: any) {
    this.inputValue = ev.target.value;
    this.filteredValues = this.employeenorthwindCloudAppEmployees?.filter(employee => employee.firstName.toLowerCase().includes(this.inputValue.toLowerCase()) || 
    employee.lastName.toLowerCase().includes(this.inputValue.toLowerCase())) || [];
  }

  @property()
  private inputValue: string = '';

  @property()
  private employeenorthwindCloudAppEmployees?: any[];

  @property()
  private filteredValues!: any[];

  render() {
    const cards = [];
    if (this.filteredValues) {
      for (const employee of this.filteredValues) {
        cards.push(html`<igc-card class="card">
    <div class="group_4">
      <div class="row-layout">
        <igc-card-header>
          <div slot="thumbnail">
            <igc-card-media class="media-content">
              <img src="${employee.avatarUrl}" />
            </igc-card-media>
          </div>
          <h3 slot="title">
            ${employee.firstName} ${employee.lastName}
          </h3>
          <h5 slot="subtitle">
            ${employee.title}
          </h5>
        </igc-card-header>
      </div>
      <igc-card-content class="body-content">
      <a href="/input-details/customer-details?employeeId=${employee.employeeID}" class="button_1">
        <igc-button variant="flat" class="button_1">
          VIEW DETAILS
          <igc-ripple></igc-ripple>
        </igc-button>
        </a>
      </igc-card-content>
    </div>
    <span class="divider">Divider not yet available in WebComponents</span>
  </igc-card>`);
      }
    }

    return html`
  <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
  <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
  <link rel='stylesheet' href='../../ig-theme.css'>
  <div class="column-layout group">
    <h5 class="h5">
          Input details 
    </h5>
    <div class="row-layout group_1">
      <igc-input .value=${this.inputValue} @input=${this.onChange} label="Label/Placeholder" ?outlined="${true}" class="input"></igc-input>
      <igc-button class="button">
        Search
        <igc-ripple></igc-ripple>
      </igc-button>
    </div>
    <div class="column-layout group_2">
      <div class="row-layout group_3">
        ${cards}
      </div>
    </div>
  </div>
`;
  }
}
