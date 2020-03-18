import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MUIDataTable from "mui-datatables";
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import ReactHtmlParser from 'react-html-parser';

import axios from 'axios';

const styles = theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
});

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            tableData: []

        }
    }

    componentDidMount = () => {
        axios.get('https://api.tvmaze.com/search/shows?q=walking')
        .then(res => {
            this.setState({ data: res.data })
        }).catch(err => {
            if (err) throw err;
        })
    }

    mappingData = () => {
        var mapData = this.state.data.map(dat => ({
            tittle: dat.show.name,
            description: <div>{ ReactHtmlParser(dat.show.summary) }</div>,
            image: dat.show.image.medium
        }))
        this.setState({ tableData: mapData })
    }

    render() {

        const columns = [
            {
                name: "tittle",
                label: "Tittle",
                options: {
                    filter: true,
                    sort: true
                }
            },
            {
                name: "description",
                label: "Description",
                options: {
                    filter: true,
                    sort: true
                }
            }
        ]

        const options = {
            filter: true,
            filterType: "dropdown",
            responsive: "scrollFullHeight",
            selectableRows: "none",
            download: false,
            print: true,
            expandableRows: true,
            sort: true,

            renderExpandableRow: (rowData, rowMeta) => {
                const image = this.state.tableData[rowMeta.dataIndex].image;

                return (
                    <TableRow>
                        <TableCell colSpan={rowData.length} style={{ paddingLeft: '61px' }}>
                            <Grid container >
                                <Grid item xs={4}>Image:</Grid>
                                <Grid item xs={8}>
                                    <img src={image} alt="Tittle"></img>
                                </Grid>
                            </Grid>
                        </TableCell>
                    </TableRow >
                );
            }
        };

        return (
            <div>
                <div>
                    <Grid item xs={12} style={{ paddingTop: '40px' }}>
                        <Button
                            style={{ float: 'right', }}
                            color="primary"
                            variant="contained"
                            endIcon={<Icon>send</Icon>}
                            onClick={this.mappingData}
                        >
                            Upload
                    </Button>
                        <Typography variant="h6" component="h6" style={{ float: 'right', paddingRight: '20px' }}>
                            Press button to upload data
                        </Typography>
                    </Grid>
                </div>
                <div>
                    <Grid item xs={12} style={{ paddingTop: '80px' }}>
                        <MUIDataTable
                            data={this.state.tableData}
                            columns={columns}
                            options={options}
                        />
                    </Grid>
                </div>
            </div>
        )
    }
}

Table.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(Table);