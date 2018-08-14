import React, {Component} from 'react';
import './Admin.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';


class AdminUsers extends Component {

    //testing chats
    componentDidMount () {
        window.scroll(0, 0)
    }

    render() {
        const {  numSelected } = this.props;

        return (
            <div className="anuncios">
                <Toolbar>
                    <div>
                        {numSelected > 0 ? (
                                <Typography color="inherit" variant="subheading">
                                    {numSelected} selected
                                </Typography>
                            ) : (
                                <Typography variant="title" id="tableTitle">
                                    Lista de Usuarios
                                </Typography>
                            )}
                    </div>
                    <div>
                        {numSelected > 0 ? (
                                <Tooltip title="Delete">
                                    <IconButton aria-label="Delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            ) : (
                                <Tooltip title="Filter list">
                                    <IconButton aria-label="Filter list">
                                        <FilterListIcon />
                                    </IconButton>
                                </Tooltip>
                            )}
                    </div>
                </Toolbar>
                <Table  aria-labelledby="tableTitle">
                    <TableBody>
                        <TableRow
                            hover
                            role="checkbox"
                        >
                            <TableCell padding="checkbox">
                                <Checkbox />
                            </TableCell>
                            <TableCell component="th" scope="row" padding="none">
                                Nombre del Usuario
                            </TableCell>
                            <TableCell >Fecha de registro</TableCell>
                            <TableCell >Status</TableCell>
                        </TableRow>
                        <TableRow style={{ height: 49  }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    </TableBody>
                </Table>

                <TablePagination
                    component="div"
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />

            </div>
        );
    }
}



export default AdminUsers;
