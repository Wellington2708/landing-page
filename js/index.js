
let form = document.getElementById('form');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    let name = document.querySelector(".name").value;
    let lastName = document.querySelector('.lastName').value;
    const email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;
     
    if(!name || !lastName || !email || !password){
        alert(" Field cannot be empty");
        return
    }

    //Only to debugger. To see my variables. 

    console.log(name);
    console.log(lastName);
    console.log(email);
    console.log(password);
    

    e.target.reset(); 

})


