document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Verificar si el correo tiene el dominio @JEMX
    if (email.endsWith("@JEMX") && password.length > 0) {
      // Si el correo es válido, mostrar el contenido
      document.getElementById("login-container").classList.add("hidden");
      document.getElementById("content").classList.remove("hidden");
    } else {
      // Si el correo no tiene el dominio @JEMX o la contraseña es vacía
      alert("Correo inválido o contraseña incorrecta.");
    }
  });
  
  // Función para mostrar las secciones al hacer clic en los botones
  function showSection(section) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(function(sec) {
      sec.classList.add("hidden");
    });
  
    document.getElementById(section).classList.remove("hidden");
  }
  
