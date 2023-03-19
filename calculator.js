const display = document.querySelector('.display');
// Exclude the 'delete' button from the buttons querySelector
const buttons = document.querySelectorAll('.buttons button:not(.delete)');
const equalButton = document.querySelector('.equal');
const deleteButton = document.querySelector('.delete');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      display.value = '';
    } else {
      display.value += value;
    }
  });
});

equalButton.addEventListener('click', () => {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
});

deleteButton.addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
});
