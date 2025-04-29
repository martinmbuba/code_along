
    let contacts = [];

    function saveContacts() {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }

    function loadContacts() {
      const saved = localStorage.getItem("contacts");
      if (saved) {
        contacts = JSON.parse(saved);
      }
    }

    function displayContacts() {
      const list = document.getElementById("contact-list");
      list.innerHTML = "";
      contacts.forEach(function(contact) {
        const li = document.createElement("li");
        li.textContent = contact.firstName + " " + contact.lastName + " - " + contact.phone;
        list.appendChild(li);
      });
    }

    document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault();
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const phone = document.getElementById("phone").value;

      contacts.push({ firstName, lastName, phone });
      saveContacts();
      displayContacts();
      document.getElementById("contact-form").reset();
    });

    window.addEventListener("load", function() {
      loadContacts();
      displayContacts();
    });


const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', function () {
  const query = searchInput.value.trim().toLowerCase();
  const match = places.find(place => place.location.toLowerCase() === query);

  if (match) {
    placeDetails.innerHTML = `
      <h3>${match.location}</h3>
      <p><strong>Landmarks:</strong> ${match.landmarks.join(', ')}</p>
      <p><strong>Time of Year:</strong> ${match.timeOfYear}</p>
      <p><strong>Notes:</strong> ${match.notes}</p>
      <p><em>${match.getSummary()}</em></p>
    `;
  } else {
    placeDetails.innerHTML = `<p style="color:red;">No place found with that name.</p>`;
  }
});

