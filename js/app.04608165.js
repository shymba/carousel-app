(function(){"use strict";var t={3091:function(t,e,n){var r=n(9242),i=n(3396);function a(t,e,n,r,a,s){const o=(0,i.up)("Carousel"),u=(0,i.up)("CheckedList");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(o,{apiListImages:a.listImages,onFoo:s.foo},null,8,["apiListImages","onFoo"]),(0,i.Wm)(u,{mainList:a.imgURLs},null,8,["mainList"])],64)}var s=n(7139);const o={class:"wrapper"};function u(t,e,n,r,a,u){const c=(0,i.up)("CarouselItem");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",{class:"carousel",style:(0,s.j5)({"margin-left":"-"+100*a.currentIdx+"%"})},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.apiListImages,((t,e)=>((0,i.wg)(),(0,i.j4)(c,{key:t.id,itemData:t,onAddURL:u.foo},null,8,["itemData","onAddURL"])))),128))],4),(0,i._)("button",{class:"carousel-button prev",onClick:e[0]||(e[0]=(...t)=>u.prevImage&&u.prevImage(...t))}," ⇐ "),(0,i._)("button",{class:"carousel-button next",onClick:e[1]||(e[1]=(...t)=>u.nextImage&&u.nextImage(...t))}," ⇒ ")])}n(7658);const c={class:"carousel-item"},l={class:"carousel-slide"},m=["id","value"],d=["for"],p=["src"];function f(t,e,n,a,s,o){return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",l,[(0,i.wy)((0,i._)("input",{type:"checkbox",class:"checkbox",id:n.itemData.url,value:n.itemData.url,"onUpdate:modelValue":e[0]||(e[0]=t=>s.checkedImage=t),onClick:e[1]||(e[1]=t=>o.sendURL(n.itemData.url))},null,8,m),[[r.e8,s.checkedImage]]),(0,i._)("label",{for:n.itemData.url},[(0,i._)("img",{src:n.itemData.download_url},null,8,p)],8,d)])])}var g={name:"CarouselItem",props:{itemData:{type:Object,required:!0}},data(){return{checkedImage:[],mainList:[]}},methods:{sendURL(t){this.$emit("addURL",t)}}},h=n(89);const v=(0,h.Z)(g,[["render",f]]);var w=v;const I={class:"list-of-urls"},L={class:"li-item"};function b(t,e,n,r,a,o){return(0,i.wg)(),(0,i.iD)("div",I,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.mainList,(t=>((0,i.wg)(),(0,i.iD)("ul",null,[(0,i._)("li",L,"URL: "+(0,s.zw)(t),1)])))),256))])}var y={name:"CheckedList",props:{mainList:{type:Array,required:!0}}};const D=(0,h.Z)(y,[["render",b]]);var k=D,_={name:"Carousel",components:{CarouselItem:w,CheckedList:k},props:{apiListImages:{type:Array,required:!0}},data(){return{currentIdx:0,newData:[]}},methods:{prevImage(){this.currentIdx>0&&this.currentIdx--},nextImage(){this.currentIdx++},foo(t){this.newData.includes(t)||this.newData.push(t),this.$emit("foo",this.newData)}}};const x=(0,h.Z)(_,[["render",u]]);var C=x,O=n(7327);class j{constructor(){(0,O.Z)(this,"_apiBase","https://picsum.photos/")}async getListImg(){const t=await fetch(`${this._apiBase}v2/list`,{params:{_page:1,_limit:30}}).then((t=>t.json()));return t}}const U=new j;var R={name:"App",components:{CheckedList:k,Carousel:C},data(){return{listImages:[],imgURLs:[]}},methods:{async getListAllImg(){this.listImages=await U.getListImg()},foo(t){this.imgURLs=t}},async mounted(){await this.getListAllImg()}};const A=(0,h.Z)(R,[["render",a]]);var Z=A;(0,r.ri)(Z).mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,a){if(!r){var s=1/0;for(l=0;l<t.length;l++){r=t[l][0],i=t[l][1],a=t[l][2];for(var o=!0,u=0;u<r.length;u++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(o=!1,a<s&&(s=a));if(o){t.splice(l--,1);var c=i();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,a,s=r[0],o=r[1],u=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(u)var l=u(n)}for(e&&e(r);c<s.length;c++)a=s[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunkapp_test"]=self["webpackChunkapp_test"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3091)}));r=n.O(r)})();
//# sourceMappingURL=app.04608165.js.map