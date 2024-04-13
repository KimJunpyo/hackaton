import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const path = useLocation();
  const navigate = useNavigate();

  return (
    <div className="p-2 flex min-w-[174px] h-full">
      <List disablePadding>
        <ListItem
          className={`rounded-lg text-center ${path.pathname === '/' ? 'bg-green-200 text-black' : ''}`}
          disablePadding>
          <ListItemButton onClick={() => navigate('/')}>
            <ListItemText primary={'민원 입력 화면'} />
          </ListItemButton>
        </ListItem>
        <ListItem
          className={`rounded-lg ${path.pathname.includes('/complaints') ? 'bg-green-200 text-black' : ''}`}
          disablePadding>
          <ListItemButton onClick={() => navigate('/complaints')}>
            <ListItemText primary={'분류 담당자 화면'} />
          </ListItemButton>
        </ListItem>
        <ListItem
          className={`rounded-lg ${path.pathname.includes('/manager') ? 'bg-green-200 text-black' : ''}`}
          disablePadding>
          <ListItemButton onClick={() => navigate('/manager')}>
            <ListItemText primary={'민원 처리자 화면'} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider orientation={'vertical'} sx={{ width: 10, height: 'auto', mr: 1 }} />
    </div>
  );
};

export default Navbar;
