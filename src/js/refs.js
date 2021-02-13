export const createEventBtn = document.querySelector('.button-create');
export const submitEventBtn = document.querySelector('.button-submitter');
export const form = document.querySelector('form');
export const table = document.querySelector('table');
export const inputSelector = document.querySelector('.name-selector');
export const alertMessage = document.querySelector('.alert-message');
export const deleteMessage = document.querySelector('.delete-message');
export const modalOpen = document.querySelector('.overlay');
export const formButton = document.querySelector('.form-button-wrapper');
export const notification = document.querySelector('.notification');

const tr = document.querySelectorAll('tr');
const divArray = Array.from(tr).slice(1);
export const resArr = divArray.map(tr=>(Array.from(tr.querySelectorAll('td')).slice(1)));




