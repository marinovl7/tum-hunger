(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513],{3124:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]",function(){return t(7333)}])},787:function(e,n,t){"use strict";t.d(n,{Z:function(){return Banner}});var i=t(5893),s=t(2734),a=t(5861),o=t(3738),r=t(7304),c=t(9755),l=t.n(c),d=t(1163),u=t(9467),p=t(6886),x=t(1664),h=t.n(x),g=t(9318),LanguageSwitcher=e=>{let{locale:n,...t}=e,o=(0,d.useRouter)(),c=(0,s.Z)(),{t:l}=(0,r.$G)("common"),x=t.href||o.asPath,m=o.pathname;return Object.keys(o.query).forEach(e=>{if("locale"===e){m=m.replace("[".concat(e,"]"),n);return}m=m.replace("[".concat(e,"]"),o.query[e])}),n&&(x=t.href?"/".concat(n).concat(t.href):m),(0,i.jsxs)(p.ZP,{container:!0,alignItems:"center",justifyContent:"center",sx:{position:"absolute",top:c.spacing(2),right:{xs:0,sm:c.spacing(4)},width:c.spacing(28)},children:[(0,i.jsx)(p.ZP,{item:!0,xs:8,children:(0,i.jsx)(a.Z,{variant:"subtitle1",sx:{color:c.palette.primary.main},children:l("language")})}),(0,i.jsx)(p.ZP,{item:!0,xs:4,children:(0,i.jsx)(h(),{href:x,onClick:()=>u.Z.cache(n),children:(0,i.jsx)("button",{style:{fontSize:c.spacing(3),backgroundColor:"transparent",cursor:"pointer",border:"none"},children:"de"===n?(0,i.jsx)(g.Z,{countryCode:"DE",svg:!0}):(0,i.jsx)(g.Z,{countryCode:"GB",svg:!0})})})})]})},m=t(5400),f=t.n(m);function Banner(){let e=(0,d.useRouter)(),n=(0,s.Z)(),{t}=(0,r.$G)("common"),c=e.query.locale||f().i18n.defaultLocale;return(0,i.jsxs)(o.Z,{sx:{position:"relative",width:"100%",height:n.spacing(44),zIndex:n.zIndex.drawer+1},children:[(0,i.jsx)(l(),{src:"".concat("","/MGA-8.jpg"),objectFit:"cover",layout:"fill",quality:100,objectPosition:"bottom",style:{filter:"brightness(60%)"},priority:!0,alt:"Mensa Garching"}),(0,i.jsxs)(o.Z,{sx:{position:"absolute",left:{sm:n.spacing(7),xs:"50%"},top:{sm:n.spacing(7),xs:"50%"},color:n.palette.primary.main,maxWidth:n.spacing(80),width:{xs:"90%",sm:"unset"},textAlign:{sm:"left",xs:"center"},transform:{xs:"translate(-50%,-50%)",sm:"unset"}},children:[(0,i.jsxs)(a.Z,{variant:"h2",sx:{color:n.palette.primary.light,fontWeight:600},children:["TUM",(0,i.jsx)("span",{style:{color:n.palette.primary.main},children:"enu"})]}),(0,i.jsx)(a.Z,{variant:"h5",sx:{paddingLeft:n.spacing(1)},children:t("subtitleBanner")})]}),(0,i.jsx)(a.Z,{variant:"body2",sx:{position:"absolute",right:"5px",bottom:"5px",color:n.palette.primary.main,fontSize:n.spacing(.85)},children:"Copyright: https://www.meck-architekten.de/projekte/id/2019-mensa-campus-garching/"}),f().i18n.locales.map(e=>e===c?null:(0,i.jsx)(LanguageSwitcher,{locale:e},e))]})}},561:function(e,n,t){"use strict";t.d(n,{Z:function(){return NotFound}});var i=t(5893),s=t(2734),a=t(8396),o=t(3738),r=t(5861),c=t(7304),l=t(5675),d=t.n(l);function NotFound(e){let{imageSource:n,translationString:t}=e,l=(0,s.Z)(),{t:u}=(0,c.$G)("common"),p=(0,a.Z)("(min-width:37.5em)");return(0,i.jsx)(o.Z,{sx:{display:"flex",alignItems:"flex-start",justifyContent:"center",columnGap:l.spacing(4),rowGap:l.spacing(4),flexWrap:"wrap",my:l.spacing(4)},children:(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:l.spacing(2)},children:[(0,i.jsx)(r.Z,{variant:"h4",sx:{color:l.palette.primary.dark,fontWeight:600},children:u(t)}),(0,i.jsx)(d(),{src:""+n,quality:100,height:p?400:300,width:p?400:300,priority:!0,alt:"Not Found"})]})})}},2424:function(e,n,t){"use strict";t.d(n,{Z:function(){return Sidebar}});var i=t(5893),s=t(7294),a=t(5152),o=t.n(a),r=t(5813),c=t(7304),l=t(2734),d=t(3738),u=t(9417),p=t(5861),x=t(8462),h=t(9140),g=t(7212),m=t(8619),f=t(9334),y=t(8885),j=t(7922),Z=t(3508),b=t(181),C=t(1664),P=t.n(C),v=t(1163),k=t(9657);function LinkComponent(e){let{children:n,skipLocaleHandling:t,...a}=e,{setTriggerSidebarMobile:o}=(0,s.useContext)(k.Z),r=(0,l.Z)(),c=(0,v.useRouter)(),d=a.locale||c.query.locale||"",u=a.href||c.asPath;return 0===u.indexOf("http")&&(t=!0),d&&!t&&(u=u?"/".concat(d).concat(u):c.pathname.replace("[locale]",d)),(0,i.jsx)(P(),{href:u,legacyBehavior:!0,scroll:!1,children:(0,i.jsx)("a",{...a,style:{textDecoration:"none",color:r.palette.primary.main},onClick:()=>o(!1),children:n})})}function SidebarSubmenu(e){let{foodPlace:n}=e,[t,a]=(0,s.useState)(!1),o=(0,l.Z)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.ZP,{disablePadding:!0,children:(0,i.jsxs)(m.Z,{onClick:()=>a(!t),children:[(0,i.jsx)(f.Z,{disableTypography:!0,primary:n.city,sx:{fontSize:o.spacing(2.5)}}),(0,i.jsx)(y.Z,{children:t?(0,i.jsx)(b.Z,{sx:{color:o.palette.primary.main}}):(0,i.jsx)(Z.Z,{sx:{color:o.palette.primary.main}})})]})},n.city),(0,i.jsx)(j.Z,{in:t,timeout:"auto",unmountOnExit:!0,children:(0,i.jsx)(x.Z,{component:"div",disablePadding:!0,children:n.foodPlaces.map(e=>(0,i.jsx)(LinkComponent,{href:"/".concat(e.canteen_id),skipLocaleHandling:!1,children:(0,i.jsx)(m.Z,{sx:{pl:4},children:(0,i.jsx)(f.Z,{disableTypography:!0,primary:e.name,sx:{fontSize:o.spacing(2)}})})},e.canteen_id))})})]})}let w=o()(()=>Promise.all([t.e(269),t.e(492),t.e(37)]).then(t.bind(t,7037)),{loadableGenerated:{webpack:()=>[7037]},ssr:!1});function Sidebar(e){let{foodPlaces:n}=e,[t,a]=(0,s.useState)(!1),{triggerSidebarMobile:o,setTriggerSidebarMobile:g}=(0,s.useContext)(k.Z),{t:m}=(0,c.$G)("common"),f=[{city:"Garching",foodPlaces:[]},{city:"Munich",foodPlaces:[]},{city:"Straubing",foodPlaces:[]},{city:"Weihenstephan",foodPlaces:[]},{city:"Rosenheim",foodPlaces:[]}];n.forEach(e=>{var n,t,i,s,a;let{address:o}=e.location;o.includes("Garching")?null===(n=f.find(e=>"Garching"===e.city))||void 0===n||n.foodPlaces.push(e):o.includes("M\xfcnchen")||o.includes("Plategg")||o.includes("Planegg-Martinsried")?null===(t=f.find(e=>"Munich"===e.city))||void 0===t||t.foodPlaces.push(e):o.includes("Freising")?null===(i=f.find(e=>"Weihenstephan"===e.city))||void 0===i||i.foodPlaces.push(e):o.includes("Rosenheim")?null===(s=f.find(e=>"Rosenheim"===e.city))||void 0===s||s.foodPlaces.push(e):o.includes("Straubing")&&(null===(a=f.find(e=>"Straubing"===e.city))||void 0===a||a.foodPlaces.push(e))});let y=(0,l.Z)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.Z,{sx:{display:{lg:"flex",xs:o?"flex":"none"},position:{lg:"relative",xs:"absolute"},minHeight:{lg:"auto",xs:"100%"},width:y.spacing(30),flexDirection:"column",bgcolor:y.palette.primary.light,color:y.palette.primary.main,borderBottomRightRadius:"12px",zIndex:9999,backgroundColor:y.palette.primary.light},children:[(0,i.jsx)(d.Z,{sx:{display:{lg:"none",xs:"flex"},justifyContent:"flex-end",backgroundColor:y.palette.primary.light,height:y.spacing(3),pt:y.spacing(.5),px:y.spacing(.5)},children:(0,i.jsx)(r.Z,{fontSize:"small",sx:{color:y.palette.primary.main,cursor:"pointer"},onClick:()=>g(!1)})}),(0,i.jsx)(u.Z,{onClick:()=>{a(!0),g(!1)},variant:"text",endIcon:(0,i.jsx)(h.Z,{}),sx:{justifyContent:"flex-start",pl:y.spacing(2)},children:(0,i.jsx)(p.Z,{variant:"h6",children:m("showAllCanteens")})}),(0,i.jsx)(x.Z,{component:"nav",children:f.map(e=>(0,i.jsx)(SidebarSubmenu,{foodPlace:e},e.city))})]}),(0,i.jsx)(w,{open:t,setOpen:a,foodPlaces:n,mapOpenCoordinates:[48.132264,11.57743],zoom:11})]})}},9467:function(e,n,t){"use strict";var i=t(9515),s=t(5400),a=t.n(s);n.Z=(0,i.Z)({supportedLngs:a().i18n.locales,fallbackLng:a().i18n.defaultLocale})},5400:function(e){"use strict";e.exports={i18n:{defaultLocale:"de",locales:["en","de"],localeDetection:!0}}},7333:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return m},default:function(){return Home}});var i=t(5893),s=t(7294),a=t(9008),o=t.n(a),r=t(7304),c=t(2734),l=t(3738),d=t(6886),u=t(9417),p=t(787),x=t(561),h=t(2424),g=t(9657),m=!0;function Home(e){let{foodPlaces:n}=e,t=(0,c.Z)(),{t:a}=(0,r.$G)(),{triggerSidebarMobile:m,setTriggerSidebarMobile:f}=(0,s.useContext)(g.Z);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"TUMenu"}),(0,i.jsx)("meta",{name:"description",content:"Entdecke hier die t\xe4glichen Men\xfcs der besten Studentenlokale in M\xfcnchen"})]}),(0,i.jsx)(p.Z,{}),(0,i.jsxs)(l.Z,{sx:{display:"grid",gridTemplateColumns:{lg:"".concat(t.spacing(30)," calc(100% - ").concat(t.spacing(30),")"),xs:"100%"}},children:[(0,i.jsx)(h.Z,{foodPlaces:n}),(0,i.jsxs)(l.Z,{sx:{p:t.spacing(4)},children:[(0,i.jsx)(d.ZP,{item:!0,lg:0,md:3,sm:4,xs:6,sx:{display:{lg:"none",xs:"block"}},children:(0,i.jsx)(l.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-start"},children:(0,i.jsx)(u.Z,{variant:"contained",onClick:()=>f(!m),size:"medium",sx:{backgroundColor:t.palette.primary.light,color:t.palette.primary.main},children:a("selectCanteen")})})}),(0,i.jsx)(x.Z,{translationString:"startBrowsing",imageSource:"/start_browsing.svg"})]})]})]})}}},function(e){e.O(0,[970,774,888,179],function(){return e(e.s=3124)}),_N_E=e.O()}]);