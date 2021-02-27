// Main Content Blur ON
function blurON() {
  document.getElementById("bg-blur").style.filter = "blur(5px)";
  document.getElementById("mainContent").style.pointerEvents = "none";
}
// Main Content Blur OFF
function blurOFF() {
  document.getElementById("bg-blur").style.filter = "blur(0px)";
  document.getElementById("mainContent").style.pointerEvents = "auto";
}
// Open Main Info Container
function openAbout() {
  document.getElementById("openAbout").style.opacity = "0";
  document.getElementById("openAbout").style.pointerEvents = "none";
  document.getElementById("closeAbout").style.opacity = "1";
  document.getElementById("closeAbout").style.pointerEvents = "auto";
  document.getElementById("mainInfo").style.opacity = "1";
  document.getElementById("mainInfo").style.pointerEvents = "auto";
  document.getElementById("openEye").style.color = "#736a7b"; // $Purple

  return blurON()
}
// Close Main Info Container
function closeAbout() {
  document.getElementById("openAbout").style.opacity = "1";
  document.getElementById("openAbout").style.pointerEvents = "auto";
  document.getElementById("closeAbout").style.opacity = "0";
  document.getElementById("closeAbout").style.pointerEvents = "none";
  document.getElementById("mainInfo").style.opacity = "0";
  document.getElementById("mainInfo").style.pointerEvents = "none";
  document.getElementById("openEye").style.color = "#FFFFFF"; // $White

  return blurOFF()
}
// Open Thalweg Nav Section
function openEye() {
  document.getElementById("openEye").style.opacity = "0";
  document.getElementById("openEye").style.pointerEvents = "none";
  document.getElementById("closeEye").style.opacity = "1";
  document.getElementById("closeEye").style.pointerEvents = "auto";
  document.getElementById("aboutSection").style.opacity = "1";
  document.getElementById("aboutSection").style.pointerEvents = "auto";

  document.getElementById("openAbout").style.opacity = "0";
  document.getElementById("openAbout").style.pointerEvents = "none";
  document.getElementById("closeAbout").style.opacity = "0";
  document.getElementById("closeAbout").style.pointerEvents = "none";
  document.getElementById("mainInfo").style.opacity = "0";
  document.getElementById("mainInfo").style.pointerEvents = "none";

  return blurON()
}
// Close Thalweg Nav Section
function closeEye() {
  document.getElementById("openEye").style.opacity = "1";
  document.getElementById("openEye").style.pointerEvents = "auto";
  document.getElementById("closeEye").style.opacity = "0";
  document.getElementById("closeEye").style.pointerEvents = "none";
  document.getElementById("aboutSection").style.opacity = "0";
  document.getElementById("aboutSection").style.pointerEvents = "none";

  return closeAbout()
}
// artists Section
function openArtists() {
  document.getElementById("artistsSection").style.opacity = "1";
  document.getElementById("artistsSection").style.pointerEvents = "auto";
}

function closeArtists() {
  document.getElementById("artistsSection").style.opacity = "0";
  document.getElementById("artistsSection").style.pointerEvents = "none";
}
