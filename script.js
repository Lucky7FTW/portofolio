// Funcție pentru a încărca proiectele din JSON și a le afișa în pagină
fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        const projectsContainer = document.getElementById('projects-container');
        
        data.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <img src="${project.image}" alt="Screenshot ${project.title}">
                <p>${project.description}</p>
                <p><strong>Tehnologii folosite:</strong> ${project.technologies}</p>
                <a href="${project.link}" target="_blank">Vezi Proiectul</a>
            `;
            
            projectsContainer.appendChild(projectCard);
        });
    })
    .catch(error => {
        console.error('Eroare la încărcarea proiectelor:', error);
    });
