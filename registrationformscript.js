var nameError = document.getElementById("name-error");			/*Assign variables to all the error popups*/
var emailError = document.getElementById("email-error");		/*Assign variables to all the error popups*/
var ageError = document.getElementById("age-error");			/*Assign variables to all the error popups*/
var genderError = document.getElementById("gender-error");		/*Assign variables to all the error popups*/
var occupationError = document.getElementById("occupation-error");		/*Assign variables to all the error popups*/
var workoutError = document.getElementById("workout-error");		/*Assign variables to all the error popups*/
var readError = document.getElementById("read-error");		/*Assign variables to all the error popups*/
var workError = document.getElementById("work-error");		/*Assign variables to all the error popups*/

function validateName() {                                        
  var name = document.getElementById("fullname").value;			/*get input when the user start to type*/

  if (name.length == 0) {										/*Condition*/
    nameError.innerHTML = 'Name is required';					/*Error pupup if condition is not satisfies*/
    return false;
  }

  if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {					/*Condition*/
    nameError.innerHTML = "Invalid format";						/*Error pupup if condition is not satisfies*/
    return false;
  }

  nameError.innerHTML = '';
  return true;
}

function validateAge() {
	var age = document.getElementById("age").value;			/*get input when the user start to type*/	
	
	if (age.length == 0) {									/*Condition*/
		ageError.innerHTML = 'Age is required'				/*Error pupup if condition is not satisfies*/
		return false;
	}
	if (isNaN(age)) {										/*Condition*/
      ageError.innerHTML = 'Invalid format'					/*Error pupup if condition is not satisfies*/
      return false;
    }
	if (age < 5 || age > 75) {												/*Condition*/
		ageError.innerHTML = "Please enter an age between 5 and 75";		/*Error pupup if condition is not satisfies*/
        return false;
	}
	ageError.innerHTML = '';
	return true;
}

function validateOccupation() {
    var occupation = document.getElementById("occupation").value;		/*get input when the user start to type*/
	if (occupation.length == 0) {										/*Condition*/
		occupationError.innerHTML = 'Occupation is required'			/*Error pupup if condition is not satisfies*/
		return false;
	}
    if (!/^[A-Za-z\s]+$/.test(occupation)) {							/*Condition*/
      occupationError.innerHTML = 'Invalid format'						/*Error pupup if condition is not satisfies*/
	  return false;
    }
	occupationError.innerHTML = '';
    return true;
}

function validateEmail() {
    var email = document.getElementById("email").value;					/*get input when the user start to type*/
	if (email.length == 0) {											/*Condition*/
		emailError.innerHTML = 'Email is required'						/*Error pupup if condition is not satisfies*/
		return false;
	}
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {					/*Condition*/
      emailError.innerHTML = 'Invalid format'							/*Error pupup if condition is not satisfies*/
      return false;
    }
	emailError.innerHTML = '';
    return true;
}

function validateGender() {
	var genderInputs = document.getElementsByName("gender");	/*get input when the user start to type*/
    var genderSelected = false;

    for (var i = 0; i < genderInputs.length; i++) {
      if (genderInputs[i].checked) {							/*Condition*/
        genderSelected = true;
        break;
      }
    }

    if (!genderSelected) {											/*Condition*/
      genderError.innerHTML = 'Please select a gender';				/*Error pupup if condition is not satisfies*/
      return false;
    }
	genderError.innerHTML = '';
	return true;
}

function validateWorkout() {
	var workout = document.getElementById("workout").value;			/*get input when the user start to type*/	
	
	if (workout.length == 0) {									/*Condition*/
		workoutError.innerHTML = 'Required'				/*Error pupup if condition is not satisfied*/
		return false;
	}
	if (isNaN(workout)) {										/*Condition*/
		workoutError.innerHTML = 'Invalid format'					/*Error pupup if condition is not satisfied*/
		return false;
    }
	if (workout > 75 || workout < 0) {												/*Condition*/
		workoutError.innerHTML = "Please enter a number between 1 and 75";		/*Error pupup if condition is not satisfies*/
        return false;
	}
	workoutError.innerHTML = '';
	return true;
}

function validateRead() {
	var read = document.getElementById("read").value;			/*get input when the user start to type*/	
	
	if (read.length == 0) {									/*Condition*/
		readError.innerHTML = 'Required'				/*Error pupup if condition is not satisfied*/
		return false;
	}
	if (isNaN(read)) {										/*Condition*/
		readError.innerHTML = 'Invalid format'					/*Error pupup if condition is not satisfied*/
		return false;
    }
	if (read > 75 || read < 0) {												/*Condition*/
		readError.innerHTML = "Please enter a number between 1 and 75";		/*Error pupup if condition is not satisfies*/
        return false;
	}
	readError.innerHTML = '';
	return true;
}

function validateWork() {
    var work = document.getElementById("work").value;		/*get input when the user start to type*/
	if (work.length == 0) {										/*Condition*/
		workError.innerHTML = 'Working hours is required'			/*Error pupup if condition is not satisfies*/
		return false;
	}
	if (isNaN(work)) {										/*Condition*/
		workError.innerHTML = 'Invalid format'					/*Error pupup if condition is not satisfied*/
		return false;
    }
	if (work > 75 || work < 0) {												/*Condition*/
		workError.innerHTML = "Please enter a number between 1 and 75";		/*Error pupup if condition is not satisfies*/
        return false;
	}
	workError.innerHTML = '';
	return true;
}

document.getElementById("button1").onclick = function() {
	if (!validateName() || !validateAge() || !validateEmail() || !validateOccupation() || !validateGender() || !validateWorkout() || !validateWork() || !validateRead()) {		/*condition to check returned boolean values of functions*/
		alert("Invalid input")										/*alert for pop up*/
		return false;
	}
    var name = document.getElementById("fullname").value;
    alert("Dear " + name + ", Thank you for using Scheduleit, The results will be shown in a while.");	/*alert for pop up*/
};