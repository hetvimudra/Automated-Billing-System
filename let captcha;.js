let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
let staTus = document.getElementById('status');
staTus.innerText = "Captcha Generator";
generate = () => {
    let first = alphabets[Math.floor(Math.random() * alphabets.length)];
    //let second = Math.floor(Math.random() * 10);
    //let third =  Math.floor(Math.random() * 10);
    //let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
    //let fifth =  alphabets[Math.floor(Math.random() * alphabets.length)];
    let sixth = Math.floor(Math.random() * 10);
    captcha = first.toString()+sixth.toString();
    document.getElementById('generated-captcha').textContent= captcha;
    document.getElementById("entered-captcha").value = '';
    staTus.innerText = "Captcha Generator"
}
check = () => {
    let userValue = document.getElementById("entered-captcha").value;
    console.log(captcha);
    console.log(userValue);
    if(userValue == captcha){
        staTus.innerText = "Correct!!"
    }else{
        staTus.innerText = "Try Again!!"
        document.getElementById("entered-captcha").value = '';
    }
}
