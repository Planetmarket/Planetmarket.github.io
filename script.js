
// Add button click interactivity
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', function() {
    alert('Button clicked: ' + this.textContent);
  });
});
