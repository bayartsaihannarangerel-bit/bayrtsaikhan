import { supabase } from '../../js/supabase.js'

// Admin биш бол login руу шидэх
export async function requireAuth() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    window.location.href = 'login.html'
  }
  return session
}

export async function logout() {
  await supabase.auth.signOut()
  window.location.href = 'login.html'
}