import { __decorate } from "tslib";
import { Router } from '@vaadin/router';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { routes } from './app-routing.js';
let App = class App extends LitElement {
    render() {
        return html `
      <div class="outer-wrapper">
        <router-outlet></router-outlet>
      </div>
    `;
    }
    firstUpdated() {
        var _a;
        const outlet = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('router-outlet');
        const router = new Router(outlet);
        router.setRoutes(routes);
    }
};
App.styles = css `
    router-outlet {
      width: 100%;
    }

    .outer-wrapper {
      display: flex;
      justify-content: center;
      height: 100%;
    }
  `;
App = __decorate([
    customElement('app-root')
], App);
export { App };
//# sourceMappingURL=app.js.map