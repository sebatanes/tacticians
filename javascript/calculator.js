var students=document.getElementById("officers");;//total of officers
var button =  document.getElementById("calculatorButton");
var resultStudent = document.getElementById("result-student");
var courseValue =  document.getElementById("calculatorPrice");
var courseTotal = document.getElementById("result-total");
var attendants=document.getElementById("attendants");
var calculatorError = document.getElementById("calculator-error");
var studentNumber;
var courseNumber;
var attendantsNumber;

button.addEventListener("click",()=>{
 studentNumber = students.value;
 courseNumber =courseValue.value;
 attendantsNumber = attendants.value;
 console.log(studentNumber)
	console.log(attendantsNumber)
if(attendantsNumber>studentNumber){
	calculatorError.style.display = "inline";
	studentNumber = 0;
	courseNumber = 0;
	students.value=0;
	attendants.value=0;

	courseTotal.textContent ="-";
	resultStudent.textContent ="-";
}
else if(attendantsNumber<=studentNumber){
		if(studentNumber>=1&&studentNumber<=50){

resultStudent.textContent = 0;	

	courseTotal.textContent = resultStudent.textContent*attendantsNumber;
		}
		if(studentNumber>=51&&studentNumber<=75){

resultStudent.textContent = (courseNumber)*0.3 ;

	courseTotal.textContent = resultStudent.textContent*attendantsNumber;

		}
				if(studentNumber>=76&&studentNumber<=100){

resultStudent.textContent = (courseNumber)*0.6; 

	courseTotal.textContent = resultStudent.textContent*attendantsNumber;
		}
				if(studentNumber>=101&&studentNumber<=150){

resultStudent.textContent =(courseNumber)*0.75;	

	courseTotal.textContent = resultStudent.textContent*attendantsNumber;
		}
				if(studentNumber>=151){

resultStudent.textContent = courseNumber;	
	courseTotal.textContent = resultStudent.textContent*attendantsNumber;
		}
			studentNumber = 0;
	courseNumber = 0;

	calculatorError.style.display = "none";
	}
})