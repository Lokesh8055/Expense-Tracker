// Convert to new Date object from local storage

export const dateConvert = (value) => new Date(value)
export const getFullYear = (date) => dateConvert(date).getFullYear()