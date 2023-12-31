import Head from 'next/head';
import React from 'react';
import Cta from '../../../components/Cta';
import Div from '../../../components/Div';
import Layout from '../../../components/Layout';
import BlogPageHeading from '../../../components/BlogPageHeading';

/* import PostStyle2 from '../../../components/Post/PostStyle2'; */
 import Sidebar from '../../../components/Sidebar'; 
import Spacing from '../../../components/Spacing';
import Link from 'next/link';
import Image from 'next/image';





/* import { GetStaticProps } from 'next' */
 export async function getServerSideProps(context) {
 
    const {id} = context.params;

    const res = await fetch(`https://designgram.io/wp-json/wp/v2/posts?_embed&slug=${id}`);
    const data = await res.json();
    return {props: {data} }

  // code

}

export default function Blog( {data} ) {
  /* const currentPost = data[0] */; // Assuming you are displaying a single post
/*  console.log(data);  */


  return (
    <>
      <Head>
      <title>Anagram - {data[0].title.rendered}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <BlogPageHeading
          title={data[0].title.rendered}
      
          pageLinkText={data[0].title.rendered}
        />

        <Div className="container">
          <Div className="row">
            
           
            
                 {
                  data.map((post, index) => (
                   
                    <Div className="col-lg-8"  key={index}>
                     
                    
                    <Div >
                     
                      {post['_embedded']['wp:featuredmedia'] && post['_embedded']['wp:featuredmedia'][0] && (
                        <Image src={post['_embedded']['wp:featuredmedia'][0]['source_url']} width={1080} height={200} alt="blog" />
                      )}
                       <Spacing lg="10" md="10" />
                    
                     <h4>{post['title']['rendered']}</h4>
                     
                    
                     <div dangerouslySetInnerHTML={{ __html:post['content']['rendered'] }} />
             
                    </Div>
                   
                    <Spacing lg="40" md="40" />    
                    </Div>
                    
                  ))
                }
                
                
             

           
                <Div className="col-xl-3 col-lg-4 offset-xl-1">
              {/* Start Sidebar */}
              <Spacing lg="0" md="80" />
              <Sidebar />
              {/* End Sidebar */}
            </Div>
           
          </Div>
        </Div>
        <Div className="container">
          <h2>Check our other articles</h2>
          <Spacing lg="40" md="40" />  
          <Div className="row">
           
            {
             data.map((post, index) => (
               
               <Div className="col-lg-4"  key={index}>
               
               <Div >
                
                 {post['_embedded']['wp:featuredmedia'] && post['_embedded']['wp:featuredmedia'][0] && (
                   <Image src={post['_embedded']['wp:featuredmedia'][0]['source_url']} width={350} height={194} alt="blog" />
                 )}
                  <Spacing lg="10" md="10" />
                <Link href={`/blog/${post['slug']}`}>
                <h4>{post['title']['rendered']}</h4>
                </Link>
               {/*  <div dangerouslySetInnerHTML={{ __html:post['excerpt']['rendered'] }} /> */}
             {/*  <p> dangerouslySetInnerHTML={{ __['excerpt']['rendered']html: post }}</p> */}
               </Div>
              
               <Spacing lg="40" md="40" />    
               </Div>
               
             ))
           }
           
           
        

      
 
      
     </Div>

        </Div>
        <Spacing lg="20" md="80" />
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




