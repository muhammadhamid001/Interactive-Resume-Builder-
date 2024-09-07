// Selecting the button and the section you want to toggle
const toggleSkillsButton = document.getElementById('toggle-skills');
const skillsSection = document.getElementById('skills');

// Adding an event listener to the button for the toggle functionality
if (toggleSkillsButton && skillsSection) {
  toggleSkillsButton.addEventListener('click', () => {
    // Toggling between showing and hiding the section
    skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
  });
}
const form = document.getElementById('resume-form');
const resumeName = document.getElementById('resume-name');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    if (nameInput && resumeName) {
      const name = (nameInput as HTMLInputElement).value;
      resumeName.textContent = name;
    }
  });
}
const editableElements = document.querySelectorAll('[contenteditable="true"]');

editableElements.forEach((element) => {
  element.addEventListener('input', () => {
    console.log(`${(element as HTMLElement).id} updated to ${(element as HTMLElement).textContent}`);
  });
});

const usernameElement = document.getElementById('username') as HTMLInputElement | null;
const shareLinkElement = document.getElementById('share-link');

if (usernameElement && shareLinkElement) {
  const username = usernameElement.value;
  const uniqueURL = `https://${username}.vercel.app/resume`;
  shareLinkElement.textContent = uniqueURL;
} else {
  console.error('Required elements are missing');
}
const downloadButton = document.getElementById('download-pdf');

if (downloadButton) {
  downloadButton.addEventListener('click', () => {
    window.print();
  });
} else {
  console.error('Download button not found');
}


