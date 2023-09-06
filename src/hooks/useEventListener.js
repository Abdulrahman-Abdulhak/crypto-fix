import { useEffect, useRef } from 'react'

export const useEventListener = (
  event,
  callBack,
  elementRef = useRef(window)
) => {
  const ref = useRef(callBack)

  useEffect(() => {
    elementRef.current.addEventListener(event, ref.current)

    return () => elementRef.current.removeEventListener(event, ref.current)
  })
}
