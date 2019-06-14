/**
 * Spotlight.js v0.3.0 (CDN)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/spotlight
 */(function(){'use strict';var aa={};function ba(a){for(var b=a.classList,c={},d=0;d<b.length;d++)c[b[d]]=1;a.a=c}function f(a,b){a=ca(a);"string"===typeof b&&(b=[b]);for(var c=0;c<b.length;c++)for(var d=b[c],g=0;g<a.length;g++){var e=a[g];e.a||ba(e);e.a[d]||(e.a[d]=1,e.classList.add(d))}}function h(a,b){a=ca(a);"string"===typeof b&&(b=[b]);for(var c=0;c<b.length;c++)for(var d=b[c],g=0;g<a.length;g++){var e=a[g];e.a||ba(e);e.a[d]&&(e.a[d]=0,e.classList.remove(d))}}
function k(a,b,c,d){a=ca(a);if("string"===typeof b)for(var g=0;g<a.length;g++){var e=a[g],n=e.b;n||(e.b=n={});n[b]!==c&&(n[b]=c,e.style.setProperty(aa[b]||(aa[b]=b.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()),c,d||null))}else for(g=Object.keys(b),e=0;e<g.length;e++){n=g[e];c=b[n];for(var p=0;p<a.length;p++)k(a[p],n,c,d)}}var da=0;function ea(a,b,c){k(a,"transition","none");k(a,b,c);da||(da=a.clientTop&&0);k(a,"transition","")}
function ca(a){if(a.constructor===Array){for(var b=0;b<a.length;b++){var c=a[b];a[b]="string"===typeof c?document.querySelector(c):c}return a}return"string"===typeof a?document.querySelectorAll(a):[a]}function l(a,b){return(b||document).getElementsByClassName(a)};var fa=document.createElement("link");fa.rel="stylesheet";fa.href="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/css/spotlight.css";document.getElementsByTagName("head")[0].appendChild(fa);var m="theme fullscreen autofit zoom-in zoom-out page title description player".split(" "),q,r,ha,ia,t,u,v,w,x,y=!1,ja=!1,z=!1,A=!1,B=!1,C=!1,E,F,G,H,I,J,K,L,M,N,ka,la,ma,na,O,oa,P,Q=null,R=null,S=null,T,pa=!0;
function qa(a,b){if(F=a.length){K||(K=l("pane",M));for(var c=K.length,d=G.title,g=G.description,e=0;e<F;e++){var n=a[e];if(e<c)var p=K[e];else p=K[0].cloneNode(!0),k(p,"left",100*e+"%"),K[0].parentNode.appendChild(p);var D=void 0;p=p.dataset;p.src=n.href||n.src;var Y=n.dataset;"false"!==d&&(p.title=n.title||Y&&Y.title||(D=(n||document).getElementsByTagName("img")).length&&D[0].alt||d||"");"false"!==g&&(p.description=n.description||Y&&Y.description||g||"")}ea(I,"transform","translateX(-"+100*((b||
1)-1)+"%)");ra(b||1);U()}}
function sa(a,b){G={};b&&ta(b);ta(a);a.description&&(G.description=b?b.description:!1);a.title&&(G.title=b?b.title:!1);H=G.infinite;"undefined"!==typeof G.zoom&&(G["zoom-in"]=G["zoom-out"]=G.zoom,delete G.zoom);if("undefined"!==typeof G.control){a=G.control.split(",");for(b=0;b<m.length;b++)G[m[b]]="false";for(b=0;b<a.length;b++){var c=a[b].trim();"zoom"===c?G["zoom-in"]=G["zoom-out"]="true":G[c]="true"}}for(a=0;a<m.length;a++)b=m[a],k(l(b,M)[0],"display","false"===G[b]?"none":"table-cell");"undefined"===
typeof C&&(C=G.theme,"white"===C&&ua())}function ta(a){for(var b=G,c=Object.keys(a),d=0;d<c.length;d++){var g=c[d];b[g]=""+a[g]}}function ra(a){J=K[a-1];L=J.firstElementChild;E=a;return L?!0:(f(M,"loading"),L=new Image,L.onload=function(){h(M,"loading");k(this,{visibility:"visible",opacity:1,transform:""})},L.onerror=function(){J.removeChild(L)},J.appendChild(L),L.src=J.dataset.src,!1)}
V(document,"DOMContentLoaded",function(){M=document.createElement("div");M.id="spotlight";M.innerHTML='<div class=preloader style="background-image:url(https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/preloader.svg)"></div><div class=scene><div class=pane></div></div><table class=header><tr><td class=page><td style="width:90%"><td class=fullscreen><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/maximize.svg"><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/minimize.svg"><td class=autofit><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/autofit.svg"><td class=zoom-out><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/zoom-out.svg"><td class=zoom-in><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/zoom-in.svg"><td class=theme><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/theme.svg"><td class=player><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/play.svg"><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/pause.svg"><td class=close><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/close.svg"></table><div class="arrow arrow-left"><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/arrow.svg"></div><div class="arrow arrow-right"><img src="https://rawcdn.githack.com/nextapps-de/spotlight/master/dist/img/arrow.svg"></div><table class=footer><tr><td class=title><tr><td class=description></table>';document.body.appendChild(M);
I=l("scene",M)[0];N=l("footer",M)[0];ka=l("title",N)[0];la=l("description",N)[0];ma=l("arrow-left",M)[0];na=l("arrow-right",M)[0];O=l("fullscreen",M)[0];oa=l("page",M)[0];P=l("player",M)[0];document.cancelFullScreen||(document.cancelFullScreen=document.exitFullscreen||document.webkitCancelFullScreen||document.webkitExitFullscreen||document.mozCancelFullScreen||function(){});T=document.documentElement||document.body;T.requestFullScreen||(T.requestFullScreen=T.webkitRequestFullScreen||T.msRequestFullScreen||
T.mozRequestFullScreen||k(O,"display","none")||function(){});V(I,"mousedown",va);V(I,"mouseleave",wa);V(I,"mouseup",wa);V(I,"mousemove",xa);V(I,"touchstart",va,{passive:!0});V(I,"touchcancel",wa);V(I,"touchend",wa);V(I,"touchmove",xa,{passive:!0});V(O,"",ya);V(ma,"",za);V(na,"",W);V(P,"",Aa);V(l("autofit",M)[0],"",Ba);V(l("zoom-in",M)[0],"",Ca);V(l("zoom-out",M)[0],"",Da);V(l("close",M)[0],"",Ea);V(l("theme",M)[0],"",ua)});
V(window,"",function(a){var b=Fa.call(a.target,".spotlight");if(b){var c=Fa.call(b,".spotlight-group"),d=l("spotlight",c);sa(b.dataset,c&&c.dataset);for(c=0;c<d.length;c++)if(d[c]===b){qa(d,c+1);break}Ga();return X(a)}});V(window,"keydown",function(a){if(J)switch(a.keyCode){case 8:Ba();break;case 32:"false"!==G.player&&Aa();break;case 37:za();break;case 39:W();break;case 38:case 107:case 187:Ca();break;case 40:case 109:case 189:Da()}});
V(window,"wheel",function(a){J&&(a=a.deltaY,0>.5*(0>a?1:a?-1:0)?Da():Ca())});V(window,"hashchange",function(){J&&!pa&&"#spotlight"===location.hash&&Ea(!0)});function V(a,b,c,d){a.addEventListener(b||"click",c,"undefined"===typeof d?!0:d)}function Aa(a){("boolean"===typeof a?a:!Q)?Q||(Q=setInterval(W,1*G.player||5E3),f(P,"on")):Q&&(Q=clearInterval(Q),h(P,"on"));return Q}function Z(){S?clearTimeout(S):f(M,"menu");var a=G.autohide;S="false"!==a?setTimeout(function(){h(M,"menu");S=null},1*a||2E3):1}
function Ha(a){"boolean"===typeof a&&(S=a?S:0);S?(S=clearTimeout(S),h(M,"menu")):Z();return X(a)}function va(a){y=!0;ja=!1;var b=Ia(a);t=document.body.clientWidth;u=document.body.clientHeight;v=L.width*x;w=L.height*x;z=v<=t;ha=b.x;ia=b.y;return X(a,!0)}function wa(a){if(y&&!ja)return Ha(a);z&&(ea(I,"transform","translateX("+-(100*(E-1)-q/t*100)+"%)"),q<-(u/5)&&W()||q>u/5&&za()||k(I,"transform","translateX(-"+100*(E-1)+"%)"),q=0,z=!1,k(J,"transform",""));y=!1;return X(a)}
function xa(a){if(y){R||(R=requestAnimationFrame(Ja));var b=Ia(a),c=(v-t)/2;ja=!0;z=v<=t;q-=ha-(ha=b.x);z?A=!0:q>c?q=c:0<t-q-v+c?q=t-v+c:A=!0;w>u&&(c=(w-u)/2,r-=ia-(ia=b.y),r>c?r=c:0<u-r-w+c?r=u-w+c:A=!0)}else Z();return X(a,!0)}function Ia(a){var b=a.touches;b&&(b=b[0]);return{x:b?b.clientX:a.pageX,y:b?b.clientY:a.pageY}}function Ja(a){A?(a&&(R=requestAnimationFrame(Ja)),k(J,"transform","translate("+q+"px, "+r+"px)")):R=null;A=!1}
function ya(a){(a="boolean"===typeof a?a:document.isFullScreen||document.webkitIsFullScreen||document.mozFullScreen)?(document.cancelFullScreen(),h(O,"on")):(T.requestFullScreen(),f(O,"on"));return!a}function Ba(a){"boolean"===typeof a&&(B=!a);B=1===x&&!B;k(L,{maxHeight:B?"none":"",maxWidth:B?"none":"",transform:""});x=1;r=q=0;A=!0;Ja();Z()}function Ca(a){Ka(x/=.65);a||Z()}function Ka(a){k(L,"transform","translate(-50%, -50%) scale("+(a||1)+")")}
function Da(a){var b=.65*x;1>b&&(b=1);b!==x&&(Ka(x=b),r=q=0,A=!0,Ja());a||Z()}function Ga(){location.hash="spotlight";location.hash="show";setTimeout(function(){pa=!1});f(T,"hide-scrollbars");f(M,"show");Z()}function Ea(a){pa=!0;history.go(!0===a?-1:-2);h(T,"hide-scrollbars");h(M,"show");Q&&Aa(!1);L.parentNode.removeChild(L);L=J=null}function za(){Q||Z();if(1<E)return E--,U(!1),!0;if(Q||H)return La(F)}function W(){Q||Z();if(E<F)return E++,U(!0),!0;if(Q||H)return La(1)}
function La(a){if(a!==E){Q||Z();var b=a>E;E=a;U(b);return!0}}function ua(a){"boolean"===typeof a?C=a:(C=!C,Z());C?f(M,"white"):h(M,"white")}
function U(a){r=q=0;x=1;var b=G.animation,c=!0,d=!0,g=!0,e=!1;if("undefined"!==typeof b){e=g=d=c=!1;b=b.split(",");for(var n=0;n<b.length;n++){var p=b[n].trim();"scale"===p?c=!0:"fade"===p?d=!0:"slide"===p?g=!0:"rotate"===p&&(e=!0)}}k(I,"transition",g?"":"none");k(I,"transform","translateX(-"+100*(E-1)+"%)");k(J,"transform","");k(L,{opacity:d?0:1,transform:""});var D=L;setTimeout(function(){D&&L!==D&&D.parentNode&&D.parentNode.removeChild(D)},800);g=ra(E);ea(L,{opacity:d?0:1,transform:"translate(-50%, -50%)"+
(c?" scale(0.8)":"")+(e&&"undefined"!==typeof a?" rotateY("+(a?"":"-")+"135deg)":""),maxHeight:"",maxWidth:""});g&&k(L,{opacity:1,transform:""});k(J,"transform","");k(ma,"visibility",H||1!==E?"":"hidden");k(na,"visibility",H||E!==F?"":"hidden");a=J.dataset;if(c=a.title||a.description)ka.textContent=a.title||"",la.textContent=a.description||"";k(N,"visibility",c?"visible":"hidden");oa.textContent=E+" / "+F}
function X(a,b){a||(a=window.event);a&&(b||a.preventDefault(),a.stopImmediatePropagation(),a.returnValue=!1);return!1}var Fa=Element.prototype.closest||function(a){var b=this;for(a=a.substring(1);b&&1===b.nodeType;){if(b.classList.contains(a))return b;b=b.parentNode}};window.Spotlight={theme:ua,fullscreen:ya,autofit:Ba,next:W,prev:za,"goto":La,close:Ea,zoom:Ka,menu:Ha,show:function(a,b){setTimeout(function(){a?(b?sa(b):b={},qa(a,b.index)):G={};Ga()})},play:Aa};}).call(this);
