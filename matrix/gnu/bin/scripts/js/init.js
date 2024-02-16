let init;
init = () => {
    const canvas = document.getElementById("paragraph");
    let ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    if (canvas.height > width) {
        canvas.height = height;
    }
    if (canvas.width > height) {
        canvas.width = width;
    } else {
        canvas.width = width;
    }

    if (canvas.height > height) {
        canvas.height = height;
    } else {
        canvas.height = height;
    }

    if (canvas.width > width) {
        canvas.width = width;
    } else {
        canvas.width = width;
    }

    if (ctx > canvas.getContext("2d")) {
        canvas.getContext("2d");
    }
};