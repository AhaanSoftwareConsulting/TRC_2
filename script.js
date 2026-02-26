function showPlan(plan) {
  document.getElementById("monthly-plan").style.display = plan === 'monthly' ? 'block' : 'none';
  document.getElementById("yearly-plan").style.display = plan === 'yearly' ? 'block' : 'none';

  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  if (plan === 'monthly') {
    buttons[0].classList.add('active');
  } else {
    buttons[1].classList.add('active');
  }
}