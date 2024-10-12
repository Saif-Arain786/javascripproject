function register(){
    event.preventDefault();
    var name=document.getElementById(`name`)
    var email=document.getElementById(`email`)
    var emailregex=`/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/`
    var password=document.getElementById(`psw`)
    var repeatpsw=document.getElementById(`psw-repeat`)
    // var main=document.querySelector(`.container label`)
    // console.log(main);
    if (name.value==``) {
        Swal.fire({
            icon: "error",
            title: "name is empty",
            text: "Something went wrong!",
          });
    } 
    else if (email.value==``) {
        Swal.fire({
            icon: "error",
            title: "Email is empty",
            text: "Something went wrong!",
          });
    } 
    else if (password.value==``) {
        Swal.fire({
            icon: "error",
            title: "plese enter password",
            text: "Something went wrong!",
          });
    } 
   else if (!(password.value==repeatpsw.value ) ) {
        // alert(`repeatpassword is empty`)
        Swal.fire({
            icon: "error",
            title: "password not match",
            // text: "Something went wrong!",
          });
        
    } 
    else if (!(password.value==repeatpsw.value ) ) {
        // alert(`repeatpassword is empty`)
        Swal.fire({
            icon: "error",
            title: "password not match",
            // text: "Something went wrong!",
          });
        
    } else{
        Swal.fire({
            title: "Good  job!",
            text: `${name.value}  " Register  successfully"`,
            icon: "success"
          });  

     var data= {
         name:name.value,
         email:email.value,
         password:password.value,
         repeatpsw:repeatpsw.value
     }
     var ldat=JSON.stringify(data)
     console.log(ldat)
      localStorage.setItem(`localdata`,ldat)
  setTimeout(() => {
    
      window.location.href=`./login.html`
      
  }, 2000);
    }




    // console.log(name.value,email.value,password.value,repeatpsw.value)
    // // console.log(data)
    // var gdata=JSON.parse( localStorage.getItem(`localdata`))
    
    // console.log(gdata)
    // // console.log(localdata)
    // name.value=``
    // email.value=``
    // password.value=``
    // repeatpsw.value=``
    
}
function getdata(){
    var gtldata=JSON.parse( localStorage.getItem(`localdata`))
    var li1=document.getElementById(`li1`)
    var li2=document.getElementById(`li2`)
    
    li1.innerHTML=gtldata.name;
    console.log(gtldata.name)
    li2.innerHTML=gtldata.email
   }
   getdata();

   
   function logout(){
    localStorage.clear();
   
    setTimeout(() => {
        window.location.href=`./index.html`

    }, 3000);
   }
   

   function webpost(){
    window.location.href="./quill.html";
   }
   function webCV(){
    window.location.href="./CV.html";
   }