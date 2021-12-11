
function display_menu(id){
    if (document.getElementById(id).hidden){
        document.getElementById(id).hidden = false;
        document.getElementById(id+'-button').className = document.getElementById(id+'-button').className + ' ring-4';
    }else{
        document.getElementById(id).hidden = true;
        document.getElementById(id+'-button').className = document.getElementById(id+'-button').className.replace(' ring-4','');
    }
}


function side_deploy() {


    var border = document.getElementsByClassName('border-pannel');

    console.log()
    if (border[0].style.minWidth == "48px" || ! border[0].style.minWidth)
    {

        for (let i = 0; i < border.length; i++) {
            border[i].style.minWidth = "190px";
        };

        var border_develop = document.getElementsByClassName('border_develop');
        for (let i = 0; i < border_develop.length; i++) {
            border_develop[i].style.width = "190px";
            border_develop[i].innerHTML = border_develop[i].innerHTML.replace('<p class="mx-2 hidden">', '<p class="mx-2 ">')
        };

    }else{

        for (let i = 0; i < border.length; i++) {
            border[i].style.minWidth = "48px";
        };

        var border_develop = document.getElementsByClassName('border_develop');
        for (let i = 0; i < border_develop.length; i++) {
            border_develop[i].style.width = "48px";
            border_develop[i].innerHTML = border_develop[i].innerHTML.replace('<p class="mx-2 ">', '<p class="mx-2 hidden">')
        };

    };

}