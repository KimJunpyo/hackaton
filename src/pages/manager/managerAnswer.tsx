import { Box, Button, Grid, styled, TextField, Typography } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useLocation, useNavigate } from 'react-router-dom';
import BadUserModal from '../../components/BadUserModal.tsx';
import { FormProvider, useForm } from 'react-hook-form';
import ManagerCheck from './managerCheck.tsx';
import { useGetComplaintsIdList, usePostComplaintsResponse } from '../../api/complaints/query.ts';

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

const ManagerAnswer = () => {
  const [openBadModal, setOpenBadModal] = useState(false);
  const [fileDetails, setFileDetails] = useState<any>([]);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const { data: items } = useGetComplaintsIdList(location?.state?.id ?? 0);

  const navigate = useNavigate();
  const handleCloseBadModal = () => {
    setOpenBadModal(false);
  };
  const defaultValues = {
    content: '',
    file: [],
  };

  const method = useForm({ defaultValues });

  const { register, watch, setValue } = method;

  const { mutate } = usePostComplaintsResponse();
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

  const handleClickContent = (content: string) => {
    setValue('content', content);
    setTimeout(() => {
      setShow(false);
    }, 500);
  };

  const onSubmit = data => mutate({ complaint: location?.state?.id, author: 2, content: data.content });

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
              <TextField
                sx={{ width: '100%' }}
                label="민원인"
                value={items?.data.complainant_name}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                sx={{ width: '100%' }}
                label="민원 발생지"
                value={items?.data.location}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                sx={{ width: '100%' }}
                label="민원 날짜"
                value={items?.data.receipt_date}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: '100%' }}
                label="민원 제목"
                value={items?.data.title}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="민원 내용"
                value={items?.data.content}
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
              onClick={() => setShow(true)}
              className={'bg-white border border-gray-400 px-[12px] w-[100px] h-[36px] text-[14px] rounded-[8px]'}>
              AI 답변 생성
            </button>
            <button
              disabled={!watch('content')}
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
