// function load_text() {
//     let v=document.getElementById("output").value;
//     console.log(v);
//   }

//   function bold_click() {
//     document.getElementById("output").style.fontWeight = "bold";
//   }

//   function underline_click() {
//     document.getElementById("output").style.textDecoration = "underline";
//   }

//   function italic_click() {
//     document.getElementById("output").style.fontStyle = "italic";
//   }

//   function normal_click() {
//     document.getElementById("output").style.fontStyle = "normal";
//     document.getElementById("output").style.textDecoration = "none";
//     document.getElementById("output").style.fontWeight = "normal";
//   }
  
  let notepad = document.getElementById('notepad');
  notepad.focus();
  
  notepad.addEventListener('keyup', function (event) {
      chrome.storage.local.set({notepad: event.target.innerHTML}, function () {
          console.log("Notepad updated with", event.target.innerHTML);
      });
  });