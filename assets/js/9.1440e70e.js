(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{275:function(t,e,a){},315:function(t,e,a){"use strict";var s=a(275);a.n(s).a},322:function(t,e,a){"use strict";a.r(e);a(223),a(257),a(258),a(259),a(136),a(225),a(92),a(260),a(314),a(132),a(262),a(274);var s={name:"BlogPostList",props:{pages:{type:Array,default:[]},pageSize:{type:Number,default:5},startPage:{type:Number,default:0}},data:function(){return{currentPage:Math.ceil(this.startPage/this.pageSize),selectedTags:[]}},computed:{filteredList:function(){var t=this;if(this.pages)return this.pages.filter(function(e){var a=!!e.frontmatter.blog,s=new Date(e.frontmatter.date)<=new Date,n=!0;if(t.$site.locales){var i=t.$route.path.split("/")[1]||"";n=e.relativePath.startsWith(i)}var r=!!e.frontmatter.tags&&t.selectedTags.every(function(t){return e.frontmatter.tags.includes(t)});return!(!a||!s||t.selectedTags.length>0&&!r||!n)}).sort(function(t,e){return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)})},totalPages:function(){return Math.ceil(this.filteredList.length/this.pageSize)}},mounted:function(){this.currentPage=Math.min(Math.max(this.currentPage,0),this.totalPages-1)},methods:{nextPage:function(){this.currentPage=this.currentPage>=this.totalPages-1?this.totalPages-1:this.currentPage+1},previousPage:function(){this.currentPage=this.currentPage<0?0:this.currentPage-1},addTag:function(t){this.selectedTags.some(function(e){return e===t})||(this.selectedTags=this.selectedTags.concat(t))},removeTag:function(t){this.selectedTags.filter(function(e){return e!=t})},resetTags:function(){this.selectedTags=[]}}},n=(a(315),a(35)),i=Object(n.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.selectedTags.length>0?a("div",{staticClass:"filtered-heading"},[a("h2",[t._v("\n                Filtered by "+t._s(t.selectedTags.join(","))+"\n            ")]),t._v(" "),a("button",{staticClass:"btn clear-filter-btn",attrs:{type:"button"},on:{click:t.resetTags}},[t._v("\n                Clear filter\n            ")])]):t._e(),t._v(" "),a("ul",{staticClass:"blog-list"},t._l(t.filteredList,function(e,s){return a("li",{staticClass:"blog-list__item"},[a("BlogPostPreview",{directives:[{name:"show",rawName:"v-show",value:s>=t.currentPage*t.pageSize&&s<(t.currentPage+1)*t.pageSize,expression:"index >= currentPage * pageSize && index < (currentPage + 1) * pageSize"}],attrs:{item:e}}),t._v(" "),a("ul",{staticClass:"blog-list__tags"},t._l(e.frontmatter.tags,function(e){return a("li",[a("button",{on:{click:function(a){t.addTag(e)}}},[t._v(t._s(e))])])}),0)],1)}),0),t._v(" "),a("div",{staticClass:"pagination"},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.currentPage>0,expression:"currentPage > 0"}],staticClass:"button--pagination",attrs:{type:"button"},on:{click:t.previousPage}},[t._v("\n                Previous\n            ")]),t._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:t.currentPage<t.totalPages-1,expression:"currentPage < totalPages - 1"}],staticClass:"button--pagination",attrs:{type:"button"},on:{click:t.nextPage}},[t._v("\n                Next\n            ")])])])},[],!1,null,"33d7c340",null);i.options.__file="BlogPostList.vue";e.default=i.exports}}]);