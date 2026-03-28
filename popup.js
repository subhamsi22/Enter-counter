// show count when popup opens
chrome.storage.local.get("enterCount", (data) => {
    document.getElementById("count").innerText = data.enterCount || 0;
});

// reset button
document.getElementById("btn").addEventListener("click", () => {
    chrome.storage.local.set({ enterCount: 0 });
    document.getElementById("count").innerText = 0;
});