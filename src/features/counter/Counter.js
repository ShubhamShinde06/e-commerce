import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  selectCount,
} from './counterSlice';


export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  
  return (
    <>
    
    </>
  );
}
