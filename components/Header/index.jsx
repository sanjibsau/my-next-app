import React, { useEffect, useState } from "react";
import SocialWidget from "../Widget/SocialWidget.jsx";
import Newsletter from "../Widget/Newsletter";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import Div from "../Div";
import DropDown from "./DropDown";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/img/logo.png";
import { Icon } from "@iconify/react";


export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ""
        } cs-sticky_header ${isSticky ? "cs-sticky_header_active" : ""}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/">
                  <Image src={Logo} alt="Logo" width={175} height={75} />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? "block" : "none"}` }}
                  >
                    <li>
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        onClick={() => setMobileToggle(false)}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link
                        href="/services"
                        onClick={() => setMobileToggle(false)}
                      >
                        Services
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/services/performance-branding"
                              onClick={() => setMobileToggle(false)}
                            >
                              Performance Branding
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services"
                              onClick={() => setMobileToggle(false)}
                            >
                              SEM/PPC
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/social-ads"
                              onClick={() => setMobileToggle(false)}
                            >
                              Social Ads
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/services-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              CRO
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/seo"
                              onClick={() => setMobileToggle(false)}
                            >
                              SEO
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/service-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Content Marketing
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/services/service-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Email Marketing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/service-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Video Marketing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/services/service-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              SMS Marketing
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <Link
                        href="/portfolio"
                        onClick={() => setMobileToggle(false)}
                      >
                        Expertise
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              SaaS
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/portfolio/portfolio-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Healthcare
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/portfolio/portfolio-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Fintech
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/portfolio/portfolio-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              B2B
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/portfolio/portfolio-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Consumer
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/portfolio/portfolio-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Crypto
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li>
                      <Link href="/blog" onClick={() => setMobileToggle(false)}>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers" onClick={() => setMobileToggle(false)}>
                       Careers
                      </Link>
                    </li>
                    
                    <li>
                    
                      <Link
                        href="/contact"
                        onClick={() => setMobileToggle(false)}
                        className="cs-btn baner_btn_style">
                        Talk to Us
                        <Icon icon="bi:arrow-right" />
                      </Link>
                    </li>

                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs-toggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
               {/* <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div> */}
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? "cs-side_header active" : "cs-side_header"
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" href="/">
            <Image src={Logo} alt="Logo" width={175} height={75} />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Keep up with the latest and greatest in growth marketing 📖
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="Enjoy the best growth marketing newsletter on the internet — right in your inbox."
              placeholder="example@gmail.com"
            />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
