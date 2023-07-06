// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});

// Send Message Functionality
const contactForm = document.querySelector('.contact form');

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = contactForm.elements.name.value;
  const email = contactForm.elements.email.value;
  const message = contactForm.elements.message.value;
  alert(`Thank you for your message, ${name}! We'll get back to you at ${email} as soon as possible.`);
  contactForm.reset();
});
const size = document.getElementById("size");

size.addEventListener("change", function() {
  const selectedSize = size.value;
  console.log(selectedSize);
});
const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  row.addEventListener('click', () => {
    const size = row.querySelector('td:first-child').textContent;
    const chest = row.querySelector('td:nth-child(2)').textContent;
    const waist = row.querySelector('td:nth-child(3)').textContent;
    const hips = row.querySelector('td:nth-child(4)').textContent;

    alert(`Size: ${size}\nChest: ${chest} in\nWaist: ${waist} in\nHips: ${hips} in`);
  });
});
