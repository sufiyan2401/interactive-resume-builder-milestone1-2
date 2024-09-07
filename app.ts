const skillsSection = document.getElementById('skills') as HTMLElement | null;
const toggleSkillsBtn = document.getElementById('toggle-skills') as HTMLButtonElement | null;
const editPersonalInfoBtn = document.getElementById('edit-personal-info') as HTMLButtonElement | null;
const editEducationBtn = document.getElementById('edit-education') as HTMLButtonElement | null;

toggleSkillsBtn?.addEventListener('click', () => {
    if (skillsSection && skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else if (skillsSection) {
        skillsSection.style.display = 'none';
    }
});

editPersonalInfoBtn?.addEventListener('click', () => {
    const name = prompt("Enter your name", "John Doe");
    const contact = prompt("Enter your contact", "johndoe@example.com");

    const nameElement = document.getElementById('name') as HTMLElement | null;
    const contactElement = document.getElementById('contact') as HTMLElement | null;

    if (name && nameElement) {
        nameElement.textContent = name;
    }

    if (contact && contactElement) {
        contactElement.textContent = contact;
    }
});

editEducationBtn?.addEventListener('click', () => {
    const degree = prompt("Enter your degree", "Bachelor of Science in Computer Science");
    const degreeElement = document.getElementById('degree') as HTMLElement | null;

    if (degree && degreeElement) {
        degreeElement.textContent = degree;
    }
});
