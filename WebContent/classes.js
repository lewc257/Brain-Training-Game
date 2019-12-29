//TODO: Evaluate the expressions once the test has finished
		class RandomMathExpressionGenerator {
			constructor(){
				this.operands = ['-', '+'/*, '*', '/'*/];
			}
			//Doesnt support bodmas. To get the order of operands right, see 
			//https://stackoverflow.com/questions/34904895/how-to-make-program-to-calculate-accordingly-to-order-of-operations-in-math-ja
			generateExprssionWithAnswer(length){
				var answer = 0;
				var expr = '';
				for (var i = 0; i < length; i++){
					var number = Math.floor(Math.random() * 101);
					if (i == 0){
						answer += number;
						expr += number;
					} else {
						var operand_id = Math.floor(Math.random() * this.operands.length);
						var operand = this.operands[operand_id];
						switch (operand){
						case '-':
							answer = answer - number;
							break;
						case '+':
							answer = answer + number;
							break;
						case '*':
							answer = answer * number;
							break;
						case '/':
							answer = answer / number;
							break;
						}
						expr = expr + ' ' + operand + ' ' + number;
					}
				}
				return {expr, answer};
			}
		}


	