
document.addEventListener('DOMContentLoaded', function() {
  var input     = document.getElementById('titolo_seo');
  var errorDiv1  = document.getElementById('titolo_seo_error_1');
  var errorDiv2  = document.getElementById('titolo_seo_error_2');
  var form      = document.getElementById('post');        // form di WP

  // Funzione di validazione
  function validateTitolo() {
    let error1=false;
    let error2 = false;
    var val = input.value.trim();

    if (val.length < 50 || val.length > 60) {
      errorDiv1.textContent = 'Il Titolo SEO deve contenere 50-60 caratteri alfanumerici. ';
      errorDiv1.style.display = 'block';
      error1=true;
    } else {
      errorDiv1.style.display = 'none';
    }

    var allowedChars = /^[A-Za-z0-9|\- ]+$/;
    if (!allowedChars.test(val)) {
      errorDiv2.textContent = 'il form è vuoto o contiene caratteri pericolosi. ';
      errorDiv2.style.display = 'block';
      error2=true;
    } else {
      errorDiv2.style.display = 'none';
    }

    if (error1 || error2){
      return false
    }

    return true;
  }

  // Validazione al volo
  input.addEventListener('input', validateTitolo);
});