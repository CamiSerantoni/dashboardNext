'use client'

import { useAppDispatch, useAppSelector } from "@/src/store";
import { addOne, substractOne } from "@/src/store/counter/counterSlice";
import { useState } from "react";

interface Props {
value?: number;

}
export const CartCounter = ({value =0}) => {
    // const [count, setCount] = useState(value);

const count = useAppSelector(state => state.counter.count);
const dispatch = useAppDispatch()



  return (
    <>
      <span className="text-9xl"> {count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() =>dispatch(substractOne())}
        >
          -1
        </button>
      </div>
    </>
  );
};
