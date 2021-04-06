'use strick';
const tabs = document.querySelectorAll('.tab-team'),
	teams = document.querySelectorAll('.team-composition__main-composition'),
	container = document.querySelector('.team-composition__tabs');

tabs.forEach((tab, i) => {
	tab.addEventListener('click', () => {});
});

function hideTeam() {
	teams.forEach(team => {
		team.style.display = 'none';
	});
	tabs.forEach(tab => {
		tab.classList.remove('tab-team--active');
	});
}

function showTeam(i = 0) {
	tabs[i].classList.add('tab-team--active');
	teams[i].style.display = 'block';
}

container.addEventListener('click', event => {
	const target = event.target;

	if (target && target.classList.contains('tab-team')) {
		tabs.forEach((item, i) => {
			if (target == item) {
				hideTeam();
				showTeam(i);
			}
		});
	}
});

hideTeam();
showTeam();
