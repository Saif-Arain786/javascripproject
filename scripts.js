function login(){
    event.preventDefault()

    var logemail=document.getElementById(`emails`)
    var logpassword=document.getElementById(`psws`)
 var usdata=JSON.parse( localStorage.getItem(`localdata`))
 console.log(usdata)
 if (!usdata) {
    Swal.fire({
        icon: "error",
        title: "record not found",
        // text: "Something went wrong!",
      });
      setTimeout(()=>{
        window.location.href=`./index.html`
      },3000)
 }
 if(!(usdata.email==logemail.value)){
    Swal.fire({
        icon: "error",
        title: "invalid name",
        // text: "Something went wrong!",
      });
 }else if(!(usdata.password==logpassword.value)){
    Swal.fire({
        icon: "error",
        title: "invalid password",
        // text: "Something went wrong!",
      });
 }else{
    Swal.fire({
        title: "Good  job!",
        text:   " Login  Successfully",
        icon: "success"
      });  
    setTimeout(()=>{
        window.location.href=`./dashboard.html`
    },3000)
    
 }
   }
   