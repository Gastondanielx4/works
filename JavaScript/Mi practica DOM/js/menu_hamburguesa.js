/* let $hamburger = document.querySelector(".hamburger");
    $menu = document.querySelector("#menuNav")
// On click
$hamburger.addEventListener("click", function(e) {
  // Toggle class "is-active"
  $hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});
 */
export default function hamburgerMenu(panelBtn, panel, menuLink){
  const d= document;

  d.addEventListener("click", e => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
    d.querySelector(panel).classList.toggle("is-active")
    d.querySelector(panelBtn).classList.toggle("is-active")}

    if (e.target.matches(menuLink)){
      d.querySelector(panel).classList.remove("is-active")
      d.querySelector(panelBtn).classList.remove("is-active")
    }
  })
}