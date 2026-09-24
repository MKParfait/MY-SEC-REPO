const form = document.querySelector('#booking-form');
const dateInput = document.querySelector('#date');
const message = document.querySelector('.form-message');

// Prevent dates in the past from being selected.
const today = new Date();
const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split('T')[0];
dateInput.min = localDate;

document.querySelectorAll('.vehicle-card .icon-button').forEach((button) => {
  button.addEventListener('click', () => {
    const vehicleName = button.closest('.vehicle-card').querySelector('h3').textContent;
    document.querySelector('#vehicle').value = vehicleName.includes('X-01') ? 'NOVA X-01 / Hyper GT' : vehicleName.includes('A-7') ? 'A-7 / Orbit Cruiser' : 'R-9 / Lunar Rover';
    document.querySelector('#booking').scrollIntoView({ behavior: 'smooth' });
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const selected = document.querySelector('#vehicle').value;
  const date = new Date(dateInput.value).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  message.textContent = `Signal received — ${selected} is being held for ${date}.`;
  form.reset();
  dateInput.min = localDate;
});
