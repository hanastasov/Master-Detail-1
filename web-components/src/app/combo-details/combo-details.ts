import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { defineComponents, IgcComboComponent } from 'igniteui-webcomponents';
import 'igniteui-webcomponents-grids/grids/combined.js';
import { Subject } from 'rxjs';
import { Customer } from '../models/northwind/customer';
import { Order } from '../models/northwind/order';
import { CustomerOrderDetail } from '../models/northwind/customer-order-detail';
import { IgcComboChangeEventArgs } from 'igniteui-webcomponents/components/combo/types';
import { northwindService } from '../service/northwind-service';
import { customerService } from '../service/customer-service';
import { orderService } from '../service/order-service';

defineComponents(IgcComboComponent);

@customElement('app-combo-details')
export default class ComboDetails extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      flex-direction: row;
      overflow: auto;
      position: relative;
      padding: 32px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
      justify-content: space-between;
    }
    .group_1 {
      justify-content: space-evenly;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 327px;
      height: 50px;
      min-width: 50px;
      min-height: 50px;
      align-self: flex-end;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_3 {
      background-color: hsla(var(--ig-gray-100));
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      padding: 32px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      width: 450px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_6 {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      min-width: 50px;
      min-height: 50px;
    }
    .group_7 {
      border-color: hsla(var(--ig-gray-300));
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_8 {
      border-color: hsla(var(--ig-gray-300));
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      min-width: 50px;
      min-height: 50px;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_10 {
      border-color: hsla(var(--ig-gray-300));
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      margin: 0 16px 0 0;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_11 {
      border-color: hsla(var(--ig-gray-300));
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_12 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .button {
      width: 50px;
      height: max-content;
      align-self: flex-start;
    }
    .combo {
      height: max-content;
      min-width: min-content;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .grid {
      min-width: 50px;
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
    `;

  constructor() {
    super();
    northwindService.getCustomers().then((data) => {
      this.northwindCustomers = data
    }, err => console.log(err));
    // TODO: for string property we may provide undefined and it works great
    this.$customerOrder.subscribe(c => northwindService.getCustomerOrders(c?.customerID).then((data) => {
      this.northwindCustomerOrders = data;
    }, err => this.northwindCustomerOrders = []));
    // TODO: for numeric property we should provide default value, as undefined throws error
    this.$customerOrderDetail.subscribe(s => northwindService.getCustomerOrderDetails(s?.orderID ?? -1).then((data) => {
      this.northwindCustomerOrderDetails = data;
    }, err => this.northwindCustomerOrderDetails = []));

    customerService.customer$.subscribe(v => this.customer = v);

    orderService.order.subscribe(v => this.order = v);
  }

  private $customerOrder: Subject<Customer> = new Subject<Customer>();
  private $customerOrderDetail: Subject<Order> = new Subject<Order>();
  
  @state()
  public order?: Order | null;

  @state()
  public customer?: Customer | null;

  private _selectedCustomer?: Customer;
  public get selectedCustomer(): Customer | undefined {
    return this._selectedCustomer;
  }
  public set selectedCustomer(v: Customer | undefined) {
    this._selectedCustomer = v;
    this.$customerOrder.next(v!);
    // TODO: try to describe property depended on other property - Dependent variable feature!
    this.selectedOrder = undefined;
  }

  private _selectedOrder?: Order;
  public get selectedOrder(): Order | undefined {
    return this._selectedOrder;
  }
  public set selectedOrder(v: Order | undefined) {
    this._selectedOrder = v;
    this.$customerOrderDetail.next(v!);
  }

  @property()
  public northwindCustomers: Customer[] = [];

  @property()
  public northwindCustomerOrders: Order[] = [];

  @property()
  public northwindCustomerOrderDetails: CustomerOrderDetail[] = [];

  public comboSelectionChanging(e: CustomEvent<IgcComboChangeEventArgs>) {
    this.selectedCustomer = e.detail.newValue[0];
  }

  public gridRowSelectionChanging(e: any) { // TODO: what is the type here?
    this.selectedOrder = e.detail.newSelection[0];
  }

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <link rel='stylesheet' href='node_modules/igniteui-webcomponents-grids/grids/themes/light/material.css'>
      <div class="column-layout group">
        <igc-combo .data="${this.northwindCustomers}" display-key="contactName" single-select="true"
          @igcChange="${this.comboSelectionChanging}" class="combo">
        </igx-simple-combo>
      </div>

      <div> ${this.customer?.contactName} </div>
      <div> ${(this.order as any)?.orderId} </div>

      <div class="column-layout group_2">
        <div class="row-layout group_3">
          <div class="column-layout group_4">
            <div class="row-layout group_5">
              <div class="column-layout group_6">
                <h5 class="content">
                  ${this.selectedCustomer?.contactName}
                </h5>
                <p class="ig-typography__subtitle-1 content">
                  ${this.selectedCustomer?.customerID}
                </p>
              </div>
            </div>
            <div class="column-layout group_7">
              <p class="ig-typography__subtitle-2 content">
                Title
              </p>
              <p class="content">
                ${this.selectedCustomer?.contactTitle}
              </p>
            </div>
            <div class="column-layout group_7">
              <p class="ig-typography__subtitle-2 content">
                Email
              </p>
              <p class="content">
                Email should be here
              </p>
            </div>
            <div class="column-layout group_7">
              <p class="ig-typography__subtitle-2 content">
                Phone
              </p>
              <p class="content">
                ${this.selectedCustomer?.phone}
              </p>
            </div>
            <div class="column-layout group_8">
              <p class="ig-typography__subtitle-2 content">
                Street
              </p>
              <p class="content">
                ${this.selectedCustomer?.address}
              </p>
            </div>
            <div class="row-layout group_9">
              <div class="column-layout group_10">
                <p class="ig-typography__subtitle-2 content">
                  City
                </p>
                <p class="content">
                  ${this.selectedCustomer?.city}
                </p>
              </div>
              <div class="column-layout group_11">
                <p class="ig-typography__subtitle-2 content">
                  State
                </p>
                <p class="content">
                  ${this.selectedCustomer?.region}
                </p>
              </div>
            </div>
            <div class="column-layout group_8">
              <p class="ig-typography__subtitle-2 content">
                Country
              </p>
              <p class="content">
                ${this.selectedCustomer?.country}
              </p>
            </div>
          </div>
          <div class="column-layout group_12">
            <div class="column-layout group_18">
              <igc-grid .data="${this.northwindCustomerOrders}" primary-key="orderID" display-density="cosy" row-selection="single"
                hide-row-selectors="true" class="grid" @rowSelectionChanging="${this.gridRowSelectionChanging}">
                <igc-grid-toolbar>
                  <igc-grid-toolbar-title>
                    Orders for ${this.selectedCustomer?.contactName}
                  </igc-grid-toolbar-title>
                </igc-grid-toolbar>
                <igc-column field="orderID" data-type="number" header="orderID"
                  selectable="false"></igc-column>
                <igc-column field="customerID" data-type="string" header="customerID"
                  selectable="false"></igc-column>
                <igc-column field="employeeID" data-type="number" header="employeeID"
                  selectable="false"></igc-column>
                <igc-column field="orderDate" data-type="date" header="orderDate"
                  selectable="false"></igc-column>
                <igc-column field="requiredDate" data-type="date" header="requiredDate"
                  selectable="false"></igc-column>
                <igc-column field="shippedDate" data-type="date" header="shippedDate"
                  selectable="false"></igc-column>
                <igc-column field="shipVia" data-type="number" header="shipVia"
                  selectable="false"></igc-column>
                <igc-column field="freight" data-type="number" header="freight"
                  selectable="false"></igc-column>
                <igc-column field="shipName" data-type="string" header="shipName"
                  selectable="false"></igc-column>
                <igc-column field="shipAddress" data-type="string" header="shipAddress street"
                  selectable="false"></igc-column>
                <igc-column field="shipCity" data-type="string" header="shipAddress city"
                  selectable="false"></igc-column>
                <igc-column field="shipRegion" data-type="string" header="shipAddress region"
                  selectable="false"></igc-column>
                <igc-column field="shipPostalCode" data-type="string" header="shipAddress postalCode"
                  selectable="false"></igc-column>
                <igc-column field="shipCountry" data-type="string" header="shipAddress country"
                  selectable="false"></igc-column>
              </igx-grid>
            </div>
            <div class="column-layout group_18">
              <igc-grid .data="${this.northwindCustomerOrderDetails}" primary-key="productName" display-density="cosy"
                row-selection="single" cell-selection="none" hide-row-selectors="true" class="grid">
                <igc-grid-toolbar>
                  <igc-grid-toolbar-title>Order details for order ${this.selectedOrder?.orderID ?? '???'} by
                  ${this.selectedCustomer?.contactName ?? '???'}
                  </igc-grid-toolbar-title>
                </igc-grid-toolbar>
                <igc-column field="productName" data-type="string" header="productName"
                  selectable="false"></igc-column>
                <igc-column field="unitPrice" data-type="number" header="unitPrice"
                  selectable="false"></igc-column>
                <igc-column field="quantity" data-type="number" header="quantity"
                  selectable="false"></igc-column>
                <igc-column field="discount" data-type="number" header="discount"
                  selectable="false"></igc-column>
                <igc-column field="extendedPrice" data-type="number" header="extendedPrice"
                  selectable="false"></igc-column>
              </igx-grid>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
