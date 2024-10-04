document.addEventListener('DOMContentLoaded', function() {
    const calendarContainer = document.getElementById('calendar');
    const now = new Date();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    function generateCalendar(month, year) {
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        let calendarHTML = `
            <table class="calendar">
                <thead>
                    <tr>
                        <th colspan="7">${monthNames[month]} ${year}</th>
                    </tr>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>
        `;

        let day = 1;
        for (let i = 0; i < 6; i++) { 
            calendarHTML += '<tr>';
            for (let j = 0; j < 7; j++) { 
                if (i === 0 && j < firstDay) {
                    calendarHTML += '<td class="empty"></td>'; 
                } else if (day > daysInMonth) {
                    calendarHTML += '<td class="empty"></td>'; 
                } else {
                    calendarHTML += `<td>${day}</td>`;
                    day++;
                }
            }
            calendarHTML += '</tr>';
        }

        calendarHTML += '</tbody></table>';
        calendarContainer.innerHTML = calendarHTML;
    }

    generateCalendar(now.getMonth(), now.getFullYear());
});
