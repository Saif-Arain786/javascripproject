
function validateData() {
    if (userName.value == "" || email.value == "" || course.value == "" || rollNo.value == "") {
        return false;
    }
    else {
        return true;
    }
}
let image =document.getElementById("imges");
// console.log(image.src);
let image1 =document.getElementById("image1");
// console.log(image.src);
let userName = document.getElementById("userName");
let email = document.getElementById("email");
let course = document.getElementById("course");
// console.log(course)
let rollNo = document.getElementById("rollNo");
let imagePreview = document.getElementById("imagePreview");

let intere=document.getElementById("int1");
let intere1=document.getElementById("int2");
let intere2=document.getElementById("int3");

let lang=document.getElementById("lang1");
let lang1=document.getElementById("lang2");
let lang2=document.getElementById("lang3");

let des=document.getElementById("description");
console.log(des);
var a = document.getElementById("userName")

var skill1=document.getElementById("develop")
var descriptions1=document.getElementById("skilldesc")

var skill2=document.getElementById("develop1")
var descriptions2=document.getElementById("skilldesc1")

var skill3=document.getElementById("develop2")
var descriptions3=document.getElementById("skilldesc2")

var education=document.getElementById("education")
var education1=document.getElementById("edudes")

var education2=document.getElementById("edudes1")

var skil12=document.getElementById("cert111")
var skil13=document.getElementById("cert222")
var skil14=document.getElementById("cert333")

var colors=document.getElementById("colors")

var cont5=document.getElementById("cont5")
var cont6=document.getElementById("cont6")

function templateOne() {

    if (validateData() == false) {
        alert("Please enter correct data");
    }
    else {
        console.log(course.value)
        document.getElementById("templateOne").style.display = 'block';
        document.getElementById("userNames").innerText += userName.value;
        document.getElementById("emails").innerText = email.value;
        document.getElementById("syllabus").innerText = course.value
        document.getElementById("rollNos").innerText = rollNo.value;
        document.getElementById("rollNos").href= rollNo.value

        document.getElementById("inte1").innerText=intere.value;
        document.getElementById("inte2").innerText=intere1.value;
        document.getElementById("inte3").innerText=intere2.value;

         document.getElementById("lan1").innerText=lang.value;
        document.getElementById("lan2").innerText=lang1.value;
        document.getElementById("lan3").innerText=lang2.value;


        document.getElementById("nam").innerText=userName.value;
        var b=document.getElementById("summary")
        console.log(b)
        b.innerText=des.value;

        document.getElementById("skill1").innerText=skill1.value;
        document.getElementById("skill1des").innerText=descriptions1.value;

        document.getElementById("skill2").innerText=skill2.value;
        document.getElementById("skill2des").innerText=descriptions2.value;

        document.getElementById("skill3").innerText=skill3.value;
        document.getElementById("skill3des").innerText=descriptions3.value;

        document.getElementById("edu1").innerText=education.value;
        document.getElementById("edu1des").innerText=education1.value;
       

        document.getElementById("links").innerText=education2.value
        document.getElementById("links").src=education2.value

        document.getElementById("cert11").innerText=skil12.value
        document.getElementById("cert22").innerText=skil13.value
        document.getElementById("cert33").innerText=skil14.value
       console.log(colors.value)
       document.getElementById("main-div").style.color=`${colors.value}`
       document.getElementById("container1").style.backgroundColor=`${cont5.value}`
        document.getElementById("container2").style.backgroundColor=`${cont6.value}`
        document.getElementById("main-main").style.display=`block`;

    }

}


document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    console.log('jsfkshdfkj ',file)

    // imagePreview.src=file;
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.getElementById('imagePreview');
            img.src = e.target.result; // Set the base64 image URL to the img tag
        }
        
        reader.readAsDataURL(file); // Convert image to base64
    }
});



  document.getElementById('btndownload').addEventListener('click', function () {
    var element = document.getElementById('main-div');
    
    // Options for pdf
    var opt = {
      margin:       1,
      filename:     'myFile.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    // Generate the PDF from the content div
    html2pdf().from(element).set(opt).save();
  });


