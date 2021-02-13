import {checkData} from './helpersFunctions';
import {data} from './data';
import constants from './constants';

export const setToLocalStorage=(arr)=>{
    return localStorage.setItem(constants.SCHEDULE,JSON.stringify(arr));
 };
 
 export const getFromLocalStorage=()=>{
    return JSON.parse(localStorage.getItem(constants.SCHEDULE));
 }

 export const checkLocalStorage = ()=>{
    if(localStorage.getItem(constants.SCHEDULE)){
        checkData(getFromLocalStorage());
    } else {
       setToLocalStorage(data);
    };
 }
