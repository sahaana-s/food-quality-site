// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile drawer
const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");

menuBtn.addEventListener("click", () => {
  const isOpen = drawer.style.display === "block";
  drawer.style.display = isOpen ? "none" : "block";
  drawer.setAttribute("aria-hidden", isOpen ? "true" : "false");
});

drawer.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    drawer.style.display = "none";
    drawer.setAttribute("aria-hidden", "true");
  });
});

// Simple tooltips for ingredient hover
const tooltip = document.getElementById("tooltip");

function showTip(text, x, y){
  tooltip.textContent = text;
  tooltip.style.left = `${x + 12}px`;
  tooltip.style.top = `${y + 12}px`;
  tooltip.style.opacity = "1";
  tooltip.style.transform = "translateY(0)";
}

function hideTip(){
  tooltip.style.opacity = "0";
  tooltip.style.transform = "translateY(6px)";
}

document.querySelectorAll(".tip").forEach(el => {
  el.addEventListener("mousemove", (e) => {
    const text = el.getAttribute("data-tip") || "";
    showTip(text, e.clientX, e.clientY);
  });
  el.addEventListener("mouseleave", hideTip);
});
