// const quill = new Quill('#editor', {
//     modules: { toolbar: true },
//     theme: 'snow'
//   });

  // const quill = new Quill('#editor', {
  //   modules: {
  //     toolbar: {
  //       container: '#toolbar', // Selector for toolbar container
  //       handlers: {
  //         bold: customBoldHandler
  //       }
  //     }
  //   }
  // });
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];
  
  const quill = new Quill('#editor', {
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow'
  });
  

  function post() {
    const value = quill.getContents();
    const html = quill.root.innerHTML;
    // Create a new div element and set its inner HTML to the editor's value
    const newDiv = document.createElement('div');
    newDiv.innerHTML = html;

   

    // console.log(html)
    // newDiv.style.border="2px solid gray";
    // newDiv.style.border-radius= '6px';
    // console.log(newDiv.setAttribute(`id`,blog))
    // Append the new div element to the body
    document.body.appendChild(newDiv);
    newDiv.setAttribute('id', 'blog');

    var div =document.createElement(`div`)
    console.log(div)
    newDiv.appendChild(div);
  div.innerHTML=`<button onclick='del()'>delete Blog</button>`
  quill.focus();

  
  }
  function del(){
    document.getElementById(`blog`).remove();
  }

// var blog=document.getElementById(`blog`)
// console.log(blog)