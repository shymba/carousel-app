(function(){"use strict";var t={4090:function(t,e,n){var r=n(9242),a=n(3396);function i(t,e,n,r,i,s){const o=(0,a.up)("Carousel"),u=(0,a.up)("CheckedList");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(o,{apiListImages:i.listImages,onFoo:s.foo},null,8,["apiListImages","onFoo"]),(0,a.Wm)(u,{mainList:i.imgURLs},null,8,["mainList"])],64)}var s=n(7139);const o={class:"wrapper"};function u(t,e,n,r,i,u){const c=(0,a.up)("CarouselItem");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",{class:"carousel",style:(0,s.j5)({"margin-left":"-"+100*i.currentIdx+"%"})},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.apiListImages,((t,e)=>((0,a.wg)(),(0,a.j4)(c,{key:t.id,itemData:t,onAddURL:u.foo},null,8,["itemData","onAddURL"])))),128))],4),(0,a._)("button",{class:"carousel-button prev",onClick:e[0]||(e[0]=(...t)=>u.prevImage&&u.prevImage(...t))}," ⇐ "),(0,a._)("button",{class:"carousel-button next",onClick:e[1]||(e[1]=(...t)=>u.nextImage&&u.nextImage(...t))}," ⇒ ")])}n(7658);const c={class:"carousel-item"},l={class:"carousel-slide"},m=["id","value"],d=["for"],p=["src"];function f(t,e,n,i,s,o){return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",l,[(0,a.wy)((0,a._)("input",{type:"checkbox",class:"checkbox",id:n.itemData.url,value:n.itemData.url,"onUpdate:modelValue":e[0]||(e[0]=t=>s.checkedImage=t),onClick:e[1]||(e[1]=t=>o.sendURL(n.itemData))},null,8,m),[[r.e8,s.checkedImage]]),(0,a._)("label",{for:n.itemData.url},[(0,a._)("img",{src:n.itemData.download_url},null,8,p)],8,d)])])}var h={name:"CarouselItem",props:{itemData:{type:Object,required:!0}},data(){return{checkedImage:[],mainList:[]}},methods:{sendURL(t){this.$emit("addURL",t)}}},g=n(89);const v=(0,g.Z)(h,[["render",f]]);var w=v;const I={class:"list-of-urls"},L={class:"li-item"},b=(0,a._)("strong",{class:"name"},"URL: ",-1),_=["href"],D={class:"li-item"},k=(0,a._)("strong",{class:"name"},"Author: ",-1);function y(t,e,n,r,i,o){return(0,a.wg)(),(0,a.iD)("div",I,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.mainList,(t=>((0,a.wg)(),(0,a.iD)("ul",null,[(0,a._)("li",L,[b,(0,a._)("a",{target:"_blank",href:t.url},(0,s.zw)(t.url),9,_)]),(0,a._)("li",D,[k,(0,a.Uk)((0,s.zw)(t.author),1)])])))),256))])}var x={name:"CheckedList",props:{mainList:{type:Array,required:!0}}};const C=(0,g.Z)(x,[["render",y]]);var O=C,U={name:"Carousel",components:{CarouselItem:w,CheckedList:O},props:{apiListImages:{type:Array,required:!0}},data(){return{currentIdx:0,newData:[]}},methods:{prevImage(){this.currentIdx>0&&this.currentIdx--},nextImage(){this.currentIdx++},foo(t){this.newData.includes(t)?this.newData=this.newData.filter((e=>e!==t)):this.newData.push(t),this.$emit("foo",this.newData)}}};const j=(0,g.Z)(U,[["render",u]]);var R=j,A=n(7327);class Z{constructor(){(0,A.Z)(this,"_apiBase","https://picsum.photos/")}async getListImg(){const t=await fetch(`${this._apiBase}v2/list`,{params:{_page:1,_limit:30}}).then((t=>t.json()));return t}}const q=new Z;var F={name:"App",components:{CheckedList:O,Carousel:R},data(){return{listImages:[],imgURLs:[]}},methods:{async getListAllImg(){this.listImages=await q.getListImg()},foo(t){this.imgURLs=t}},async mounted(){await this.getListAllImg()}};const H=(0,g.Z)(F,[["render",i]]);var Y=H;(0,r.ri)(Y).mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,i){if(!r){var s=1/0;for(l=0;l<t.length;l++){r=t[l][0],a=t[l][1],i=t[l][2];for(var o=!0,u=0;u<r.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(o=!1,i<s&&(s=i));if(o){t.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,i,s=r[0],o=r[1],u=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(u)var l=u(n)}for(e&&e(r);c<s.length;c++)i=s[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkapp_test"]=self["webpackChunkapp_test"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4090)}));r=n.O(r)})();
//# sourceMappingURL=app.1918e468.js.map