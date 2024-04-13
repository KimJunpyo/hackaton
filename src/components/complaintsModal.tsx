import { Box, Grid, Modal, TextField, Typography } from '@mui/material';
import ComplaintsModalTable from './complaintsModalTable.tsx';

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '720px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const ComplaintsModal = ({
  openModal,
  handleCloseModal,
}: {
  openModal: boolean;
  handleCloseModal: () => void;
  id: number | null;
}) => {
  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Box sx={style}>
        <Typography sx={{ mb: 4 }} variant="h6">
          담당자 정보
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField sx={{ width: '100%' }} label="이름" placeholder="asd" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField sx={{ width: '100%' }} label="Email" placeholder="asd" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField sx={{ width: '100%' }} label="생년월일" placeholder="asd" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField sx={{ width: '100%' }} label="연락처" placeholder="asd" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField sx={{ width: '100%' }} label="소속" placeholder="asd" InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={6}>
            <TextField sx={{ width: '100%' }} label="부서" placeholder="asd" InputLabelProps={{ shrink: true }} />
          </Grid>
        </Grid>

        <ComplaintsModalTable />
      </Box>
    </Modal>
  );
};

export default ComplaintsModal;
