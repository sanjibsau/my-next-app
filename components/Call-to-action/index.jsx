import React from "react";
import Split from "../Split";
/* import Link from "next/link"; */

const CallToAction = () => {
  return (
    <Split>
    <h6 className="wow words chars splitting" data-splitting>
      Let&apos;s Talk
    </h6>
    <h2
      className="wow words custom-font chars splitting"
      data-splitting
    >
      about your <b>next project</b>.
    </h2>
  </Split>
  );
};

export default CallToAction;
