import { LitElement } from 'lit';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
export default class ListDetails extends LitElement {
    static styles: import("lit").CSSResult;
    constructor();
    private northwindCloudAppService;
    private northwindCloudAppOrder?;
    private northwindCloudAppOrderDetail?;
    private northwindCloudAppCustomers?;
    private selectedCustomer?;
    private selectedOrder?;
    private orderDetails?;
    onSelectCustomer(customer: any): void;
    onSelectOrder(args: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
