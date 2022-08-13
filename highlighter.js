// const highlighter = document.getElementById("hightlight");

// function highlight(text) {
//   let inputText = document.getElementById("inputText");
//   let innerHTML = inputText.innerHTML;
//   let index = innerHTML.indexOf(text);

//   if (index >= 0) {
//     innerHTML =
//       innerHTML.substring(0, index) +
//       "<span class='highlight'>" +
//       innerHTML.substring(index, index + text.length) +
//       "</span>" +
//       innerHTML.substring(index + text.length);
//     inputText.innerHTML = innerHTML;
//   }
// }

// document.addEventListener("selectionchange", (e) => {
//   console.log("Archor node - ", window.getSelection().anchorNode);
//   console.log("Focus Node - ", window.getSelection().toString());
//   getSelection().toString().classList.add(".hightlight");
// });

// document.addEventListener("mouseup", (e) => {
//   if (window.getSelection().toString().length) {
//     let exactText = window.getSelection().toString();
//   }
// });

// // highlight text in an input element
// element.select();

// // highlight a portion of an element
// // element.setSelectionRange(start, end, ?direction)
// // start, end - start and end indices of the new selection
// // direction (optional) - "forward", "backward", or "none" (default)
// element.setSelectionRange(3, 5);

const text = document.getElementById("text");
const input = document.getElementById("input");
const btnHighlight = document.getElementById("btnHighlight");

const originalText = text.innerHTML;

function highlightWord() {
  if (input.value) {
    const word = input.value.trim();
    const regexp = new RegExp(word, "g");
    text.innerHTML = originalText.replace(regexp, `<mark>${word}</mark`);
  }
}

btnHighlight.addEventListener("click", highlightWord);
