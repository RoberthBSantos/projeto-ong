// Templates simples como strings HTML
export const Templates = {
  home: () => `
    <section class="hero" aria-labelledby="titulo-site">
      <div class="hero-inner">
        <div>
          <h1 id="titulo-site">Transformando realidades com tecnologia, transparência e participação</h1>
          <p class="lead">Apoiamos comunidades por meio de projetos sociais, formação de voluntários e prestação de contas públicas. Junte-se a nós para ampliar o impacto.</p>
          <div class="cta">
            <a class="btn" href="#/projetos">Conhecer projetos</a>
            <a class="btn secondary" href="#/cadastro">Quero ser voluntário</a>
          </div>
        </div>
        <figure aria-labelledby="fig-hero-caption">
          <img src="assets/images/hero.svg" alt="Ilustração abstrata representando impacto social">
          <figcaption id="fig-hero-caption" class="sr-only">Composição com gradientes.</figcaption>
        </figure>
      </div>
    </section>
    <section aria-labelledby="missao">
      <h2 id="missao">Missão, Visão e Valores</h2>
      <p><strong>Missão:</strong> promover inclusão, educação e saúde com soluções colaborativas.</p>
      <p><strong>Visão:</strong> ser referência em transparência e resultados no terceiro setor.</p>
      <p><strong>Valores:</strong> empatia, ética, diversidade, colaboração e inovação.</p>
    </section>
    <section aria-labelledby="feedback">
      <h2 id="feedback" class="sr-only">Feedback</h2>
      <div class="alert" role="status">Aviso: inscrições abertas para novos voluntários este mês.</div>
      <div class="mt-16">
        <button class="btn secondary" data-open-modal="#modal-news">Abrir modal de novidades</button>
        <button class="btn" data-toast>Mostrar toast</button>
      </div>
    </section>
  `,

  projetos: () => `
    <section aria-labelledby="titulo">
      <h1 id="titulo">Projetos em andamento</h1>
      <p class="lead">Explore nossas iniciativas e formas de engajar.</p>
    </section>
    <section aria-labelledby="lista-projetos">
      <h2 id="lista-projetos">Destaques</h2>
      <div class="grid">
        ${[1,2,3].map(() => `
          <article class="card">
            <figure><img src="assets/images/projeto1.svg" alt="Ilustração de projeto"></figure>
            <div class="card-body">
              <span class="badge">Educação</span>
              <h3>Projeto Exemplo</h3>
              <p>Resultados e metas em andamento.</p>
              <div class="cta">
                <a class="btn" href="#/cadastro">Quero ser voluntário</a>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `,

  cadastro: () => `
    <section aria-labelledby="titulo">
      <h1 id="titulo">Cadastro</h1>
      <p class="lead">Preencha seus dados. Campos * são obrigatórios.</p>
    </section>
    <section aria-labelledby="formulario">
      <h2 id="formulario" class="sr-only">Formulário</h2>
      <form id="spa-form" action="#" method="post">
        <fieldset>
          <legend>Dados pessoais</legend>
          <div class="row cols-2">
            <div class="field">
              <label for="nome">Nome completo *</label>
              <input id="nome" name="nome" type="text" required minlength="3" />
            </div>
            <div class="field">
              <label for="nascimento">Data de nascimento *</label>
              <input id="nascimento" name="nascimento" type="date" required />
            </div>
          </div>
          <div class="row cols-3">
            <div class="field">
              <label for="cpf">CPF *</label>
              <input id="cpf" name="cpf" type="text" required placeholder="000.000.000-00" maxlength="14" />
            </div>
            <div class="field">
              <label for="telefone">Telefone *</label>
              <input id="telefone" name="telefone" type="tel" required placeholder="(00) 00000-0000" maxlength="15" />
            </div>
            <div class="field">
              <label for="email">E-mail *</label>
              <input id="email" name="email" type="email" required />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>Endereço</legend>
          <div class="row cols-3">
            <div class="field">
              <label for="cep">CEP *</label>
              <input id="cep" name="cep" type="text" required placeholder="00000-000" maxlength="9" />
            </div>
            <div class="field">
              <label for="estado">Estado *</label>
              <select id="estado" name="estado" required>
                <option value="" disabled selected>Selecione...</option>
                ${['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'].map(uf=>`<option>${uf}</option>`).join('')}
              </select>
            </div>
            <div class="field">
              <label for="cidade">Cidade *</label>
              <input id="cidade" name="cidade" type="text" required />
            </div>
          </div>
        </fieldset>
        <div class="actions">
          <button class="btn" type="submit">Enviar cadastro</button>
        </div>
        <div class="mt-16" id="form-feedback" aria-live="polite"></div>
      </form>
    </section>
  `
};


