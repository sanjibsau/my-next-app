import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Accordion from "../../../../components/Accordion";
import Button from "../../../../components/Button";
import Cta from "../../../../components/Cta";
import Div from "../../../../components/Div";
import IconBox from "../../../../components/IconBox";
import Layout from "../../../../components/Layout";
import PageHeading from "../../../../components/PageHeading";
import SectionHeading from "../../../../components/SectionHeading";
import TestimonialSlider from "../../../../components/Slider/TestimonialSlider";
import Spacing from "../../../../components/Spacing";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetails() {
  const router = useRouter();
  const serviceId = router.query.serviceId;
  return (
    <>
      <Head>
        <title>
          SEO Company & Agency in Delhi | SEO Services in Delhi - AML
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Drive Qualified Traffic With An Organic  SEO Agency"
          subtitle="We are an organic search engine optimization (SEO) agency that deploys proven SEO techniques and strategies that have helped many brands claim the top position on search engine results pages for competitive, high-volume industry keywords. Our SEO works — we know how to drive qualified traffic and keep your CAC low in the long term."
        />
         <Link href="#service" className="cs-down_btn cs_service_details_btn" scroll={false}>
          .
        </Link>
        <Spacing lg="100" md="80" />
        <Div className="container" id="service">
          <SectionHeading
            title="Experience tremendous growth <br/> with best seo agency"
            subtitle="Achieve Phenomenal Growth with the top SEO Agency "
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
          <Div className="row">
            <Div className="col-lg-3">
              <IconBox
                icon="/img/icons/service_icon_1.svg"
                title="Local SEO"
                subtitle="We offer local SEO services in Delhi to help your business appear in nearby searches. Our strategies include Google My Business optimization"
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-3">
              <IconBox
                icon="/img/icons/service_icon_2.svg"
                title="Global SEO"
                subtitle="Global SEO services - customized SEO strategies, including in-depth research, competitor analysis, keyword optimization"
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-3">
              <IconBox
                icon="/img/icons/service_icon_3.svg"
                title="Ecommerce SEO"
                subtitle="Get custom E-commerce SEO strategies with an SEO agency in Delhi. Boost your business's ranking and visibility. Optimize your product titles, "
              />
              <Spacing lg="30" md="30" />
            </Div>
            <Div className="col-lg-3">
              <IconBox
                icon="/img/icons/service_icon_3.svg"
                title="App Store Optimization"
                subtitle="With an SEO agency in Delhi, get App Store Optimization (ASO) services to enhance your app's visibility in search results. "
              />
              <Spacing lg="30" md="30" />
            </Div>
          </Div>
        </Div>
        <hr className="hr_bodder" />
        <Spacing lg="120" md="50" />
        <Div className="container">
          <Div className="row align-items-center">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <Image
                  src="/img/seo.svg"
                  alt="Service"
                  className="cs-radius_15 w-100"
                  width={445}
                  height={430}
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <h2 className="cs-font_50 cs-m0 fade-in">
                SEO Content that Breaks Through Competition Noise
              </h2>
              <h5>
                SEO Content that Breaks Through Competition Noise We know what
                it takes to break through the digital noise and drive organic
                traffic.
              </h5>
              <p>
                Our process leverages AI tools to put the spotlight on your
                brand and drive organic traffic of high-value customers. After a
                comprehensive SEO audit and competitive analysis, we’ll craft an
                SEO strategy that connects your business objectives with your
                content to optimize every level of your sales funnel.
              </p>

              <Link className="cs-btn baner_btn_style" href="/contact">
                TALK TO US
              </Link>

              <Spacing lg="50" md="30" />
            </Div>
          </Div>
        </Div>
        <Spacing lg="120" md="50" />
        <Div className="container">
          <Div className="row align-items-center">
            <Div className="col-lg-6">
              <h2 className="cs-font_50 cs-m0">
                Find Your Organic Digital Marketing Niche
              </h2>
              <h5>We know how much your brand means to you.</h5>
              <p>
                SEO has become about so much more than keyword counts or
                backlinks. It’s about producing high-quality content designed
                for strategic search engine rankings, provides value, and tells
                your story. Our SEO experts will identify niche and industry
                specific opportunities to improve your organic search result
                rankings, visibility, and traffic volume from multiple sources.
                We have the rankings to prove it.
              </p>

              <Link className="cs-btn baner_btn_style" href="/contact">
                SEE OUR RESULTS
              </Link>
            </Div>
            <Div className="col-xl-5 col-lg-5 offset-xl-1">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <Image
                  src="/img/circles.webp"
                  alt="Service"
                  className="cs-radius_15 w-100"
                  width={445}
                  height={430}
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
          </Div>
        </Div>

        <Spacing lg="150" md="80" />

        <Div className="container">
          <h2 className="cs-font_50 cs-m0">Organic SEO Tactics We Deploy</h2>
          <Spacing lg="30" md="40" />
          <Div className="row align-items-center">
            <Div className="col-lg-4">
              <Button
                btnLink="#"
                btnText="UI/UX audit for SEO"
                variant="cs-type2"
              />
              <Spacing lg="20" md="10" />
              <Button
                btnLink="#"
                btnText="Site architecture"
                variant="cs-type2"
              />
              <Spacing lg="20" md="10" />
              <Button
                btnLink="#"
                btnText="Backlink analysis"
                variant="cs-type2"
              />
              <Spacing lg="20" md="10" />
              <Button
                btnLink="#"
                btnText="Competitive analysis"
                variant="cs-type2"
              />
              <Spacing lg="20" md="10" />
              <Button
                btnLink="#"
                btnText="Search Console setup"
                variant="cs-type2"
              />
              <Spacing lg="20" md="10" />
              <Button
                btnLink="#"
                btnText="Search Console setup"
                variant="cs-type2"
              />
              <Spacing lg="0" md="10" />
            </Div>
            <Div className="col-lg-4">
              <Button
                btnLink="#"
                btnText="Search Console setup"
                variant="cs-type2"
              />
              <Spacing lg="20" md="10" />
              <Button
                btnLink="#"
                btnText="Competitor analysis"
                variant="cs-type2"
              />
              <Spacing lg="20" md="10" />
              <Button
                btnLink="#"
                btnText="Competitor analysis"
                variant="cs-type2"
              />
              <Spacing lg="20" md="10" />
              <Button
                btnLink="#"
                btnText="Competitor analysis"
                variant="cs-type2"
              />
              <Spacing lg="20" md="10" />
              <Button
                btnLink="#"
                btnText="Competitor analysis"
                variant="cs-type2"
              />
              <Spacing lg="20" md="10" />
              <Button
                btnLink="#"
                btnText="Competitor analysis"
                variant="cs-type2"
              />
              <Spacing lg="20" md="10" />
            </Div>
            <Div className="col-lg-4">
              <Button
                btnLink="#"
                btnText="Link building"
                variant="cs-type2"
              />
              <Spacing lg="20" md="10" />
              <Button
                btnLink="#"
                btnText="Site copy updates"
                variant="cs-type2"
              />
              <Spacing lg="20" md="10" />
              <Button
                btnLink="#"
                btnText="Image optimization"
                variant="cs-type2"
              />
              <Spacing lg="20" md="10" />
              <Button
                btnLink="#"
                btnText="Image optimization"
                variant="cs-type2"
              />
              <Spacing lg="20" md="10" />
              <Button
                btnLink="#"
                btnText="Competitor analysis"
                variant="cs-type2"
              />
              <Spacing lg="20" md="10" />
              <Button
                btnLink="#"
                btnText="Competitor analysis"
                variant="cs-type2"
              />
              <Spacing lg="20" md="10" />
            </Div>
          </Div>
        </Div>
        <Spacing lg="80" md="80" />
        <TestimonialSlider />
        <Spacing lg="80" md="80" />
        <Div className="container cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-5 col-lg-6">
                <SectionHeading
                  title="Some pre questions and answers. 📖"
                  subtitle="FAQ’s"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-lg-6 offset-xl-1">
                <Accordion />
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Cta
            title="Ready to kick off your <br/> growth journey? 🚀"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/img/cta_bg.jpeg"
          />
        </Div>
      </Layout>
    </>
  );
}