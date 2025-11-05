// Armazenamento local simples para rascunho de formulário
export const Storage = {
  saveDraft(form) {
    if (!form) return;
    const data = Object.fromEntries(new FormData(form).entries());
    localStorage.setItem('cadastro-draft', JSON.stringify(data));
  },
  loadDraft(form) {
    if (!form) return;
    const raw = localStorage.getItem('cadastro-draft');
    if (!raw) return;
    try {
      const data = JSON.parse(raw);
      Object.entries(data).forEach(([k,v]) => {
        const el = form.querySelector(`[name="${CSS.escape(k)}"]`);
        if (el) el.value = v;
      });
    } catch (_) {}
  }
};


