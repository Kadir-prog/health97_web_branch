
import React from 'react';
import AppBar from './AppBar/index';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './css/style.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Home() {
    return (
        <>
            <AppBar />
            <h1>Welcome to the world of Geeks!</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-4' style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <div class="card" style={{width:'18rem'}}>
                            <img src="..." class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                    <div class="card" style={{width:'18rem'}}>
                            <img src="..." class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                    <div class="card">
                            <img src="..." class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default Home;