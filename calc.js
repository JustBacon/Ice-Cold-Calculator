var sign = ["+","-","*","/"];


function calc(sign, a , b){
	if(sign == "+"){
		console.log(a+b)
	}else if(sign == "-"){
		console.log(a-b)
	}else if(sign == "*"){
		console.log(a*b)
	}else if(sign == "/"){
		console.log(a/b)
	}
}
            
calc(sign[1],5,3)