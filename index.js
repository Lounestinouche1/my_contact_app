const contactList = document.getElementById('contact-list');

// Make 100 requests to the RandomUser API and add each contact to the list
for (let i = 0; i < 100; i++) {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const contact = data.results[0];
      const name = `${contact.name.first} ${contact.name.last}`;
      const email = contact.email;
      const phone = contact.phone;
      const address = `${contact.location.street.name}, ${contact.location.city}, ${contact.location.state}, ${contact.location.country}`;
      const imageUrl = contact.picture.medium;

      const contactDiv = document.createElement('div');
      contactDiv.classList.add('contact');
      contactDiv.addEventListener('click', () => {
        window.location.href = `contact.html?email=${email}`;
      });

      const image = document.createElement('img');
      image.classList.add('contact-image');
      image.src = imageUrl;
      image.alt = `${name}'s photo`;

      const nameElement = document.createElement('div');
      nameElement.classList.add('contact-name');
      nameElement.innerText = name;

      const emailElement = document.createElement('div');
      emailElement.classList.add('contact-email');
      emailElement.innerText = email;

      const phoneElement = document.createElement('div');
      phoneElement.innerText = phone;

      const addressElement = document.createElement('div');
      addressElement.innerText = address;

      contactDiv.appendChild(image);
      contactDiv.appendChild(nameElement);
      contactDiv.appendChild(emailElement);
      contactDiv.appendChild(phoneElement);
      contactDiv.appendChild(addressElement);

      contactList.appendChild(contactDiv);
    });
}
