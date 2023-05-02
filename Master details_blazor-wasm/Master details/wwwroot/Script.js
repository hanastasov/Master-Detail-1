window.rowSelectionChangingHandler = (args) => {
    DotNet.invokeMethodAsync('Master details', 'UpdateSelectedRow', args.detail.added[0].OrderID);
}

window.rowSelectionListDetailsChangingHandler = (args) => {
    DotNet.invokeMethodAsync('Master details', 'UpdateSelectedRowFunc', args.detail.added[0].OrderID);
}

window.rowSelectionChangingHandlerCombo = (args) => {
    DotNet.invokeMethodAsync('Master details', 'UpdateSelectedRowCombo', args.detail.added[0].OrderID);
}

igRegisterScript("rowSelectionChangingHandler", rowSelectionChangingHandler, false);
igRegisterScript("rowSelectionListDetailsChangingHandler", rowSelectionListDetailsChangingHandler, false);
igRegisterScript("rowSelectionChangingHandlerCombo", rowSelectionChangingHandlerCombo, false);
