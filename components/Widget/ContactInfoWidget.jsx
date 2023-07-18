import React from 'react'
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({withIcon, title, subtitle}) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      {<h3 className="cs-widget_title">India</h3>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}
         A-89, 2nd Floor, DDA Shed Block A, Okhla Phase II, Delhi 110020
        </li>
      </ul>
      { <h3 className="cs-widget_title">Estonia</h3>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}
          Harju maakond, Tallinn, Kesklinna linnaosa,Ahtri tn 12, 10151
        </li>
      </ul>
    </>
  )
}
