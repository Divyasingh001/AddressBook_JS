class Contact{
    firstName;
    lastName;
    address;
    state;
    city;
    zipCode;
    email;
    phoneNumber;
    constructor(firstName, lastName, address, city, state, zipCode, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

// Array to store contacts
let addressBook = [];

// Function to add a Contact to the Address Book
function addContact(firstName, lastName, address, city, state, zipCode, phoneNumber, email) {
    let newContact = new Contact(firstName, lastName, address, city, state, zipCode, phoneNumber, email);
    addressBook.push(newContact);
    console.log("Contact added successfully:", newContact);
}

// Example usage
addContact("Divya", "Singh", "Mahadeo Nagar", "Pankroshi", "Varanasi", "221007", "9876543210", "divya@example.com");

// Display the Address Book
console.log("Address Book:", addressBook);
