function updateBtnLabel(button) {
    var label = parseInt(button.innerHtml);
    label++;
    button.innerHtml = label;
}