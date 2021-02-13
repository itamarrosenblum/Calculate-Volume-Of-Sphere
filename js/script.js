/**
* Purpose: Main JS File
* Author: Itamar Rosenblum
* Date: 24-12-2020
* Last modified: 13-02-2021
*/

// main function
function cal() {
    const radius = document.getElementById("radius").value;

    // initializing the volume 
    let volume = 0;

    // setting the canvas
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // calculating the edges of the canvas
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;

    // validtion
    if (isNaN(radius)) {
        alert("Please enter only numbers");
        return;
    } else if (radius === "") {
        alert("Please enter a radius");
    } else if (radius < canvas.width / 2 && radius < canvas.height / 2) {
        // calculate radius
        volume = (4/3) * Math.PI * Math.pow(radius, 3);
        volume = volume.toFixed(2);

        // set radius in span element
        document.getElementById("volume").innerHTML = volume;

        // draw in the canvas
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.stroke();
    } else {
        alert("Your radius too high to fit into the canvas");
    }
}

// reset function
function resetCanvas() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Auto calculation
(function autoCal() {
    // setInterval
    let autoDrawing = setInterval(() => { 
        // setting the canvas
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        // calculating the edges of the canvas
        let centerX = canvas.width / 2;
        let centerY = canvas.height / 2;
        let sum = centerX + centerY;
        
        // creates circles
        for (let i = 0; i < sum; i++) {
            // clearIntreval validation
            if (canvas.width / 2 < i && canvas.height / 2 < i) {
                clearInterval(autoDrawing);
                return;
            } else {
                // draw in the canvas
                ctx.beginPath();
                ctx.arc(centerX, centerY, i, 0, 2 * Math.PI);
                console.log(i);
                ctx.stroke();
            }
        }
     }, 100);
})();