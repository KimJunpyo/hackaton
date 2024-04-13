import { Box, Grid, TextField, Typography } from '@mui/material';
import ComplaintsDetailTable from './complaintsDetailTable.tsx';
import { useState } from 'react';
import ComplaintsModal from '../../components/complaintsModal.tsx';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useLocation, useNavigate } from 'react-router-dom';
import BadUserModal from '../../components/BadUserModal.tsx';
import { useGetComplaintsIdList } from '../../api/complaints/query.ts';

const ComplaintsDetail = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openBadModal, setOpenBadModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { data: items } = useGetComplaintsIdList(location?.state?.id ?? 0);

  const handleOpenModal = (id: number) => {
    console.log(id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCloseBadModal = () => {
    setOpenBadModal(false);
  };

  console.log(items?.data);

  return (
    <div className={'flex flex-col'}>
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
        민원 정보
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            sx={{ width: '100%' }}
            label="민원인"
            value={items?.data.complainant_name}
            InputLabelProps={{ shrink: true }}
            InputProps={{ readOnly: true }}
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
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ width: '100%' }}
            label="민원 제목"
            value={items?.data.title}
            InputLabelProps={{ shrink: true }}
            InputProps={{ readOnly: true }}
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
      <ComplaintsDetailTable handleClick={handleOpenModal} />
      <ComplaintsModal openModal={openModal} handleCloseModal={handleCloseModal} id={0} />
      <BadUserModal openModal={openBadModal} handleCloseModal={handleCloseBadModal} />
    </div>
  );
};

export default ComplaintsDetail;
