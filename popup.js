let translateButton = document.getElementById('translate');
let selectedText = document.getElementById('selectedText');
// let messageBox = document.querySelector('notranslate_5rpu')
const ext = chrome.extension.getBackgroundPage()
const url = chrome.runtime.getURL('./json_toronto.json')

translateButton.onclick = async event => {
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, tabs => {
		chrome.tabs.sendMessage(tabs[0].id, null)
	})
}