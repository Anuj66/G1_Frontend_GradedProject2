let currentResume;
let appliedFor = document.getElementById("applied-for");
let technicalSkillsUl = document.getElementById("technical-skills-ul");
let hobbiesUl = document.getElementById("hobbies-ul");
let workExperienceDiv = document.getElementById("work-experience-div");

window.onload = () => {
  currentResume = data.resume[0];
  updateResumeHtml(currentResume);
};

function updateResumeHtml(currentResume) {
  appliedFor.innerHTML = currentResume.basics.name;
  updateTechnicalSkills(currentResume.skills.keywords);
  updateHobbies(currentResume.interests.hobbies);
}

function updateTechnicalSkills(keywords) {
  let str = "";
  for (const skill of keywords) {
    str += `<li class='technical-skills-li'>${skill}</li>`;
  }
  technicalSkillsUl.innerHTML = str;
}

function updateHobbies(keywords) {
  let str = "";
  for (const hobby of keywords) {
    str += `<li class='hobbies-li'>${hobby}</li>`;
  }
  hobbiesUl.innerHTML = str;
}
