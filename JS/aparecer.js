document.addEventListener("DOMContentLoaded", () => {
  const arrow1 = document.getElementById("arrow1");
  const content1 = document.getElementById("content1");

  const arrow2 = document.getElementById("arrow2");
  const content2 = document.getElementById("content2");

  const arrow3 = document.getElementById("arrow3");
  const content3 = document.getElementById("content3");

  const arrows = [
    { arrow: arrow1, content: content1, initialText: arrow1.textContent },
    { arrow: arrow2, content: content2, initialText: arrow2.textContent },
    { arrow: arrow3, content: content3, initialText: arrow3.textContent },
  ];

  arrows.forEach((item) => {
    item.arrow.addEventListener("click", () => toggleContent(item));
  });

  function toggleContent(item) {
    if (
      item.content.style.display === "none" ||
      item.content.style.display === ""
    ) {
      item.content.style.display = "block";
      item.arrow.textContent = "▼";
    } else {
      item.content.style.display = "none";
      item.arrow.textContent = item.initialText;
    }
  }
});
