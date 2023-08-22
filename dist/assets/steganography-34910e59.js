var q=(I,a)=>()=>(a||I((a={exports:{}}).exports,a),a.exports);var F=q((j,A)=>{(function(I,a,e){typeof A<"u"&&A.exports?A.exports=e():typeof define=="function"&&define.amd?define(e):a[I]=e()})("steg",globalThis,function(){var I=function(){},a={isPrime:function(e){if(isNaN(e)||!isFinite(e)||e%1||2>e)return!1;if(e%2===0)return e===2;if(e%3===0)return e===3;for(var t=Math.sqrt(e),r=5;t>=r;r+=6)if(e%r===0||e%(r+2)===0)return!1;return!0},findNextPrime:function(e){for(var t=e;;t+=1)if(a.isPrime(t))return t},sum:function(e,t,r){var i=0;r=r||{};for(var n=r.start||0;t>n;n+=r.inc||1)i+=e(n)||0;return i===0&&r.defValue?r.defValue:i},product:function(e,t,r){var i=1;r=r||{};for(var n=r.start||0;t>n;n+=r.inc||1)i*=e(n)||1;return i===1&&r.defValue?r.defValue:i},createArrayFromArgs:function(e,t,r){for(var i=new Array(r-1),n=0;r>n;n+=1)i[n]=e(n>=t?n+1:n);return i},loadImg:function(e){var t=new Image;return t.src=e,t}};return I.prototype.config={t:3,threshold:1,codeUnitSize:16,args:function(e){return e+1},messageDelimiter:function(e,t){for(var r=new Array(3*t),i=0;i<r.length;i+=1)r[i]=255;return r},messageCompleted:function(e,t,r){for(var i=!0,n=0;16>n&&i;n+=1)i=i&&e[t+4*n]===255;return i}},I.prototype.getHidingCapacity=function(e,t){t=t||{};var r=this.config,i=t.width||e.width,n=t.height||e.height,s=t.t||r.t,m=t.codeUnitSize||r.codeUnitSize;return s*i*n/m>>0},I.prototype.encode=function(e,t,r){if(t.length)t=a.loadImg(t);else if(t.src)t=a.loadImg(t.src);else if(!(t instanceof HTMLImageElement))throw new Error("IllegalInput: The input image is neither an URL string nor an image.");r=r||{};var i=this.config,n=r.t||i.t,s=r.threshold||i.threshold,m=r.codeUnitSize||i.codeUnitSize,D=a.findNextPrime(Math.pow(2,n)),y=r.args||i.args,x=r.messageDelimiter||i.messageDelimiter;if(!n||1>n||n>7)throw new Error('IllegalOptions: Parameter t = " + t + " is not valid: 0 < t < 8');var h=document.createElement("canvas"),p=h.getContext("2d");h.style.display="none",h.width=r.width||t.width,h.height=r.height||t.height,r.height&&r.width?p.drawImage(t,0,0,r.width,r.height):p.drawImage(t,0,0);var w,U,E,S,M,l,d,u,o,g,L=p.getImageData(0,0,h.width,h.height),C=L.data,N=m/n>>0,T=m%n,v=[];for(o=0;o<=e.length;o+=1){if(l=e.charCodeAt(o)||0,d=T*o%n,d>0&&U){if(u=Math.pow(2,n-d)-1,E=Math.pow(2,m)*(1-Math.pow(2,-d)),S=(l&u)<<d,M=(U&E)>>m-d,v.push(S+M),o<e.length){for(u=Math.pow(2,2*n-d)*(1-Math.pow(2,-n)),g=1;N>g;g+=1)w=l&u,v.push(w>>(g-1)*n+(n-d)),u<<=n;T*(o+1)%n===0?(u=Math.pow(2,m)*(1-Math.pow(2,-n)),w=l&u,v.push(w>>m-n)):n>=T*(o+1)%n+(n-d)&&(w=l&u,v.push(w>>(N-1)*n+(n-d)))}}else if(o<e.length)for(u=Math.pow(2,n)-1,g=0;N>g;g+=1)w=l&u,v.push(w>>g*n),u<<=n;U=l}var f,c,P,H,z,V=x(v,s);for(f=0;4*(f+s)<=C.length&&f+s<=v.length;f+=s){for(z=[],o=0;s>o&&o+f<v.length;o+=1){for(H=0,g=f;s+f>g&&g<v.length;g+=1)H+=v[g]*Math.pow(y(o),g-f);z[o]=255-D+1+H%D}for(o=4*f;o<4*(f+z.length)&&o<C.length;o+=4)C[o+3]=z[o/4%s];P=z.length}for(c=f+P;c-(f+P)<V.length&&4*(f+V.length)<C.length;c+=1)C[4*c+3]=V[c-(f+P)];for(o=4*(c+1)+3;o<C.length;o+=4)C[o]=255;return L.data=C,p.putImageData(L,0,0),h.toDataURL()},I.prototype.decode=function(e,t){if(e.length)e=a.loadImg(e);else if(e.src)e=a.loadImg(e.src);else if(!(e instanceof HTMLImageElement))throw new Error("IllegalInput: The input image is neither an URL string nor an image.");t=t||{};var r=this.config,i=t.t||r.t,n=t.threshold||r.threshold,s=t.codeUnitSize||r.codeUnitSize,m=a.findNextPrime(Math.pow(2,i)),D=(t.args||r.args,t.messageCompleted||r.messageCompleted);if(!i||1>i||i>7)throw new Error('IllegalOptions: Parameter t = " + t + " is not valid: 0 < t < 8');var y=document.createElement("canvas"),x=y.getContext("2d");y.style.display="none",y.width=t.width||e.width,y.height=t.width||e.height,t.height&&t.width?x.drawImage(e,0,0,t.width,t.height):x.drawImage(e,0,0);var h,p,w=x.getImageData(0,0,y.width,y.height),U=w.data,E=[];if(n===1)for(h=3,p=!1;!p&&h<U.length&&!p;h+=4)p=D(U,h,n),p||E.push(U[h]-(255-m+1));var S="",M=0,l=0,d=Math.pow(2,s)-1;for(h=0;h<E.length;h+=1)M+=E[h]<<l,l+=i,l>=s&&(S+=String.fromCharCode(M&d),l%=s,M=E[h]>>i-l);return M!==0&&(S+=String.fromCharCode(M&d)),S},new I})});export default F();
