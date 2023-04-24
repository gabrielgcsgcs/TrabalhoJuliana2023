const formulario = document.getElementById("formulario");

        formulario.addEventListener("submit", function(event) {
          event.preventDefault();
         
          const nome = document.getElementById("nome").value;
          const email = document.getElementById("email").value;
          const senha = document.getElementById("senha").value;
          const curso = document.getElementById("curso").value;
          const estuda = document.querySelector('input[name="estuda"]:checked').value;
          const periodo = document.getElementById("periodo").value;
          const obs = document.getElementById("obs").value;
        
          
          const resultado = document.getElementById("resultado");
          resultado.innerHTML = `
                <p style="color: blue;"><strong>Nome:</strong> ${nome}</p>
                <p style="color: green;"><strong>E-mail:</strong> ${email}</p>
                <p style="color: red;"><strong>Senha:</strong> ${senha}</p>
                <p style="color: orange;"><strong>Curso:</strong> ${curso}</p>
                <p style="color: purple;"><strong>Aplicar bolsa do Enem:</strong> ${estuda}</p>
                <p style="color: brown;"><strong>Período:</strong> ${periodo}</p>
                <p style="color: black;"><strong>Observações:</strong> ${obs}</p>
              `;
        });






