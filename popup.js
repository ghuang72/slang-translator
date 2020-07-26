let translateButton = document.getElementById("translate");
let selectedText = document.getElementById("selectedText");

function generateReplacement(originalText) {
  // loops through dictionary
  //run replace based on the key value map
  var replacement;
  var fs = require("fs");
  var translatejson;

  fs.readFile("json_toronto.json", "utf-8", (err, data) => {
    if (data) {
      translatejson = console.log(JSON.parse(data));
    } else {
      console.log(err);
    }
  });

  for (var key in translatejson) {
    replacement = originalText.replace(key, translatejson[key].toronto);
  }

  return replacement;
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

translateButton.onclick = (event) => {
  chrome.tabs.executeScript(
    {
      code: "window.getSelection().toString()",
    },
    (text) => {
      selectedText.innerHTML = text;
    },
    translateText()
  );
};
