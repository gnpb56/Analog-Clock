$(document).ready(function () {
    // Function to rotate the element
    rotate = (element, degrees) => {
        $(element).css({
            'transform': 'rotate(' + degrees + 'deg)',
        });
    }

    setInterval(() => {
        date = new Date();
        hours = date.getHours();
        min = date.getMinutes();
        sec = date.getSeconds();
        hrotate = 30 * hours + min / 2;
        mrotate = min * 6;
        srotate = sec * 6;
        rotate("#Hour", hrotate);
        rotate("#Minutes", mrotate);
        rotate("#Seconds", srotate);

    }, 1000);
})




