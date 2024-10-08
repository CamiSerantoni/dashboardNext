'use client'

import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/src/store';
import { IoCartOutline } from 'react-icons/io5';

export const WidgetsGrid = () => {

    const isCart = useAppSelector(state => state.counter.count);

  return (
    <div>
       <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget title={` ${isCart}`} label="Contador" subTitle="Widget subtitle" href='/dashboard/counter' icon={<IoCartOutline size={70}/>}/>
      
      </div>
    </div>
  )
}


