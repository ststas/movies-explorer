import {useCallback, useEffect, useState} from "react";

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const handleWidthOnResize = useCallback(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  const handleInitialWidth = useCallback(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  useEffect(() => {

    let resizedWidthTimer

    window.addEventListener('resize', () => {
      clearTimeout(resizedWidthTimer)
      resizedWidthTimer = setTimeout(handleWidthOnResize, 1000)
    })

    window.addEventListener('load', handleInitialWidth)

    return () => {
      window.removeEventListener('resize', handleWidthOnResize)
      window.removeEventListener('load', handleInitialWidth)
      clearTimeout(resizedWidthTimer)
    }
  }, [handleWidthOnResize, handleInitialWidth]);

  return {screenWidth}
}
export default useScreenWidth;