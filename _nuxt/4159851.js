(window.webpackJsonp=window.webpackJsonp||[]).push([[21,4,7],{312:function(t,n,e){var content=e(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(101).default)("364e4840",content,!0,{sourceMap:!1})},313:function(t,n,e){"use strict";e(312)},314:function(t,n,e){var r=e(100)(!1);r.push([t.i,"a.nuxt-link-active{font-weight:700;color:#0ff}a.nuxt-link-exact-active{color:#00c58e}.nuxt-link-prefetched{color:#ff4500}",""]),t.exports=r},315:function(t,n,e){"use strict";e.r(n);e(313);var r=e(56),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[e("b-navbar-brand",[e("img",{staticClass:"d-inline-block align-text-top",attrs:{src:"https://drive.google.com/uc?export=view&id=1EztWl51HpYGlZ1G3hD5iPF6z6YgeGq9n",alt:"",width:"140",height:"60"}})]),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",[e("span",{staticStyle:{color:"#160d3d"}},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1)]),t._v(" "),e("b-nav-item",[e("span",{staticStyle:{color:"#160d3d"}},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"about"}},[t._v("About")])],1)]),t._v(" "),e("b-nav-item",[e("span",{staticStyle:{color:"#160d3d"}},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"projects"}},[t._v("Projects")])],1)]),t._v(" "),e("b-nav-item",[e("span",{staticStyle:{color:"#160d3d"}},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"contact"}},[t._v("Contact")])],1)]),t._v(" "),e("b-nav-item",[e("span",{staticStyle:{color:"#160d3d"}},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"mountains"}},[t._v("Mountains")])],1)]),t._v(" "),e("b-nav-item",[e("span",{staticStyle:{color:"#160d3d"}},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"login"}},[t._v("Login")])],1)])],1),t._v(" "),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item-dropdown",{staticStyle:{color:"#160d3d"},attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("em",[e("b-avatar",{attrs:{variant:"light"}})],1)]},proxy:!0}])},[t._v(" "),e("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),t._v(" "),e("b-dropdown-item",{attrs:{href:"/"}},[t._v("Logout")])],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports},317:function(t,n,e){"use strict";e.r(n);var r=e(56),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"card",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-body",attrs:{src:"https://drive.google.com/uc?export=view&id=1rx3i0rouUfzCJI-5nyduN0VGF7Rdn9wF",width:"100px"}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Card title")]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("\n        Some quick example text to build on the card title and make up the\n        bulk of the card's content.\n      ")]),t._v(" "),e("a",{staticClass:"btn btn-primary"},[e("NuxtLink",{staticClass:"nav-link",staticStyle:{color:"white"},attrs:{to:"projects/projects"}},[t._v("View")])],1)])])])}),[],!1,null,null,null);n.default=component.exports},336:function(t,n,e){"use strict";e.r(n);var r={asyncData:function(){return{content:"Example to show refresh page data, provided by asyncData or fetch Created at: "+Date()}},methods:{refreshPage:function(){this.$nuxt.refresh()},showAlert:function(){alert("You clicked me")}}},l=e(56),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Navbar"),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("Card")],1)])]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"justify-content-center"},[t.$nuxt.isOnline?e("div",[t._v("You are online")]):t._e(),t._v(" "),e("Nuxt"),t._v(" "),e("br"),t._v(" "),e("div",[t._v(t._s(t.content))]),t._v(" "),e("br"),t._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:t.refreshPage}},[t._v("Refresh")]),t._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:t.showAlert}},[t._v("Show Alert")])],1)])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Navbar:e(315).default,Card:e(317).default})}}]);