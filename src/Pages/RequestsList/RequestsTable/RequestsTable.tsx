import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {requestsType} from '../../../Store/Reducers/RequestsList-reducer';
import {useAppSelector} from "../../../Utlis/Hooks/useAppSelector";
import {EnhancedTableHead, getComparator, stableSort, TableOrder} from '../../../Utlis/Functions/TableFunctions';

export const tableStyles = {
    muiTable: {
        minWidth: 1218
    },
    muiTableRow: {
        height: '54px',
        '&:nth-of-type(odd)': {
            backgroundColor: '#F7F7F7'
        }
    },
    muiTableCell: {
        borderBottom: 'none',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '120%',
        color: '#000',
    },
    muiTableSortLabel: {
        borderBottom: 'none',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '120%',
        color: '#888888',
    },
}

export const RequestsTable = () => {
    const requests = useAppSelector(state => state.requestsList.requests);
    const [order, setOrder] = React.useState<TableOrder>('asc');
    const orderBy = 'createdDate';

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof requestsType) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
    };

    return (
        <Table sx={tableStyles.muiTable}>
            <tbody>
            <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={requests.length}
            />
            </tbody>
            <tbody>
            {stableSort(requests, getComparator(order, orderBy))
                .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                        <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.id}
                            sx={tableStyles.muiTableRow}
                        >
                            <TableCell id={labelId} align="center" sx={tableStyles.muiTableCell}>
                                {index+1}
                            </TableCell>
                            <TableCell align="center" sx={tableStyles.muiTableCell}>{row.name}</TableCell>
                            <TableCell align="center"
                                       sx={tableStyles.muiTableCell}>{row.phoneNumber}</TableCell>
                            <TableCell align="center" sx={tableStyles.muiTableCell}>{row.email}</TableCell>
                            <TableCell align="center"
                                       sx={tableStyles.muiTableCell}>{Intl.DateTimeFormat('ru').format(Number(row.createdDate))}</TableCell>
                        </TableRow>
                    );
                })}
            </tbody>
        </Table>
    );
}