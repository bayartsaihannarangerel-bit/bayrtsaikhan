import { supabase } from '../../js/supabase.js'

// ─── PROJECTS ───────────────────────────────────────

export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) console.error(error)
  return data || []
}

export async function saveProject(payload, id = null) {
  if (id) {
    const { error } = await supabase
      .from('projects')
      .update(payload)
      .eq('id', id)
    if (error) { console.error(error); return false }
  } else {
    const { error } = await supabase
      .from('projects')
      .insert(payload)
    if (error) { console.error(error); return false }
  }
  return true
}

export async function deleteProject(id) {
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id)
  if (error) { console.error(error); return false }
  return true
}

export async function getProjectById(id) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single()
  if (error) { console.error(error); return null }
  return data
}

// ─── SKILLS ─────────────────────────────────────────

export async function getSkills() {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .order('category')
  if (error) console.error(error)
  return data || []
}

export async function saveSkill(payload, id = null) {
  if (id) {
    const { error } = await supabase
      .from('skills')
      .update(payload)
      .eq('id', id)
    if (error) { console.error(error); return false }
  } else {
    const { error } = await supabase
      .from('skills')
      .insert(payload)
    if (error) { console.error(error); return false }
  }
  return true
}

export async function deleteSkill(id) {
  const { error } = await supabase
    .from('skills')
    .delete()
    .eq('id', id)
  if (error) { console.error(error); return false }
  return true
}

export async function getSkillById(id) {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .eq('id', id)
    .single()
  if (error) { console.error(error); return null }
  return data
}

// ─── CONTACTS ───────────────────────────────────────

export async function getContacts() {
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) console.error(error)
  return data || []
}

export async function markAsRead(id) {
  const { error } = await supabase
    .from('contacts')
    .update({ is_read: true })
    .eq('id', id)
  if (error) { console.error(error); return false }
  return true
}

export async function deleteContact(id) {
  const { error } = await supabase
    .from('contacts')
    .delete()
    .eq('id', id)
  if (error) { console.error(error); return false }
  return true
}

// ─── STATS ──────────────────────────────────────────

export async function getStats() {
  const [
    { count: projects },
    { count: skills },
    { count: contacts }
  ] = await Promise.all([
    supabase.from('projects').select('*', { count: 'exact', head: true }),
    supabase.from('skills').select('*', { count: 'exact', head: true }),
    supabase.from('contacts').select('*', { count: 'exact', head: true })
  ])

  return { projects: projects ?? 0, skills: skills ?? 0, contacts: contacts ?? 0 }
}