const responseCards = document.querySelectorAll('.response-card');

responseCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.03)';
    card.style.transition = 'all 0.3s ease';
    card.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = 'none';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const dreamButton = document.querySelector('.dreamInterior-button');
  
  if (dreamButton) {
    dreamButton.addEventListener('click', () => {
      const currentSection = dreamButton.closest('section');
      
      let nextSection = currentSection.nextElementSibling;
      
      while (nextSection && nextSection.tagName !== 'SECTION') {
        nextSection = nextSection.nextElementSibling;
      }
      
      if (nextSection) {
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const dreamButton = document.querySelector('.dreamInterior-button');
  
  if (dreamButton) {
    dreamButton.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const dreamButton = document.querySelector('.home-menu');
  
  if (dreamButton) {
    dreamButton.addEventListener('click', () => {
      const currentSection = dreamButton.closest('section');
      
      let nextSection = currentSection.nextElementSibling;
      
      while (nextSection && nextSection.tagName !== 'SECTION') {
        nextSection = nextSection.nextElementSibling;
      }
      
      if (nextSection) {
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const dreamButton = document.querySelector('.home-menu');
  
  if (dreamButton) {
    dreamButton.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const aboutBtn = document.querySelector('.service-menu');
  const targetSection = document.querySelector('.services');

  if (aboutBtn && targetSection) {
    aboutBtn.addEventListener('click', () => {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const aboutBtn = document.querySelector('.aboutAs-menu');
  const targetSection = document.querySelector('.challengingDesigns-section');

  if (aboutBtn && targetSection) {
    aboutBtn.addEventListener('click', () => {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
});


let isDark = false;
function toggleTheme() {
  isDark = !isDark;
  if (isDark) {
    document.body.style.background = 'linear-gradient(135deg, #6d6dffff 0%, #960091ff 100%)';
    document.querySelectorAll('.card').forEach(card => {
      card.style.color = '#fff';
    });
  } else {
    document.body.style.background = 'linear-gradient(135deg, #e8fd8cff)';
    document.querySelectorAll('.card').forEach(card => {
      card.style.background = 'white';
    });
  }
}
