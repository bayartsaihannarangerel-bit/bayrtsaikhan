import { supabase } from './supabase.js'

export async function loadProjects(limit = null) {
  let query = supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (limit) query = query.limit(limit)

  const { data, error } = await query

  if (error) {
    console.error('Projects ачаалахад алдаа гарлаа:', error)
    return []
  }

  return data
}

export function renderProjectCard(p) {
  return `
    <div class="card">
      ${p.image_url ? `<img src="${p.image_url}" alt="${p.title}">` : ''}
      <h3>${p.title}</h3>
      <p>${p.description || ''}</p>
      <div class="tags">
        ${(p.tags || []).map(t => `<span>${t}</span>`).join('')}
      </div>
      <div class="links">
        ${p.github_url ? `<a href="${p.github_url}" target="_blank">GitHub</a>` : ''}
        ${p.live_url ? `<a href="${p.live_url}" target="_blank">Live</a>` : ''}
      </div>
    </div>
  `
}

export async function loadSkills() {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .order('category')

  if (error) {
    console.error('Skills ачаалахад алдаа гарлаа:', error)
    return []
  }

  return data
}

export function renderSkillCard(s) {
  return `
    <div class="skill-card">
      <div class="skill-header">
        <span>${s.icon || ''} ${s.name}</span>
        <span>${s.level || 0}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width:${s.level || 0}%"></div>
      </div>
    </div>
  `
}