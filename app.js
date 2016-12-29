const start = document.querySelector('#start');

start.addEventListener('click', () => {
  start.textContent = "Findin' yo shit...";
  sensor.connect()
  .then(() => { console.log('connected!') });
});
