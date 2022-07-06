function run() {
    let html = document.querySelector(".ide #html").value;
    let css = "<style>" + document.querySelector(".ide #css").value + "</style>";
    let js = document.querySelector(".ide #js").value;
    let c = document.querySelector(".ide #c").value;
    let output = document.querySelector(".ide #output");



    // output.contentDocument.body.innerHTML = html + css + c;
    // output.contentWindow.eval(js)
    fetch("http://localhost:5000/api", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            code: c
        })
    })
        .then((res) => res.json()).then(data => {
            output.value = (data?.body?.output);
        })

    // console.log(html, css, js, output);

}
// document.querySelector(".ide #html").addEventListener('keyup', run)
// document.querySelector(".ide #css").addEventListener('keyup', run)
// document.querySelector(".ide #js").addEventListener('keyup', run)
// document.querySelector(".ide #c").addEventListener('keyup', run)
document.querySelector(".ide #submit-btn").addEventListener('click', run);

