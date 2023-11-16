let soundWave;
const useThinLoadingBars = true;


function generateSoundWave(options = { adjusted: true }) {
    const { adjusted } = options;
    const barWidth = 3;
    const numberOfBars = 80;
    const maxSVGWidth = (numberOfBars * (barWidth * (1 + 1 / barWidth)));
    const maxSVGHeight = 40;
  
    const absoluteMin = Math.round(maxSVGHeight * 10 / 100);
    const absoluteMax = Math.round(maxSVGHeight * 90 / 100);
    const variance = Math.round(maxSVGHeight * 45 / 100);
  
    let n = 0;
    let previousMin = absoluteMin;
    let previousMax = absoluteMax;
    let previousHeight = absoluteMin;
  
    soundWave.setAttribute('viewBox', `0 0 ${maxSVGWidth} ${maxSVGHeight}`);
    soundWave.setAttribute('style', `width: ${maxSVGWidth}px;`);
  
    const loadingClipPath = document.querySelector('.clip-path--loading rect');
    loadingClipPath.setAttribute('style', `animation-timing-function: steps(${numberOfBars}, end);`);
  
    const loadingLayer = document.querySelector('.layer--loading');
    const playingLayer = document.querySelector('.layer--playing');
  
    while (n < numberOfBars) {
      // console.log(`Previous min: ${previousMin}`);
      let min = absoluteMin;
      let max = absoluteMax;
      if (adjusted) {
        let adjustedMin = min;
        let adjustedMax = max;
  
        if (previousHeight <= (maxSVGHeight / 2)) {
          adjustedMin = Math.ceil(previousMin - variance);
          adjustedMax = Math.floor(previousMin + variance);
        } else {
          adjustedMin = Math.ceil(previousMax - variance);
          adjustedMax = Math.floor(previousMax + variance);
        }
  
        if (adjustedMin > adjustedMax) {
          min = adjustedMax;
          max = adjustedMin;
        } else {
          min = adjustedMin;
          max = adjustedMax;
        }
  
        max = (max > absoluteMax || max < absoluteMin) ? absoluteMax : max;
        min = (min < absoluteMin || min > absoluteMax) ? absoluteMin : min;
      }
  
      let randomHeight = Math.floor(Math.random() * (max - min + 1)) + min;
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  
      // Make sure we use even numbers in relation to the max bar height
      randomHeight = (maxSVGHeight - randomHeight) % 2 === 0 ? randomHeight : randomHeight += 1;
  
      rect.setAttribute('width', barWidth);
      rect.setAttribute('height', randomHeight);
      rect.setAttribute('x', n * (barWidth * (1 + 1 / barWidth)));
      rect.setAttribute('y', Math.round((maxSVGHeight - randomHeight) / 2));
  
      // We have to clone the rects in order to have them present in
      // two different layers.
      // We clone them before we make any potential changes to the width
      // and position of thin rects.
      const clonedRect = rect.cloneNode();
      playingLayer.appendChild(clonedRect);
  
      if (useThinLoadingBars) {
        const thinWidth = Math.floor(barWidth / 2);
        // loadingLayer.classList.add('layer--thin-bars');
        rect.setAttribute('width', thinWidth);
        rect.setAttribute('x', parseInt(rect.getAttribute('x'), 10) + thinWidth);
      }
      loadingLayer.appendChild(rect);
  
      previousMin = min;
      previousMax = max;
      previousHeight = randomHeight;
      n += 1;
    }
  }

function initialise() {
  soundWave = document.querySelector('.sound-wave');
  // window.setInterval(() => {
  //   generateSoundWave();
  // }, 350);
  generateSoundWave();
}
// `DOMContentLoaded` may fire before your script has a chance to run, so check before adding a listener
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialise);
} else {
  // `DOMContentLoaded` already fired
  initialise();
}

document.querySelector('.audio2').onclick=function(){
    let loadTime=new Date(performance.timing.connectStart).getTime();
    let delay=Math.ceil((Date.now()-loadTime)/1000);
    document.querySelector('.clip-path--playing rect').setAttribute('style',`animation-delay:${delay}s`)
    console.log(delay);
    
}