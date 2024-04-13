import { Box, Button, Grid, styled, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import BadUserModal from '../../components/BadUserModal.tsx';
import { useForm } from 'react-hook-form';
import ManagerCheck from './managerCheck.tsx';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const createData = (name: string, title: string, location: string, date: string, bad_status: boolean) => {
  return { name, title, location, date, bad_status };
};

const rows = createData('이연진', '저공해자동차 공영주차장 이용혜택 관련 문의', '충청남도 천안시', '2023.02.24', true);
const ManagerAnswer = () => {
  const [openBadModal, setOpenBadModal] = useState(false);
  const [fileDetails, setFileDetails] = useState<any>([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleCloseBadModal = () => {
    setOpenBadModal(false);
  };
  const defaultValues = {
    title: '',
    content: '',
    file: [],
  };

  const method = useForm({ defaultValues });

  const { register, watch, setValue } = method;

  const handleFileDelete = (clickedFile: any) => {
    const idx = fileDetails.findIndex((data: any) => data.name === clickedFile.name);

    console.log(clickedFile, idx);
    setFileDetails([...fileDetails.slice(0, idx), ...fileDetails.slice(idx + 1)]);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file) {
      setFileDetails([
        ...fileDetails,
        {
          name: file.name,
          size: file.size,
        },
      ]);
    } else {
      setFileDetails([]);
    }
  };

  const handleClickContent = (title: string, content: string) => {
    setValue('title', title);
    setValue('content', content);
    setTimeout(() => {
      setShow(false);
    }, 500);
  };

  return (
    <div className={'flex flex-col'}>
      {show ? (
        <ManagerCheck handleClickContent={handleClickContent} />
      ) : (
        <>
          <Box display={'flex'} className={'justify-between'}>
            <button onClick={() => navigate(-1)}>
              <ArrowBackIosNewIcon sx={{ color: '#637381' }} />
            </button>
            <button
              onClick={() => setOpenBadModal(true)}
              className={'text-white bg-[#212b36] px-[12px] h-[36px] text-[14px] rounded-[8px]'}>
              특이 인원 응대 처리
            </button>
          </Box>
          <Typography variant="h6" sx={{ mb: 3 }}>
            민원 답변하기
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField sx={{ width: '100%' }} label="민원인" value={rows.name} InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={4}>
              <TextField
                sx={{ width: '100%' }}
                label="민원 발생지"
                value={rows.location}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                sx={{ width: '100%' }}
                label="민원 날짜"
                value={rows.date}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: '100%' }}
                label="민원 제목"
                value={rows.title}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="민원 내용"
                value={'내용'}
                InputLabelProps={{ shrink: true }}
                type="textarea"
                multiline
                sx={{ width: '100%' }}
                rows={5}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 6 }}>
            <Grid item xs={12}>
              <TextField
                sx={{ width: '100%' }}
                label="제목"
                placeholder={'민원 답변의 제목을 입력해주세요.'}
                InputLabelProps={{ shrink: true }}
                {...register('title')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="내용"
                placeholder={'민원 답변의 내용을 입력해주세요.'}
                InputLabelProps={{ shrink: true }}
                type="textarea"
                multiline
                sx={{ width: '100%' }}
                {...register('content')}
                rows={5}
              />
            </Grid>
            <Grid item xs={12}>
              <Button component="label" variant="contained" tabIndex={-1}>
                Upload file
                <VisuallyHiddenInput type="file" onChange={handleFileChange} />
              </Button>
            </Grid>
            <Grid item xs={12}>
              {fileDetails &&
                fileDetails.map((file: any) => (
                  <div className={'flex'}>
                    <p>{file.name}</p>
                    <button className={'ml-4'} onClick={() => handleFileDelete(file)}>
                      x
                    </button>
                  </div>
                ))}
            </Grid>
          </Grid>
          <Box display={'flex'} className={'justify-end gap-2.5'}>
            <button
              className={'bg-white border border-gray-400 px-[12px] w-[64px] h-[36px] text-[14px] rounded-[8px]'}
              onClick={() => setShow(true)}>
              검수
            </button>
            <button
              disabled={!(watch('title') && watch('content'))}
              className={
                'bg-white border border-gray-400 px-[12px] w-[64px] h-[36px] text-[14px] rounded-[8px] disabled:border-gray-200 disabled:text-gray-400'
              }>
              Upload
            </button>
          </Box>
        </>
      )}
      <BadUserModal openModal={openBadModal} handleCloseModal={handleCloseBadModal} />
    </div>
  );
};

export default ManagerAnswer;
