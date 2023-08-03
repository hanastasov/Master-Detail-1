import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import { OrderDto } from '../../models/northwind-extended/order-dto';
import { CustomerDto } from '../../models/northwind-extended/customer-dto';
import { OrderDetailDto } from '../../models/northwind-extended/order-detail-dto';
import NorthwindExtendedService from '../../services/NorthwindExtended-service';

defineComponents(IgcCardComponent, IgcButtonComponent, IgcRippleComponent, IgcIconButtonComponent, IgcIconComponent);

@customElement('app-child-view')
export default class ChildView extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .card {
      width: 320px;
      height: max-content;
      min-width: 320px;
      flex-shrink: 0;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .h5 {
      height: max-content;
      min-width: min-content;
    }
    .button {
      height: max-content;
    }
  `;

  constructor() {
    super();
    this.northwindExtendedService.getCustomerDto().then((data) => {
      this.northwindExtendedCustomerDto = data;
    }, err => console.log(err));
  }

  private northwindExtendedService: NorthwindExtendedService = new NorthwindExtendedService();

  @property()
  private northwindExtendedCustomerDto?: CustomerDto;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      ${this.northwindExtendedCustomerDto?.map((item) => html`
        <igc-card class="card">
          <igc-card-header>
            <h3 slot="title">
              ${item.companyName}
            </h3>
            <h5 slot="subtitle">
              Subtitle goes here...
            </h5>
          </igc-card-header>
          <igc-card-content class="body-content">
            <h5 class="h5">
              Heading
            </h5>
          </igc-card-content>
          <igc-card-actions class="actions-content">
            <igc-button variant="flat" slot="start" class="button">
              ${item.city}
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-icon-button slot="end" variant="flat">
              <span class="material-icons">
                favorite
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button slot="end" variant="flat">
              <span class="material-icons">
                bookmark
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button slot="end" variant="flat">
              <span class="material-icons">
                share
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </igc-card-actions>
        </igc-card>
      `)}
      <igc-card class="card">
        <igc-card-header>
          <h3 slot="title">
          </h3>
          <h5 slot="subtitle">
          </h5>
        </igc-card-header>
        <igc-card-actions class="actions-content">
          <igc-button variant="flat" slot="start" class="button">
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-icon-button slot="end" variant="flat">
            <span class="material-icons">
              favorite
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <igc-icon-button slot="end" variant="flat">
            <span class="material-icons">
              bookmark
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <igc-icon-button slot="end" variant="flat">
            <span class="material-icons">
              share
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
        </igc-card-actions>
      </igc-card>
    `;
  }
}
