  document.addEventListener('DOMContentLoaded', function () {
    // User menu button
    const userMenuButton = document.querySelector('#user-menu-button');
    const userMenuDropdown = document.querySelector('.relative.right-0');

    userMenuButton.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent the click event from propagating to the document
      userMenuDropdown.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function () {
      userMenuDropdown.classList.add('hidden');
    });

    // Profile dropdown items
    const profileDropdownItems = document.querySelectorAll('.relative.right-0 a');
    profileDropdownItems.forEach(function (item) {
      item.addEventListener('click', function () {
        console.log('Dropdown item clicked:', item.textContent);
        // Add logic for each dropdown item here
      });
    });
  });

