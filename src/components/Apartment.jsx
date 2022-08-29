import { Button, Typography, Box } from '@mui/material';
import React from 'react';
import BasicModal from './Modal';


const Apartment = ({ title, rooms, price, description, id, removeFromList }) => {

	return (


		<Box mb={3} sx={{
			display: 'flex', flexDirection: 'row', padding: '20px',
			justifyContent: 'space-between',
			background: '#ffffff', border: '1px solid #cfcfcf', borderRadius: '5px',

		}}>
			<Box alignItems={'center'} display={'flex'}>
				<Typography mr={2} fontSize={20}>{title} </Typography>
				<Typography>|</Typography>
				<Typography mr={2} ml={2} fontSize={20}> {rooms} {rooms > 1 ? 'rooms' : 'room'}  </Typography>
				<Typography>|</Typography>
				<Typography ml={2} mr={2} fontSize={20}> {price}$ </Typography>
				{description &&
					<>
						<Typography>|</Typography>
						<BasicModal title={title} modalText={description} textForOpen={'Description'} />
					</>
				}


			</Box>
			<Box sx={{
				display: 'flex', justifyContent: 'end'
			}}>
				<Button onClick={() => removeFromList(id)} sx={{ textTransform: 'none' }} color='error' variant="contained">Delete</Button>

			</Box>

		</Box>


	);
};

export default Apartment;