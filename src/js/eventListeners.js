
import{form,modalOpen,inputSelector,table,deleteMessage,createEventBtn,formButton} from './refs';
import {modalCloser,modalOpener,closeModal} from './modal';
import {selectorHandler,deleteEvent,handlerDelete,handlerFormSubmit} from './handlers';
import constants from './constants';

export let meeting={
    eventName:"",
    participants:"",
    time:"",
    day:""
};

form.addEventListener('input',(e)=>meeting[e.target.name]=e.target.value);

window.addEventListener('keydown',e=>{
    if(e.code ===constants.ESCAPE){
        closeModal();
    }
});

modalOpen.addEventListener('click',modalCloser);

inputSelector.addEventListener('input',selectorHandler);

table.addEventListener("click",deleteEvent);

deleteMessage.addEventListener('click',handlerDelete);

createEventBtn.addEventListener("click",modalOpener);

formButton.addEventListener('click', handlerFormSubmit);


