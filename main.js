 function hideColor(){
    const elements = document.querySelectorAll('[data-color="bnw"]');
    elements.forEach(elements => {
            elements.style.display = 'block';

            document.getElementById("active-gallery").style.color = "#E1128E";
            document.getElementById("not-active-gallery").style.color = "black";

    });
    const color = document.querySelectorAll('[data-color="color"]');
    color.forEach(color => {
            color.style.display = 'none';

            document.getElementById("active-gallery").style.color = "black";
            document.getElementById("not-active-gallery").style.color = "#E1128E";
    });


}
function hideBNW(){
    const elements = document.querySelectorAll('[data-color="color"]');
    elements.forEach(elements => {
            elements.style.display = 'block';

            document.getElementById("active-gallery").style.color = "black";
            document.getElementById("not-active-gallery").style.color = "#E1128E";

    });
    const color = document.querySelectorAll('[data-color="bnw"]');
    color.forEach(color => {
            color.style.display = 'none';

            document.getElementById("active-gallery").style.color = "#E1128E";
            document.getElementById("not-active-gallery").style.color = "black";
    });


}
