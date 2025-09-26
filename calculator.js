let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

function factorial(n){
    if(n<0) return NaN;
    if(n==0 || n==1) return 1;
    let res=1;
    for(let i =2 ; i<=n ; i++){
        res = res*i;
    }
    return res;
}

const calc = document.querySelector('.calculator');
const arrowDiv = document.querySelector('.arrowdiv');
const arrowImg = document.querySelector('.arrowimg');

arrowImg.addEventListener('click', () => {
    arrowDiv.classList.toggle('active');
    calc.classList.toggle('compact');
});

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            if (string === "") {
                input.value = "";
            } else {
                string = eval(string);
                input.value = string;
            }
        }

        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }

        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else if (e.target.innerHTML == '%') {
            if (string !== "" && !isNaN(eval(string))) {
                string = (eval(string) / 100).toString();
                input.value = string;
            }
        }

        else if (e.target.innerHTML == 'sin') {
            string = Math.sin(toRadians(eval(string || 0))).toString();
            input.value = string;
        }
        else if (e.target.innerHTML == 'cos') {
            string = Math.cos(toRadians(eval(string || 0))).toString();
            input.value = string;
        }
        else if (e.target.innerHTML == 'tan') {
            string = Math.tan(toRadians(eval(string || 0))).toString();
            input.value = string;
        }
        else if (e.target.innerHTML == 'log') {
            string = Math.log10(eval(string || 0)).toString();
            input.value = string;
        }
        else if (e.target.innerHTML == 'In') {
            string = Math.log(eval(string || 0)).toString();
            input.value = string;
        }
        else if (e.target.innerHTML == 'e') {
            string += Math.E;
            input.value = string;
        }
        else if (e.target.innerHTML == 'Deg') {
            string = (eval(string || 0) * (180 / Math.PI)).toString();
            input.value = string;
        }
        else if (e.target.innerHTML == 'Inv') {
            if (string !== "" && !isNaN(eval(string))) {
                string = (1 / eval(string)).toString();
                input.value = string;
            }
        }
        else if (e.target.innerHTML == '^') {
            if (string !== "" && !isNaN(eval(string))) {
                string += "**"
                input.value = string;
            }
        }
        else if (e.target.innerHTML == '!') {
            if (string !== "" && !isNaN(eval(string))) {
                string = factorial(eval(string)).toString();
                input.value = string;
            }
        }
        else if (e.target.innerHTML == 'Inv') {
            if (string !== "" && !isNaN(eval(string))) {
                string = (1 / eval(string)).toString();
                input.value = string;
            }
        }
        
        else if (e.target.innerHTML == 'π') {
            
                string +=Math.PI.toFixed(8);
                input.value = string;
            
        }
        else if (e.target.innerHTML == '√') {
            if (string !== "" && !isNaN(eval(string))) {
                string = Math.sqrt(eval(string)).toString();
                input.value = string;
            }
        }

        else {
            string += e.target.innerHTML;
            input.value = string;
        }
        
    });
});
