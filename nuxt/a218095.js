(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(t,e,n){var content=n(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(67).default)("3c8a105e",content,!0,{sourceMap:!1})},174:function(t,e,n){"use strict";var r={head:function(){return{}}},o=n(21),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("headerBar"),t._v(" "),n("Nuxt"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Footer:n(243).default})},175:function(t,e,n){"use strict";var r=n(21),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-container container pt-80 pb-80",attrs:{id:"main-container"}},[n("div",{staticClass:"blog__content mb-72"},[n("div",{staticClass:"container text-center"},[n("h1",{staticClass:"page-404-number"},[t._v("404")]),t._v(" "),n("h2",[t._v("Page not found")]),t._v(" "),n("p",[t._v("\n        Don't fret! Let's get you back on track. Perhaps searching can help\n      ")]),t._v(" "),n("div",{staticClass:"row justify-content-center mt-40"},[n("div",{staticClass:"col-md-6"},[n("form",{staticClass:"search-form relative",attrs:{role:"search",method:"get"}},[n("input",{staticClass:"widget-search-input mb-0",attrs:{type:"search",placeholder:"Search an article"}}),t._v(" "),n("button",{staticClass:"widget-search-button btn btn-color",attrs:{type:"submit"}},[n("i",{staticClass:"ui-search widget-search-icon"})])]),t._v(" "),n("a",{staticClass:"btn btn-lg btn-light mt-40",attrs:{href:"index-2.html"}},[n("span",[t._v("Back to Home")])])])])])])])}],!1,null,null,null);e.a=component.exports},177:function(t,e,n){n(178),t.exports=n(179)},223:function(t,e,n){"use strict";n(158)},224:function(t,e,n){var r=n(66)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.bg-facebook[data-v-69605b62]{\n  background-color:#3b5998\n}\n.bg-facebook[data-v-69605b62]:hover{\n  background-color:#344e86\n}\n.bg-twitter[data-v-69605b62]{\n  background-color:#1da1f2\n}\n.bg-twitter[data-v-69605b62]:hover{\n  background-color:#0d95e8\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},225:function(t,e,n){"use strict";n.r(e),n.d(e,"strict",(function(){return r})),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return c})),n.d(e,"mutations",(function(){return l})),n.d(e,"actions",(function(){return d}));n(39),n(90);var r=!1,o=function(){return{selectedColumes:{id:!0,username:!0,email:!0,phone:!0,website:!0},data:[],search:"",column:null}},c={selectedColumes:function(t){return t.selectedColumes},getApiData:function(t){return t.data},getSearch:function(t){return t.search},getColumn:function(t){return t.column}},l={setColumes:function(t,e){t.selectedColumes=Object.assign(t.selectedColumes,e)},setApiData:function(t,data){t.data=data},setSearch:function(t,e){return t.search=e},setColumn:function(t,e){return t.column=e}},d={getData:function(t){var e=t.commit;this.$axios.$get("https://jsonplaceholder.typicode.com/users").then((function(t){e("setApiData",t)}))}}},243:function(t,e,n){"use strict";n.r(e);n(223);var r=n(21),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer bg-gray-800 pt-6 md:pt-12"},[n("div",{staticClass:"container px-4 mx-auto"},[n("div",{staticClass:"md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12"},[n("div",{staticClass:"footer-info lg:w-1/3 md:px-4"},[n("h4",{staticClass:"text-white text-2xl mb-4"},[t._v("The Address Investments")]),t._v(" "),n("p",{staticClass:"text-gray-400"},[t._v("\n          We have carefully crafted the blocks to suit to everyone's need.\n        ")]),t._v(" "),n("div",{staticClass:"mt-4"},[n("a",{attrs:{href:"https://www.facebook.com/TheAddressInvestmentsOfficial",target:"_blank"}},[n("button",{staticClass:"\n                bg-twitter\n                py-2\n                px-4\n                text-white\n                rounded\n                ml-2\n                mt-2\n                transition-colors\n                duration-300\n              "},[t._v("\n              Follow\n            ")])])])]),t._v(" "),n("div",{staticClass:"md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0"},[n("div",{staticClass:"sm:flex"},[n("div",{staticClass:"sm:flex-1"},[n("h6",{staticClass:"text-base font-medium text-white uppercase mb-2"},[t._v("\n              About\n            ")]),t._v(" "),n("div",[n("a",{staticClass:"text-gray-400 py-1 block hover:underline",attrs:{href:"https://theaddressinvestments.com/"}},[t._v("Company")]),t._v(" "),n("a",{staticClass:"text-gray-400 py-1 block hover:underline",attrs:{href:"https://theaddressinvestments.com/"}},[t._v("Culture")]),t._v(" "),n("a",{staticClass:"text-gray-400 py-1 block hover:underline",attrs:{href:"https://theaddressinvestments.com/"}},[t._v("Team")]),t._v(" "),n("a",{staticClass:"text-gray-400 py-1 block hover:underline",attrs:{href:"https://theaddressinvestments.com/"}},[t._v("Careers")])])]),t._v(" "),n("div",{staticClass:"sm:flex-1 mt-4 sm:mt-0"},[n("h6",{staticClass:"text-base font-medium text-white uppercase mb-2"},[t._v("\n              What we offer\n            ")]),t._v(" "),n("div",[n("a",{staticClass:"text-gray-400 py-1 block hover:underline",attrs:{href:"https://theaddressinvestments.com/"}},[t._v("Blocks")]),t._v(" "),n("a",{staticClass:"text-gray-400 py-1 block hover:underline",attrs:{href:"https://theaddressinvestments.com/"}},[t._v("Resources")]),t._v(" "),n("a",{staticClass:"text-gray-400 py-1 block hover:underline",attrs:{href:"https://theaddressinvestments.com/"}},[t._v("Tools")]),t._v(" "),n("a",{staticClass:"text-gray-400 py-1 block hover:underline",attrs:{href:"https://theaddressinvestments.com/"}},[t._v("Tutorials")]),t._v(" "),n("a",{staticClass:"text-gray-400 py-1 block hover:underline",attrs:{href:"https://theaddressinvestments.com/"}},[t._v("Freebies")])])])])]),t._v(" "),n("div",{staticClass:"md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0"},[n("h5",{staticClass:"text-lg text-white font-medium mb-4"},[t._v("Explore our site")]),t._v(" "),n("a",{attrs:{href:"https://theaddressinvestments.com/",target:"_blank"}},[n("button",{staticClass:"\n              bg-indigo-600\n              text-white\n              hover:bg-indigo-700\n              rounded\n              py-2\n              px-6\n              md:px-12\n              transition-colors\n              duration-300\n            "},[t._v("\n            Explore\n          ")])])])])]),t._v(" "),n("div",{staticClass:"border-t border-solid border-gray-900 mt-4 py-4"},[n("div",{staticClass:"container px-4 mx-auto"},[n("div",{staticClass:"md:flex md:-mx-4 md:items-center"},[n("div",{staticClass:"md:flex-1 md:px-4 text-center md:text-left"},[n("p",{staticClass:"text-white"},[t._v("\n            ©\n            "),n("strong",[t._v("\n              2021 – The Address Investments. All rights reserved.")])])]),t._v(" "),n("div",{staticClass:"md:flex-1 md:px-4 text-center md:text-right"},[n("a",{staticClass:"py-2 px-4 text-white inline-block hover:underline",attrs:{href:"#"}},[t._v("Terms of Service")]),t._v(" "),n("a",{staticClass:"py-2 px-4 text-white inline-block hover:underline",attrs:{href:"#"}},[t._v("Privacy Policy")])])])])])])}],!1,null,"69605b62",null);e.default=component.exports}},[[177,6,1,7]]]);