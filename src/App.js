import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ApartmentsList from "./components/ApartmentsList";
import CreateApartmentForm from './components/CreateApartmentForm';
import { useEffect, useState } from 'react';
import { deleteApartment, getApartments, postApartments } from "./api/api";
import CircularProgress from '@mui/material/CircularProgress';

function App() {
	const [list, setList] = useState([])
	const [activeSort, setActiveSort] = useState('desc')
	const [activeRoomsFilter, setActiveRoomsFilter] = useState(0)
	const [roomsCount, setRoomsCount] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const updateRoomsCount = (list) => {
		const roomsArr = [];
		list.forEach(el => {
			if (!roomsArr.includes(el.rooms)) {
				roomsArr.push(el.rooms)
			}
		})
		setRoomsCount(roomsArr)
	}
	const updateList = async (sortType, roomsCount, changeRoomsCount = true) => {
		setIsLoading(true)
		const res = await getApartments(sortType, roomsCount)
		setList(res)
		if (changeRoomsCount) {
			updateRoomsCount(res)
		}
		setIsLoading(false)

		// console.log(res);

	}
	useEffect(() => {
		updateList(activeSort, activeRoomsFilter)

	}, [])

	const addNewRent = async (title, rooms, price, description) => {
		const res = await postApartments(title, rooms, price, description)
		updateList(activeSort, activeRoomsFilter)
	}

	const sortByPriseAscending = async () => {
		updateList('asc', activeRoomsFilter, false)
	}
	const sortByPriseDescending = async () => {
		updateList('desc', activeRoomsFilter, false)
	}

	const removeFromList = async (id) => {
		const res = await deleteApartment(id)
		updateList(activeSort, activeRoomsFilter)
	}

	const filterByRoomsCount = (count) => {
		updateList(activeSort, count, false)
	}

	return (
		<>
			{!isLoading ?
				<Box p={6} sx={{ backgroundColor: '#fafafa', color: '#2e2e2e' }}>
					<Box sx={{ maxWidth: 1200, margin: '0 auto' }}>

						<Typography fontWeight={500} textAlign={'center'} variant='h4' component="h1" >Apartments Marketplace</Typography>
						<CreateApartmentForm addNewRent={addNewRent} />
						<ApartmentsList list={list}
							sortByPriseAscending={sortByPriseAscending}
							sortByPriseDescending={sortByPriseDescending}
							filterByRoomsCount={filterByRoomsCount}
							removeFromList={removeFromList}
							sortType={activeSort}
							setActiveType={setActiveSort}
							activeRoomsFilter={activeRoomsFilter}
							setActiveRoomsFilter={setActiveRoomsFilter}
							roomsCount={roomsCount}
						/>
					</Box>
				</Box >
				: <Box mt={15} display={'flex'} justifyContent={'center'}><CircularProgress size={120} /></Box>

			}
		</>

	);
}

export default App;
