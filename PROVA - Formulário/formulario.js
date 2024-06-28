const body = document.querySelector('body');
body.style.backgroundColor = 'purple';
body.style.opacity = '1';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.overflow = 'hidden';
body.style.alignItems = 'center';
body.style.height = '150vh';
body.style.margin = '0';


const navbar = document.createElement('div');
navbar.style.width = '100%';
navbar.style.backgroundColor = 'black';
navbar.style.padding = '10px 0';
navbar.style.display = 'flex';
navbar.style.justifyContent = 'center';
navbar.style.position = 'absolute';
navbar.style.top = '0';
navbar.style.zIndex = '1';


function createNavButton(text) {
   const button = document.createElement('button');
   button.textContent = text;
   button.style.backgroundColor = 'black';
   button.style.color = 'white';
   button.style.border = 'none';
   button.style.padding = '10px 20px';
   button.style.margin = '0 10px';
   button.style.cursor = 'pointer';
   button.style.transition = 'background-color 0.3s';
   button.addEventListener('mouseover', () => {
      button.style.backgroundColor = 'gray';
   });
   button.addEventListener('mouseout', () => {
      button.style.backgroundColor = 'black';
   });
   return button;
}
const homeButton = createNavButton('Home');
const aboutButton = createNavButton('Sobre');
const contactButton = createNavButton('Contato');

navbar.appendChild(homeButton);
navbar.appendChild(aboutButton);
navbar.appendChild(contactButton);

body.appendChild(navbar);


const div2 = document.createElement("div");
div2.style.width = "80%";
div2.style.maxWidth = "800px";
div2.style.height = "80%";
div2.style.maxHeight = "800px";
div2.style.display = "flex";
div2.style.backgroundColor = "orange";
div2.style.opacity = "0.9";
div2.style.alignItems = "center";
div2.style.justifyContent = "center";
div2.style.flexDirection = "column";
div2.style.borderRadius = "15px";
div2.style.transition = "all 0.5s ease";
div2.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
div2.style.padding = "15px";

div2.style.opacity = "0";
setTimeout(() => {
   div2.style.opacity = "1";
}, 10);

body.appendChild(div2);


const textoDiv = document.createElement('h1');
textoDiv.textContent = 'Descubra sua Média';
textoDiv.style.color = 'black';
textoDiv.style.marginBottom = '20px';
div2.appendChild(textoDiv);

const nome = document.createElement('input');
nome.placeholder = 'Digite seu nome:';
nome.style.width = '80%';
nome.style.padding = '10px';
nome.style.margin = '10px';
nome.style.borderRadius = '5px';
nome.style.border = '1px solid #ccc';
nome.style.boxSizing = 'border-box';
div2.appendChild(nome);

const nota1 = document.createElement('input');
nota1.placeholder = 'Digite a 1ª nota:';
nota1.style.width = '80%';
nota1.style.padding = '10px';
nota1.style.margin = '10px';
nota1.style.borderRadius = '5px';
nota1.style.border = '1px solid #ccc';
nota1.style.boxSizing = 'border-box';
div2.appendChild(nota1);

const nota2 = document.createElement('input');
nota2.placeholder = 'Digite a 2ª nota:';
nota2.style.width = '80%';
nota2.style.padding = '10px';
nota2.style.margin = '10px';
nota2.style.borderRadius = '5px';
nota2.style.border = '1px solid #ccc';
nota2.style.boxSizing = 'border-box';
div2.appendChild(nota2);


const nota3 = document.createElement('input');
nota3.placeholder = 'Digite a 3ª nota:';
nota3.style.width = '80%';
nota3.style.padding = '10px';
nota3.style.margin = '10px';
nota3.style.borderRadius = '5px';
nota3.style.border = '1px solid #ccc';
nota3.style.boxSizing = 'border-box';
div2.appendChild(nota3);


const bt = document.createElement('button');
bt.textContent = 'Calcular Média';
bt.style.padding = '10px 20px';
bt.style.borderRadius = '5px';
bt.style.border = 'none';
bt.style.backgroundColor = 'gray';
bt.style.color = 'white';
bt.style.cursor = 'pointer';
bt.style.transition = 'background-color 0.3s';
bt.addEventListener('mouseover', () => {
   bt.style.backgroundColor = 'purple';
});
bt.addEventListener('mouseout', () => {
   bt.style.backgroundColor = 'gray';
});
div2.appendChild(bt);

bt.addEventListener('click', function () {
   const media = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value)) / 3;

   const h = document.createElement('h1');
   h.textContent = `Olá ${nome.value}, sua média é ${media.toFixed(2)}`;
   h.style.color = 'white';
   div2.appendChild(h);

   const resultText = document.createElement('p');
   resultText.style.color = 'white';
   resultText.style.marginTop = '10px';

   if (media >= 7) {
      resultText.textContent = 'Parabéns, pode tirar suas férias filho.';
   } else if (media >= 5) {
      resultText.textContent = 'Só vai para a final quem é campeão!, simbora';
   } else {
      resultText.textContent = 'Nos vemos aqui novamente no ano que vem. Quem sabe lá você da sorte. parabéns pela reprovação1';
   }

   div2.appendChild(resultText);
});

