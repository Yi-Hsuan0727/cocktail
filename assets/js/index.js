"use strict";

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
  
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-mode');
    if (toggleButton) {
      toggleButton.addEventListener('click', function() {
        const html = document.documentElement;
        const body = document.body;
        const game = document.getElementById("game");
        const banner = document.getElementById("banner");
        const header = document.querySelector("header");
        const footer = document.querySelector("footer");
        const buttons = document.getElementsByTagName("button");

        if (html.classList.contains('dark-mode')) {
          html.classList.remove('dark-mode');
          toggleButton.textContent = 'Dark Mode';
          body.classList.remove('dark-mode');
          game.classList.remove('dark-mode');
          header.classList.remove('dark-mode');
          footer.classList.remove('dark-mode');
          banner.classList.remove('dark-mode');
          for (const btn of buttons) {
            btn.classList.remove("dark-mode");
          }
        } else {
          html.classList.add('dark-mode');
          toggleButton.textContent = 'Light Mode';
          body.classList.add('dark-mode');
          game.classList.add('dark-mode');
          header.classList.add('dark-mode');
          footer.classList.add('dark-mode');
          banner.classList.add('dark-mode');
          for (const btn of buttons) {
            btn.classList.add("dark-mode");
          }
        }

      });
    }
  
    const productDisplay = document.getElementById('product-display');
    const products = [
        {
            name: "Mojito",
            description: "The Mojito is a vibrant and refreshing Cuban highball that perfectly balances the tang of lime, the sweetness of sugar, the freshness of mint, and the kick of white rum.",
            image: "assets/img/mojito.png"
        },
        {
            name: "Old Fashioned",
            description: "The Old Fashioned is a classic American cocktail that exudes timeless elegance, known for its simplicity and bold whiskey-forward flavor.",
            image: "assets/img/old-fashioned.png"
        },
        {
            name: "Piña Colada",
            description: "The Piña Colada is a sweet and creamy tropical cocktail originating from Puerto Rico. It combines the exotic flavors of coconut and pineapple, making it the perfect beachside indulgence.",
            image: "assets/img/pina-colada.png"
        }
    ];

    function displayProduct(index) {
        const productDisplay = document.getElementById('product-display');
        const product = products[index];
        
        productDisplay.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" />
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
    }

    window.addEventListener('load', function () {
        displayProduct(0);
    });

    
    const productButtons = document.querySelectorAll('.product-buttons button');
    productButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            displayProduct(index);
        });
    });
    

    // Guessing Game
    const guessButton = document.getElementById('guess-button');
    const guessInput = document.getElementById('guess-input');
    const gameResult = document.getElementById('game-result');

    if (guessButton) {
        guessButton.addEventListener('click', function() {
            const userGuess = parseInt(guessInput.value, 10);
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            
            if (userGuess === randomNumber) {
                gameResult.textContent = "Congratulations! You guessed the correct number.";
            } else {
                gameResult.textContent = `Sorry! The correct number was ${randomNumber}. Try again!`;
            }
            guessInput.value = '';
        });
    }

    //form
    const contactForm = document.getElementById('contact-form');
    const fullName = document.getElementById('full-name');
    const contactMethod = document.getElementsByName('contact-method');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const comments = document.getElementById('comments');
    
    const nameError = document.getElementById('name-error');
    const methodError = document.getElementById('method-error');
    const phoneError = document.getElementById('phone-error');
    const emailError = document.getElementById('email-error');
    const commentsError = document.getElementById('comments-error');
    const submissionMessage = document.getElementById('submission-message');
    
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
    
      // Clear previous errors
      nameError.textContent = '';
      methodError.textContent = '';
      phoneError.textContent = '';
      emailError.textContent = '';
      commentsError.textContent = '';
      submissionMessage.textContent = '';
    
      let isValid = true;
    
      // Name validation
      if (!/^[a-zA-Z\s]+$/.test(fullName.value.trim())) {
        nameError.textContent = "⚠ Name must contain only letters A–Z.";
        isValid = false;
      }
    
      // Contact method validation
      const selected = Array.from(contactMethod).some(method => method.checked);
      if (!selected) {
        methodError.textContent = "⚠ Please select a contact method.";
        isValid = false;
      }
    
      // Phone (if entered)
      if (!/^\d{10}$/.test(phone.value.trim())) {
        phoneError.textContent = "⚠ Phone number must be exactly 10 digits.";
        isValid = false;
      }
    
      // Email (if entered)
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        emailError.textContent = "⚠ Please enter a valid email address.";
        isValid = false;
      }
    
      // Comments required
      if (comments.value.trim() === '') {
        commentsError.textContent = "⚠ Comments are required.";
        isValid = false;
      }
    
      // If valid, show success and reset form
      if (isValid) {
        submissionMessage.innerHTML = `
          <h3>${fullName.value.trim()}, thank you for your submission!</h3>
          <p>We will contact you soon.</p>
          <p>Your comments: ${comments.value.trim()}</p>
        `;
        contactForm.reset();
      }
    });
});