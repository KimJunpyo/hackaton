import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const createData = (recent_title: string, date: string, accuracy: string) => {
  return { recent_title, date, accuracy };
};

const rows = [
  createData('저공해자동차 공영주차장 이용혜택 관련 문의', '2024.02.02', '98%'),
  createData('저공해자동차 공영주차장 이용혜택 관련 문의', '2024.02.02', '98%'),
  createData('저공해자동차 공영주차장 이용혜택 관련 문의', '2024.02.02', '98%'),
  createData('저공해자동차 공영주차장 이용혜택 관련 문의', '2024.02.02', '98%'),
];

export default function ComplaintsModalTable() {
  return (
    <TableContainer className={'mt-10 relative'} component={Paper}>
      <Table>
        <TableHead className={'bg-gray-200 text-red-300'}>
          <TableRow>
            <TableCell align="center">최근 처리된 인원</TableCell>
            <TableCell align="center">처리 날짜</TableCell>
            <TableCell align="center">유사도</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.recent_title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, td: { border: 0 } }}>
              <TableCell align="center">{row.recent_title}</TableCell>
              <TableCell align="center" className={'border-0'}>
                {row.date}
              </TableCell>
              <TableCell align="center">{row.accuracy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
