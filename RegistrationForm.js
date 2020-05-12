
var username=document.getElementById('Username');
var email=document.getElementById('E-mail');
var password=document.getElementById('Password');
var button=document.getElementById('b1');
var confirm=document.getElementById('Confirm');
var form = document.getElementById("form");



var alert1=document.getElementById('alert');
var alert2=document.getElementById('alert2');
var alert3=document.getElementById('alert3');
var Input;
var Input2;
var Input3;


username.addEventListener('input',function(e){
	 Input=e.target.value;
	var pattern = /^[\w]{8,12}$/;
	var check=pattern.test(Input);
	if(check){
        alert1.style.display='none'
	}
	else{
		alert1.style.display='block'
	}
})

email.addEventListener('input',function(e){
	 Input=e.target.value;
	var pattern = /^[\w]+@gmail\.com$/;
	var check=pattern.test(Input);
	if(check){
        alert2.style.display='none'
	}
	else{
		alert2.style.display='block'
	}
})


password.addEventListener('input',function(e){
    Input3=e.target.value;
	var pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%&]).{6,10}$/;
	var check=pattern.test(Input3);
	if(check){
        alert3.style.display='none'
	}
	else{
		alert3.style.display='block'
	}
})
confirm.addEventListener('input',function(e){
	Input2=e.target.value;
})


button.addEventListener('click',function(){
	if(Input3!=Input2){
		alert('Confirm password not same as original Password');
		form.addEventListener('submit', handleForm);
		function handleForm(event) { event.preventDefault(); } 
	}
	else{
		form.addEventListener('click', handleForm2);
		console.log('Entered')
		function handleForm2(event) { event.location.reload(); } 
	}
})