# Weekend 1 Challenge Starter Repo

##Author

* *Hue Vang*

###Details

In this challenge I created an application that recorded data that was entered into the fields. This application can also add salaries up to determine how much you are spending each month on expenditures.

###Hard Mode

I created a delete button that removed an employee's records from the DOM, but did not change the monthly salary expenditures.

###Pro Mode
I used the data() method to link an employee's annual salary into a div and used that data to recalculate the monthly salary expenditure after an employee was removed.

####Extras
I styled the layout of the list and form fields using CSS.

#####Noticeable bugs
1. If a field has too much text, the text would overlap with the next field when appended to the DOM.
2. If you did not enter a first name for an employee, there is no way of deleting them off the list.
3. If two or more employees have the same first name, the 'delete' button will delete the employee who was created the earliest and so forth.
4. My app creates a div ID using the employee's first name, so employees with the same first name would also have the same div ID.
