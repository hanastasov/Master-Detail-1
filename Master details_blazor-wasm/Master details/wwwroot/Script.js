window.rowSelectionChangingHandler = (args) => {
    DotNet.invokeMethodAsync('Master details', 'UpdateSelectedRow', args.detail.added[0].OrderID);
}

window.rowSelectionListDetailsChangingHandler = (args) => {
    console.log(args)
    DotNet.invokeMethodAsync('Master details', 'UpdateSelectedRowFunc', args.detail.added[0].OrderID);
}


igRegisterScript("rowSelectionChangingHandler", rowSelectionChangingHandler, false);
igRegisterScript("rowSelectionListDetailsChangingHandler", rowSelectionListDetailsChangingHandler, false);
