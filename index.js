document.addEventListener('DOMContentLoaded', function() {
    const schedule = document.getElementById('schedule');

    fetch('https://api.football-data.org/v2/competitions/PL/matches', {
        headers: { 'X-Auth-Token': 'YOUR_API_KEY' }
    })
    .then(response => response.json())
    .then(data => {
        const matches = data.matches;
        matches.forEach(match => {
            const matchElement = document.createElement('div');
            matchElement.className = 'match';
            matchElement.innerHTML = `
                <h3>${match.homeTeam.name} vs ${match.awayTeam.name}</h3>
                <p>${new Date(match.utcDate).toLocaleString()}</p>
            `;
            schedule.appendChild(matchElement);
        });
    })
    .catch(error => {
        console.error('Error fetching the football matches:', error);
        schedule.innerHTML = '<p>An error occurred while fetching the schedule.</p>';
    });
});
