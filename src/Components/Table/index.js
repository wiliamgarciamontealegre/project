import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import PropTypes from 'prop-types';


const useStyles = makeStyles({
    table: {
        minWidth: "100%",
    },
});


export default function DenseTable({ fields, infoData }) {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {fields.map((item, key) => {
                            return <TableCell key={key}>{item.label}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {infoData?.map((row, key) => (
                        <TableRow key={key}>
                            {fields.map((item, key) => {
                                
                                let dato = row.versions[0][item.field];
                                if (item.field === "amount") {
                                    dato = row.versions[0].price[item.field];
                                }
                                return <TableCell key={key}>{dato}</TableCell>
                            })}

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

DenseTable.propTypes = {
    fields: PropTypes.array,
    infoData: PropTypes.array
}