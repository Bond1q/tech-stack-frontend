import { useState } from "react"

export const useFormController = (type, defaultValue, isRequired, maxValue) => {
	const [value, setValue] = useState(defaultValue)
	const [isError, setIsError] = useState(false)
	const inputOnChange = (e) => {
		setValue(e.target.value)
	}
	const inputOnBlur = (e) => {
		if (isRequired) {
			switch (type) {
				case 'number':
					if (value < 1 || value > maxValue) {
						setValue(value)
					}
					break;

				case 'text':
					if (value.trim() === '' || value.length > maxValue) {
						setIsError(true)
					} else {
						setIsError(false)
					}
					break;
			}

		} else {
			switch (type) {
				case 'number':
					value > maxValue ? setIsError(true) : setIsError(false)
					break;

				case 'text':
					value.length > maxValue ? setIsError(true) : setIsError(false)
					break;
			}
		}
	}
	return { value, inputOnChange, inputOnBlur, isError, setValue }
}