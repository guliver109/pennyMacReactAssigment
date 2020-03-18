import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Navbar from './Navbar';
import Table from './Table';
import Footer from './Footer';


export default class App extends Component {



    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Table />
                        </Grid>
                    </Grid>
                </Container>
                <Footer />
            </div>
        )
    }
}