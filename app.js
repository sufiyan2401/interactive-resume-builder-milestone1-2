// Define type for HTML elements
var toggleSkillsBtn = document.getElementById("toggle-skills-btn");
var skillsSection = document.getElementById("skills-section");
var toggleExperienceBtn = document.getElementById("toggle-experience-btn");
var experienceSection = document.getElementById("experience-section");
// Initialize state
var isShowingSkills = true;
var isShowingExperience = true;
// Set initial button text based on state
if (toggleSkillsBtn) {
    toggleSkillsBtn.innerText = isShowingSkills ? 'Hide Skills' : 'Show Skills';
}
if (toggleExperienceBtn) {
    toggleExperienceBtn.innerText = isShowingExperience ? 'Hide Experience' : 'Show Experience';
}
// Toggle skills section visibility
toggleSkillsBtn === null || toggleSkillsBtn === void 0 ? void 0 : toggleSkillsBtn.addEventListener("click", function () {
    if (skillsSection) {
        if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
            skillsSection.style.display = "block";
            isShowingSkills = true;
        }
        else {
            skillsSection.style.display = "none";
            isShowingSkills = false;
        }
        // Update button text after toggling
        if (toggleSkillsBtn) {
            toggleSkillsBtn.innerText = isShowingSkills ? 'Hide Skills' : 'Show Skills';
        }
    }
});
// Toggle experience section visibility
toggleExperienceBtn === null || toggleExperienceBtn === void 0 ? void 0 : toggleExperienceBtn.addEventListener("click", function () {
    if (experienceSection) {
        if (experienceSection.style.display === "none" || experienceSection.style.display === "") {
            experienceSection.style.display = "block";
            isShowingExperience = true;
        }
        else {
            experienceSection.style.display = "none";
            isShowingExperience = false;
        }
        // Update button text after toggling
        if (toggleExperienceBtn) {
            toggleExperienceBtn.innerText = isShowingExperience ? 'Hide Experience' : 'Show Experience';
        }
    }
});
