import { ColDef } from "ag-grid-community";

export const detailColDefs: ColDef[] = [
    {
        headerName: 'Population',
        field: 'population'
    },
    {
        headerName: 'Time Zones',
        field: 'timezones'
    },
    {
        headerName: 'Currencies',
        field: 'currencies',
        valueGetter: (params)  =>  params.data.currencies.map(curr => `${curr.name} ${curr.symbol ? `(${curr.symbol})` : ''}`).join(', '),
        width: 300
    },
    {
        headerName: 'Languages',
        field: 'languages',
        valueGetter: (params)  =>  params.data.languages.map(lang => lang.name).join(', '),
        width: 300
    },
    {
        headerName: 'Capital City',
        field: 'capital'
    },
    {
        headerName: 'Bordering Countries',
        field: 'borders',
        width: 300
    }
];
