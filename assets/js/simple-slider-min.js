class MySlider
{constructor($el,imgSrc){if(imgSrc.length===0){$el.append("Aucune diapo trouvée ! ajoutez des slides au carousel");return!1}
this.el=$el;this.imgScrc=imgSrc;this.numero=0;this.duree=1000;this.nombreSlides=imgSrc.length-1;this.timers=[];this.timeStamp=Date.now();this.fixSliderDimensions();this.populateSlider();this.setupArrows();this.configureMouseAction();this.play()}
fixSliderDimensions(){let w=this.el.width();let h=w*720/1400;this.el.height(h)}
populateSlider(){this.el.addClass('slider');this.imgScrc.forEach((src,idx)=>{this.el.append(`<img src="${src}" alt="slide" id="slide-${this.timeStamp}-${idx}" class="slide-c" style="${idx !== 0 ? "display: none" : ""}">`)})}
setupArrows(){this.el.append(`<div id="precedent-${this.timeStamp}" class="prev"><</div><div id="suivant-${this.timeStamp}" class="next">></div>`);this.nextBtn=$("#suivant-"+this.timeStamp);this.prevBtn=$("#precedent-"+this.timeStamp);let taille=this.el.width()*75/1400;if(taille<40){taille=40}
this.nextBtn.css('font-size',taille+'px');this.prevBtn.css('font-size',taille+'px');this.el.on("mouseenter",(e)=>{this.nextBtn.addClass('slider-hover');this.prevBtn.addClass('slider-hover')});this.el.on("mouseleave",(e)=>{this.nextBtn.removeClass('slider-hover');this.prevBtn.removeClass('slider-hover')});this.nextBtn.on('click',(e)=>{$("#slide-"+this.timeStamp+"-"+this.numero).fadeOut(this.duree);this.numero+=1;if(this.numero>this.nombreSlides){this.numero=0}
$("#slide-"+this.timeStamp+"-"+this.numero).fadeIn(this.duree)});this.prevBtn.on('click',(e)=>{$("#slide-"+this.timeStamp+"-"+this.numero).fadeOut(this.duree);this.numero-=1;if(this.numero<0){this.numero=this.nombreSlides}
$("#slide-"+this.timeStamp+"-"+this.numero).fadeIn(this.duree)})}
configureMouseAction(){this.el.on('mouseenter',(e)=>{this.stop()});this.el.on('mouseleave',(e)=>{this.play()})}
play(){this.stop();this.timers[0]=window.setInterval(()=>{this.nextBtn.trigger('click')},2000)}
stop(){if(this.timers[0]){window.clearInterval(this.timers[0])}}}

