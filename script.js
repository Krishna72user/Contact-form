const scriptURL = 'https://script.google.com/macros/s/AKfycbwMLFSlV_916O8uLhXFZWeJTvY_Lq3yEK2nPtUyjSjOYqfqmnsz--zizioFFe2oskl4/exec'

const form = document.forms['form']

form.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById("submit").innerText="Sending";
  fetch(scriptURL, { method: 'POST',
    body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload();})
  .catch(error => 
    alert('An error occured')
  )
})