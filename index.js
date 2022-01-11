function load_text() {
    document.getElementById("output").value = "text....";
  }

  function bold_click() {
    document.getElementById("output").style.fontWeight = "bold";
  }

  function underline_click() {
    document.getElementById("output").style.textDecoration = "underline";
  }

  function italic_click() {
    document.getElementById("output").style.fontStyle = "italic";
  }

  function normal_click() {
    document.getElementById("output").style.fontStyle = "normal";
    document.getElementById("output").style.textDecoration = "none";
    document.getElementById("output").style.fontWeight = "normal";
  }