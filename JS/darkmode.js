function onChecked() {
    document.body.classList.add('darkmode');
  }

  function onUnchecked() {
    document.body.classList.remove('darkmode');
  }

  document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.getElementById("tema");

    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        onChecked();
      } else {
        onUnchecked();
      }
    });
  });