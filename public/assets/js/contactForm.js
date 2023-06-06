
var form = document.getElementById("contact");
    
$(document).ready(function() {
    $('#contact').submit(function(event) {
      event.preventDefault(); // Empêche le comportement par défaut du formulaire (actualisation de la page)
  
      // Récupère les données du formulaire
      var formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        phoneNumber: $('#number').val(),
        subject: $('#subject').val(),
        message: $('#message').val(),
        // Ajoutez d'autres champs selon vos besoins
      };
  
      // Effectue une requête AJAX au serveur
      $.ajax({
        url: 'http://localhost:3000/contact/createContact', // URL de la route sur le serveur
        type: 'POST', // Méthode HTTP
        dataType: 'json', // Type de données attendu en réponse
        data: JSON.stringify(formData), // Convertit les données en JSON
        contentType: 'application/json', // Type de contenu de la requête
        success: function(response) {
          // Fonction exécutée lorsque la requête est réussie (statut 200 OK)
          // Mettez à jour le contenu de la page avec la réponse
          $('#response').text(JSON.stringify(response));
  
          Toastify({
            text: "Votre message a été envoyé.",
            duration: 5000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
          console.log('aaaaaa');
          // Effectuez d'autres traitements spécifiques en cas de succès
          // ...
        },
        error: function(xhr, status, error) {
          // Fonction exécutée en cas d'erreur lors de la requête
          // Effectuez le traitement spécifique en cas d'erreur
          // ...
          Toastify({
            text: "Oups une erreur s'est produite!",
            duration: 5000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(90deg, rgba(222,106,109,1) 0%, rgba(224,31,90,1) 55%, rgba(255,0,31,1) 100%);",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        }
      });
    });
  });