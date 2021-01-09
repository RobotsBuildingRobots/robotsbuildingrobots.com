export default () => {
  $('#four-o-four-button').on('click', (event) => {
    event.preventDefault();

    window.location.replace('/');
  });
};
