import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcComboComponent, IgcInputComponent } from 'igniteui-webcomponents';
import { IgcPieChartModule } from 'igniteui-webcomponents-charts';
import { ModuleManager } from 'igniteui-webcomponents-core';
import 'igniteui-webcomponents-grids/grids/combined.js';
import { OrderDto } from '../models/northwind-extended/order-dto';
import { CustomerDto } from '../models/northwind-extended/customer-dto';
import { OrderDetailDto } from '../models/northwind-extended/order-detail-dto';
import NorthwindExtendedService from '../services/NorthwindExtended-service';
import { IgcComboChangeEventArgs } from 'igniteui-webcomponents/components/combo/types';
import { Subject, takeUntil } from 'rxjs';
import { IgcRowSelectionEventArgs } from 'igniteui-webcomponents-grids/grids';

defineComponents(IgcComboComponent, IgcInputComponent);

ModuleManager.register(IgcPieChartModule);

@customElement('app-master-view')
export default class MasterView extends LitElement {
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
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      background-color: hsla(var(--ig-gray-100));
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 15px;
      position: relative;
      padding: 20px;
      height: 17%;
      min-width: 50px;
      min-height: 50px;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 16px;
      height: 83%;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
      background-color: hsla(var(--ig-gray-100));
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 16px;
      width: 20%;
      min-width: 50px;
      min-height: 50px;
    }
    .group_4 {
      background-color: transparent;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 16px;
      width: 80%;
      min-width: 50px;
      min-height: 50px;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      height: 5%;
      min-width: 50px;
      min-height: 50px;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 15px;
      position: relative;
      height: 45%;
      min-width: 50px;
      min-height: 50px;
    }
    .single-select-combo {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .input {
      height: max-content;
      min-width: min-content;
    }
    .grid {
      min-width: 600px;
      min-height: 85px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .grid_1 {
      min-width: 600px;
      min-height: 100px;
    }
    .h5 {
      height: max-content;
      min-width: min-content;
    }
    .h5_1 {
      color: hsla(var(--ig-secondary-700));
      height: max-content;
      min-width: min-content;
    }
    .pie-chart {
      width: 30%;
      min-width: 150px;
      min-height: 150px;
    }
  `;

  constructor() {
    super();
    this.northwindExtendedService.getCustomerDto().then((data) => {
      this.northwindExtendedCustomerDto = data;
    }, err => console.log(err));

    this.selectedCustomer$.pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.selectedCustomerID = value;

      this.northwindExtendedService.getCustomerDto1(value).then((data) => {
        this.northwindExtendedCustomerDto1 = [data];
      }, err => console.log(err));

      this.northwindExtendedService.getOrderDto(value).then((data) => {
        this.northwindExtendedOrderDto = data;
      }, err => console.log(err));
    });

    this.selectedOrderID$.pipe(takeUntil(this.destroy$)).subscribe(value => {
      this.northwindExtendedService.getOrderDetailDto(value.toString()).then((data) => {
        this.northwindExtendedOrderDetailDto = data;
      }, err => console.log(err));
    });
  }

  public disconnectedCallback() {
    this.selectedOrderID$.complete();
    this.selectedCustomer$.complete();
    this.destroy$.next(0);
    this.destroy$.complete();
  }

  private selectedCustomer$ = new Subject<string>();
  private selectedCustomerID: string | null = null;

  private selectedOrderID$ = new Subject<number>();
  private selectedOrderID: number | null = null;

  private destroy$ = new Subject();

  private northwindExtendedService: NorthwindExtendedService = new NorthwindExtendedService();

  @property()
  private northwindExtendedCustomerDto?: CustomerDto[] = []; // init as empty arr to make sure it doesn't throw before data is fetched

  @property()
  private northwindExtendedCustomerDto1?: CustomerDto[] = [];

  @property()
  private northwindExtendedOrderDto?: OrderDto[];

  @property()
  private northwindExtendedOrderDetailDto?: OrderDetailDto[];

  private handleSelectionChanging(args: CustomEvent<IgcComboChangeEventArgs>) {
    if (args.detail.newValue.length) {
      this.selectedCustomer$.next(args.detail.newValue[0]);
      this.selectedCustomerID = args.detail.newValue[0];
      return;
    }

    this.selectedCustomerID = null;
    this.selectedOrderID = null;
    this.northwindExtendedCustomerDto1 = [];
    this.northwindExtendedOrderDto = [];
    this.northwindExtendedOrderDetailDto = [];
  }

  private handleRowSelectionChanging(args: CustomEvent<IgcRowSelectionEventArgs>) {
    if (args.detail.newSelection[0]?.orderId) {
      this.selectedOrderID = args.detail.newSelection[0].orderId;
      this.selectedOrderID$.next(args.detail.newSelection[0].orderId);
      return;
    }

    this.selectedOrderID = null;
    this.northwindExtendedOrderDetailDto = [];
  }

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <link rel='stylesheet' href='node_modules/igniteui-webcomponents-grids/grids/themes/light/material.css'>
      <div class="column-layout group">
        <div class="row-layout group_1">
          <igc-combo @igcChange=${this.handleSelectionChanging} ?outlined="${true}" .data="${this.northwindExtendedCustomerDto}" value-key="customerId" display-key="customerId" ?single-select="${true}" class="single-select-combo"></igc-combo>

          <igc-grid .data="${this.northwindExtendedCustomerDto1}" primary-key="customerId" display-density="cosy" allow-filtering="true" filter-mode="excelStyleFilter" auto-generate="false" class="ig-typography ig-scrollbar grid">
            <igc-column field="customerId" data-type="string" header="customerId" sortable="true" selectable="false"></igc-column>
            <igc-column field="companyName" data-type="string" header="companyName" sortable="true" selectable="false"></igc-column>
            <igc-column field="contactName" data-type="string" header="contactName" sortable="true" selectable="false"></igc-column>
            <igc-column field="contactTitle" data-type="string" header="contactTitle" sortable="true" selectable="false"></igc-column>
            <igc-column field="address" data-type="string" header="address" sortable="true" selectable="false"></igc-column>
            <igc-column field="city" data-type="string" header="city" sortable="true" selectable="false"></igc-column>
            <igc-column field="region" data-type="string" header="region" sortable="true" selectable="false"></igc-column>
            <igc-column field="postalCode" data-type="string" header="postalCode" sortable="true" selectable="false"></igc-column>
            <igc-column field="country" data-type="string" header="country" sortable="true" selectable="false"></igc-column>
            <igc-column field="phone" data-type="string" header="phone" sortable="true" selectable="false"></igc-column>
            <igc-column field="fax" data-type="string" header="fax" sortable="true" selectable="false"></igc-column>
          </igc-grid>
        </div>

        <div class="row-layout group_2">
          <div class="column-layout group_3">
            <h5 class="h5">
              Customer Details
            </h5>
            ${this.northwindExtendedCustomerDto1?.map((item) => html`
              <igc-input .value="${item.companyName}" label="Company Name" ?disabled="${true}" ?outlined="${true}" class="input"></igc-input>
            `)}
            ${this.northwindExtendedCustomerDto1?.map((item) => html`
              <igc-input .value="${item.contactName}" label="Contract Name" ?disabled="${true}" ?outlined="${true}" class="input"></igc-input>
            `)}
            ${this.northwindExtendedCustomerDto1?.map((item) => html`
              <igc-input .value="${item.contactTitle}" label="Contract Title" ?disabled="${true}" ?outlined="${true}" class="input"></igc-input>
            `)}
            ${this.northwindExtendedCustomerDto1?.map((item) => html`
              <igc-input .value="${item.address}" label="Address" ?disabled="${true}" ?outlined="${true}" class="input"></igc-input>
            `)}
            ${this.northwindExtendedCustomerDto1?.map((item) => html`
              <igc-input .value="${item.city}" label="City" ?disabled="${true}" ?outlined="${true}" class="input"></igc-input>
            `)}
            ${this.northwindExtendedCustomerDto1?.map((item) => html`
              <igc-input .value="${item.country}" label="Country" ?disabled="${true}" ?outlined="${true}" class="input"></igc-input>
            `)}
          </div>

          <div class="column-layout group_4">
            <div class="row-layout group_5">
              <h5 class="h5">
                Showing orders for:
              </h5>
              <h5 class="h5_1">
                ${this.selectedCustomerID}
              </h5>
            </div>

            <igc-grid .data="${this.northwindExtendedOrderDto}" @rowSelectionChanging=${this.handleRowSelectionChanging} primary-key="orderId" display-density="cosy" row-selection="single" allow-filtering="true" filter-mode="excelStyleFilter" auto-generate="false" height="45%" class="ig-typography ig-scrollbar grid_1">
              <igc-column field="orderId" data-type="number" header="orderId" sortable="true" selectable="false"></igc-column>
              <igc-column field="customerId" data-type="string" header="customerId" sortable="true" selectable="false"></igc-column>
              <igc-column field="employeeId" data-type="number" header="employeeId" sortable="true" selectable="false"></igc-column>
              <igc-column field="orderDate" data-type="date" header="orderDate" sortable="true" selectable="false"></igc-column>
              <igc-column field="requiredDate" data-type="date" header="requiredDate" sortable="true" selectable="false"></igc-column>
              <igc-column field="shippedDate" data-type="date" header="shippedDate" sortable="true" selectable="false"></igc-column>
              <igc-column field="shipVia" data-type="number" header="shipVia" sortable="true" selectable="false"></igc-column>
              <igc-column field="freight" data-type="number" header="freight" sortable="true" selectable="false"></igc-column>
              <igc-column field="shipName" data-type="string" header="shipName" sortable="true" selectable="false"></igc-column>
              <igc-column field="shipAddress" data-type="string" header="shipAddress" sortable="true" selectable="false"></igc-column>
              <igc-column field="shipCity" data-type="string" header="shipCity" sortable="true" selectable="false"></igc-column>
              <igc-column field="shipRegion" data-type="string" header="shipRegion" sortable="true" selectable="false"></igc-column>
              <igc-column field="shipPostalCode" data-type="string" header="shipPostalCode" sortable="true" selectable="false"></igc-column>
              <igc-column field="shipCountry" data-type="string" header="shipCountry" sortable="true" selectable="false"></igc-column>
            </igc-grid>
            
            <div class="row-layout group_5">
              <h5 class="h5">
                Showing order details for:
              </h5>
              <h5 class="h5_1">
                ${this.selectedOrderID}
              </h5>
            </div>

            <div class="row-layout group_6">
              <igc-grid .data="${this.northwindExtendedOrderDetailDto}" primary-key="orderId" display-density="cosy" allow-filtering="true" filter-mode="excelStyleFilter" auto-generate="false" width="70%" height="100%" class="ig-typography ig-scrollbar grid_1">
                <igc-column field="orderId" data-type="number" header="orderId" sortable="true" selectable="false"></igc-column>
                <igc-column field="productId" data-type="number" header="productId" sortable="true" selectable="false"></igc-column>
                <igc-column field="unitPrice" data-type="number" header="unitPrice" sortable="true" selectable="false"></igc-column>
                <igc-column field="quantity" data-type="number" header="quantity" sortable="true" selectable="false"></igc-column>
                <igc-column field="discount" data-type="number" header="discount" sortable="true" selectable="false"></igc-column>
              </igc-grid>

              <igc-pie-chart .dataSource="${this.northwindExtendedOrderDetailDto}" label-member-path="orderId" value-member-path="orderId" class="pie-chart"></igc-pie-chart>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
