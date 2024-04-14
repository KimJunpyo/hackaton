import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import { useNavigate } from 'react-router-dom';

export default function ManagerTable({ rows }: { rows?: any }) {
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table className={'w-full min-w-[1100px]'}>
        <TableHead className={'bg-green-200 text-red-300'}>
          <TableRow>
            <TableCell align="center">민원 제목</TableCell>
            <TableCell align="center">민원인</TableCell>
            <TableCell align="center">민원 발생지</TableCell>
            <TableCell align="center">민원 처리</TableCell>
            <TableCell align="center">민원 작성 날짜</TableCell>
            <TableCell align="center">민원 배정 날짜</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.map((row: any) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 }, td: { border: 0 } }}>
                <TableCell
                  onClick={() => navigate('/manager/answer', { state: { id: row.id } })}
                  align="center"
                  sx={{ color: 'deepskyblue', borderBottom: 0, cursor: 'pointer' }}>
                  {row.title}
                </TableCell>
                <TableCell align="center">
                  {row.warning_message && <FmdBadIcon sx={{ color: 'purple' }} />}
                  {row.complainant_name}
                </TableCell>
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">{row.status === 'PENDING' ? '대기' : '완료'}</TableCell>
                <TableCell align="center">{row.receipt_date}</TableCell>
                <TableCell align="center">{row.assignment_date}</TableCell>
                <TableCell
                  align="center"
                  sx={{ color: 'deepskyblue', cursor: 'pointer' }}
                  onClick={() => navigate('/manager/ai', { state: { id: row.id } })}>
                  AI 도움
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
