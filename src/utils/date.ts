import * as dayjs from 'dayjs'

const getDateFromMilliseconds = (milliseconds: number) => {
  return dayjs(milliseconds)
}

export const formatDate = (milliseconds: number) => {
  return getDateFromMilliseconds(milliseconds).format("MMM D")
}