let $infoPersonal = document.getElementById("personal-info"),
  $experience = document.getElementById("experience-prof"),
  $skills = document.getElementById("skills1"),
  $btnPersonalInfo = document.getElementById("btn-infoPers");
$btnExperienceProf = document.getElementById("btn-expProf");
$btnSkill = document.getElementById("btn-skills");

document.addEventListener("click", (e) => {
  if (e.target.matches("#btn-infoPers")) {
    $btnPersonalInfo.classList.add("btn-position");
    $btnExperienceProf.classList.remove("btn-position");
    $btnSkill.classList.remove("btn-position");
    $infoPersonal.classList.remove("none");
    $experience.classList.add("none");
    $skills.classList.add("none");
  }
  if (e.target.matches("#btn-expProf")) {
    $btnPersonalInfo.classList.remove("btn-position");
    $btnExperienceProf.classList.add("btn-position");
    $btnSkill.classList.remove("btn-position");
    $infoPersonal.classList.add("none");
    $experience.classList.remove("none");
    $skills.classList.add("none");
  }
  if (e.target.matches("#btn-skills")) {
    $btnPersonalInfo.classList.remove("btn-position");
    $btnExperienceProf.classList.remove("btn-position");
    $btnSkill.classList.add("btn-position");
    $infoPersonal.classList.add("none");
    $experience.classList.add("none");
    $skills.classList.remove("none");
  }
});
