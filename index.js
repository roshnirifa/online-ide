function run() {
    let html = document.querySelector(".ide #html").value;
    let css = "<style>" + document.querySelector(".ide #css").value + "</style>";
    let js = document.querySelector(".ide #js").value;
    let output = document.querySelector(".ide #output");

    output.contentDocument.body.innerHTML = html + css;
    output.contentWindow.eval(js)

    // console.log(html, css, js, output);

}
document.querySelector(".ide #html").addEventListener('keyup', run)
document.querySelector(".ide #css").addEventListener('keyup', run)
document.querySelector(".ide #js").addEventListener('keyup', run)