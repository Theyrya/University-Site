function Formoutput() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;
    const phoneNumbers = document.getElementById('phoneNumbers').value

    document.getElementById('printFirstName').innerHTML = firstName;
    document.getElementById('printLastName').innerHTML = lastName;
    document.getElementById('printEmail').innerHTML = email;
    document.getElementById('printFeedback').innerHTML = feedback;
    document.getElementById('printPhoneNumbers').innerHTML = phoneNumbers;

    document.getElementById('output').style.display = 'block';
  }