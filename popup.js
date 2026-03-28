var count = 0;
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        count++;
        document.getElementById("count").innerText = count;
    }

})
var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    count = 0;
    document.getElementById("count").innerText = count;
})