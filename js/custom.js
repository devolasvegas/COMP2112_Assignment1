/**
 * Created by devon on 2016-09-24.
 */
(function(){

    var link = document.querySelectorAll('a');

    var popUp = document.querySelector('.pop-up');
    
    var image = document.querySelector('.image');

    var closeButton = document.querySelector('.glyphicon');

    for (var i=0; i < link.length; i++) {
        var links = link[i];
        links.addEventListener('click', function(event){
            event.preventDefault();

            var source = this.childNodes[1].getAttribute('src');

            var popPic = document.createElement('img');

            popPic.setAttribute('src', source);

            image.appendChild(popPic);

            popUp.style.display = "block";
        })

    }

    closeButton.addEventListener('click', function(){

        image.removeChild(image.childNodes[0]);

        popUp.style.display = "none";
    })

})();