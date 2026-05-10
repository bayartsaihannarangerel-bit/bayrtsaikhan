import { supabase } from './supabase.js'

document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const msg = document.getElementById('form-msg')
  msg.textContent = 'Илгээж байна...'

  const { error } = await supabase.from('contacts').insert({
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  })

  if (error) {
    msg.textContent = 'Алдаа гарлаа. Дахин оролдоно уу.'
  } else {
    msg.textContent = '✅ Амжилттай илгээлээ!'
    e.target.reset()
  }
})