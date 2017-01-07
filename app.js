$(function () {
  console.log('document is ready');

  salaryArray = [0];

  $('form').on('submit', function (event) {
    console.log('form submitted');

    event.preventDefault();

    var formData = {};
    var formAsArray = $(this).serializeArray();

    formAsArray.forEach(function (input) {
      formData[input.name] = input.value;
    });

    console.log(formData);
    appendDom(formData);

    clearForm();
  });

  $(':button').on('click', function(event) {
    console.log('Deleted'); //To make sure this button is working when clicked.

    event.preventDefault();

    var name = prompt('Please enter the employee\'s FIRST NAME');

    console.log(name); //To make sure the 'name' variable is being set correctly when entered in the prompt.

    if (name != null && name != '') {
      if ($('.employee').is('#' + name)) {
        //console.log($('#' + name + '').data('annualSalary'))
        editExp($('#' + name + '').data("annualSalary"));
        $('#' + name + '').remove('div');
        alert(name + ', has been deleted from the list.');
      }
      else {
        alert('Sorry, that employee is not on the list.');
      }
    }
  });
});



function appendDom(emp) {
  if (emp.employeeFirstName != '' || emp.employeeLastName != '' || emp.employeeIdNumber != '' || emp.employeeJobTitle != '' || emp.annualSalary != '') {
    var $emp = $('<div id="' + emp.employeeFirstName + '"class="employee"></div>').data('annualSalary', Number(emp.annualSalary)); // create a div jQuery object

    $emp.append('<p>' + emp.employeeFirstName + ' ' + emp.employeeLastName + '</p>'); // add our employee data
    $emp.append('<p>' + emp.employeeIdNumber + '</p>');
    $emp.append('<p>' + emp.employeeJobTitle + '</p>');
    $emp.append('<p>' + emp.annualSalary + '</p>');

    $('#employees').append($emp); // append our div to the DOM

    if (isNaN(Number(emp.annualSalary)) == false) {
      appendExp(emp);
    }
  }
}

function appendExp(exp) {
  $('div').remove('.expenditure');
  var $exp = $('<div class="expenditure"></div>');
  var totalSalary = salaryArray[0];


  $exp.append('<p>' + ((totalSalary + Number(exp.annualSalary)) / 12) + '</p>');

  $('#expenditures').append($exp);
  salaryArray[0] = totalSalary + Number(exp.annualSalary);
}

function editExp(arg) {
  $('div').remove('.expenditure');
  var $arg = $('<div class="expenditure"></div>');
  var totalSalary = salaryArray[0];

  $arg.append('<p>' + ((totalSalary - arg) / 12) + '</p>');
  $('#expenditures').append($arg);
  salaryArray[0] = totalSalary - arg;
  //console.log(salaryArray[0]);
}

function clearForm() {
  $('form').find('input[type=text]').val('');
}
