import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import { useNavigate } from 'react-router-dom';

const createData = (
  name: string,
  title: string,
  location: string,
  status: string,
  create_date: string,
  select_date: string,
  bad_status: boolean,
) => {
  return { name, title, location, status, create_date, select_date, bad_status };
};

const rows = [
  createData(
    '이연진',
    '저공해자동차 공영주차장 이용혜택 관련 문의',
    '충청남도 천안시',
    '대기',
    '2023.02.24',
    '2023.02.27',
    true,
  ),
  createData(
    '이연진',
    '저공해자동차 공영주차장 이용혜택 관련 문의',
    '충청남도 천안시',
    '대기',
    '2023.02.24',
    '2023.02.27',
    true,
  ),
  createData(
    '이연진',
    '저공해자동차 공영주차장 이용혜택 관련 문의',
    '충청남도 천안시',
    '대기',
    '2023.02.24',
    '2023.02.27',
    false,
  ),
  createData(
    '이연진',
    '저공해자동차 공영주차장 이용혜택 관련 문의',
    '충청남도 천안시',
    '대기',
    '2023.02.24',
    '2023.02.27',
    true,
  ),
  createData(
    '이연진',
    '저공해자동차 공영주차장 이용혜택 관련 문의',
    '충청남도 천안시',
    '대기',
    '2023.02.24',
    '2023.02.27',
    true,
  ),
];

export default function ManagerTable() {
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
          {rows.map(row => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 }, td: { border: 0 } }}>
              <TableCell
                onClick={() => navigate('/manager/answer')}
                align="center"
                sx={{ color: 'deepskyblue', borderBottom: 0, cursor: 'pointer' }}>
                {row.title}
              </TableCell>
              <TableCell align="center">
                {row.bad_status && <FmdBadIcon sx={{ color: 'purple' }} />}
                {row.name}
              </TableCell>
              <TableCell align="center">{row.location}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.create_date}</TableCell>
              <TableCell align="center">{row.select_date}</TableCell>
              <TableCell
                align="center"
                sx={{ color: 'deepskyblue', cursor: 'pointer' }}
                onClick={() => navigate('/manager/ai')}>
                AI 도움
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
