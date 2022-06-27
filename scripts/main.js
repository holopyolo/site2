
document.querySelector('h1').onclick = function() {
    if(document.querySelector('img').getAttribute('src') === 'images/test.jpg')
    {
        document.querySelector('img').setAttribute('src', 'images/image.jpg')
    }
    else
    {
        document.querySelector('img').setAttribute('src', 'images/test.jpg')
    }

}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h4');
function setname()
{

    var name = prompt('enter ur name')
    localStorage.setItem('name',name)
    myHeading.textContext = 'YOO, ' + name
}

if(!localStorage.getItem('name')) {
  setname();
}
    else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function()
{
    setname()

}
