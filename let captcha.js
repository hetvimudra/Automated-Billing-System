let captcha;
let array=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let array2=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let staTus = document.getElementById('status');
staTus.innerText = "Captcha Generator";
generate = () => {
    generatedcaptcha=document.getElementById("generated-captcha")
    for(let x=0;x<3;x++){
        let m=Math.floor(Math.random()*26)
        let n=Math.floor(Math.random()*26)
        captcha=generatedcaptcha.textContent+=array[m]+array2[n]
        console.log(captcha)
       }
}
check = () => {
    let userValue = document.getElementById("entered-captcha").value;
    console.log(captcha);
    console.log(userValue);
    if(userValue === captcha){
        staTus.innerText = "Correct!!"
    }else{
        staTus.innerText = "Try Again!!"
        document.getElementById("entered-captcha").value = '';
    }
}
