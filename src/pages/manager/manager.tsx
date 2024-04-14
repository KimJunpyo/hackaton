import ManagerTable from './manager-table.tsx';
import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { useGetComplaintsList } from '../../api/complaints/query.ts';

const TabStatus = ['All', 'Success', 'Pending'];
const TabName = ['모두', '민원 처리 완료', '민원 처리 대기'];

const Manager = () => {
  const [tab, setTab] = useState('All');
  const { data: items } = useGetComplaintsList(
    0,
    10,
    2,
    tab === 'All' ? undefined : tab === 'Success' ? 'COMPLETED' : 'PENDING',
  );

  return (
    <div>
      <Tabs
        sx={{ m: 0 }}
        value={tab}
        onChange={(e, newValue) => {
          console.log(e);
          setTab(newValue);
        }}>
        {TabStatus.map((tabName, idx) => (
          <Tab value={tabName} label={TabName[idx]} iconPosition={'end'}></Tab>
        ))}
      </Tabs>
      <ManagerTable rows={items?.data.items} />
    </div>
  );
};

export default Manager;
