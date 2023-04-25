import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
let NotFound = class NotFound extends LitElement {
    render() {
        return html `
      <h2>Error 404: Page not found</h2>
    `;
    }
};
NotFound = __decorate([
    customElement('app-not-found')
], NotFound);
export default NotFound;
//# sourceMappingURL=not-found.js.map