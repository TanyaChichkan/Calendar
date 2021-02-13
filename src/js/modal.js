import {modalOpen} from './refs';

export const closeModal=()=>{
    modalOpen.style.display="none";
};

export const modalCloser=e=>{
    if(e.target.classList.contains('overlay')){
        closeModal();
    }

    if(e.target.nodeName==="svg" || e.target.nodeName==="use"){
        closeModal();
    }
};

export const modalOpener=e=>{
    e.target.classList.contains("button-create") ? 
    modalOpen.style.display="block" : "";

}