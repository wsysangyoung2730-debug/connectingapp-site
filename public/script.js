"use strict";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const envelope = document.querySelector(".envelope-button");
envelope.hidden = false;
envelope.addEventListener("click", () => {
  if (reducedMotion.matches || envelope.classList.contains("is-flipping")) return;
  envelope.classList.add("is-flipping");
});
envelope.querySelector(".seal").addEventListener("animationend", () => {
  envelope.classList.remove("is-flipping");
});
reducedMotion.addEventListener("change", () => envelope.classList.remove("is-flipping"));

const printButton = document.querySelector(".print-button");
printButton.hidden = false;
printButton.addEventListener("click", () => window.print());

const copyButton = document.querySelector(".copy-button");
const copyStatus = document.querySelector(".copy-status");
if (window.isSecureContext && navigator.clipboard) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("sangyoung2730@naver.com");
      copyStatus.textContent = "이메일 주소를 복사했어요.";
    } catch {
      copyStatus.textContent = "복사하지 못했어요. 위 이메일 주소를 선택해 복사해 주세요.";
    }
  });
}

const tocDetails = document.querySelector(".toc details");
const narrowScreen = window.matchMedia("(max-width: 760px)");
function setTocLayout() { tocDetails.open = !narrowScreen.matches; }
setTocLayout();
narrowScreen.addEventListener("change", setTocLayout);

const tocLinks = [...document.querySelectorAll(".toc nav a")];
const sections = tocLinks.map(link => document.querySelector(link.getAttribute("href")));
tocLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (narrowScreen.matches) tocDetails.open = false;
  });
});

// The document remains completely readable when JavaScript is unavailable.
// Recompute from positions, since multiple sections can intersect at once.
let scrollPending = false;
function updateCurrentSection() {
  let current = sections.reduce((selected, section) =>
    section.getBoundingClientRect().top <= 170 ? section : selected, sections[0]);
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
    current = sections[sections.length - 1];
  }
  tocLinks.forEach(link => {
    if (link.getAttribute("href") === `#${current.id}`) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  scrollPending = false;
}
window.addEventListener("scroll", () => {
  if (!scrollPending) {
    scrollPending = true;
    window.requestAnimationFrame(updateCurrentSection);
  }
}, { passive: true });
window.addEventListener("resize", updateCurrentSection);
updateCurrentSection();
