document.addEventListener("DOMContentLoaded", function() {
    fillSelect();
});

function fillSelect() {
    console.log("Started: Fill Select");
    var select = document.getElementById("select");

    for (i = 1; i < 100; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        select.appendChild(option);
    }
}