$(document).ready(function () {
    
    var theme = "light";
    const userPref = window.matchMedia;
    if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }

    if (theme == "dark") {
        try {
          document.getElementById("animated-gif").src = "../assets/img/logo_meta_transp.png";
          document.getElementById("animated-gif").style.height = '5%';
          document.getElementById("animated-gif").style.width = '3%';
          console.log("image updated to dark");
        } catch (error) {
          console.log("no need to update image");
        }
        
      } else {
        try {
          document.getElementById("animated-gif").src = "../assets/img/logo_meta.gif";
          document.getElementById("animated-gif").style.height = '5%';
          document.getElementById("animated-gif").style.width = '3%';
          console.log("image updated to light");
        } catch (error) {
          console.log("no need to update image");
        }
      }

});