if (window.outerWidth <= breakpoints.xSmall) {
    let button1 = Array.prototype.slice.call(document.getElementsByClassName("global-1-item-button"));

    for (let i = 0; i < button1.length; i++) {
            button1[i].innerText = '';
    }
}