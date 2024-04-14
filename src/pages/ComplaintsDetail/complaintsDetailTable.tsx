import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ComplaintsDetailTable({
  rows,
  handleClick,
}: {
  rows?: any;
  handleClick: (id: number) => void;
}) {
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
          {rows &&
            rows.map((row: any) => (
              <TableRow
                key={row.officer.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, td: { border: 0 } }}>
                <TableCell
                  onClick={() => handleClick(row.officer.id)}
                  align="center"
                  sx={{ color: 'deepskyblue', borderBottom: 0, cursor: 'pointer' }}>
                  {row.officer.name}
                </TableCell>
                <TableCell align="center" className={'border-0'}>
                  {row.officer.affiliation}
                </TableCell>
                <TableCell align="center">{row.officer.department}</TableCell>
                <TableCell align="center">{Math.round(row.score * 100) + '%'}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
