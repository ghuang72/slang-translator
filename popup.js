let translateButton = document.getElementById('translate');
let selectedText = document.getElementById('selectedText');

translateButton.onclick = event => {
	chrome.tabs.executeScript({
		code: 'window.getSelection().toString()'
	}, text => {
		selectedText.innerHTML = text
	})
};