var skillsSection = document.getElementById('skills');
var toggleSkillsBtn = document.getElementById('toggle-skills');
var editPersonalInfoBtn = document.getElementById('edit-personal-info');
var editEducationBtn = document.getElementById('edit-education');
toggleSkillsBtn === null || toggleSkillsBtn === void 0 ? void 0 : toggleSkillsBtn.addEventListener('click', function () {
    if (skillsSection && skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else if (skillsSection) {
        skillsSection.style.display = 'none';
    }
});
editPersonalInfoBtn === null || editPersonalInfoBtn === void 0 ? void 0 : editPersonalInfoBtn.addEventListener('click', function () {
    var name = prompt("Enter your name", "John Doe");
    var contact = prompt("Enter your contact", "johndoe@example.com");
    var nameElement = document.getElementById('name');
    var contactElement = document.getElementById('contact');
    if (name && nameElement) {
        nameElement.textContent = name;
    }
    if (contact && contactElement) {
        contactElement.textContent = contact;
    }
});
editEducationBtn === null || editEducationBtn === void 0 ? void 0 : editEducationBtn.addEventListener('click', function () {
    var degree = prompt("Enter your degree", "Bachelor of Science in Computer Science");
    var degreeElement = document.getElementById('degree');
    if (degree && degreeElement) {
        degreeElement.textContent = degree;
    }
});
