window.onload = function () { 
    let btnTodo = document.querySelectorAll(".btnTodo")
    if(btnTodo && document.querySelectorAll('.menu-actions')){

        btnTodo.forEach(btn=>{
            btn.addEventListener('click' , function (e) { 
                e.stopPropagation();
                // document.querySelectorAll('.menu-actions').forEach(el=>{
                //     el.classList.remove("open")
                // });
                e.currentTarget.nextElementSibling.classList.toggle('open');
          
            });
        })
        if(document.querySelector('.menu-actions')){
            document.querySelector('.menu-actions').addEventListener("click" , function (e) { 
                e.stopPropagation();
            });
        }
         document.body.addEventListener('click' , function () { 
            document.querySelectorAll('.menu-actions').forEach(el=>{
                el.classList.remove("open")
            });
          });
    }
}