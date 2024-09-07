// Define type for HTML elements
const toggleSkillsBtn: HTMLButtonElement | null = document.getElementById("toggle-skills-btn") as HTMLButtonElement;
const skillsSection: HTMLElement | null = document.getElementById("skills-section");
const toggleExperienceBtn: HTMLButtonElement | null = document.getElementById("toggle-experience-btn") as HTMLButtonElement;
const experienceSection: HTMLElement | null = document.getElementById("experience-section");

// Initialize state
let isShowingSkills = true;
let isShowingExperience = true;

// Set initial button text based on state
if (toggleSkillsBtn) {
    toggleSkillsBtn.innerText = isShowingSkills ? 'Hide Skills' : 'Show Skills';
}

if (toggleExperienceBtn) {
    toggleExperienceBtn.innerText = isShowingExperience ? 'Hide Experience' : 'Show Experience';
}

// Toggle skills section visibility
toggleSkillsBtn?.addEventListener("click", function () {
    if (skillsSection) {
        if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
            skillsSection.style.display = "block";
            isShowingSkills = true;
        } else {
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
toggleExperienceBtn?.addEventListener("click", function () {
    if (experienceSection) {
        if (experienceSection.style.display === "none" || experienceSection.style.display === "") {
            experienceSection.style.display = "block";
            isShowingExperience = true;
        } else {
            experienceSection.style.display = "none";
            isShowingExperience = false;
        }
        // Update button text after toggling
        if (toggleExperienceBtn) {
            toggleExperienceBtn.innerText = isShowingExperience ? 'Hide Experience' : 'Show Experience';
        }
    }
});
