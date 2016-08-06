function App() {
  this.form = document.querySelector('#contactForm');
  this.addSubmitListener();
}

App.prototype.addSubmitListener = function() {
  var scope = this;
  this.form.onsubmit = function(event) {
    event.preventDefault();
    return scope.validate(event.target);
  };
};

App.prototype.validate= function(form) {
  // Here you could handle your own form validation
  // know it is done by the browser defaults.

  alert('Form cannot be submited - Sorry, it is not our working day...');
  return false;
};