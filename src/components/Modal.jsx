import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Modal, Box, Button, Typography } from '@mui/material'

export default function BasicModal({ title, modalText, textForOpen }) {
	const style = {
		position: 'absolute',
		top: '20%',
		left: '50%',
		transform: 'translate(-50%, -20%)',
		width: 400,
		textAlign: 'justify',
		borderRadius: '5px',
		bgcolor: 'background.paper',
		border: '1px solid #cfcfcf',
		boxShadow: 3,
		outline: 'none',
		p: 4,
	};
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Typography ml={2} sx={{
				textTransform: 'none', fontSize: '20px', display: 'flex',
				alignItems: 'center', cursor: 'pointer'
			}}
				onClick={handleOpen}>{textForOpen} <InfoOutlinedIcon sx={{ marginLeft: '2px' }} /></Typography>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Button onClick={handleClose} sx={{ position: 'absolute', right: '0', top: '5px' }}>
						<CloseIcon sx={{ color: '#1d1d1d' }} />
					</Button>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						{title}
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{modalText}
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}