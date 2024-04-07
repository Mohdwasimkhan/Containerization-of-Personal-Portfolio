let tablink=document.getElementsByClassName("tab-titles");
let tabcontent=document.getElementsByClassName("tab-content");
function opentab(tagname)
{
    for(i of tablink)
    {
        i.classList.remove("active-link");
    }
    for(i of tabcontent)
    {
        i.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tagname).classList.add("active-tab");
}