var labels = [1,2,3,6,9,8,7,4];
document
    .getElementById("btn5")
    .addEventListener("click", function() {
        var btns = ['btn1', 'btn2', 'btn3','btn6', 'btn9', 'btn8', 'btn7', 'btn4'];
        labels.unshift(labels.pop());
        for(var i=0; i<9; i++) {
            try {
                document.getElementById(btns[i]).innerText = labels[i];
            }catch(error) {
                //console.log(error.message)
            }
        }
    });