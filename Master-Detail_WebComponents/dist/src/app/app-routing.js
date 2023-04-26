import './not-found/not-found.js';
import './select-details/select-details';
import './combo-details/combo-details';
import './list-details/list-details';
import './input-details-search/input-details-search';
import './input-details-customer-details/input-details-customer-details';
import './cascade-select/cascade-select';
export const routes = [
    { path: '', component: 'app-select-details', name: 'Select Details' },
    { path: 'select-details', component: 'app-select-details', name: 'Select Details' },
    { path: 'combo-details', component: 'app-combo-details', name: 'Combo details' },
    { path: 'list-details', component: 'app-list-details', name: 'List details' },
    { path: 'input-details/search-results', component: 'app-input-details-search', name: 'Input details search' },
    { path: 'input-details/customer-details', component: 'app-input-details-customer-details', name: 'Input details customer details' },
    { path: 'cascade-select', component: 'app-cascade-select', name: 'Cascade select' },
    // The fallback route should always be after other alternatives.
    { path: '(.*)', component: 'app-not-found' }
];
//# sourceMappingURL=app-routing.js.map