import { useCallback, useEffect, useState } from 'react'

const getActualVh = () => Number((window.innerHeight * 0.01).toFixed(2))

const useVH = (): number => {
  const [vh, setVh] = useState(0)
  const updateVh = useCallback(() => {
    const newVh = getActualVh()
    setVh(newVh)
  }, [setVh])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      updateVh()

      window.addEventListener('resize', updateVh)
    }
    return () => {
      window.removeEventListener('resize', updateVh)
    }
  }, [updateVh])

  return vh
}

export default useVH
