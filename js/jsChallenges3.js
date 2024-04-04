document.getElementById('ch3form').addEventListener('click', function(){
    console.log ('this works')
    if(this.checked){
        document.getElementById('home').style.display = 'block';
    }
    else{
        document.getElementById('home').style.display = 'none';
    }

})