import React, { useEffect, useRef } from 'react'

import './style.css'
import { getLast } from '../../../../utils/array'

const Table = () => {
  const tBody = useRef()

  useEffect(() => {
    const brdrRad = 'var(--_border-radius, 1rem)'
    const trs = tBody.current.querySelectorAll('tr')
    const firstRow = trs[0],
      lastRow = getLast(trs)

    firstRow.querySelector('th').style.borderStartStartRadius = brdrRad
    lastRow.querySelector('th').style.borderEndStartRadius = brdrRad

    getLast(firstRow.querySelectorAll('td')).style.borderStartEndRadius =
      brdrRad
    getLast(lastRow.querySelectorAll('td')).style.borderEndEndRadius = brdrRad
  }, [])

  return (
    <section className='table main-container'>
      <table>
        <thead>
          <tr>
            <th>Exchange</th>
            <th>Interstitial</th>
            <th>Retargeting</th>
            <th>Email</th>
            <th>Shoutout</th>
          </tr>
        </thead>
        <tbody ref={tBody}>
          <tr>
            <th>CryptoSpace</th>
            <td aria-label='check'></td>
            <td aria-label='check'></td>
            <td aria-label='check'></td>
            <td aria-label='check'></td>
          </tr>
          <tr>
            <th>AdBlockz</th>
            <td aria-label='check'></td>
            <td></td>
            <td aria-label='check'></td>
            <td aria-label='check'></td>
          </tr>
          <tr>
            <th>Mooners</th>
            <td aria-label='check'></td>
            <td aria-label='check'></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>ForexCrypt</th>
            <td aria-label='check'></td>
            <td aria-label='check'></td>
            <td aria-label='check'></td>
            <td></td>
          </tr>
          <tr>
            <th>JunctionSpace</th>
            <td aria-label='check'></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Table
