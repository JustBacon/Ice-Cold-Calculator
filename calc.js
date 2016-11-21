var sign = ["+","-","*","/"];


function calc(a, sign , b){
	if(sign == "+"){
		console.log(a+b);
	}else if(sign == "-"){
		console.log(a-b);
	}else if(sign == "*"){
		console.log(a*b);
	}else if(sign == "/"){
		console.log(a/b);
	}
}
            
calc(5,sign[1],3)