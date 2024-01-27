document.addEventListener('DOMContentLoaded', function () {

    const quest=document.querySelectorAll('.faqs__item__question')

    
    quest.forEach(element => {
    element.addEventListener('click', function () {
        const btn= element.querySelector('span')
        if (btn.innerText=='add'){
        btn.innerHTML= 'remove'
        //navMenu.classList.toggle('nav--transalate')
        }else{
            btn.innerHTML= 'add'
            
        }
    })
})




})