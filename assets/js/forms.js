// Validações e máscaras para consistência de dados
export const FormUtils = (() => {
  const onlyDigits = (v) => v.replace(/\D+/g, '');
  const maskCPF = (v) => {
    const d = onlyDigits(v).slice(0,11);
    if (d.length <= 3) return d;
    if (d.length <= 6) return `${d.slice(0,3)}.${d.slice(3)}`;
    if (d.length <= 9) return `${d.slice(0,3)}.${d.slice(3,6)}.${d.slice(6)}`;
    return `${d.slice(0,3)}.${d.slice(3,6)}.${d.slice(6,9)}-${d.slice(9)}`;
  };
  const maskPhone = (v) => {
    const d = onlyDigits(v).slice(0,11);
    if (d.length <= 2) return `(${d}`;
    if (d.length <= 6) return `(${d.slice(0,2)}) ${d.slice(2)}`;
    if (d.length <= 10) return `(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6)}`;
    return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
  };
  const maskCEP = (v) => {
    const d = onlyDigits(v).slice(0,8);
    return d.length > 5 ? `${d.slice(0,5)}-${d.slice(5)}` : d;
  };

  function applyMasks(root=document) {
    const cpf = root.querySelector('#cpf');
    const tel = root.querySelector('#telefone');
    const cep = root.querySelector('#cep');
    if (cpf) cpf.addEventListener('input', e => cpf.value = maskCPF(cpf.value));
    if (tel) tel.addEventListener('input', e => tel.value = maskPhone(tel.value));
    if (cep) cep.addEventListener('input', e => cep.value = maskCEP(cep.value));
  }

  // Consistência: e-mail simples, CPF dígitos e DV, data plausível, tamanhos mínimos
  function validateCPF(cpf) {
    const d = onlyDigits(cpf);
    if (d.length !== 11 || /^([0-9])\1+$/.test(d)) return false;
    let sum = 0; for (let i=0;i<9;i++) sum += parseInt(d[i])*(10-i);
    let dv1 = (sum*10)%11; if (dv1===10) dv1=0; if (dv1!==parseInt(d[9])) return false;
    sum = 0; for (let i=0;i<10;i++) sum += parseInt(d[i])*(11-i);
    let dv2 = (sum*10)%11; if (dv2===10) dv2=0; return dv2===parseInt(d[10]);
  }

  function validateDate(value) {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return false;
    const now = new Date();
    const min = new Date('1900-01-01');
    return d >= min && d <= now;
  }

  function showFeedback(container, messages) {
    if (!container) return;
    if (!messages.length) { container.innerHTML = ''; return; }
    container.innerHTML = `<div class="alert danger" role="alert"><strong>Por favor, corrija:</strong><ul>${messages.map(m=>`<li>${m}</li>`).join('')}</ul></div>`;
  }

  function attachValidation(form) {
    if (!form) return;
    const feedback = form.querySelector('#form-feedback');
    form.addEventListener('submit', (e) => {
      const errors = [];
      const nome = form.querySelector('#nome');
      const email = form.querySelector('#email');
      const cpf = form.querySelector('#cpf');
      const tel = form.querySelector('#telefone');
      const nasc = form.querySelector('#nascimento');
      const cep = form.querySelector('#cep');
      const estado = form.querySelector('#estado');
      const cidade = form.querySelector('#cidade');

      if (nome && nome.value.trim().length < 3) errors.push('Nome muito curto.');
      if (email && !/.+@.+\..+/.test(email.value)) errors.push('E-mail inválido.');
      if (cpf && !validateCPF(cpf.value)) errors.push('CPF inválido.');
      if (tel && onlyDigits(tel.value).length < 10) errors.push('Telefone incompleto.');
      if (nasc && !validateDate(nasc.value)) errors.push('Data de nascimento inválida.');
      if (cep && onlyDigits(cep.value).length !== 8) errors.push('CEP deve ter 8 dígitos.');
      if (estado && !estado.value) errors.push('Selecione um estado.');
      if (cidade && cidade.value.trim().length < 2) errors.push('Informe a cidade.');

      // Visual
      [nome,email,cpf,tel,nasc,cep,estado,cidade].forEach((el)=>{
        if (!el) return;
        const valid = el.checkValidity();
        el.setAttribute('aria-invalid', String(!valid));
      });

      if (errors.length) {
        e.preventDefault();
        showFeedback(feedback, errors);
        const firstInvalid = form.querySelector('[aria-invalid="true"], :invalid');
        firstInvalid?.focus();
      } else {
        showFeedback(feedback, []);
      }
    });
  }

  return { applyMasks, attachValidation };
})();


