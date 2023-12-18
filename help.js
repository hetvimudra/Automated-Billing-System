let iconValue=document.getElementById("icon")
//let chatBot=document.getElementById("chatbot")

iconValue.addEventListener("click",function(){
    document.getElementById("chatbot").style.display="block";
})
document.getElementById("closebtn").addEventListener("click",function(){
    document.getElementById("chatbot").style.display="none";
})
document.getElementById("icon1").addEventListener("click",function(){
    document.getElementById("todolist").style.display="block";
})
document.getElementById("closebtn1").addEventListener("click",function(){
    document.getElementById("todolist").style.display="none";
})
