export default () => {
  $.validator.addMethod('alphanumeric', function (value, element) { // eslint-disable-line func-names
    return this.optional(element) || /^[a-z0-9!?\-\s]+$/i.test(value);
  });

  $.validator.setDefaults({
    submitHandler() {
      const $socialEmail = 'salesteam@robotsbuildingrobots.com';
      const $inputFirstName = $('#input-first-name').val();
      const $inputLastName = $('#input-last-name').val();
      const $inputEmail = $('#input-email').val();
      const $inputEmailBody = $('#input-email-body').val();
      const $inputSubject = $('#input-subject').val();

      const $inputMsgSubject = 'Project Request Submission';
      let $inputBody = `Project Title: ${$inputSubject}`;
      $inputBody = `${$inputBody}\r\nFirst Name: ${$inputFirstName}`;
      $inputBody = `${$inputBody}\r\nLast Name: ${$inputLastName}`;
      $inputBody = `${$inputBody}\r\nEmail Address: ${$inputEmail}`;
      $inputBody = `${$inputBody}\r\n\r\n—————————————————————`;
      $inputBody = `${$inputBody}\r\n\r\n${$inputEmailBody}`;

      window.location.href = `mailto:${encodeURIComponent($socialEmail)}?subject=${encodeURIComponent($inputMsgSubject)}&body=${encodeURIComponent($inputBody)}`;
    },
  });

  $('#contact-form').validate({
    rules: {
      'input-first-name': {
        required: true,
        minlength: 3,
        alphanumeric: true,
        normalizer(value) { return $.trim(value); },
      },
      'input-last-name': {
        required: true,
        minlength: 3,
        alphanumeric: true,
        normalizer(value) { return $.trim(value); },
      },
      'input-email': {
        required: true,
        minlength: 3,
        email: true,
        normalizer(value) { return $.trim(value); },
      },
      'input-subject': {
        required: true,
        minlength: 3,
        alphanumeric: true,
        normalizer(value) { return $.trim(value); },
      },
      'input-email-body': {
        required: true,
        minlength: 3,
        normalizer(value) { return $.trim(value); },
      },
    },
    messages: {
      'input-first-name': {
        required: 'Please provide your first name!',
        minlength: 'Three character minimum!',
        alphanumeric: 'Only alphabetical, numbers, spaces, and dash characters!',
      },
      'input-last-name': {
        required: 'Please provide your last name!',
        minlength: 'Three character minimum!',
        alphanumeric: 'Only alphabetical, numbers, spaces, and dash characters!',
      },
      'input-email': {
        required: 'Please provide your email address!',
        minlength: 'Three character minimum!',
        email: 'Not a valid email address!',
      },
      'input-subject': {
        required: 'Please provide the project title!',
        minlength: 'Three character minimum!',
        alphanumeric: 'Only alphabetical, numbers, spaces, and dash characters!',
      },
      'input-email-body': {
        required: 'Please provide project details!',
        minlength: 'Three character minimum!',
      },
    },
    errorElement: 'div',
    errorPlacement(error, element) {
      error.addClass('invalid-feedback');
      error.insertAfter(element);
    },
  });
};
