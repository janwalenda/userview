'use client';

import Image from 'next/image'
import { useState } from 'react';
import styles from './page.module.css' // className={styles.container}

async function getData() {
  const res = await fetch('https://randomuser.me/api/')

  return res.json();
}

export default function Home() {
  return (
      <div>
        <div className=''>
          <figure className='rounded-full bg-center bg-fixed bg-cover' style={{
            backgroundImage: ''
          }}/>
        </div>
      </div>
  )
}
