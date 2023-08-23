const html = window.igTemplating.html;

window.setDotNetRef = (dotNetHelper) => {
    window.dotNetHelper = dotNetHelper;
};

igRegisterScript("columnBodyTemplateScript", (ctx) => {
    return html`
        <igc-button @click="${() => window.dotNetHelper.invokeMethodAsync('OnClickHandler', '' + ctx.cell.row.data['EmployeeID'])}" master_view-scope class="button">
            ${ctx.cell.row.data['EmployeeID']}
            <igc-ripple></igc-ripple>
        </igc-button>
    `
}, false);
