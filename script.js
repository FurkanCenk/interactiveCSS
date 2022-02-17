var menu = document.getElementById('menu'),
    nav = document.querySelector('nav'),
    close1 = document.getElementById('close');


menu.addEventListener('click', function(event){
    nav.classList.add('show-list');
    event.preventDefault();
});

close1.addEventListener('click', function(event){
    nav.classList.remove('show-list');
    event.preventDefault();
});




