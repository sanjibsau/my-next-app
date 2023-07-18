import Link from 'next/link';

import Image from 'next/image';


import Div from '../Div';

export default function Card({ title, link, src, alt }) {
  return (
    <Link href={link} className="cs-card cs-style1">
      <>
        <Image src={src} alt={alt} width={200} height={200} />
        <Div className="cs-card_overlay" />
        <Div className="cs-card_info">
          <span className=" cs-hover_layer3 cs-accent_bg" />
          <h2 className="cs-card_title">{title}</h2>
        </Div>
      </>
    </Link>
  );
}
