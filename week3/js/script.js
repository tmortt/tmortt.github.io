window.addEventListener("load", function(e){
    
    var link = document.querySelectorAll('a');

    link[1].addEventListener("click", function(e)
    {
        e.preventDefault();
        alert('hi')
    });

});