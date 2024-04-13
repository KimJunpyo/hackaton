import { Box, Modal, Typography } from '@mui/material';
import { style } from './complaintsModal.tsx';

const BadUserModal = ({ openModal, handleCloseModal }: { openModal: boolean; handleCloseModal: () => void }) => {
  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Box sx={{ ...style, width: '480px' }}>
        <Typography sx={{ mb: 4 }} variant="h6">
          특이 민원으로 신고하시겠습니까?
        </Typography>
        <Box display={'flex'} className={'justify-end gap-2.5'}>
          <button
            className={'bg-white border border-gray-400 px-[12px] w-[64px] h-[36px] text-[14px] rounded-[8px]'}
            onClick={handleCloseModal}>
            확인
          </button>
          <button
            className={'bg-white border border-gray-400 px-[12px] w-[64px] h-[36px] text-[14px] rounded-[8px]'}
            onClick={handleCloseModal}>
            취소
          </button>
        </Box>
      </Box>
    </Modal>
  );
};

export default BadUserModal;
