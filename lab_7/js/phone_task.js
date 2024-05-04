class Contact {
    constructor(firstName, lastName, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }
}

class ContactList {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    displayContacts() {
        const contactTable = document.getElementById("contact-table").getElementsByTagName('tbody')[0];
        contactTable.innerHTML = "";
        this.contacts.forEach(contact => {
            const row = contactTable.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            cell1.innerHTML = contact.firstName;
            cell2.innerHTML = contact.lastName;
            cell3.innerHTML = contact.phoneNumber;
        });
    }
}

const contactList = new ContactList();

const form = document.getElementById("contact-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const newContact = new Contact(firstName, lastName, phoneNumber);
    contactList.addContact(newContact);
    contactList.displayContacts();
    form.reset();
});

function limitPhoneToDigits(event) {
    const phoneField = document.getElementById('phone-number');
    phoneField.value = phoneField.value.replace(/\D/g, '');
}