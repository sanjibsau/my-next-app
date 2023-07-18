

import Div from "../Div";

export default function PageHeading({ title, subtitle }) {
  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg"
      /* style={{ backgroundImage: `url(${bgSrc})` }} */
    >
      <Div className="container">
        <Div className="cs-page_heading_in">
          <h1 className="cs-page_title cs-font_90 cs-white_color">{title}</h1>
          <p className="cs-white_color cs-margin_right_140 cs-margin_left_140">
            {subtitle}
          </p>
          {/* <ol className="breadcrumb text-uppercase">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">{pageLinkText}</li>
          </ol> */}
        </Div>
      </Div>
    </Div>
  );
}
