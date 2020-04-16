
window.addEventListener("message", function(event){
      if (event.source == parent) {
        alert();
      }
    }, false);
