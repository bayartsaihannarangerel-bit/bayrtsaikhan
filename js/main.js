import { supabase } from './supabase.js'

async function loadProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(3)

  if (error) { console.error(error); return; }

  const grid = document.getElementById('projects-grid')
  grid.innerHTML = data.map(p => `
    <div class="card">
      ${p.image_url ? `<img src="${p.image_url}" alt="${p.title}">` : ''}
      <h3>${p.title}</h3>
      <p>${p.description || ''}</p>
      <div class="tags">${(p.tags || []).map(t => `<span>${t}</span>`).join('')}</div>
      <div class="links">
        ${p.github_url ? `<a href="${p.github_url}" target="_blank">GitHub</a>` : ''}
        ${p.live_url ? `<a href="${p.live_url}" target="_blank">Live</a>` : ''}
      </div>
    </div>
  `).join('')
}

loadProjects()