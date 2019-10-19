(function (){
   
    var form,btn,MyTable,out;

    function toArray(){   
        btn.disabled =true;
        var loc = location.search
        var param = loc.replace(/\?/,"");
        //console.log(param);
        var paramArray = param.split('&');
        //console.log(paramArray);
        for(i in paramArray){
            var attrArray = paramArray[i].split('=');
            addRow(attrArray[0],attrArray[1]);
        }
    }

    function addRow(attrName,attrValue){
        var MyTable =  document.getElementById("attributes"); 
        MyTable.style.visibility = "visible";
        
        var NewRow = MyTable.insertRow(MyTable.rows.length); 
        var Newcell1 = NewRow.insertCell(0); 
        var Newcell2 = NewRow.insertCell(1); 
        Newcell1.innerHTML = attrName; 
        Newcell2.innerHTML = attrValue; 
        
    
    }

    function addRow1(attrName,attrValue){
        MyTable.style.visibility = "visible";
        out = '<tr><td>'+attrName+'</td><td>'+attrValue+'</td></tr>';
        MyTable.innerHTML += out;
     
    }

    function bindElements(){
        form = document.getElementById("loc_attributes");
        btn = document.getElementById("submit");
        MyTable =  document.getElementById("attributes");
        
        out="";
        attrArray = [];
        toArray();
        form.addEventListener('submit',toArray);
        
    }
    bindElements();

     
})()
