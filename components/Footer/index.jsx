import React from "react";
import Div from "../Div";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import MenuWidget from "../Widget/MenuWidget";
import Newsletter from "../Widget/Newsletter";
import SocialWidget from "../Widget/SocialWidget";
import TextWidget from "../Widget/TextWidget";
import Image from "next/image";

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  const copyrightLinks = [
    {
      title: "Terms & Conditions",
      href: "/term",
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
  ];

  const serviceMenu = [
    {
      title: "Performance Branding",
      href: "/service/service-details",
    },
    {
      title: "Content Marketing",
      href: "/service/service-details",
    },
    {
      title: "Email Marketing",
      href: "/service/service-details",
    },

    {
      title: "SEM/PPC",
      href: "/service/service-details",
    },
    {
      title: "Social Ads",
      href: "/service/service-details",
    },
    {
      title: "SEO",
      href: "/services/seo",
    },

    {
      title: "CRO",
      href: "/service/service-details",
    },
  ];

  const expertiseMenu = [
    {
      title:"results",
      href:"/results",

    },
    {
      title: "SaaS",
      href: "/service/service-details",
    },
    {
      title: "Consumer",
      href: "/service/service-details",
    },
    {
      title: "Healthcare",
      href: "/service/service-details",
    },

    {
      title: "Fintech",
      href: "/service/service-details",
    },
    {
      title: "Crypto",
      href: "/service/service-details",
    },
   
   
  ];

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-8 col-sm-12">
              <Div className="row">
                <Div className="col-lg-4 col-sm-6">
                  <Div className="cs-footer_item">
                    <MenuWidget
                      menuItems={serviceMenu}
                      menuHeading="Services"
                    />
                  </Div>
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Div className="cs-footer_item">
                    <MenuWidget
                      menuItems={expertiseMenu}
                      menuHeading="Expertise"
                    />
                  </Div>
                </Div>
                <Div className="col-lg-5 col-sm-6">
                  <Div className="cs-footer_item">
                    <ContactInfoWidget title="Our Presence" subtitle="India" />
                   
                  </Div>
                </Div>
                {/* <Div className="col-lg-4 col-sm-6">
                  <Div className="cs-footer_item">
                    <Newsletter
                      title="Subscribe"
                      subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
                      placeholder="example@gmail.com"
                    />
                  </Div>
                </Div> */}
              </Div>
            </Div>
            <Div className="col-lg-4 col-sm-12">
              <Div className="footerdez-a">
                <h2>We would love to hear from you.</h2>
                <Div className="row">
                  <Div className="col=lg-6 awaard_img">
                    <Image
                      src="/img/badges-a.png"
                      width={150}
                      height={100}
                      alt="footer images"
                    />
                  </Div>
                  <Div className="col=lg-6 awaard_img">
                    <Image
                      src="/img/badges-c.png"
                      width={150}
                      height={100}
                      alt="footer images"
                    />
                  </Div>
                </Div>
                <p className="mt10">
                  Feel free to reach out if you want to collaborate with us, or
                  simply have a call.
                </p>
                <Div className="contactinfo">
                  <a href="tel:+917703887123">
                    (+91)-770 388 7123 <span>→</span>
                  </a>
                  <a href="mailto:info@anagrammedia.tech">
                    <span className="cf_email">info@anagrammedia.tech</span>{" "}
                    <span>→</span>
                  </a>
                </Div>
                <Div className="cs-footer_item">
                  <SocialWidget />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
        <Div className="cs-bottom_footer_left">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
          <Div className="cs-bottom_footer_right">
            <Div className="cs-copyright">
              Copyright © 2023 Anagram Media Labs Pvt.Ltd
            </Div>
          </Div>
         
        </Div>
      </Div>
    </footer>
  );
}
