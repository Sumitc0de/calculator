const buttons = document.querySelectorAll('.btn');
const input = document.querySelector('input');

let string = '';

buttons.forEach(function(btn){
    // console.log(btn);
    btn.addEventListener('click', (e)=>{

        if(e.target.innerHTML === 'C'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML === 'AC'){
            string = ''
            input.value = string;
        }
        else if(e.target.innerHTML === '='){
            string = eval(string);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;

        };
        

    });
});