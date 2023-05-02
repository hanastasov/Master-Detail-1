import { LitElement } from 'lit';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
export default class InputDetailsCustomerDetails extends LitElement {
    static styles: import("lit").CSSResult;
    constructor();
    private grid;
    private northwindCloudAppService;
    private northwindCloudAppOrder?;
    private northwindCloudAppOrderFiltered?;
    private northwindCloudAppOrderDetail?;
    onSelectOrder(args: any): void;
    private orderDetails?;
    private selectedOrder?;
    private selectedEmployee?;
    render(): import("lit-html").TemplateResult<1>;
}
