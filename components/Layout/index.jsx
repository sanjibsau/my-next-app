import React, { useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import dynamic from 'next/dynamic';
 const CustomCursor = dynamic(
  () => {
    return import('../CustomCursor');
  },
  { ssr: false },
); 
export default function Layout({  children }) {
  return (
    <>
      <Header  />
       <CustomCursor /> 
      {children}
      <Footer /> 
    </>
  );
}
