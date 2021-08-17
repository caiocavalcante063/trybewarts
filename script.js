document.getElementById('button').addEventListener('click', () => {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

document.getElementById('agreement').addEventListener('click', () => {
  const checkAgreement = document.getElementById('agreement');
  const submitBtn = document.getElementById('submit-btn');

  if (checkAgreement.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

function counterInicial() {
  const counter = document.getElementById('counter');

  counter.innerHTML = 500;
}
counterInicial();

document.getElementById('textarea').addEventListener('keyup', () => {
  const counter = document.getElementById('counter');
  const textInput = document.getElementById('textarea').value;

  counter.innerHTML = 500 - textInput.length;
});

// armazenando o texto da casa selecionada

const casaSelect = () => {
  const selectHouse = document.getElementById('house');
  let valorCasa = '';

  for (let i = 0; i < selectHouse.length; i += 1) {
    if (selectHouse[i] === selectHouse.options[selectHouse.selectedIndex]) {
      valorCasa = `${selectHouse[i].text}`;
    }
  }
  return valorCasa;
};

// armazenando o texto da família selecionada

const familia = () => {
  const familiaInput = document.getElementsByName('family');
  let valorFamilia = '';

  for (let i = 0; i < familiaInput.length; i += 1) {
    if (familiaInput[i].checked) {
      valorFamilia = `${familiaInput[i].value}`;
    }
  }
  return valorFamilia;
};

// armazenando as matérias selecionadas

const materias = () => {
  const checkbox = document.getElementsByName('content-checkbox');
  const materiasSelecionadas = [];

  for (let i = 0; i < checkbox.length; i += 1) {
    if (checkbox[i].checked) {
      materiasSelecionadas.push(` ${checkbox[i].value}`);
    }
  }
  return materiasSelecionadas;
};

// armazenando a avaliação do usuário

const avalUser = () => {
  const radioAval = document.getElementsByName('rate');
  let avaliacao;

  for (let i = 0; i < radioAval.length; i += 1) {
    if (radioAval[i].checked) {
      avaliacao = radioAval[i].value;
    }
  }
  return avaliacao;
};

// limpando form e mostrando dados inseridos

document.getElementById('submit-btn').addEventListener('click', () => {
  const formsContainer = document.getElementById('forms-container');
  const nome = `${document.getElementById('input-name').value}`;
  const sobrenome = `${document.getElementById('input-lastname').value}`;
  const email = document.getElementById('input-email').value;
  const casa = casaSelect();
  const family = familia();
  const subject = materias();
  const aval = avalUser();
  const obs = document.getElementById('textarea').value;

  formsContainer.id = 'evaluation-form';
  formsContainer.innerHTML = `<p>Nome: ${nome} ${sobrenome}</p>`;
  formsContainer.innerHTML += `<p>Email: ${email}</p>`;
  formsContainer.innerHTML += `<p>Casa: ${casa}</p>`;
  formsContainer.innerHTML += `<p>Família: ${family}</p>`;
  formsContainer.innerHTML += `<p>Matérias:${subject}</p>`;
  formsContainer.innerHTML += `<p>Avaliação: ${aval}</p>`;
  formsContainer.innerHTML += `<p>Observações: ${obs}</p>`;
});
