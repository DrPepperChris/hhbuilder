//define elements on page
var elems = {
	//form
	form: document.querySelector('.builder form'),
	saved: document.querySelector('.household'),
	debug: document.querySelector('.debug'),
	//inputs
	age: document.querySelector('input[name="age"]'),
	rel: document.querySelector('select[name="rel"]'),
	smoker: document.querySelector('input[name="smoker"]')
};

// define current state, can be updated, and submitted
var curState = {
  input: {
    age: { value: 0, error: '' },
    rel: { value: '', error: '' },
    smoker: { value: false, error: '' }
  },
  form: {
	  unsaved: 'You have unsaved changes please click submit button so they are not lost, you can always add to your list.',
    modified: 'You have modified your household.<br>Please click "Submit" to save your changes.',
    saved: '<strong>Chages saved.</strong>',
    failed: '<strong>Something went wrong.</strong><br>Please check your connection, and refresh the page. If this issue persists, please contact us at <a href="#">support@hhbuider.com</a>'
  },
  saved: { } 
};
