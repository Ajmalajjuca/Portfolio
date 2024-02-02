

 $("#submit-form").submit((e)=>{
   e.preventDefault();
   const formData = $("#submit-form").serialize();
   $.ajax({
       url:"https://script.google.com/macros/s/AKfycbyIfSar_6lacB707KiFxBNZYxorxCpc08RLtqK6rhRTtjmRxVmhNd4VPCv5anMwxxF7/exec",
       data:formData,
       method:"post",
       success:function (response){
         
           alert("Form submitted successfully");
          
           window.location.reload();
           //window.location.href="https://google.com"
       },
       error:function (err){
           alert("Something Error");

       },
   });
 });



function toggleMenu() {
  

  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      
      
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
