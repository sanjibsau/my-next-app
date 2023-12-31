import Head from 'next/head';
import React from 'react';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import BlogPageHeading from '../../components/PageHeading';

/* import PostStyle2 from '../../../components/Post/PostStyle2'; */

import Spacing from '../../components/Spacing';
import Link from 'next/link';
import Image from 'next/image';






export default function Blog() {



  return (
    <>
      <Head>
      <title>Anagram - Result 🚀</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <BlogPageHeading
          title="A Growth Story
          or Maybe a Few."
        subtitle="We value our clients as partners and grow along their side.

        Our team is dedicated to becoming a part of our clients’ brands and meeting their unique needs. Here are a few stories about how we helped our client partners achieve their growth goals."
        />

    
    
        <Spacing lg="10" md="80" />
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something cool together 🚀"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      

      </Layout>
    </>
  )
}




