import { LitElement } from 'lit';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
export default class InputDetailsCustomerDetails extends LitElement {
    static styles: import("lit").CSSResult;
    constructor();
    private grid;
    private northwindCloudAppService;
    private northwindCloudAppOrder?;
    private northwindCloudAppOrderDetail?;
    private northwindCloudAppCustomers?;
    onSelectCustomer(customer: any): void;
    onSelectOrder(args: any): void;
    private orderDetails?;
    private selectedOrder?;
    private selectedCustomer?;
    render(): import("lit-html").TemplateResult<1>;
}
