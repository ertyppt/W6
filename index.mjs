import * as baseFunction from './base-functions.mjs';

function main(){
	document.addEventListener('DOMContentLoaded', () => {
		document.querySelector('#button')
			.addEventListener('click', function(evnt){
			
				let firstN = Number(document.querySelector('#firstNumber').value);
				
				let secondN = Number(document.querySelector('#secondNumber').value);
				
				let symbol = document.querySelector('#symbol').value;
			
				let show = document.querySelector('#result');
				
				if(symbol == '+'){
					show.innerHTML = '<b>'+baseFunction.add(firstN,secondN)+'</b>';
				}else if(symbol == '-'){
					show.innerHTML = '<b>'+baseFunction.subtract(firstN,secondN)+'</b>';
				}else if(symbol == '*'){
					show.innerHTML = '<b>'+baseFunction.multiple(firstN,secondN)+'</b>';
				}else if(symbol == '/'){
					show.innerHTML = '<b>'+baseFunction.divide(firstN,secondN)+'</b>';
				}	
			
		});
	});
}

main();
