function generateReplacement(originalText) {
  // loops through dictionary
  //
}

function translateText() {
  var selection;
  var replacementText;

  if (window.getSelection) {
    selection = window.getSelection();

    // find the replacement text string based on the selected text
    replacementText = generateReplacement(selection);

    if (selection.rangeCount) {
      range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(document.createTextNode(replacementText));
    }
  } else if (document.selection && document.selection.createRange) {
    range = document.selection.createRange();
    range.text = replacementText;
  }
}