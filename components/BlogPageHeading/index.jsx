import Link from "next/link";

import Div from "../Div";

export default function BlogPageHeading({ title, pageLinkText  }) {
  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg"
      /* style={{ backgroundImage: `url(${bgSrc})` }} */
    >
      <Div className="container">
        <Div className="cs-page_heading_in">
          <h1 className="cs-page_title cs-font_90 cs-white_color">{title}</h1>
          
        <ol className="breadcrumb text-uppercase">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="breadcrumb-item active">{pageLinkText}</li>
          </ol> 
        </Div>
      </Div>
    </Div>
  );
}
