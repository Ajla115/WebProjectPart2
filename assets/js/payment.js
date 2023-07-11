document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form input values
    var name = document.getElementById('name').value;
    var cardNumber = document.getElementById('cardNumber').value;
    var expiryDate = document.getElementById('expiryDate').value;
    var cvv = document.getElementById('cvv').value;
    var zipCode = document.getElementById('zipCode').value;
    
    // Check if all fields are filled
    if (name === '' || cardNumber === '' || expiryDate === '' || cvv === '' || zipCode === '') {
      // Display toaster message for missing fields
      showToast('Please fill in all fields');
    } else {
      // All fields filled, redirect to reservation.html
     window.location.href = '#reservation';
    }
  });
  
  function showToast(message) {
    // Create toaster element
    var toaster = document.createElement('div');
    toaster.classList.add('toaster');
    toaster.textContent = message;
    
    // Append toaster to the body
    document.body.appendChild(toaster);
    
    // Remove toaster after 3 seconds
    setTimeout(function() {
      toaster.remove();
    }, 3000);
  }