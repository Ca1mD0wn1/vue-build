import{d as k,_ as v,I as _,x as C,y as b,D as w,z as L,S as V,C as E,i as h,j as o,a as i,A as $,E as B,k as a,F as p,l as F,o as r,p as S,H as l}from"./index.25338a1d.js";import{b as m}from"./kind.e2d072c5.js";const D=k({data(){return{keyword:"",searchList:[],initList:[],list:[],options:[{text:"\u5168\u90E8\u5546\u54C1",value:0},{text:"\u4EF7\u683C\u5347\u5E8F",value:1},{text:"\u4EF7\u683C\u964D\u5E8F",value:-1}],value:0,min:"",max:"",flag:!1}},mounted(){this.keyword=this.$route.query.brand,m({brand:this.keyword,category:this.$route.query.category}).then(e=>{this.searchList=e.data.data,this.initList=JSON.parse(JSON.stringify(e.data.data))})},methods:{submit(){if(localStorage.getItem("searchList")){this.list=JSON.parse(localStorage.getItem("searchList"));const e=this.list.findIndex(t=>t===this.keyword);e!==-1&&this.list.splice(e,1),this.list.unshift(this.keyword)}else{console.log(1);const e=[];e.unshift(this.keyword),this.list=e}localStorage.setItem("searchList",JSON.stringify(this.list)),m({brand:this.keyword,category:this.$route.query.category}).then(e=>{this.searchList=e.data.data,this.initList=JSON.parse(JSON.stringify(e.data.data))})},sort(){switch(console.log(this.value),this.value){case 0:this.searchList=this.initList;break;case 1:this.searchList.sort((e,t)=>e.originprice-t.originprice);break;case-1:this.searchList.sort((e,t)=>t.originprice-e.originprice);break;default:this.searchList=this.initList;break}},onConfirm(){this.min===""&&(this.min="0"),this.max===""&&(this.max="9999999");const e=this.searchList.filter(t=>t.originprice>=Number(this.min)&&t.originprice<=Number(this.max));console.log(e),this.searchList=e,this.$refs.item.toggle()},toDetail(e){this.$router.push("/detail/"+e)}}});const N={class:"header"},I=l("\u641C\u7D22"),J={class:"content"},O={class:"priceField"},U=l(" - "),q={style:{padding:"5px 16px"}},z=l(" \u786E\u8BA4 ");function A(e,t,R,j,x,H){const c=_,n=C,u=b,d=w,f=L,g=V,y=E;return r(),h(p,null,[o("header",N,[o("ul",null,[o("li",{onClick:t[0]||(t[0]=s=>e.$router.back())},[i(c,{name:"arrow-left",size:"24"})]),o("li",null,[i(n,{"left-icon":"search",onBlur:t[1]||(t[1]=s=>e.flag=!1),onFocus:t[2]||(t[2]=s=>e.flag=!0),modelValue:e.keyword,"onUpdate:modelValue":t[3]||(t[3]=s=>e.keyword=s),placeholder:"\u6E05\u98CE\u62BD\u7EB8",clearable:""},null,8,["modelValue"])]),o("li",{onClick:t[4]||(t[4]=(...s)=>e.submit&&e.submit(...s))},[$(i(u,{type:"danger",size:"mini"},{default:a(()=>[I]),_:1},512),[[B,e.flag]])])])]),o("div",J,[i(g,{"offset-top":44},{default:a(()=>[i(f,null,{default:a(()=>[i(d,{modelValue:e.value,"onUpdate:modelValue":t[5]||(t[5]=s=>e.value=s),options:e.options,onChange:e.sort},null,8,["modelValue","options","onChange"]),i(d,{title:"\u7B5B\u9009",ref:"item"},{default:a(()=>[o("div",O,[i(n,{modelValue:e.min,"onUpdate:modelValue":t[6]||(t[6]=s=>e.min=s),placeholder:"\u6700\u4F4E\u4EF7\u683C"},null,8,["modelValue"]),U,i(n,{modelValue:e.max,"onUpdate:modelValue":t[7]||(t[7]=s=>e.max=s),placeholder:"\u6700\u9AD8\u4EF7\u683C"},null,8,["modelValue"])]),o("div",q,[i(u,{type:"danger",block:"",round:"",onClick:e.onConfirm},{default:a(()=>[z]),_:1},8,["onClick"])])]),_:1},512)]),_:1})]),_:1}),(r(!0),h(p,null,F(e.searchList,s=>(r(),S(y,{key:s.proid,price:s.originprice,title:s.proname,thumb:s.img1,onClick:M=>e.toDetail(s.proid)},null,8,["price","title","thumb","onClick"]))),128))])],64)}const G=v(D,[["render",A],["__scopeId","data-v-9898b38d"]]);export{G as default};