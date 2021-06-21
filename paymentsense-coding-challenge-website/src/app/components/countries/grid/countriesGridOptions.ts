import { GridOptions } from "ag-grid-community";
import { countriesGridColDefs } from "./countriesGridColDefs";
import { detailColDefs } from "./detailColDefs";
import { FlagRendererComponent } from "./flag-renderer.component";

export const countriesGridOptions: GridOptions = {
    pagination: true,
    paginationPageSize: 25,
    columnDefs: countriesGridColDefs,
    defaultColDef: {
        sortable: true,
        resizable: true
    },
    frameworkComponents: {
        flagRenderer: FlagRendererComponent
    },
    masterDetail: true,
    detailCellRendererParams: {
        detailGridOptions: {
            columnDefs: detailColDefs,
            defaultColDef: {
                suppressMenu: true,
                resizable: true
            }
        },
        getDetailRowData: (params) =>  params.successCallback([params.data])
    },
    detailRowHeight: 154
};