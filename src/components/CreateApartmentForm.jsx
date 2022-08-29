import { TextField, Box, useFormControl, Typography, Button } from '@mui/material';
import React from 'react';
import { useFormController } from './../hooks/useFormController';

const CreateApartmentForm = ({ addNewRent }) => {
	const titleInput = useFormController('text', '', true, 99)
	const roomsInput = useFormController('number', 1, true, 99)
	const priceInput = useFormController('number', 1, true, 99999)
	const descriptionInput = useFormController('text', '', false, 999)
	const onSubmit = () => {
		if (!titleInput.isError) {
			addNewRent(titleInput.value, +roomsInput.value, +priceInput.value, descriptionInput.value)
			titleInput.setValue('')
			roomsInput.setValue(1)
			priceInput.setValue(1)
			descriptionInput.setValue('')
		}
	}
	return (
		<Box mb={11}>
			<Typography flexBasis={'50%'} fontWeight={500} component={'h2'}
				variant='h5'>Create a new rent</Typography>
			<Box mt={3} sx={{ background: '#e9e8e8', borderRadius: '5px', border: '1px solid #c8c8c8' }} p={4} display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
				<TextField
					value={titleInput.value}
					onChange={titleInput.inputOnChange}
					error={titleInput.isError}
					sx={{ width: '300px', background: '#ffffff', borderRadius: '5px' }}
					onBlur={titleInput.inputOnBlur}
					id="title-text-field"
					size='small'
					required label="Title"></TextField>

				<TextField
					value={roomsInput.value}
					onChange={roomsInput.inputOnChange}
					error={roomsInput.isError}
					helperText={roomsInput.isError && 'Rooms field is required!'}
					onBlur={roomsInput.inputOnBlur}
					type="number"
					size='small'
					InputProps={{ inputProps: { min: 1, max: 99 } }}
					id="rooms-text-field"
					sx={{ width: '70px', background: '#ffffff', borderRadius: '5px' }} required label="Rooms"></TextField>

				<TextField
					value={priceInput.value}
					onChange={priceInput.inputOnChange}
					error={priceInput.isError}
					helperText={priceInput.isError && 'Price field is required!'}
					onBlur={priceInput.inputOnBlur}
					type="number"
					size='small'
					id="price-text-field"
					InputProps={{ inputProps: { min: 1, max: 99999 } }}

					sx={{ width: '100px', background: '#ffffff', borderRadius: '5px' }} required label="Price"></TextField>

				<TextField
					value={descriptionInput.value}
					onChange={descriptionInput.inputOnChange}
					error={descriptionInput.isError}
					helperText={descriptionInput.isError && 'Description field max length is 999!'}
					onBlur={descriptionInput.inputOnBlur}
					id="description-text-field"
					size='small'

					sx={{ width: '420px', background: '#ffffff', borderRadius: '5px' }} label="Description"></TextField>
				<Button disabled={titleInput.isError || titleInput.value === ''} onClick={onSubmit} sx={{ textTransform: 'none' }} variant="contained" color="success">
					Submit rent
				</Button>
			</Box>
		</Box>

	);
};

export default CreateApartmentForm;