import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import { useNavigate } from 'react-router-dom';
import { useGetComplaintsList } from '../../api/complaints/query.ts';

export default function BasicTable() {
  const nagivate = useNavigate();
  const { data: items } = useGetComplaintsList(0, 10);

  return (
    <TableContainer className={'mt-10'} component={Paper}>
      <Table className={'w-full'}>
        <TableHead className={'bg-green-200 text-white'}>
          <TableRow>
            <TableCell align="center">민원인</TableCell>
            <TableCell align="center">민원 제목</TableCell>
            <TableCell align="center">민원 발생지</TableCell>
            <TableCell align="center">민원 작성 날짜</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items &&
            items?.data.items.map((row: any) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }, td: { border: 0 } }}>
                <TableCell
                  onClick={() => nagivate('/complaints/detail', { state: { id: row.id } })}
                  align="center"
                  sx={{ color: 'deepskyblue', borderBottom: 0, cursor: 'pointer' }}>
                  {row.warning_message && <FmdBadIcon sx={{ color: 'purple' }} />}
                  {row.complainant_name}
                </TableCell>
                <TableCell align="center" className={'border-0'}>
                  {row.title}
                </TableCell>
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">{row.receipt_date}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
