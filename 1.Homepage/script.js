
    let navbar = document.querySelector('.navbar')

    document.querySelector('#menu-btn').onclick = () =>{
        navbar.classList.toggle('active');
        cartItem.classList.remove('active');
        searchForm.classList.remove('active');
        subMenuWrap.classList.remove('active');
    }

    let cartItem = document.querySelector('.cart-items-container')

    document.querySelector('#cart-btn').onclick = () =>{
        cartItem.classList.toggle('active');
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        subMenuWrap.classList.remove('active');
    }

    let searchForm = document.querySelector('.search-form')

    document.querySelector('#search-btn').onclick = () =>{
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        cartItem.classList.remove('active');
        subMenuWrap.classList.remove('active');
    }

    window.onscroll = () =>{
        navbar.classList.remove('active');
        cartItem.classList.remove('active');
        searchForm.classList.remove('active');
        subMenuWrap.classList.remove('active');
    }

    //login drop-down

    let subMenuWrap = document.querySelector('.sub-menu-wrap')

    document.querySelector('#user-btn').onclick = () =>{
        subMenuWrap.classList.toggle('active');
        cartItem.classList.remove('active');
        searchForm.classList.remove('active');
        navbar.classList.remove('active');
    }
    //slideshow
    var counter = 1;
    setInterval(function(){
        document.getElementById('radio'+ counter).checked =true;
        counter ++;
        if(counter > 4){
            counter = 1;
        }
    },3000)

   
