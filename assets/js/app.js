// Entrada do app: SPA + templates + validação + storage
import { Router } from './router.js';
import { Templates } from './templates.js';
import { FormUtils } from './forms.js';
import { Storage } from './storage.js';

function afterRender(hash, outlet) {
  // Reaplicar interações necessárias para conteúdo dinâmico
  if (hash === '#/cadastro') {
    const form = outlet.querySelector('#spa-form');
    FormUtils.applyMasks(outlet);
    FormUtils.attachValidation(form);
    Storage.loadDraft(form);
    form?.addEventListener('input', () => Storage.saveDraft(form));
  }
}

const router = new Router({
  routes: {
    '#/': () => Templates.home(),
    '#/projetos': () => Templates.projetos(),
    '#/cadastro': () => Templates.cadastro()
  },
  onRender: afterRender
});

window.addEventListener('DOMContentLoaded', () => {
  router.mount();
});


