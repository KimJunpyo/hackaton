import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const createData = (id: number, name: string, team: string, department: string, accuracy: string) => {
  return { id, name, team, department, accuracy };
};

const rows = [
  createData(1, '이연진', '건설교통국', '도로교통과', '58%'),
  createData(2, '이연진2', '건설교통국', '도로교통과', '58%'),
  createData(3, '이연진3', '건설교통국', '도로교통과', '58%'),
  createData(4, '이연진4', '건설교통국', '도로교통과', '58%'),
  createData(5, '이연진5', '건설교통국', '도로교통과', '58%'),
];

export default function ComplaintsDetailTable({ handleClick }: { handleClick: (id: number) => void }) {
  return (
    <TableContainer className={'mt-10'} component={Paper}>
      <Table className={'w-full'}>
        <TableHead className={'bg-green-200 text-red-300'}>
          <TableRow>
            <TableCell align="center">담당자</TableCell>
            <TableCell align="center">소속</TableCell>
            <TableCell align="center">부서</TableCell>
            <TableCell align="center">정확도</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 }, td: { border: 0 } }}>
              <TableCell
                onClick={() => handleClick(row.id)}
                align="center"
                sx={{ color: 'deepskyblue', borderBottom: 0, cursor: 'pointer' }}>
                {row.name}
              </TableCell>
              <TableCell align="center" className={'border-0'}>
                {row.team}
              </TableCell>
              <TableCell align="center">{row.department}</TableCell>
              <TableCell align="center">{row.accuracy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
