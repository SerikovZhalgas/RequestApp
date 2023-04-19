import {requestsType} from "../../Store/Reducers/RequestsList-reducer";
import * as React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import {visuallyHidden} from "@mui/utils";
import {tableStyles} from "../../Pages/RequestsList/RequestsTable/RequestsTable";
import sortIcon from '../../Assets/svg/svg-table-sort-icon.svg';

//--------------------------Types--------------------------
export type TableOrder = 'asc' | 'desc';
export type HeadCellRequests = {
    disablePadding: boolean;
    id: keyof requestsType;
    label: string;
    numeric: boolean;
}
export type EnhancedTableProps = {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof requestsType) => void;
    order: TableOrder;
    orderBy: string;
    rowCount: number;
}
//--------------------------Constants-----------------------
export const headCellsRequests: readonly HeadCellRequests[] = [
    {
        id: 'id',
        numeric: true,
        disablePadding: false,
        label: '№',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Имя',
    },
    {
        id: 'phoneNumber',
        numeric: false,
        disablePadding: true,
        label: 'Номер телефона',
    },
    {
        id: 'email',
        numeric: false,
        disablePadding: true,
        label: 'E-mail',
    },
    {
        id: 'createdDate',
        numeric: false,
        disablePadding: true,
        label: 'Дата добавления',
    },
];
//--------------------------Functions-----------------------
export function EnhancedTableHead(props: EnhancedTableProps) {
    const {order, orderBy, onRequestSort} =
        props;
    const createSortHandler =
        (property: keyof requestsType) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
            <TableRow>
                {headCellsRequests.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'center'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={tableStyles.muiTableSortLabel}
                    >
                        {
                            orderBy === headCell.id
                                ?
                                <TableSortLabel
                                    direction={orderBy === headCell.id ? order : 'asc'}
                                    onClick={createSortHandler(headCell.id)}
                                    sx={tableStyles.muiTableSortLabel}
                                    IconComponent={()=><img src={sortIcon} alt='sort-icon'/>}
                                >
                                    {headCell.label}
                                    {orderBy === headCell.id ? (
                                        <Box component="span" sx={visuallyHidden}>
                                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                        </Box>
                                    ) : null}
                                </TableSortLabel>
                                :
                                <>
                                    {headCell.label}
                                </>
                        }
                    </TableCell>
                ))}
            </TableRow>
    );
}

export function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

export function getComparator<Key extends keyof any>(order: TableOrder, orderBy: Key,): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}