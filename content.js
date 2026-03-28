console.log("Content script running 🔥");

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("ENTER PRESSED ✅");

        chrome.storage.local.get("enterCount", (data) => {
            let count = data.enterCount || 0;
            count++;

            chrome.storage.local.set({ enterCount: count });
        });
    }
});