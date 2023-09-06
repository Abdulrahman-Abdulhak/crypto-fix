import { useEventListener } from '../../../../hooks/useEventListener'
import { allElementsFromPoint } from '../../../../utils/dom'

export const backgroundEffects = (headerRef, bakgroundRef) => {
  useEventListener(
    'mousemove',
    e => {
      let hovered

      const elements = allElementsFromPoint(e.clientX, e.clientY)
      elements.forEach((ele, index) => {
        if (!ele.classList.contains('background')) return

        hovered = elements[index + 1]
        hovered?.classList.add('hover')
        ;[...bakgroundRef.current.children]?.forEach(child => {
          if (child === hovered) return

          child.classList.remove('hover')
        })
      })
    },
    headerRef
  )

  useEventListener(
    'mouseleave',
    () => {
      ;[...bakgroundRef.current.children]?.forEach(child => {
        child.classList.remove('hover')
      })
    },
    headerRef
  )
}
