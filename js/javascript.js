//Load Header and Footer for all pages.
$(function(){
    $("#header").load("partials/header.html");
    $("footer").load("partials/footer.html");
});

var backButtonVar = document.getElementById("backButton");
var forwardButtonVar = document.getElementById("forwardButton");

function backBtn_Clicked()
{
    var pos1 = document.getElementById("img1").getTranslateX;
    var pos2 = document.getElementById("img2").getTranslateX;
    var pos3 = document.getElementById("img3").getTranslateX;

    var checkOne = document.getElementById("img1");
    var checkTwo = checkOne.style.transform;
    console.log(checkTwo);

    pos1 -= 500;
    pos2 -= 500;
    pos3 -= 500;

    document.getElementById("img1").style.transform = 'translateX(' + pos1 + ')';
}

backButtonVar.addEventListener("click", backBtn_Clicked);

function forwardBtn_Clicked()
{
    
}

function getTranslateX(obj)
{
    var style = obj.style,
        transform = style.transform || style.webkitTransform || style.mozTransform,
        xT = transform.match(/translateX\(([0-9])\)/);
    return xT ? xT[1] : '0';
}

function getComputedTranslateX(obj)
{
    if(!window.getComputedStyle) return;
    var style = getComputedStyle(obj),
        transform = style.transform || style.webkitTransform || style.mozTransform;
    var mat = transform.match(/^matrix3d\((.+)\)$/);
    return mat ? ~~(mat[1].split(', ')[14]) : 0;
}

