let translateButton = document.getElementById('translate');

translateButton.onclick = async () => {
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, tabs => {
		chrome.tabs.sendMessage(tabs[0].id, null)
	})
}