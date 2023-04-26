import { LitElement } from 'lit';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
export default class SelectDetails extends LitElement {
    static styles: import("lit").CSSResult;
    constructor();
    private northwindCloudAppService;
    private northwindCloudAppOrderDetail?;
    private northwindCloudAppOrder?;
    private northwindCloudAppCustomers?;
    private orderDetails?;
    private selectedOrder?;
    private selectedCustomer?;
    private grid;
    onSelectCustomer(ev: any): void;
    onSelectOrder(args: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
