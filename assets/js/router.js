// Router SPA simples baseado em hash
export class Router {
  constructor({ routes, onRender }) {
    this.routes = routes; // { path: () => HTMLElement|string }
    this.onRender = onRender;
    this.handle = this.handle.bind(this);
  }

  mount() {
    window.addEventListener('hashchange', this.handle);
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (href.startsWith('#/')) {
        e.preventDefault();
        location.hash = href;
      }
    });
    this.handle();
  }

  handle() {
    const hash = location.hash || '#/';
    const route = this.routes[hash];
    if (!route) return;
    const outlet = document.querySelector('main');
    if (!outlet) return;
    const content = route();
    outlet.innerHTML = typeof content === 'string' ? content : '';
    if (typeof this.onRender === 'function') this.onRender(hash, outlet);
  }
}


