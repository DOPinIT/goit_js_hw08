!function(){var e=document.querySelector(".feedback-form"),t=document.querySelector("input"),a=document.querySelector("textarea");t.addEventListener("input",(function(e){var t=e.target;(t||""!==textarea)&&(localStorage.setItem("userEmail",t.value),localStorage.getItem("userEmail"))})),a.addEventListener("input",(function(e){var t=e.target;(t||""!==textarea)&&(localStorage.setItem("textArea",t.value),localStorage.getItem("textArea"))})),e.addEventListener("submit",(function(t){var a=t.target;event.preventDefault();var r=a.elements,l=r.email,n=r.message;""===l.value||""===n.value?alert("Всі поля повинні бути заповнені!"):(console.log({email:l.value,message:n.value}),e.reset())}))}();
//# sourceMappingURL=03-feedback.7746aa6d.js.map
