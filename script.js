document.addEventListener("DOMContentLoaded", () => {
    const inicioImg = document.getElementById("inicio-img");
    const secondImg = document.getElementById("second-img");
    const cargandoText = document.getElementById("cargando");
    const barraDeCarga = document.getElementById("cargado");
  
    // Simular el progreso de la barra de carga
    setTimeout(() => {
      barraDeCarga.style.width = "100%"; // Llenar barra
    }, 500);
  
    // Cambiar opacidades y ocultar texto después de completar carga
    setTimeout(() => {
      cargandoText.innerText = "Recibido"; // Ocultar texto
      inicioImg.style.opacity = 0; // Bajar opacidad del primer img
      secondImg.style.opacity = 1; // Subir opacidad del segundo img
    }, 3000); // Cambiar tras 2.5 segundos
  });

  setTimeout(function() {
    swal.fire({
        title:"Feliz Aniversario Mi Amor :) 💓",
        text: "De tis",
        showConfirmButton: false
    });
  }, 5000);

  
  