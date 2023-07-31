import { LitElement } from 'lit';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
import { BeforeEnterObserver, RouterLocation } from '@vaadin/router';
export default class ListDetails extends LitElement implements BeforeEnterObserver {
    static styles: import("lit").CSSResult;
    constructor();
    private dataService;
    private grid;
    onSelectCustomer(customer: any): void;
    onSelectOrder(args: any): void;
    private customerID;
    onBeforeEnter(location: RouterLocation): void;
    private northwindCloudAppService;
    private northwindCloudAppOrder?;
    private northwindCloudAppOrderFiltered?;
    private northwindCloudAppOrderDetail?;
    private northwindCloudAppCustomers?;
    private orderDetails?;
    private selectedOrder?;
    private selectedCustomer?;
    render(): import("lit-html").TemplateResult<1>;
}
