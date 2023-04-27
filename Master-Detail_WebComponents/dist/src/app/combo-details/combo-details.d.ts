import { LitElement } from 'lit';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
export default class ComboDetails extends LitElement {
    static styles: import("lit").CSSResult;
    constructor();
    private grid;
    private northwindCloudAppService;
    private financialService;
    private northwindCloudAppOrder?;
    private northwindCloudAppOrderDetail?;
    private northwindCloudAppCustomers?;
    private orderDetails?;
    private selectedOrder?;
    private selectedCustomer?;
    private combo;
    onSelectCustomer(ev: any): void;
    onSelectOrder(args: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
