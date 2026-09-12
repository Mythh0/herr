const intro = document.getElementById("intro");
document.getElementById("begin").onclick = () => {
  intro.classList.add("hide");
  setTimeout(() => document.getElementById("letter").scrollIntoView({behavior:"smooth"}), 500);
  burst(18);
};
document.getElementById("start").onclick = () => {
  document.getElementById("letter").scrollIntoView({behavior:"smooth"});
  burst(14);
};
document.getElementById("secret").onclick = () => {
  const box = document.getElementById("secretBox");
  box.classList.toggle("show");
  burst(30);
  document.getElementById("secret").textContent = box.classList.contains("show") ? "You found my heart ♥" : "There's one more thing… 💌";
};
const observer = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("visible")), {threshold:.12});
document.querySelectorAll(".reveal").forEach(x => observer.observe(x));

const layer = document.querySelector(".sparkles");
function sparkle(){
  const s=document.createElement("span");
  s.className="sparkle";
  s.textContent=Math.random()>.5?"♥":"✦";
  s.style.left=Math.random()*100+"vw";
  s.style.fontSize=(10+Math.random()*14)+"px";
  s.style.animationDuration=(5+Math.random()*6)+"s";
  layer.appendChild(s);
  setTimeout(()=>s.remove(),12000);
}
setInterval(sparkle,1200);
function burst(n){for(let i=0;i<n;i++)setTimeout(sparkle,i*35)}
