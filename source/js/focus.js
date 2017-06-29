// When the global search input element is in focus
var focused = document.getElementById('globalsearch')

// add or remove a class to the parent search form so styles can be applied
var toggleFocusClass = function() {
  focused.parentNode.classList.toggle('js-is-focused')
  console.log('focus!')
}

// toggle when the user focuses on the input
focused.addEventListener('focus', toggleFocusClass)

// remove the class when the user stops focusing on the input
focused.addEventListener('blur', toggleFocusClass)
