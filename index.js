document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.football-data.org/v2/competitions/PL/matches', {
        headers: { 'X-Auth-Token': '0b9b6dc344a94f93a57e53756de1e29f' }
    })
    .then(response => response.json())
    .then(data => {
        const schedule = document.getElementById('schedule');
        data.matches.forEach(match => {
            const matchDiv = document.createElement('div');
            matchDiv.classList.add('match');
            matchDiv.innerHTML = `
                <strong>${match.homeTeam.name}</strong> vs <strong>${match.awayTeam.name}</strong><br>
                Date: ${new Date(match.utcDate).toLocaleString()}
            `;
            schedule.appendChild(matchDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching the football schedule:', error);
    });
});
