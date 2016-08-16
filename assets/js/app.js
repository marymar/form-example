function App() {
  this.form = document.forms.contactForm;
  this.form.noValidate = true;
  this.addSubmitListener();
}

App.prototype.addSubmitListener = function () {
  var scope = this;

  this.form.onsubmit = function (event) {
    event.preventDefault();
    if (scope.validate(this)) {
      this.submit();
    }
  };

};

App.prototype.validate = function (form) {
  var isValid = true;

  for (var i = 0; i < form.length; i++) {
    if (!form[i].checkValidity()) {
      isValid = false;
      this.showError(form[i]);
    } else {
      this.hideError(form[i]);
    }
  }
  return isValid;
};

App.prototype.showError = function(formField) {
  var classes = formField.className.split(' '),
      errClass = classes[0] + '--invalid',
      errMsgElement = formField.parentNode.querySelector('.form__input-block-msg');

  if (classes.indexOf(errClass) < 0) {
    classes.push(errClass);
    formField.className = classes.join(' ');
  }

  if (errMsgElement) {
    errMsgElement.style = 'display:block';
  }
};

App.prototype.hideError = function(formField) {
  var classes = formField.className.split(' '),
      errClass = classes[0] + '--invalid',
      errMsgElement = formField.parentNode.querySelector('.form__input-block-msg');

  if (classes.indexOf(errClass) >= 0) {
    formField.className = classes.filter(function(cl) {
      return cl !== errClass;
    }).join(' ');
  }

  if (errMsgElement) {
    errMsgElement.style = '';
  }
};

