// anonymity func
(async function () {
    let answer = await fetch("/api/hi");
    answer = await answer.text();

    document.getElementById("node").innerText = answer;
})();
