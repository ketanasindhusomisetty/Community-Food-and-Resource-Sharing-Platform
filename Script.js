function showToast(message){

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

toastMessage.textContent = message;

toast.style.display = "block";

setTimeout(()=>{
toast.style.display = "none";
},3000);

}

document.getElementById("contactForm").addEventListener("submit",(e)=>{

e.preventDefault();

showToast("Message sent successfully!");

e.target.reset();

});

function openModal(modalId){

const modal = document.getElementById(modalId);

if(modal){
modal.style.display="flex";
}

}

function closeModal(modalId){

const modal = document.getElementById(modalId);

if(modal){
modal.style.display="none";
}

}
