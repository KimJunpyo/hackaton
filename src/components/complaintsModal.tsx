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
  row,
}: {
  openModal: boolean;
  handleCloseModal: () => void;
  row: any;
}) => {
  console.log(row);
  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Box sx={style}>
        <Typography sx={{ mb: 4 }} variant="h6">
          담당자 정보
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              sx={{ width: '100%' }}
              label="이름"
              value={row?.officer.name}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: '100%' }}
              label="연락처"
              value={row?.officer.contact}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: '100%' }}
              label="소속"
              value={row?.officer.affiliation}
              placeholder="asd"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{ width: '100%' }}
              label="부서"
              value={row?.officer.department}
              placeholder="asd"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>

        <ComplaintsModalTable row={row?.related_complaints} />
      </Box>
    </Modal>
  );
};

export default ComplaintsModal;
