<!-- FILE: script.js -->
// Shared JS (basic members gate – light obfuscation, not for sensitive content)
function gate(promptText, expected){
const pwd = prompt(promptText||'Enter the members password:');
if(pwd===expected){
localStorage.setItem('fj_member','yes');
return true;
} else { alert('Incorrect password.'); return false; }
}
