let currentResume;
let appliedFor = document.getElementById("applied-for");
let technicalSkillsUl = document.getElementById("technical-skills-ul");
let hobbiesUl = document.getElementById("hobbies-ul");
let workExperienceDiv = document.getElementById("work-experience-div");
let resumeName = document.getElementById("resume-name");
let phoneNo = document.getElementById("phone-no");
let email = document.getElementById("email");
let linkedin = document.getElementById("linkedin-href");
let companyName = document.getElementById("company-name-p");
let companyPosition = document.getElementById("position-p");
let companyStartDate = document.getElementById("start-date-p");
let companyEndDate = document.getElementById("end-date-p");
let companySummary = document.getElementById("summary-p");

window.onload = () => {
  currentResume = data.resume[0];
  updateResumeHtml(currentResume);
};

function updateResumeHtml(currentResume) {
  appliedFor.innerHTML = currentResume.basics.AppliedFor;
  resumeName.innerHTML = currentResume.basics.name;
  phoneNo.innerHTML = currentResume.basics.phone;
  email.innerHTML = currentResume.basics.email;
  linkedin.innerHTML = currentResume.basics.profiles.url;
  companyName.innerHTML += " " + currentResume.work["Company Name"];
  companyPosition.innerHTML += " " + currentResume.work.Position;
  companyStartDate.innerHTML += " " + currentResume.work["Start Date"];
  companyEndDate.innerHTML += " " + currentResume.work["End Date"];
  companySummary.innerHTML += " " + currentResume.work.Summary;
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
