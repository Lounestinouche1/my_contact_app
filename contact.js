const contactList = document.querySelector('#contact-list');

// Make 100 requests to the RandomUser API and create a separate web page for each contact
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

      // Create a new web page for this contact
      const contactPage = document.createElement('div');
      contactPage.className = 'contact-card';

      const image = document.createElement('img');
      image.src = imageUrl;
      image.alt = `${name}'s photo`;
      contactPage.appendChild(image);

      const heading = document.createElement('h2');
      heading.innerText = name;
      contactPage.appendChild(heading);

      const emailParagraph = document.createElement('p');
      const emailLink = document.createElement('a');
      emailLink.href = `mailto:${email}`;
      emailLink.innerText = email;
      emailParagraph.appendChild(emailLink);
      contactPage.appendChild(emailParagraph);

      const phoneParagraph = document.createElement('p');
      phoneParagraph.innerText = phone;
      contactPage.appendChild(phoneParagraph); 

      const addressParagraph = document.createElement('p');
      addressParagraph.innerText = address;
      contactPage.appendChild(addressParagraph);

      // Add the link to the contact's web page to the contact list
      const link = document.createElement('a');
      link.href = `contact${i}.html`;
      link.innerText = name;
      const listItem = document.createElement('div');
      listItem.appendChild(link);
      contactList.appendChild(listItem);

      // Save the contact's information to a separate web page
      const blob = new Blob([contactPage.innerHTML], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const file = new File([blob], `${name}.html`, { type: 'text/html' });
      
    })}