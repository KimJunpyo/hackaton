import { Box, Grid, TextField, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';

const checkData = [
  {
    title: '제목 A안',
    content:
      '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용',
  },
  {
    title: '제목 B안',
    content:
      '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용',
  },
  {
    title: '제목 C안',
    content:
      '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용',
  },
];

const ManagerCheck = ({ handleClickContent }: { handleClickContent: (title: string, content: string) => void }) => {
  const navigate = useNavigate();

  return (
    <>
      <Box display={'flex'} className={'justify-start'}>
        <button onClick={() => navigate(-1)}>
          <ArrowBackIosNewIcon sx={{ color: '#637381' }} />
        </button>
      </Box>
      <Grid sx={{ mt: 2 }} container spacing={2}>
        {checkData &&
          checkData.map((data, idx) => (
            <>
              <Grid item xs={12}>
                <Typography sx={{ width: '100%' }} variant={'h6'}>
                  {idx + 1}안
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ width: '100%' }}
                  defaultValue={data.title}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ width: '100%' }}
                  multiline
                  maxRows={5}
                  type={'textarea'}
                  defaultValue={data.content}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <button
                  className={'text-white bg-[#212b36] px-[12px] h-[36px] text-[14px] rounded-[8px]'}
                  onClick={() => handleClickContent(data.title, data.content)}>
                  선택하기
                </button>
              </Grid>
            </>
          ))}
      </Grid>
    </>
  );
};

export default ManagerCheck;
