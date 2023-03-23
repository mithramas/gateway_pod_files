<script>
const form = document.querySelector('form'); // cambiar 'form' por el nombre del formulario adecuado 

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent the form from submitting

  const formData = new FormData(form); // get the form data

  const response = await fetch('https://your-cloudflare-worker-url.com', {
    method: 'POST',
    body: formData
  });

  if (response.ok) {
    console.log('Form data sent successfully!');
  } else {
    console.error('Error sending form data:', response.statusText);
  }
});
</script>
