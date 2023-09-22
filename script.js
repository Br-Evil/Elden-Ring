document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
  function saveCheckboxState() {
    checkboxes.forEach((checkbox, index) => {
      localStorage.setItem(`checkbox${index}`, checkbox.checked);
    });
  }
  
  function loadCheckboxState() {
    checkboxes.forEach((checkbox, index) => {
      const checkboxState = localStorage.getItem(`checkbox${index}`);
      if (checkboxState === 'true') {
        checkbox.checked = true;
      }
    });
  }
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', saveCheckboxState);
  });
  
  loadCheckboxState()
});
