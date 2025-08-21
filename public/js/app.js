// MINIMAL WORKING VERSION
const TEXTS = {
  en: { full_name: "Full Name", age: "Age" },
  af: { full_name: "Volle Naam", age: "Ouderdom" },
  zu: { full_name: "Igama Leliphelele", age: "Iminyaka" },
  xh: { full_name: "Igama Lipheleleyo", age: "Iminyaka" },
  st: { full_name: "Lebitso le Felletseng", age: "Lilemo" }
};

function changeLang(lang) {
  try {
    document.querySelectorAll('[data-txt]').forEach(el => {
      el.textContent = TEXTS[lang][el.dataset.txt] || el.textContent;
    });
  } catch (e) {
    console.error('Language change failed:', e);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  try {
    // Debugging setup
    console.log('DOM loaded - initializing');
    
    // Verify inputs exist before adding listeners
    const inputs = document.querySelectorAll('input');
    if (inputs.length === 0) {
      console.error('No input fields found!');
      return;
    }

    inputs.forEach(input => {
      console.log(`Attaching listener to: ${input.id}`);
      input.addEventListener('input', () => {
        console.log(`Input ${input.id} changed`);
        try {
          calcTax();
        } catch (e) {
          console.error('Calculation error:', e);
        }
      });
    });

    // Initialize language
    const initialLang = localStorage.getItem('lang') || 'en';
    console.log(`Initializing language: ${initialLang}`);
    changeLang(initialLang);

  } catch (e) {
    console.error('Initialization failed:', e);
  }
});