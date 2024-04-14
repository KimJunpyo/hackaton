import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ComplaintsModalTable({ row }: { row: any }) {
  return (
    <TableContainer className={'mt-10 relative'} component={Paper}>
      <Table>
        <TableHead className={'bg-gray-200 text-red-300'}>
          <TableRow>
            <TableCell align="center">관련 처리 민원</TableCell>
            <TableCell align="center">처리 날짜</TableCell>
            <TableCell align="center">유사도</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((data: any) => (
            <TableRow
              key={data.complaint.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, td: { border: 0 } }}>
              <TableCell align="center">{data.complaint.title}</TableCell>
              <TableCell align="center" className={'border-0'}>
                {data.complaint.response_date}
              </TableCell>
              <TableCell align="center">{Math.round(data.score * 100) + '%'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
