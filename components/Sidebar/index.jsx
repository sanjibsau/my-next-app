import React from "react";
import Div from "../Div";

import RecentPost from "../Widget/RecentPost";
import SearchWidget from "../Widget/SearchWidget";
import SideMenuWidget from "../Widget/SideMenuWidget";
import TagWidget from "../Widget/TagWidget";
import Link from "next/link";

export async function getServerSideProps() {
  const res = await fetch ('https://designgram.io/wp-json/wp/v2/posts?_embed');
  const data = await res.json();
  return {props: {data} }

// code

}

export default function Sidebar({ data }) {
  console.log(data);

  /* 
  {
    data.map((post, index) => (
      <Link key={index} href={`/blog/${post.slug}`}>
        <h3>{post.title.rendered}</h3>
        <p>Category: {post.categories[0].name}</p>
      </Link>
    ))
  }
   */
 
  return (
    <>
      <Div className="cs-sidebar_item">
        <SearchWidget title="Search" />
      </Div>
      <Div className="cs-sidebar_item">
        <h2 className="cs-widget_title">Categorys</h2>
        <ul className="cs-menu_widget cs-menu_widget cs-style1 cs-mp0 footer_link">
          { data && data.map((post, index) => (
            <li key={index}>
              <Link href={`/blog/${post.slug}`}>
                <h3>{post.title.rendered}</h3>
                {post._embedded &&
                  post._embedded["wp:term"] &&
                  post._embedded["wp:term"][0] && (
                    <p>Category: {post._embedded["wp:term"][0][0].name}</p>
                  )}
              </Link>
            </li>
          ))}
        </ul>
      </Div>
      {/* <Div className="cs-sidebar_item">
        <RecentPost title="Archives" data={recentPostData} />
      </Div> */}
      {/*  <Div className="cs-sidebar_item">
        <SideMenuWidget title='Archives' data={archiveData}/>
      </Div>
       <Div className="cs-sidebar_item">
        <TagWidget title='Tags' data={tagData}/>
      </Div>  */}
    </>
  );
}
