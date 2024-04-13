import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import excel from './excel.png';
import internet from './internet.png';
import { Box, Button, FormControl, Grid, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';

const createData = (id: number, title: string, type: string, accuracy: string, path: string) => {
  return { id, title, type, accuracy, path };
};

const rows = [
  createData(1, '2023 민원행정 및 제도개선 기본 지침', '보도자료', '98%', 'exl'),
  createData(2, '2023 민원행정 및 제도개선 기본 지침', '보도자료', '98%', 'exl'),
  createData(3, '2023 민원행정 및 제도개선 기본 지침', '보도자료', '98%', 'pdf'),
  createData(4, '2023 민원행정 및 제도개선 기본 지침', '보도자료', '98%', 'exl'),
  createData(5, '2023 민원행정 및 제도개선 기본 지침', '보도자료', '98%', 'icon'),
];

export default function ManagerReferenceTab() {
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
                <MenuItem value={3}>분류</MenuItem>
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
            <TableCell align="center">분류</TableCell>
            <TableCell align="center">정확도</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }, td: { border: 0 } }}>
              <TableCell align="center" sx={{ color: 'deepskyblue', borderBottom: 0, cursor: 'pointer' }}>
                <div className={'flex justify-center'}>
                  <img src={row.path === 'exl' ? excel : internet} className={'w-5 mr-1'} />
                  {row.title}
                </div>
              </TableCell>
              <TableCell align="center" className={'border-0'}>
                {row.type}
              </TableCell>
              <TableCell align="center">{row.accuracy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
