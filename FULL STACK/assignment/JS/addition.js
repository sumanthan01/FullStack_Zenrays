var res = 0;
var count = 0;
var max_try = 1;


function addnum(num){
	res += num;
	//console.log(res);
	}

function getnum(){
	var n1 = prompt("enter the number to be added");
	if(n1==null){
		//alert("enter a value!");
		var empty_val = confirm("Text field cannot be blank. Do you want to continue adding more numbers?\n\n Press Cancel to exit/display result");
		if(empty_val){
		getnum();
		}
		else{
			if((max_try==1)&&(count==0)){
				return;
			}
			else{
				display_result();
			}			
		}
		
	}
	else{
		if(isNaN(n1)){
			alert("The value entered is not a number!\n Kindly enter a numeric value");
			if(max_try<3){
				max_try++;
				getnum();
			}
			else{
				alert("Attempts exceeded.\n Refresh and try again")
			}	
		}
		else if(!isNaN(n1)){
			addnum(Number(n1));
			count++;
			var check_res = confirm("Do you want to continue adding more numbers?\n\n Press Cancel to view the answer");
			if(check_res){
				getnum();
			}else{
				display_result();
			}
		}	
	}
}
function display_result(){
	//console.log(res);
	alert("The sum of "+count+" numbers is : "+res);
}
	
