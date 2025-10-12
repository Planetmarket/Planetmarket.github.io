// Add button click interactivity
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Button clicked: ' + btn.textContent);
  });
});
