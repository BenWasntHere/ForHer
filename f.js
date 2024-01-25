document.addEventListener('DOMContentLoaded', function () {
  const roseContainer = document.getElementById('rose-container');

  // Function to create a rose element
  function createRose() {
    const rose = document.createElement('div');
    rose.className = 'rose';
    rose.style.left = Math.random() * window.innerWidth + 'px';
    rose.style.animationDuration = Math.random() * 2 + 2 + 's';
    roseContainer.appendChild(rose);

    // Event listener for clicking on a rose
    rose.addEventListener('click', function () {
      displayValentinesMessage(); // You can define this function to display your message
      rose.remove(); // Remove the rose after clicking
    });

    // Remove the rose after the animation ends
    rose.addEventListener('animationend', function () {
      rose.remove();
    });
  }

  // Function to display the Valentine's Day message
  function displayValentinesMessage() {
    alert("Happy Valentine's Day Shiloh, I just wanted to let you know that I always like speaking to you. You're beautiful like the stars at night. You have an unforgettable smile that I can't forget.");
    // You can customize the message or use a different method to display it.
  }

  // Create roses every 2 seconds
  setInterval(createRose, 2000);
});
