
const nameE = document.querySelector('#name');
const number = document.querySelector('#number');
const month = document.querySelector('#mount');
const year = document.querySelector('#year');
const cvc = document.querySelector('#cvc');
const yearCARD = document.querySelector('#año');
const monthCARD = document.querySelector('#mes');

const errorNumber = document.querySelector('.p_number');
const errorYear= document.querySelector('.p_year');
const errorCvc = document.querySelector('.p_cvc');
const nameCARD = document.querySelector('.name-card');
const  numberCARD = document.querySelector('.number-card');
const cvcCARD = document.querySelector('.cvc-card');
const btn = document.querySelector('.btn');
const thank = document.querySelector('.thank');
const continuee = document.querySelector('#continue');
const form = document.querySelector('.formulario');

// //////////////////////////////////////////////////////
nameE.addEventListener("input", updateName);
number.addEventListener("input",updateValue);
month.addEventListener("input",updateMonth);
year.addEventListener("input",updateYear);
cvc.addEventListener("input",updateCVC);


function updateName(e) {
  nameCARD.textContent = e.target.value;
  if (nameE.value.length === 0) {
    nameCARD.innerText = "Jane Appleseed";
}
}
function updateValue(e) {
  numberCARD.textContent = e.target.value;
  if( number.value.length=== 0){
    numberCARD.innerText = "0000 0000 0000 0000";
}
}
function updateMonth(e) {
  monthCARD.textContent = e.target.value;
  if( month.value.length=== 0){
    monthCARD.innerText = "00";
}
}
function updateYear(e) {
  yearCARD.textContent = e.target.value;
  if( year.value.length=== 0){
    yearCARD.innerText = "00";
}
}
function updateCVC(e) {
  cvcCARD.textContent = e.target.value;
  if( cvc.value.length=== 0){
    cvc.innerText = "00";
}
}
form.addEventListener('submit', (e) =>{
    
    e.preventDefault();

  thank.style.display= 'block';
  form.style.display= 'none';
  
})

continuee.addEventListener('click', (e)=>{
  e.preventDefault();

  thank.style.display= 'none';
  form.style.display= 'block';
  
  numberCARD.innerText = "0000 0000 0000 0000";
  nameCARD.innerText = "Jane Appleseed";
  cvcCARD.innerText = "000";
  yearCARD.innerText = "00";
  monthCARD.innerText = "00";
  document.querySelector("form").reset();
})

