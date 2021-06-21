import { ColDef } from "ag-grid-community";

export const countriesGridColDefs: ColDef[] = [
    {
        headerName: 'Name',
        field: 'name',
        filter: 'agTextColumnFilter',
        cellRenderer: 'agGroupCellRenderer',
        width: 300
    },
    {
        headerName: 'Flag',
        cellRenderer: 'flagRenderer',
        cellClass: 'center-cell',
        sortable: false
    }
];
