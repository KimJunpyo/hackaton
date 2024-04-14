import { Box, Grid, Tab, Tabs, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useLocation, useNavigate } from 'react-router-dom';
import ManagerSimilarTab from './managerSimilarTab.tsx';
import ManagerTemplateTab from './managerTemplateTab.tsx';
import ManagerReferenceTab from './managerReferenceTab.tsx';
import { useGetComplaintsIdList } from '../../api/complaints/query.ts';

const dataList = ['유사 사례', '문서 양식', '참고 자료'];
const createData = (name: string, title: string, location: string, date: string, bad_status: boolean) => {
  return { name, title, location, date, bad_status };
};

const rows = createData('이연진', '저공해자동차 공영주차장 이용혜택 관련 문의', '충청남도 천안시', '2023.02.24', true);
const ManagerInfo = () => {
  const [tab, setTab] = useState('유사 사례');
  const navigate = useNavigate();
  const location = useLocation();
  const { data: items } = useGetComplaintsIdList(location?.state?.id ?? 0);

  const handleChangeTab = (e: any, newValue: any) => {
    console.log(e);
    setTab(newValue);
  };

  return (
    <div className={'flex flex-col'}>
      <Box display={'flex'} className={'justify-between'}>
        <button onClick={() => navigate(-1)}>
          <ArrowBackIosNewIcon sx={{ color: '#637381' }} />
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
            label="민원 분석 내용"
            value={items?.data.content}
            InputLabelProps={{ shrink: true }}
            type="textarea"
            multiline
            sx={{ width: '100%' }}
            rows={5}
          />
        </Grid>
      </Grid>
      <Tabs sx={{ mt: 5 }} value={tab} onChange={handleChangeTab}>
        {dataList.map(data => (
          <Tab value={data} label={data} />
        ))}
      </Tabs>
      {tab === '유사 사례' && <ManagerSimilarTab />}
      {tab === '문서 양식' && <ManagerTemplateTab />}
      {tab === '참고 자료' && <ManagerReferenceTab />}
    </div>
  );
};

export default ManagerInfo;
