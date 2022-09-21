const buttonLogin = document.getElementById('button-login');
const formLogin = document.getElementById('form-login');
const agreementCheckbox = document.getElementById('agreement');
const btnSubmitForm = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const form = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');

const addFormData = (text) => {
  const div = document.createElement('div');
  div.innerText = text;
  div.classList.add('formDataLine');
  formData.appendChild(div);
};

buttonLogin.addEventListener('click', (event) => {
  event.preventDefault();
  const email = formLogin.email.value;
  const senha = formLogin.password.value;

  if (email === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

agreementCheckbox.addEventListener('change', () => {
  btnSubmitForm.disabled = !agreementCheckbox.checked;
});

textarea.addEventListener('input', () => {
  const leftChars = 500 - textarea.value.length;
  counter.innerText = leftChars;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formDt = new FormData(form);
  const name = `${formDt.get('firstName')} ${formDt.get('lastName')}`;
  const email = formDt.get('email');
  const house = formDt.get('house');
  const family = formDt.get('family');
  const subjects = formDt.getAll('techs');
  const rate = formDt.get('rate');
  const obs = formDt.get('comments');
  addFormData(`Nome: ${name}`);
  addFormData(`Email: ${email}`);
  addFormData(`Casa: ${house}`);
  addFormData(`Família: ${family}`);
  addFormData(`Matérias: ${subjects.join(', ')}`);
  addFormData(`Avaliação: ${rate}`);
  addFormData(`Observações: ${obs}`);
  form.style.display = 'none';
  formData.style.display = 'inline-block';
});
