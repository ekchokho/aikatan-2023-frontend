import { createContext, useContext } from 'react'

export type ImageCarouselContextType = {
  dispFactor: number
  selected: number
}

export const ImageCarouselContext =
  createContext<ImageCarouselContextType | null>(null)

export const useImageCarousel = () => {
  const imageCarousel = useContext(ImageCarouselContext)

  if (!imageCarousel) {
    throw new Error(
      'useImageCarousel has to be used within <ImageCarouselContext.Provider>'
    )
  }

  return imageCarousel
}
