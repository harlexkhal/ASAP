(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{264:function(t,e,a){"use strict";e.a={methods:{prepareLocalizationMetaTags:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=["dz","ao","bj","bw","bf","bi","cm","ca","cv","cf","td","cn","km","cg","cd","dj","eg","gq","er","sz","et","ga","gh","gw","gn","in","ci","ke","ls","lr","ly","lt","mg","mw","ml","mr","mu","ma","mz","na","ne","ng","rw","st","sn","sc","sl","so","za","ss","sd","tz","gm","tg","tn","ug","gb","us","zm","zw"],a=[{rel:"canonical",href:"https://flutterwave.com/us/".concat(t)}],r={},o=0;o<e.length;o++)r={rel:"alternate",hreflang:"en-".concat(e[o]),href:"https://flutterwave.com/".concat(e[o],"/").concat(t)},a.push(r);return a}}}},317:function(t,e,a){var r=a(389);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(12).default)("b1694f8c",r,!0,{sourceMap:!1})},387:function(t,e,a){"use strict";(function(t){var r,o=a(431),i=a(264),s=a(390);e.a={layout:"blog",asyncData:function(t){var e,a=t.$axios,r=(t.params,t.store),o=t.route,i=o.query.page||1,s="",n=r.state.categories.list,c="";return(null===(e=o.params)||void 0===e?void 0:e.category)&&(c="all"===o.params.category?"":o.params.category),c&&(s=n.filter((function(t){return t.slug==c}))[0].id),a.post("blog/getPosts",{categoryId:s,page:i}).then((function(t){var e=t.data.posts;return{posts:e,topPost:e[0],totalPages:t.data.totalPages}})).catch((function(t){}))},mixins:[i.a,s.a],data:function(){return{email:"",subscribed:!1,submittingForm:!1,page:this.$route.query.page,activeCategoryId:"",userHasSubscribed:!1,metaDetails:{title:"The Flutterwave Blog",description:"Updates, Insights, Announcements and everything related to Flutterwave.",imageURL:"https://flutterwave.com/images/graph/thewave.png"}}},head:function(){return{title:this.metaDetails.title,meta:[{hid:"description",name:"description",content:this.metaDetails.description},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",name:"twitter:title",content:this.metaDetails.title},{hid:"twitter:description",name:"twitter:description",content:this.metaDetails.description},{hid:"twitter:url",name:"twitter:url",content:t.env.baseURL},{hid:"twitter:image:src",name:"twitter:image:src",content:this.metaDetails.imageURL},{hid:"og:site_name",property:"og:site_name",content:this.metaDetails.title},{hid:"og:title",property:"og:title",content:this.metaDetails.title},{hid:"og:description",property:"og:description",content:this.metaDetails.description},{hid:"og:url",property:"og:url",content:t.env.baseURL},{hid:"og:image",property:"og:image",content:this.metaDetails.imageURL}],link:this.prepareLocalizationMetaTags("blog")}},components:{post:o.a},mounted:function(){r=this,this.setActiveCategory(),this.initIntersectionObserver()},methods:{setActiveCategory:function(){var t;if(null===(t=this.$route.params)||void 0===t?void 0:t.category){var e=this.$route.params.category;if("all"!==e){var a=this.$store.state.categories.list;this.activeCategoryId=a.filter((function(t){return t.slug===e}))[0].id}}this.$refs.blogCategories.style.setProperty("--active-color",this.getCategoryColor(this.activeCategoryId))},initIntersectionObserver:function(){new IntersectionObserver(this.onElementObserved,{threshold:.1}).observe(this.$refs.subscribeSection)},subscribe:function(){var t=this;this.submittingForm=!0,this.$refs.subscribeButton.style.pointerEvents="none";var e={email_address:this.email,status:"subscribed"};this.$axios.post("subscribe",e).then((function(e){t.submittingForm=!1,t.subscribed=!0})).catch((function(e){t.subscribed=!0,t.submittingForm=!1,t.$refs.subscribeButton.style.pointerEvents="auto",t.userHasSubscribed=!0}))},UpdatePageIndex:function(){var t=this.$route.params.category||"",e="country-blog";t&&(e="country-blog-category-category"),this.$router.push({name:e,params:{category:t},query:{page:this.page}})},onElementObserved:function(t){var e=this;t.forEach((function(t){switch(t.target){case e.$refs.subscribeSection:var a=395;t.isIntersecting&&(a=0),e.$refs.subscribeSection.style.setProperty("--stroke-dashoffset",a)}}))}},watch:{"$route.query.page":function(){var t=r.$route.query.page||1,e="",a=r.$store.state.categories.list,o=r.$route.params.category||"";(o="all"===o?"":o)&&(e=a.filter((function(t){return t.slug==o}))[0].id),r.$axios.post("blog/getPosts",{categoryId:e,page:t}).then((function(t){r.page=r.$route.query.page;var e=t.data.posts;r.posts=e,r.topPost=e[0],r.totalPages=t.data.totalPages,window.scrollTo(0,0)})).catch((function(t){}))}}}}).call(this,a(88))},388:function(t,e,a){"use strict";a(317)},389:function(t,e,a){(e=a(11)(!1)).push([t.i,":root{--background-color:#f4f6f8}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}.c-post{display:flex;justify-content:space-between;align-items:center;font-weight:500;--stroke-anim-state:paused;--stroke-dasharray:2,5}.c-post__image{position:relative;width:580px;height:330px;z-index:1;border-radius:5px}.c-post__image-stroke{position:absolute;left:0;top:0;width:100%;height:100%;transform:scaleY(1.05);stroke-dasharray:var(--stroke-dasharray);stroke-dashoffset:0;-webkit-animation:stroke 10s linear infinite var(--stroke-anim-state);animation:stroke 10s linear infinite var(--stroke-anim-state);z-index:1;transition:1.2s cubic-bezier(.16,1,.3,1)}@-webkit-keyframes stroke{to{stroke-dashoffset:-800}}@keyframes stroke{to{stroke-dashoffset:-800}}.c-post__image img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;transform:translate(3%,-5%);z-index:0;border-radius:inherit}.c-post__text-wrap{display:flex;flex-direction:column;width:100%;max-width:360px;margin-left:63px}.c-post__category{color:#eb5757;text-decoration:none}.c-post__title{color:inherit;display:inline-block;text-decoration:none;margin:15px 0 27px;position:relative;cursor:pointer}.c-post__title:hover{text-decoration:underline}.c-post__date-length{display:flex;align-items:center;text-transform:uppercase}.c-post__date-length>:nth-child(2){width:4px;height:4px;background-color:var(--text-color);border-radius:50%;margin:0 8px}@media screen and (max-width:1024px){.c-post{justify-content:center}.c-post__image{width:450px;height:256px;flex-shrink:0}}@media screen and (max-width:750px){.c-post{flex-direction:column;margin:0 auto}.c-post__image{width:100%;height:310px}.c-post__image img{transform:translate(0)}.c-post__image-stroke{display:none}.c-post__text-wrap{margin-left:0;max-width:100%;margin-top:30px}}@media screen and (max-width:600px){.c-post__image{width:100%;height:250px}}@media screen and (max-width:480px){.c-post__image{width:100%;height:190px}}",""]),t.exports=e},390:function(t,e,a){"use strict";a(15),a(21),a(22),a(8);var r=a(391),o=a.n(r),i=a(135),s=a.n(i),n=a(448),c=a.n(n);e.a={methods:{getCategoryColor:function(t){if(!t)return"#EB5757";var e=this.$store.state.categories.list.filter((function(e){return e.id===t}))[0];return e.color?e.color:"#EB5757"},getCleanTitle:function(t){return null!==t&&""!==t&&(t=t.toString(),o.a.decode(t))},getPostImage:function(t){return t?t.source_url:""},getReadingTime:function(t){return c()(t).text},getDatePosted:function(t){return s()(t).format("ll")},getCategoryName:function(t){return this.$store.state.categories.list.filter((function(e){return e.id===t}))[0].name},getCategorySlug:function(t){return this.$store.state.categories.list.filter((function(e){return e.id===t}))[0].slug}}}},431:function(t,e,a){"use strict";a(15);var r={props:{category:{type:String,default:""},slug:{type:String,default:""},title:{type:String,default:""},imgSrc:{type:String,default:""},date:{type:String,default:""},readingTime:{type:String,default:""}},methods:{getCategoryColor:function(t){var e=this.$store.state.categories.list.filter((function(e){return e.id===t}))[0];return e.color?e.color:"#EB5757"},getCategoryName:function(t){return this.$store.state.categories.list.filter((function(e){return e.id===t}))[0].name},getCategorySlug:function(t){return this.$store.state.categories.list.filter((function(e){return e.id===t}))[0].slug},postMouseoverHandler:function(t){var e=t.target.parentElement.parentElement;e.style.setProperty("--stroke-anim-state","running"),e.style.setProperty("--stroke-dasharray","10, 5")},postMouseleaveHandler:function(t){var e=t.target.parentElement.parentElement;e.style.setProperty("--stroke-anim-state","paused"),e.style.setProperty("--stroke-dasharray","2, 5")}}},o=(a(388),a(2)),i=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"c-post"},[a("div",{staticClass:"c-post__image"},[a("svg",{ref:"postStroke",staticClass:"c-post__image-stroke",attrs:{width:"580",height:"330",viewBox:"0 0 580 330",fill:"none"}},[a("rect",{style:{stroke:t.getCategoryColor(t.category)},attrs:{x:"0.5",y:"0.5",width:"579",height:"325.126",rx:"4.5"}})]),t._v(" "),a("img",{attrs:{src:t.imgSrc,alt:"article feature image"}})]),t._v(" "),a("div",{staticClass:"c-post__text-wrap"},[a("nuxt-link",{staticClass:"c-post__category",style:{color:t.getCategoryColor(t.category)},attrs:{to:{name:"country-blog-category-category",params:{category:t.getCategorySlug(t.category)}}}},[t._v("\n      "+t._s(t.getCategoryName(t.category))+"\n    ")]),t._v(" "),a("nuxt-link",{staticClass:"c-post__title u-font-h2",attrs:{to:{name:"country-blog-article",params:{article:t.slug}}},domProps:{innerHTML:t._s(t.title)},nativeOn:{mouseover:function(e){return t.postMouseoverHandler(e)},mouseleave:function(e){return t.postMouseleaveHandler(e)}}}),t._v(" "),a("div",{staticClass:"c-post__date-length u-font-xs"},[a("span",[t._v(t._s(t.date))]),t._v(" "),a("span"),t._v(" "),a("span",[t._v(t._s(t.readingTime))])])],1)])}),[],!1,null,null,null);e.a=i.exports},449:function(t,e,a){var r=a(826);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(12).default)("075121d4",r,!0,{sourceMap:!1})},825:function(t,e,a){"use strict";a(449)},826:function(t,e,a){(e=a(11)(!1)).push([t.i,"[data-v-66de3012]:root{--background-color:#f4f6f8}html[data-v-66de3012]{box-sizing:border-box}*[data-v-66de3012],[data-v-66de3012]:after,[data-v-66de3012]:before{box-sizing:inherit}.c-home[data-v-66de3012]{margin:50px auto 66px;width:100%}@media screen and (max-width:600px){.c-home[data-v-66de3012]{margin-top:90px}}.c-home__hero .c-post[data-v-66de3012]{flex-direction:column;align-items:center;text-align:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 auto}.c-home__hero .c-post__title[data-v-66de3012]{max-width:550px;margin-bottom:25px}@media screen and (max-width:600px){.c-home__hero .c-post__title[data-v-66de3012]{margin-bottom:22px;max-width:none}}.c-home__hero .c-post__image[data-v-66de3012]{width:100%;max-width:804px;height:auto;max-height:550px;-o-object-fit:cover;object-fit:cover;margin-top:30px;border-radius:5px}@media screen and (max-width:980px){.c-home__hero .c-post__image[data-v-66de3012]{max-width:700px}}.c-home__hero-arrow[data-v-66de3012]{display:block;margin:30px auto 0;--length:50;stroke-dasharray:var(--length);stroke-dashoffset:var(--length)}@media screen and (max-width:480px){.c-home__hero-arrow[data-v-66de3012]{height:130px;transform:scaleX(1.15)}}.c-home__categories[data-v-66de3012]{--left-right-padding:10.7vw;position:-webkit-sticky;position:sticky;background-color:var(--bg-color);z-index:10;top:-5px;font-size:1.4rem;text-transform:uppercase;width:100vw;margin-top:30px;padding:42px var(--left-right-padding);display:flex;justify-content:space-between;font-family:Flutterwave;font-weight:700;border-top:1px dashed #888;border-bottom:1px dashed #888;margin-bottom:104px;--active-color:#eb5757}@media screen and (max-width:1280px){.c-home__categories[data-v-66de3012]{--left-right-padding:4vw}}@media screen and (max-width:980px){.c-home__categories[data-v-66de3012]{flex-wrap:wrap;justify-content:flex-start;padding-bottom:22px}.c-home__categories a[data-v-66de3012]{margin-bottom:20px;margin-right:40px}}@media screen and (max-width:480px){.c-home__categories[data-v-66de3012]{display:none;--left-right-padding:1vw}}.c-home__categories a[data-v-66de3012]{color:var(--text-color);text-decoration:none;transition:color .2s ease-out}.c-home__categories a.is-active[data-v-66de3012]{color:var(--active-color)}.c-home__categories-mobile[data-v-66de3012]{border-top:1px dashed #888;border-bottom:1px dashed #888;padding:30px 0 15px;margin:30px 0 100px;font-size:1.2rem;font-family:Flutterwave;font-weight:700;text-transform:uppercase;flex-wrap:wrap;display:none}@media screen and (max-width:480px){.c-home__categories-mobile[data-v-66de3012]{display:flex}}.c-home__categories-mobile a[data-v-66de3012]{color:inherit;border-radius:30px;padding:8px;background-color:transparent;text-decoration:none;border:.8px solid var(--text-color);margin-right:10px;margin-bottom:15px;opacity:.6}.c-home__categories-mobile a.is-active[data-v-66de3012]{opacity:1;color:#eb5757;border:.8px solid rgba(235,87,87,.4);background-color:rgba(235,87,87,.1)}.c-home__categories-mobile a[data-v-66de3012]:last-child{margin-right:0}.c-home__posts-wrap .c-post[data-v-66de3012]{margin-top:158px}.c-home__posts-wrap .c-post[data-v-66de3012]:first-child{margin-top:0}@media screen and (max-width:750px){.c-home__posts-wrap .c-post[data-v-66de3012]{margin-top:80px}}.c-home__subscribe[data-v-66de3012]{display:flex;width:100%}@media screen and (max-width:1024px){.c-home__subscribe[data-v-66de3012]{padding:0 20px}}@media screen and (max-width:750px){.c-home__subscribe[data-v-66de3012]{padding:0}}.c-home__subscribe-container[data-v-66de3012]{width:100%;display:flex;justify-content:center;flex-direction:column;background-color:#eb5757;color:#171717;margin:150px auto;padding:0 177px;height:360px;border-radius:5px;text-align:center;--stroke-dashoffset:395}@media screen and (max-width:800px){.c-home__subscribe-container[data-v-66de3012]{padding:0 8vw}}@media screen and (max-width:600px){.c-home__subscribe-container[data-v-66de3012]{padding:20px;margin:110px auto}}.c-home__subscribe-heading span[data-v-66de3012]{position:relative;display:inline-block}.c-home__subscribe-heading span svg[data-v-66de3012]{position:absolute;left:0;top:-5px;stroke-dasharray:395;stroke-dashoffset:var(--stroke-dashoffset);transition:.8s linear .4s}@media screen and (max-width:600px){.c-home__subscribe-heading span svg[data-v-66de3012]{transform:scale(.85);left:-10px}}.c-home__subscribe-subtext[data-v-66de3012]{font-size:1.6rem;line-height:20px;margin-top:20px}.c-home__subscribe form[data-v-66de3012]{display:flex;justify-content:center;margin-top:40px}.c-home__subscribe form input[type=email][data-v-66de3012]{width:50%;margin-right:15px;border-radius:5px;border:none;padding:17px;font-size:1.4rem}.c-home__subscribe form .c-button[data-v-66de3012]{display:flex;align-items:center;justify-content:center;width:155px;height:53px;color:#fff;background-color:#171717;text-transform:capitalize}@-webkit-keyframes rotate-data-v-66de3012{to{transform:rotate(1turn)}}@keyframes rotate-data-v-66de3012{to{transform:rotate(1turn)}}.c-home__subscribe form .c-button svg[data-v-66de3012]{-webkit-animation:rotate-data-v-66de3012 1.4s linear infinite;animation:rotate-data-v-66de3012 1.4s linear infinite}@media screen and (max-width:600px){.c-home__subscribe form[data-v-66de3012]{flex-direction:column}.c-home__subscribe form .c-button[data-v-66de3012],.c-home__subscribe form input[type=email][data-v-66de3012]{width:100%}.c-home__subscribe form .c-button[data-v-66de3012]{margin-top:10px}}.c-paginate[data-v-66de3012]{margin-top:150px;display:flex;justify-content:center;font-weight:500}@media screen and (max-width:600px){.c-paginate[data-v-66de3012]{margin-top:90px}}.c-paginate[data-v-66de3012]  li{list-style-type:none;border-radius:5px}.c-paginate[data-v-66de3012]  li:hover{background-color:rgba(235,87,87,.2)}.c-paginate[data-v-66de3012]  li a{display:block;padding:8px 15px;outline:none}.c-paginate[data-v-66de3012]  .c-paginate__active{color:#fff;background-color:#eb5757}.c-paginate[data-v-66de3012]  .c-paginate__active:hover{background-color:#eb5757}.c-paginate[data-v-66de3012]  .c-paginate__break-view:hover{background-color:transparent}.c-paginate[data-v-66de3012]  .c-paginate__break-view a{pointer-events:none}",""]),t.exports=e},901:function(t,e,a){"use strict";a.r(e);var r=a(387).a,o=(a(825),a(2)),i=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"c-home"},[a("div",{staticClass:"l-blog-container"},[a("div",{staticClass:"c-home__hero"},[a("div",{staticClass:"c-post"},[a("nuxt-link",{staticClass:"c-post__category u-font-sm",style:{color:t.getCategoryColor(t.topPost.categories[0])},attrs:{to:{name:"country-blog-category-category",params:{category:t.getCategorySlug(t.topPost.categories[0])}}}},[t._v("\n          "+t._s(t.getCategoryName(t.topPost.categories[0]))+"\n        ")]),t._v(" "),a("nuxt-link",{staticClass:"c-post__title u-font-h1",attrs:{to:{name:"country-blog-article",params:{article:t.topPost.slug}}},domProps:{innerHTML:t._s(t.getCleanTitle(t.topPost.title.rendered))}}),t._v(" "),a("div",{staticClass:"c-post__date-length u-font-medium u-font-xs"},[a("span",[t._v(t._s(t.getDatePosted(t.topPost.date)))]),t._v(" "),a("span"),t._v(" "),a("span",[t._v(t._s(t.getReadingTime(t.topPost.content.rendered)))])]),t._v(" "),a("img",{staticClass:"c-post__image",attrs:{src:t.getPostImage(t.topPost.better_featured_image),alt:"article feature image"}})],1),t._v(" "),a("svg",{staticClass:"c-home__hero-arrow",attrs:{width:"10",height:"157",viewBox:"0 0 10 157",fill:"none"}},[a("path",{attrs:{d:"M4.57574 156.424C4.81005 156.659 5.18995 156.659 5.42426 156.424L9.24264 152.606C9.47696 152.372 9.47696 151.992 9.24264 151.757C9.00833 151.523 8.62843 151.523 8.39411 151.757L5 155.151L1.60589 151.757C1.37157 151.523 0.991674 151.523 0.757359 151.757C0.523045 151.992 0.523045 152.372 0.757359 152.606L4.57574 156.424ZM4.4 0L4.4 156H5.6L5.6 0L4.4 0Z",fill:"#EB5757"}})])]),t._v(" "),a("div",{ref:"blogCategories",staticClass:"c-home__categories-mobile"},[a("nuxt-link",{class:{"is-active":""===t.activeCategoryId},attrs:{to:{name:"country-blog-category-category",params:{category:"all"}}}},[t._v("\n        All\n      ")]),t._v(" "),a("nuxt-link",{class:{"is-active":8===t.activeCategoryId},attrs:{to:{name:"country-blog-category-category",params:{category:t.getCategorySlug(8)}}}},[t._v("\n        Product Updates\n      ")]),t._v(" "),a("nuxt-link",{class:{"is-active":2===t.activeCategoryId},attrs:{to:{name:"country-blog-category-category",params:{category:t.getCategorySlug(2)}}}},[t._v("Merchant Stories")]),t._v(" "),a("nuxt-link",{class:{"is-active":9===t.activeCategoryId},attrs:{to:{name:"country-blog-category-category",params:{category:t.getCategorySlug(9)}}}},[t._v("\n        Design & Engineering\n      ")]),t._v(" "),a("nuxt-link",{class:{"is-active":4===t.activeCategoryId},attrs:{to:{name:"country-blog-category-category",params:{category:t.getCategorySlug(4)}}}},[t._v("\n        Inside Flutterwave\n      ")])],1)]),t._v(" "),a("div",{ref:"blogCategories",staticClass:"c-home__categories"},[a("nuxt-link",{class:{"is-active":""===t.activeCategoryId},attrs:{to:{name:"country-blog-category-category",params:{category:"all"}}}},[t._v("\n      All\n    ")]),t._v(" "),a("nuxt-link",{class:{"is-active":8===t.activeCategoryId},attrs:{to:{name:"country-blog-category-category",params:{category:t.getCategorySlug(8)}}}},[t._v("\n      Product Updates\n    ")]),t._v(" "),a("nuxt-link",{class:{"is-active":9===t.activeCategoryId},attrs:{to:{name:"country-blog-category-category",params:{category:t.getCategorySlug(9)}}}},[t._v("\n      Design & Engineering\n    ")]),t._v(" "),a("nuxt-link",{class:{"is-active":4===t.activeCategoryId},attrs:{to:{name:"country-blog-category-category",params:{category:t.getCategorySlug(4)}}}},[t._v("\n      Inside Flutterwave\n    ")]),t._v(" "),a("nuxt-link",{class:{"is-active":92===t.activeCategoryId},attrs:{to:{name:"country-blog-category-category",params:{category:t.getCategorySlug(92)}}}},[t._v("\n      Grow with Flutterwave\n    ")]),t._v(" "),a("nuxt-link",{class:{"is-active":2===t.activeCategoryId},attrs:{to:{name:"country-blog-category-category",params:{category:t.getCategorySlug(2)}}}},[t._v("\n      Merchant Stories\n    ")])],1),t._v(" "),a("div",{staticClass:"l-blog-container"},[a("div",{staticClass:"c-home__posts-wrap"},t._l(t.posts.slice(1,t.posts.length-2),(function(e,r){return a("post",{key:r,attrs:{category:e.categories[0],title:e.title.rendered,slug:e.slug,date:t.getDatePosted(e.date),readingTime:t.getReadingTime(e.content.rendered),imgSrc:t.getPostImage(e.better_featured_image)}})})),1),t._v(" "),a("div",{staticClass:"c-home__subscribe",attrs:{id:"js-subscribe"}},[a("div",{ref:"subscribeSection",staticClass:"c-home__subscribe-container"},[t.subscribed?a("p",{staticClass:"c-home__subscribe-appreciation u-font-h1"},[t.userHasSubscribed?[t._v("\n            You already subscribed to our mailing list 🖤\n          ")]:[t._v(" Thank you for subscribing! 🖤 ")]],2):a("div",[a("h1",{staticClass:"c-home__subscribe-heading u-font-h1"},[t._v("\n            Want updates straight to your\n            "),a("span",[t._v("\n              inbox?\n              "),a("svg",{attrs:{width:"92",height:"48",viewBox:"0 0 92 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M76.0138 7.74155C64.7266 5.30446 43.7448 7.74155 32.4655 7.74155C28.7531 7.74155 25.843 10.7809 22.5441 12.4803C16.7811 15.4492 10.3539 17.5257 5.39506 22.6349C3.34543 24.7467 -0.171501 27.8901 1.38706 31.5032C2.5287 34.1498 6.62594 35.4063 8.87742 36.9528C10.7947 38.2697 12.1152 38.2052 14.3966 38.2052C22.9873 38.2052 31.1308 38.2801 39.5616 40.1684C46.843 41.7993 54.2712 43.4894 61.8356 42.3347C67.8865 41.4111 75.1935 41.4372 80.233 36.9867C82.7251 34.7858 90.8189 33.3255 90.9454 29.9372C91.0683 26.6462 90.9454 21.1994 90.9454 17.8495C90.9454 12.8439 83.2251 8.52442 79.5102 5.30446C73.7265 0.29128 65.3727 1.03955 58.3204 1.03955C49.9558 1.03955 41.9811 1.74819 33.7796 3.47664C29.5011 4.37832 25.154 5.77802 21 7.16613C18.2118 8.09781 12.8429 9.77012 11.3085 12.6157C7.58368 19.5237 6.15415 26.6937 6.57775 34.5496C6.73474 37.4611 12.5292 41.1471 14.5938 42.4363C18.9476 45.155 23.0339 45.537 27.8662 46.2612C34.9955 47.3296 42.4183 46.735 49.6145 46.735C55.3719 46.735 59.695 44.1735 64.7266 41.387C66.6112 40.3433 69.1378 39.5247 70.7386 38.2052C72.7683 36.5322 82.7685 30.0013 82.7685 27.3732",stroke:"#14141C","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),t._v(" "),a("p",{staticClass:"c-home__subscribe-subtext"},[t._v("\n            Enter your email to get the latest news from the Flutterwave team,\n            and knowledge you need to build a profitable business.\n          ")]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.subscribe(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"We’ve saved a sweet spot for your email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("button",{ref:"subscribeButton",staticClass:"c-button",attrs:{type:"submit"}},[t.submittingForm?a("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M11 0C11.5378 0 11.9533 0.611111 11.9533 1.36889V4.10667C11.9533 4.86444 11.5133 5.47556 11 5.47556C10.4622 5.47556 10.0467 4.86444 10.0467 4.10667V1.36889C10.0467 0.611111 10.4622 0 11 0ZM18.7733 3.22667C19.14 3.59333 19.0178 4.35111 18.48 4.88889L16.5244 6.84444C15.9867 7.38222 15.2533 7.50444 14.8622 7.13778C14.4956 6.77111 14.6178 6.01333 15.1556 5.47556L17.1111 3.52C17.6733 2.98222 18.4067 2.83556 18.7733 3.22667ZM22 11C22 11.5378 21.3889 11.9533 20.6311 11.9533H17.8689C17.1111 11.9533 16.5 11.5133 16.5 11C16.5 10.4622 17.1111 10.0467 17.8689 10.0467H20.6067C21.3889 10.0467 22 10.4622 22 11ZM18.7733 18.7733C18.4067 19.14 17.6489 19.0178 17.1111 18.48L15.1556 16.5244C14.6178 15.9867 14.4956 15.2533 14.8622 14.8622C15.2289 14.4956 15.9867 14.6178 16.5244 15.1556L18.48 17.1111C19.0178 17.6733 19.1644 18.4067 18.7733 18.7733ZM11 22C10.4622 22 10.0467 21.3889 10.0467 20.6311V17.8689C10.0467 17.1111 10.4867 16.5 11 16.5C11.5378 16.5 11.9533 17.1111 11.9533 17.8689V20.6067C11.9533 21.3889 11.5378 22 11 22ZM3.22667 18.7733C2.86 18.4067 2.98222 17.6489 3.52 17.1111L5.47556 15.1556C6.01333 14.6178 6.74667 14.4956 7.13778 14.8622C7.50444 15.2289 7.38222 15.9867 6.84444 16.5244L4.88889 18.48C4.32667 19.0178 3.59333 19.1644 3.22667 18.7733ZM0 11C0 10.4622 0.611111 10.0467 1.36889 10.0467H4.10667C4.86444 10.0467 5.47556 10.4867 5.47556 11C5.47556 11.5378 4.86444 11.9533 4.10667 11.9533H1.36889C0.611111 11.9533 0 11.5378 0 11ZM3.22667 3.22667C3.59333 2.86 4.35111 2.98222 4.88889 3.52L6.84444 5.47556C7.38222 6.01333 7.50444 6.74667 7.13778 7.13778C6.77111 7.50444 6.01333 7.38222 5.47556 6.84444L3.52 4.88889C2.98222 4.32667 2.83556 3.59333 3.22667 3.22667Z",fill:"white"}})]):a("span",[t._v("Subscribe")])])])])])]),t._v(" "),a("div",{staticClass:"c-home__posts-wrap"},t._l(t.posts.slice(3,t.posts.length),(function(e,r){return a("post",{key:r,attrs:{category:e.categories[0],title:e.title.rendered,slug:e.slug,date:t.getDatePosted(e.date),readingTime:t.getReadingTime(e.content.rendered),imgSrc:t.getPostImage(e.better_featured_image)}})})),1),t._v(" "),a("paginate",{staticClass:"c-paginate",attrs:{"page-count":t.totalPages,"click-handler":t.UpdatePageIndex,"prev-text":"Prev","next-text":"Next","hide-prev-next":!0,"container-class":"c-paginate","active-class":"c-paginate__active","break-view-class":"c-paginate__break-view"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])}),[],!1,null,"66de3012",null);e.default=i.exports}}]);