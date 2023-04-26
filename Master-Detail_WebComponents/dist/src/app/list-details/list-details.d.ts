import { LitElement } from 'lit';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
export default class ListDetails extends LitElement {
    static styles: import("lit").CSSResult;
    constructor();
    private grid;
    onSelectCustomer(customer: any): void;
    onSelectOrder(args: any): void;
    private northwindCloudAppService;
    private northwindCloudAppOrder?;
    private northwindCloudAppOrderDetail?;
    private northwindCloudAppCustomers?;
    private orderDetails?;
    private selectedOrder?;
    private selectedCustomer?;
    render(): import("lit-html").TemplateResult<1>;
}
