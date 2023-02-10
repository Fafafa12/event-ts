import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from 'next'
import absoluteUrl from 'next-absolute-url'

import Axios from 'axios';
import axios from 'axios';

export default function Home({data} : {data: any}) {
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return (
    <>
      <p>1212121</p>
    </>
  )
}

export  const getServerSideProps: GetServerSideProps = async (context) => {
  
  const { origin } = absoluteUrl(context.req, 'localhost:3000');
  const apiUrl = `${origin}/api/city`;
  const {data} = await Axios.get(apiUrl);
  

  return {
    props: {
      data: data.data
    },
  };
  
}
