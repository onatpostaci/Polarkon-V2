import React from 'react';
import { Box, Paper, Typography, Grid, Button, Stack} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CurrencyLiraIcon from '@mui/icons-material/CurrencyLira';
import EuroIcon from '@mui/icons-material/Euro';

export default function CurrencyTable() {
  return (
    <TableContainer component={Paper} sx={{marginTop:"2rem", maxWidth:"400px"}}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{backgroundColor:"#C9C8C8"}}>
                      <TableCell ><Typography sx={{fontWeight:"bold"}}>Para Birimi</Typography></TableCell>
                      <TableCell align='right' ><Typography sx={{fontWeight:"bold"}}>Karşılığı</Typography></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          <Stack direction="row" spacing={2} sx={{alignItems:"center"}}>
                            <MonetizationOnIcon sx={{color:"green"}}/>
                            <Typography>1</Typography>
                          </Stack>
                        </TableCell>
                        <TableCell align='right' >
                          <Stack direction="row" spacing={2} sx={{alignItems:"center", justifyContent:"flex-end"}}>
                            <CurrencyLiraIcon />
                            <Typography>18.78</Typography>
                          </Stack>
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          <Stack direction="row" spacing={2} sx={{alignItems:"center"}}>
                            <EuroIcon />
                            <Typography>1</Typography>
                          </Stack>
                        </TableCell>
                        <TableCell align='right' >
                          <Stack direction="row" spacing={2} sx={{alignItems:"center", justifyContent:"flex-end"}}>
                            <CurrencyLiraIcon />
                            <Typography>20.18</Typography>
                          </Stack>
                        </TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
          </TableContainer>
  )
}
