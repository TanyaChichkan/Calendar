import {deleteMessage,form} from './refs';
import {dataVerification,rowCheck,colCheck,messageAlertDisplay,checkData,filterByName,resetMeeting} from './helpersFunctions';
import {setToLocalStorage,getFromLocalStorage} from './localStorage';
import {meeting} from './eventListeners';
import { closeModal } from './modal';
import constants from './constants';


export let input="";

let index1;
let index2;
let cell;


export const handlerDelete=({target:{dataset}})=>{
    const updatedArr = [...getFromLocalStorage()];

    if(dataset.index ==="yes"){
        const filteredArr= updatedArr.filter(item=> {
            
            return item.row+1 != index2 && item.col+1!=index1
        });

        cell.innerHTML="";
        cell.style.backgroundColor=constants.TRANSPARENT;
        
        setToLocalStorage(filteredArr);
        deleteMessage.style.display=constants.NONE;
        
    } if(dataset.index ==="no"){
        deleteMessage.style.display=constants.NONE;
        setToLocalStorage(updatedArr);
    }
};

export const deleteEvent=({target})=>{

    cell=target.parentNode.parentNode;
    if(target.classList.contains('delete-cross')){
        
        index1 = target.parentNode.parentNode.cellIndex;
        index2 = target.parentNode.parentNode.parentNode.rowIndex;

        deleteMessage.style.display=constants.BLOCK;

        deleteMessage.querySelector('.delete-message-text').textContent = 
        `Are you sure you want to delete "${target.parentNode.textContent
        .slice(0,target.parentNode.textContent.length-1)}" event?`
    }

};

export const selectorHandler=({target:{value}})=>{
    input = value;
    const updatedArr = getFromLocalStorage()
    filterByName([...updatedArr]);
};

export const handlerFormSubmit=(e)=>{
    e.preventDefault();

    const {target:{dataset}} = e;

        if(dataset.name==="create"){
            const updatedArr = [...getFromLocalStorage()];
            const values = Object.values(meeting);
            
            if(values.some(item=>item ==="")){
                dataVerification();
            } else {

            if(!updatedArr.some(({time,day})=>(time==meeting.time && day==meeting.day))){
                updatedArr.push({...meeting, row:rowCheck(meeting), col:colCheck(meeting)});
                resetMeeting();
                
            }else {
                messageAlertDisplay();
            }

            setToLocalStorage(updatedArr);
            checkData(updatedArr);
            }
        } else {
            closeModal();
        }

    form.reset();
   
};