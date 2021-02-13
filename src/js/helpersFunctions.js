import {resArr,alertMessage,notification,form} from './refs';
import {weekDaysArr,time} from './data';
import {meeting} from './eventListeners';
import {input} from './handlers';
import constants from './constants';


export const checkData=(arr)=>{
    return arr.forEach(obj=>{
        
        resArr[obj.row][obj.col].style.backgroundColor=constants.LIGHT_GREEN;
        resArr[obj.row][obj.col].innerHTML=`<span class="delete-event">${obj.eventName}<span class="delete-cross">&#10005;</span></span>`
     })
};

export const rowCheck=(obj)=>{
    let row=0;

    if(!meeting.time){
        return;
    } else {
        if(time.includes(obj.time)){
            row=time.indexOf(obj.time);
        } 
    }
 
    return row;
};

export const colCheck=(obj)=>{
    let col=0;

    if(!meeting.day){
        return;
    } else {
        if(weekDaysArr.includes(obj.day)){
            col=weekDaysArr.indexOf(obj.day);
        } 
    }
    
    return col;
};

export const messageAlertDisplay=()=>{
    alertMessage.style.display=constants.FLEX;
    setTimeout(()=>alertMessage.style.display=constants.NONE,constants.DELAY);
};

export const notificationAlert =()=>{
    notification.textContent=constants.NOTIFICATION_MESSAGE;
    notification.style.display=constants.FLEX;
    setTimeout(()=>notification.style.display=constants.NONE,constants.DELAY);
};

export const resetMeeting=()=>{
    let {eventName,day,time,participants} = meeting;

    eventName="";
    day="";
    time="";
    participants="";
}

export const dataVerification=()=>{
    notificationAlert();
    form.reset();
    resetMeeting();
};

export const filterByName=(arr)=>{
    if(input !== "All"){
    
     return arr.forEach(obj=>{
         if(obj.participants.includes(input)) {
             resArr[obj.row][obj.col].style.backgroundColor=constants.LIGHT_GREEN;
             resArr[obj.row][obj.col].innerHTML=`<span class="delete-event">${obj.eventName}<span class="delete-cross">&#10005;</span></span>`
         } else {
             resArr[obj.row][obj.col].style.backgroundColor=constants.TRANSPARENT;
             resArr[obj.row][obj.col].innerHTML = "";
         }
             
         })
     } else {
         checkData(arr);
     }
    
 };
