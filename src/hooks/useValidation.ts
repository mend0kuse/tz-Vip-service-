import { useEffect, useState } from "react"

export interface ValidationTypes {
	isEmpty: boolean,
	isLetter?: RegExp,
	minLength: number
}

export const useValidation = (value: string, validations: ValidationTypes) => {
	const [isEmpty, setEmpty] = useState(true)
	const [err, setErr] = useState('')

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'isEmpty':
					if (value) {
						setErr('')
					} else {
						setErr('Поле не может быть пустым')
					}
					break;
				case 'minLength':
					if (value.length < validations[validation]) {
						setErr(`Минимум ${validations[validation]} символа`)
					} else {
						setErr('')
					}

			}
		}

	}, [value])

	return { isEmpty, err }

}