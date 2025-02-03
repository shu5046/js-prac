const button  = document.querySelectorAll('button');
const input = document.getElementById('input')
button.forEach(element=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target.textContent);
        if(e.target.textContent=== 'C'){
            input.value = '';
        }
        else if(e.target.textContent==='<'){
            input.value = input.value.slice(0,-1); 
        }
        else if(e.target.textContent==='='){
            input.value = eval(input.value);
        }
        else{
            input.value +=e.target.textContent;
        }

    })
})