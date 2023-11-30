document.addEventListener('DOMContentLoaded', function () {
    const navLinks = ['skiing.html', 'snowboarding.html', 'cross-country.html','snowshoeing.html'];
  
    // Get the random nav link
    const randomNavLink = document.getElementById('randomNavLink');
  
    // Add a click event listener to the random nav link
    randomNavLink.addEventListener('click', function (event) {
      // Prevent the default behavior of the link
      event.preventDefault();
  
      // Get a random index from the navLinks array
      const randomIndex = Math.floor(Math.random() * navLinks.length);
  
      // Get the random nav link
      const randomNavLink = navLinks[randomIndex];
  
      // Navigate to the random nav link
      window.location.href = randomNavLink;
    });
  });
  