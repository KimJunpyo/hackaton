import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, FormControl, Grid, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import template from '../../assets/공문양식.pdf';

const createData = (id: number, title: string, department: string, accuracy: string, path: string) => {
  return { id, title, department, accuracy, path };
};

const rows = [
  createData(1, '지방세법 일부 개정 법률안 공문 양식', '도로교통과', '98%', '#'),
  createData(1, '건설교통국', '도로교통과', '98%', '#'),
  createData(1, '건설교통국', '도로교통과', '98%', '#'),
  createData(1, '건설교통국', '도로교통과', '98%', '#'),
];

export default function ManagerTemplateTab() {
  const [category, setCategory] = useState(1);
  return (
    <TableContainer component={Paper}>
      <Grid container>
        <Grid item xs={3}>
          <Box sx={{ p: 2 }}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                onChange={e => setCategory(e.target.value as number)}>
                <MenuItem value={1}>All</MenuItem>
                <MenuItem value={2}>제목</MenuItem>
                <MenuItem value={3}>부서</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ p: 2, width: '100%' }}>
            <TextField sx={{ width: '100%' }} placeholder={'Search...'} />
          </Box>
        </Grid>
        <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant={'contained'}>조회</Button>
        </Grid>
      </Grid>
      <Table className={'w-full'}>
        <TableHead className={'bg-green-200 text-red-300'}>
          <TableRow>
            <TableCell align="center">제목</TableCell>
            <TableCell align="center">부서</TableCell>
            <TableCell align="center">정확도</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }, td: { border: 0 } }}>
              <TableCell
                onClick={() => {
                  window.open(template, '_blank');
                }}
                align="center"
                sx={{ color: 'deepskyblue', borderBottom: 0, cursor: 'pointer' }}>
                {row.title}
              </TableCell>
              <TableCell align="center" className={'border-0'}>
                {row.department}
              </TableCell>
              <TableCell align="center">{row.accuracy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
