import{V as ln,W as an,X as y,Y as tn,$ as z,a0 as q,a1 as _,a2 as un,a3 as rn,a4 as F,a5 as o,a6 as X,a7 as sn,a8 as on,a9 as fn}from"../app.B43AyH8E.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function dn(l){return l.endAngle}function mn(l){return l&&l.padAngle}function pn(l,h,I,D,v,A,Y,a){var O=I-l,i=D-h,n=Y-v,d=a-A,u=d*O-n*i;if(!(u*u<y))return u=(n*(h-A)-d*(l-v))/u,[l+u*O,h+u*i]}function M(l,h,I,D,v,A,Y){var a=l-I,O=h-D,i=(Y?A:-A)/F(a*a+O*O),n=i*O,d=-i*a,u=l+n,s=h+d,f=I+n,c=D+d,$=(u+f)/2,t=(s+c)/2,m=f-u,g=c-s,R=m*m+g*g,T=v-A,P=u*c-f*s,S=(g<0?-1:1)*F(fn(0,T*T*R-P*P)),V=(P*g-m*S)/R,W=(-P*m-g*S)/R,w=(P*g+m*S)/R,p=(-P*m+g*S)/R,x=V-$,e=W-t,r=w-$,j=p-t;return x*x+e*e>r*r+j*j&&(V=w,W=p),{cx:V,cy:W,x01:-n,y01:-d,x11:V*(v/T-1),y11:W*(v/T-1)}}function hn(){var l=cn,h=yn,I=X(0),D=null,v=gn,A=dn,Y=mn,a=null,O=ln(i);function i(){var n,d,u=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-an,c=A.apply(this,arguments)-an,$=un(c-f),t=c>f;if(a||(a=n=O()),s<u&&(d=s,s=u,u=d),!(s>y))a.moveTo(0,0);else if($>tn-y)a.moveTo(s*z(f),s*q(f)),a.arc(0,0,s,f,c,!t),u>y&&(a.moveTo(u*z(c),u*q(c)),a.arc(0,0,u,c,f,t));else{var m=f,g=c,R=f,T=c,P=$,S=$,V=Y.apply(this,arguments)/2,W=V>y&&(D?+D.apply(this,arguments):F(u*u+s*s)),w=_(un(s-u)/2,+I.apply(this,arguments)),p=w,x=w,e,r;if(W>y){var j=sn(W/u*q(V)),G=sn(W/s*q(V));(P-=j*2)>y?(j*=t?1:-1,R+=j,T-=j):(P=0,R=T=(f+c)/2),(S-=G*2)>y?(G*=t?1:-1,m+=G,g-=G):(S=0,m=g=(f+c)/2)}var B=s*z(m),C=s*q(m),H=u*z(T),J=u*q(T);if(w>y){var K=s*z(g),L=s*q(g),N=u*z(R),Q=u*q(R),E;if($<rn)if(E=pn(B,C,N,Q,K,L,H,J)){var U=B-E[0],Z=C-E[1],k=K-E[0],b=L-E[1],nn=1/q(on((U*k+Z*b)/(F(U*U+Z*Z)*F(k*k+b*b)))/2),en=F(E[0]*E[0]+E[1]*E[1]);p=_(w,(u-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else p=x=0}S>y?x>y?(e=M(N,Q,B,C,s,x,t),r=M(K,L,H,J,s,x,t),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(r.y01,r.x01),!t):(a.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(e.y11,e.x11),!t),a.arc(0,0,s,o(e.cy+e.y11,e.cx+e.x11),o(r.cy+r.y11,r.cx+r.x11),!t),a.arc(r.cx,r.cy,x,o(r.y11,r.x11),o(r.y01,r.x01),!t))):(a.moveTo(B,C),a.arc(0,0,s,m,g,!t)):a.moveTo(B,C),!(u>y)||!(P>y)?a.lineTo(H,J):p>y?(e=M(H,J,K,L,u,-p,t),r=M(B,C,N,Q,u,-p,t),a.lineTo(e.cx+e.x01,e.cy+e.y01),p<w?a.arc(e.cx,e.cy,p,o(e.y01,e.x01),o(r.y01,r.x01),!t):(a.arc(e.cx,e.cy,p,o(e.y01,e.x01),o(e.y11,e.x11),!t),a.arc(0,0,u,o(e.cy+e.y11,e.cx+e.x11),o(r.cy+r.y11,r.cx+r.x11),t),a.arc(r.cx,r.cy,p,o(r.y11,r.x11),o(r.y01,r.x01),!t))):a.arc(0,0,u,T,R,t)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,d=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-rn/2;return[z(d)*n,q(d)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:X(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:X(+n),i):h},i.cornerRadius=function(n){return arguments.length?(I=typeof n=="function"?n:X(+n),i):I},i.padRadius=function(n){return arguments.length?(D=n==null?null:typeof n=="function"?n:X(+n),i):D},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:X(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:X(+n),i):A},i.padAngle=function(n){return arguments.length?(Y=typeof n=="function"?n:X(+n),i):Y},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{hn as d};
