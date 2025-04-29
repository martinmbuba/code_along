
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
