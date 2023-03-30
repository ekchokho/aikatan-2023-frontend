// ...

const numberToArray = (num: number) => {
  const arr = num.toString().split('')
  if (num < 10) {
    arr.unshift('0')
  }

  return arr
}

const calculateTimeLeft = (finshedTime: string) => {
  const difference = +new Date(finshedTime) - +new Date()

  let timeLeft: Record<
    'days' | 'hours' | 'minutes' | 'seconds',
    string[]
  > | null = null

  if (difference > 0) {
    timeLeft = {
      days: numberToArray(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: numberToArray(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: numberToArray(Math.floor((difference / 1000 / 60) % 60)),
      seconds: numberToArray(Math.floor((difference / 1000) % 60))
    }
  }

  return timeLeft
}

export default calculateTimeLeft
