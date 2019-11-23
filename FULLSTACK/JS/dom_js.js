

(function(){

    var btn=document.getElementsByClassName("dispclothing");
    btn[0].onclick = getMessage;

    function getMessage(){
        var day = prompt("Enter a day of the week in number[0-Sunday to 6-Saturday]");
        var msg = "";
        switch(Number(day)){
            case 0 :
            case 6 :
                msg="Yaay!!It's a holiday,your choice of clothing";
                color="blue";
                break;
            case 1 :
            case 2 :
                msg = "Office formals only";
                color="green";
                break;
            case 3 :
            case 4 :
                msg = "Business casuals/Semi formals";
                color="yellow";
                break;
            case 5 :
                msg = "Casuals";
                color="orange";
                break;
            default :
                msg = "enter a day of the week between 0-6";
                color="red";
                break;
        }
        displayClothingAttire(msg);
        setColor(color);
    }

    function displayClothingAttire(msg)
    {
        var main_container = document.getElementById("main_container");
        var label = main_container.querySelectorAll(".message");
        for ( var i in label){
            label[i].innerHTML=msg;
        }   
    }

    function setColor(color){
        var main_container = document.getElementById("main_container");
        var label = main_container.querySelectorAll(".message");
        var value=main_container.getAttribute("id");
        document.querySelector(".message").innerHTML="Main container ID is "+value;
        document.querySelector("p").innerHTML+=" "+color;
        //console.log(label);
        for(var i in label){
            //loop running more
            label[i].setAttribute("class",color);
        }
        
    }
})();