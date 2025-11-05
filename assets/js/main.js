// Máscaras simples (CPF, Telefone, CEP) mantendo validação nativa HTML5
(function () {
  function onlyDigits(value) {
    return value.replace(/\D+/g, "");
  }

  function maskCPF(value) {
    const digits = onlyDigits(value).slice(0, 11);
    const parts = [];
    if (digits.length > 3) parts.push(digits.slice(0, 3));
    if (digits.length > 6) parts.push(digits.slice(3, 6));
    if (digits.length > 9) {
      parts.push(digits.slice(6, 9));
      return `${parts[0]}.${parts[1]}.${parts[2]}-${digits.slice(9)}`;
    }
    if (digits.length > 6) return `${parts[0]}.${parts[1]}.${digits.slice(6)}`;
    if (digits.length > 3) return `${parts[0]}.${digits.slice(3)}`;
    return digits;
  }

  function maskPhone(value) {
    const digits = onlyDigits(value).slice(0, 11);
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  function maskCEP(value) {
    const digits = onlyDigits(value).slice(0, 8);
    if (digits.length > 5) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
    return digits;
  }

  function applyMask(input, masker) {
    if (!input) return;
    input.addEventListener("input", function (e) {
      const start = input.selectionStart;
      const before = input.value;
      input.value = masker(input.value);
      // Ajuste simples de caret
      const delta = input.value.length - before.length;
      const next = (start || 0) + (delta > 0 ? 1 : 0);
      try { input.setSelectionRange(next, next); } catch (_) {}
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyMask(document.querySelector("#cpf"), maskCPF);
    applyMask(document.querySelector("#telefone"), maskPhone);
    applyMask(document.querySelector("#cep"), maskCEP);

    // Melhora de acessibilidade: fecha nav ao pular com TAB se houver menu mobile futuramente
    const skip = document.querySelector('.skip-link');
    if (skip) skip.addEventListener('click', () => {
      const main = document.querySelector('main');
      if (main) main.setAttribute('tabindex', '-1');
      main?.focus();
    });
  });
})();


