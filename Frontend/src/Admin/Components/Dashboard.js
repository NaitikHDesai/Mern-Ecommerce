import { Grid, createTheme } from '@mui/material'
import React from 'react'
import Achivements from './Achivements'
import MonthlyOverView from './MonthlyOverView'

import OrdersTableView from './View/OrderTableView'
import ProductTableView from './View/ProductTableView'


const darkTheme1 = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#312d4b',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});

function AdminDashboard() {
  return (
    <div className='p-10' style={{ backgroundColor: '#0D0D22', color: 'white', minHeight: '100vh' }}>
        <Grid container spacing={3}>
            <Grid  item xs={12} md={4}>
                <div className='shadow-lg shadow-gray-600'>
                <Achivements/>
                </div>
                
            </Grid>
            <Grid  item xs={12} md={8}>
                <div className='shadow-lg shadow-gray-600'>
                <MonthlyOverView/>
                </div>
            </Grid>

            <Grid  item xs={12} md={6}>
              <div className='shadow-lg shadow-gray-600'>
              <ProductTableView/>
              </div>
                
            </Grid>

            <Grid  item xs={12} md={6}>
                <div className='shadow-lg shadow-gray-600'>
                <OrdersTableView/>
                </div>    
            </Grid>
            
        </Grid>
    </div>
  )
}

export default AdminDashboard
