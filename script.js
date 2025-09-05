// 背景簡易粒子：低成本 Canvas 粒子系統
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
let w, h, particles=[];

function resize(){
  w = canvas.width = innerWidth;
  h = canvas.height = innerHeight;
}
addEventListener('resize', resize); resize();

function initParticles(count=90){
  particles = Array.from({length:count}, () => ({
    x: Math.random()*w,
    y: Math.random()*h,
    vx: (Math.random()-0.5)*0.3,
    vy: (Math.random()-0.5)*0.3,
    r: Math.random()*1.8+0.2,
    a: Math.random()*0.4+0.2
  }));
}
initParticles(innerWidth<700? 55 : 110);

function tick(){
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = 'rgba(102,255,204,0.08)';
  for(const p of particles){
    p.x += p.vx; p.y += p.vy;
    if(p.x<0||p.x>w) p.vx*=-1;
    if(p.y<0||p.y>h) p.vy*=-1;
    ctx.globalAlpha = p.a;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fill();
  }
  // 連線
  ctx.globalAlpha = 0.06;
  ctx.strokeStyle = 'rgba(102,255,204,1)';
  for(let i=0;i<particles.length;i++){
    for(let j=i+1;j<particles.length;j++){
      const a = particles[i], b = particles[j];
      const dx=a.x-b.x, dy=a.y-b.y, d=dx*dx+dy*dy;
      if(d < 120*120){
        ctx.lineWidth = 1 * (1 - d/(120*120));
        ctx.beginPath();
        ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(tick);
}
tick();

// 滑鼠視差
document.addEventListener('pointermove', e => {
  const pctX = (e.clientX / innerWidth) - 0.5;
  const pctY = (e.clientY / innerHeight) - 0.5;
  document.querySelector('.hero')?.style.setProperty('transform', `translate(${pctX*6}px, ${pctY*4}px)`);
});

// 鍵盤彩蛋
document.addEventListener('keydown', e => {
  if(e.key.toLowerCase()==='r'){
    initParticles();
    alert('頻道重置：粒子狀態已重啟。');
  }
});
