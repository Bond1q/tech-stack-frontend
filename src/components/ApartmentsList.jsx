import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Apartment from './Apartment';
import { Typography } from '@mui/material';
const ApartmentsList = ({ list, sortByPriseAscending,
	sortByPriseDescending, filterByRoomsCount, removeFromList,
	sortType,
	setActiveType,
	activeRoomsFilter,
	setActiveRoomsFilter,
	roomsCount
}) => {

	const allRooms = []
	list.forEach(el => {
		if (!allRooms.includes(el.rooms)) {
			allRooms.push(el.rooms)
		}
	})
	const [rooms, setRooms] = React.useState(0);
	const changeRoomsCount = (event) => {
		setActiveRoomsFilter(event.target.value);
		filterByRoomsCount(event.target.value)
	};


	const [sortBy, setSortBy] = React.useState('descending');
	const changeSortByType = (event) => {
		setActiveType(event.target.value)
		if (event.target.value === 'asc') {
			sortByPriseAscending()
		} else {
			sortByPriseDescending()
		}
	};
	return (
		<Box mt={5}>
			<Box sx={{ display: "flex", alignItems: 'center' }}>
				<Typography flexBasis={'50%'} fontWeight={500} component={'h2'} variant='h5'>
					Available Apartments ({list.length})
				</Typography>
				<FormControl sx={{ width: '200px', display: 'flex', flexDirection: 'row', alignItems: 'center', flexBasis: '25%' }}>
					<Typography mr={2} fontSize={'20px'} htmlFor='demo-simple-select-room' >Rooms count:</Typography>
					<Select
						fontSize={13}
						variant='standard'
						id="demo-simple-select-room"
						value={activeRoomsFilter}
						onChange={changeRoomsCount}
					>
						{roomsCount.sort().map((room, index) => <MenuItem key={index} value={room}>{room}</MenuItem>)}
						<MenuItem value={0}>All</MenuItem>
					</Select>
				</FormControl>
				<FormControl sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexBasis: '25%', justifyContent: 'end' }}>
					<Typography mr={2} fontSize={'20px'} htmlFor='demo-simple-select-room' >Sort by:</Typography>

					<Select
						sx={{ width: '200px', background: '#ffffff' }}
						id="demo-simple-select"
						value={sortType}
						onChange={changeSortByType}
					>
						<MenuItem value={'desc'}>Price: Highest first</MenuItem>
						<MenuItem value={'asc'}>Price: Lowes first</MenuItem>
					</Select>

				</FormControl>

			</Box>
			<Box mt={3}>
				{list.map(el => <Apartment key={el.id} {...el} removeFromList={removeFromList} />)}
			</Box>
		</Box >



	);
};

export default ApartmentsList;