function onChecked() {
    document.body.classList.add('darkmode');
  }

  function onUnchecked() {
    document.body.classList.remove('darkmode');
  }

  document.addEventListener("DOMContentLoaded", function() {
    var btndetema = document.getElementById("tema");

    btndetema.addEventListener("change", function() {
      if (btndetema.checked) {
        onChecked();
      } else {
        onUnchecked();
      }
    });
  });