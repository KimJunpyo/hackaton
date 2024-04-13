import ManagerTable from './manager-table.tsx';
import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

const TabStatus = ['All', 'Success', 'Pending'];
const TabName = ['모두', '민원 처리 완료', '민원 처리 대기'];
const stats = [80, 32, 48];

const Manager = () => {
  const [tab, setTab] = useState('All');
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
          <Tab
            value={tabName}
            label={TabName[idx]}
            iconPosition={'end'}
            icon={
              <Box
                sx={{
                  backgroundColor: tabName === 'All' ? 'black' : tabName === 'Success' ? 'green' : 'red',
                  color: 'white',
                  border: 1,
                  height: '24px',
                  px: '6px',
                  borderRadius: '6px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {stats[idx]}
              </Box>
            }></Tab>
        ))}
      </Tabs>
      <ManagerTable />
    </div>
  );
};

export default Manager;
