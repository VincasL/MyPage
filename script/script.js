function OpenLink(link)
{
    window.location = link;
}
function ToggleDarkMode()
{
    var checkBox = document.getElementById("toggle-dark-mode");
    if(checkBox.checked == true)
    {
        document.body.style.background = "background: rgb(24,33,22)"
        document.body.style.background += "linear-gradient(90deg, rgba(24,33,22,1) 0%, rgba(20,16,16,1) 50%, rgba(61,43,17,1) 100%)";

        document.body.style.color = "white";
    }
    else
    {
        document.body.style.background = "";
        document.body.style.color = "";
    }
}