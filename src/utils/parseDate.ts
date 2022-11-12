export function parseDate(date: Date | boolean) {
	let newDate = ''

	if (date instanceof Date) {

		newDate += date.getDate().toString().length === 1 ? '0' + date.getDate() + '.' : date.getDate() + '.'
		newDate += date.getMonth().toString().length === 1 ? '0' + (date.getMonth() + 1) + '.' : date.getMonth() + 1 + '.'
		newDate += date.getFullYear()

	}

	return newDate
}