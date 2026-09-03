// ============================================================
// Renders profile.js / data.js content into the page and wires
// up filter pills + the detail modal. Plain JS, no build step.
// ============================================================

function el(tag, opts = {}, children = []) {
  const node = document.createElement(tag);
  if (opts.class) node.className = opts.class;
  if (opts.html !== undefined) node.innerHTML = opts.html;
  if (opts.text !== undefined) node.textContent = opts.text;
  if (opts.attrs) {
    for (const [k, v] of Object.entries(opts.attrs)) node.setAttribute(k, v);
  }
  children.forEach((c) => c && node.appendChild(c));
  return node;
}

function renderProfile() {
  document.getElementById('profile-name').textContent = profile.name;
  document.getElementById('profile-title').textContent = profile.title;
  document.getElementById('profile-location').textContent = profile.location;
  document.getElementById('profile-bio').textContent = profile.bio;

  const eduList = document.getElementById('education-list');
  profile.education.forEach((e) => {
    eduList.appendChild(
      el('li', {}, [
        el('div', { class: 'edu-degree', text: e.degree }),
        el('div', { class: 'edu-school', text: e.school }),
        el('div', { class: 'edu-meta', text: `${e.period} · ${e.detail}` }),
      ])
    );
  });

  const chips = document.getElementById('skill-chips');
  profile.skills.forEach((s) => {
    chips.appendChild(el('span', { class: 'chip', text: s }));
  });

  const links = document.getElementById('profile-links');
  const linkDefs = [
    { key: 'github', label: 'GitHub' },
    { key: 'linkedin', label: 'LinkedIn' },
    { key: 'orcid', label: 'ORCID' },
    { key: 'email', label: 'Email' },
    { key: 'cv', label: 'Download CV', accent: true },
  ];
  linkDefs.forEach((d) => {
    const href = profile.links[d.key];
    if (!href) return;
    const a = el('a', {
      class: d.accent ? 'link-btn link-btn-accent' : 'link-btn',
      text: d.label,
      attrs: { href, target: d.key === 'email' ? '_self' : '_blank', rel: 'noopener' },
    });
    links.appendChild(a);
  });
}

function renderFilters() {
  const bar = document.getElementById('filter-pills');
  const all = el('button', { class: 'pill active', text: 'All', attrs: { 'data-filter': 'all' } });
  bar.appendChild(all);
  Object.entries(categoryLabels).forEach(([key, label]) => {
    bar.appendChild(el('button', { class: 'pill', text: label, attrs: { 'data-filter': key } }));
  });

  bar.addEventListener('click', (ev) => {
    const btn = ev.target.closest('.pill');
    if (!btn) return;
    bar.querySelectorAll('.pill').forEach((p) => p.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.getAttribute('data-filter'));
  });
}

function applyFilter(filter) {
  document.querySelectorAll('.timeline-item').forEach((item) => {
    const cats = item.getAttribute('data-categories').split(',');
    item.style.display = filter === 'all' || cats.includes(filter) ? '' : 'none';
  });
}

function renderTimeline() {
  const container = document.getElementById('timeline');
  entries.forEach((entry) => {
    const item = el('div', {
      class: 'timeline-item',
      attrs: { 'data-categories': entry.category.join(',') },
    });

    const rail = el('div', { class: 'timeline-rail' }, [
      el('div', { class: 'timeline-dot' }),
      el('div', { class: 'timeline-period', text: entry.period }),
    ]);

    const badges = el(
      'div',
      { class: 'timeline-badges' },
      entry.category.map((c) => el('span', { class: 'badge', text: categoryLabels[c] }))
    );

    const content = el('div', { class: 'timeline-content' }, [
      badges,
      el('h3', { text: entry.title }),
      el('p', { class: 'org', text: entry.org }),
      el('p', { class: 'short-desc', text: entry.shortDesc }),
      el(
        'div',
        { class: 'tag-row' },
        entry.tags.map((t) => el('span', { class: 'tag', text: t }))
      ),
      el('button', { class: 'details-btn', text: 'View details' }),
    ]);

    content.querySelector('.details-btn').addEventListener('click', () => openModal(entry));

    item.appendChild(rail);
    item.appendChild(content);
    container.appendChild(item);
  });
}

function renderAchievements() {
  const list = document.getElementById('achievement-list');
  achievements.forEach((a) => {
    list.appendChild(
      el('div', { class: 'achievement' }, [
        el('span', { class: 'achievement-icon', text: a.icon }),
        el('div', {}, [
          el('div', { class: 'achievement-title', text: a.title }),
          el('div', { class: 'achievement-org', text: a.org }),
        ]),
      ])
    );
  });
}

function renderPublications() {
  const list = document.getElementById('publication-list');
  publications.forEach((p) => {
    list.appendChild(
      el('li', {}, [
        el('a', { text: p.title, attrs: { href: p.url, target: '_blank', rel: 'noopener' } }),
        el('div', { class: 'pub-meta', text: `${p.venue}, ${p.year}` }),
      ])
    );
  });
}

function openModal(entry) {
  const modalContent = document.getElementById('modal-content');
  modalContent.innerHTML = '';

  modalContent.appendChild(el('div', { class: 'modal-period', text: entry.period }));
  modalContent.appendChild(el('h2', { text: entry.title }));
  modalContent.appendChild(el('p', { class: 'org', text: entry.org }));

  const body = el('div', { class: 'modal-body' });
  entry.fullDesc.forEach((p) => body.appendChild(el('p', { text: p })));
  modalContent.appendChild(body);

  modalContent.appendChild(
    el(
      'div',
      { class: 'tag-row' },
      entry.tags.map((t) => el('span', { class: 'tag', text: t }))
    )
  );

  if (entry.links && entry.links.length) {
    const linkRow = el('div', { class: 'modal-links' });
    entry.links.forEach((l) => {
      linkRow.appendChild(
        el('a', { class: 'link-btn', text: l.label, attrs: { href: l.url, target: '_blank', rel: 'noopener' } })
      );
    });
    modalContent.appendChild(linkRow);
  }

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', (ev) => {
  if (ev.target.id === 'modal-overlay') closeModal();
});
document.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape') closeModal();
});

document.getElementById('footer-year').textContent = new Date().getFullYear();

renderProfile();
renderFilters();
renderTimeline();
renderAchievements();
renderPublications();
