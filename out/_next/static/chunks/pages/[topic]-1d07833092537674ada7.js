_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{UcUd:function(e,t,s){"use strict";s.r(t),s.d(t,"__N_SSG",(function(){return p})),s.d(t,"default",(function(){return w}));var i=s("nKUr"),n=s("MX0m"),a=s.n(n),c=s("q1tI"),r=s("nOHt"),x=s("YFqc"),l=s.n(x),o=s("2pyn"),d=s("8lYe"),j=s("2Z6z"),m=s("2UPt"),b=Object(c.lazy)((function(){return s.e(18).then(s.bind(null,"3KtA"))})),h=Object(c.lazy)((function(){return s.e(21).then(s.bind(null,"i/YD"))})),p=!0;function w(e){var t=e.topicsData,s=void 0===t?{}:t,n=Object(r.useRouter)().query.topic,x=Object(c.useState)(768),p=x[0],w=x[1],f=Object(c.useState)({}),g=f[0],u=f[1],k=Object.keys(s).filter((function(e,t){return t<=4&&n!==e}))||[];return Object(c.useEffect)((function(){w(window.innerWidth);var e=function(){return w(window.innerWidth)};return window.addEventListener("resize",e),console.log(n,"arun2"),n&&s&&s[n]&&u(s[n]),s&&s[n]?(document.querySelector("html").style.visibility="visible",function(){return window.removeEventListener("resize",e)}):(window.location.href="404",!1)}),[n]),0===Object.keys(g).length&&g.constructor===Object?Object(i.jsx)("div",{}):Object(i.jsxs)("div",{className:"jsx-3115516384 container",children:[Object(i.jsx)(o.default,{title:"".concat(g.heading," - Cinema Period - cinemaperiod.com")}),Object(i.jsxs)("main",{className:"jsx-3115516384 main",children:[p<768?Object(i.jsx)(j.default,{}):Object(i.jsx)(m.default,{}),Object(i.jsxs)("section",{className:"jsx-3115516384 main-container",children:[Object(i.jsxs)("section",{className:"jsx-3115516384 content",children:[Object(i.jsx)("h1",{className:"jsx-3115516384 title",children:g.heading}),Object(i.jsx)("h2",{className:"jsx-3115516384 subtitle",children:g.subHeading}),Object(i.jsxs)("p",{className:"jsx-3115516384 description",children:[Object(i.jsxs)("span",{className:"jsx-3115516384",children:["Published on:\xa0",Object(i.jsx)("span",{className:"jsx-3115516384 highlight-text",children:g.publishedDate}),"\xa0"]}),Object(i.jsxs)("span",{className:"jsx-3115516384",children:["Author:\xa0",Object(i.jsx)("span",{className:"jsx-3115516384 highlight-text",children:g.author}),"\xa0"]}),Object(i.jsxs)("span",{className:"jsx-3115516384",children:["Reading Time:\xa0",Object(i.jsx)("span",{className:"jsx-3115516384 highlight-text",children:g.readTime}),"\xa0"]})]}),Object(i.jsxs)("div",{className:"jsx-3115516384 grid",children:[Object(i.jsx)("section",{style:{flexBasis:"100%",textAlign:"center",width:"100%"},className:"jsx-3115516384 card",children:Object(i.jsx)("figure",{className:"jsx-3115516384",children:Object(i.jsx)("img",{src:g.heroImage,alt:g.heading,className:"jsx-3115516384 heroImage"})})}),g&&g.basicDetails&&Object(i.jsxs)("section",{className:"jsx-3115516384 card",children:[g.basicDetails.director&&Object(i.jsxs)("p",{className:"jsx-3115516384",children:[Object(i.jsx)("span",{className:"jsx-3115516384 highlight-text",children:"Director:"}),"\xa0 ",g.basicDetails.director]}),g.basicDetails.cast&&Object(i.jsxs)("p",{className:"jsx-3115516384",children:[Object(i.jsx)("span",{className:"jsx-3115516384 highlight-text",children:"Cast:"}),"\xa0 ",g.basicDetails.cast.join(",")]}),g.basicDetails.streamingOn&&Object(i.jsxs)("p",{className:"jsx-3115516384",children:[Object(i.jsx)("span",{className:"jsx-3115516384 highlight-text",children:"Streaming on:"}),"\xa0 ",g.basicDetails.streamingOn]})]}),g.textContent&&g.textContent.length>0&&Object(i.jsx)("section",{className:"jsx-3115516384 card",children:Object(i.jsx)("p",{className:"jsx-3115516384",children:g.textContent[0]})}),g.textContent&&g.textContent.length>0&&g.textContent[1]&&Object(i.jsx)("section",{className:"jsx-3115516384 card",children:Object(i.jsx)("p",{className:"jsx-3115516384",children:g.textContent[1]})}),g.youtubeLinks&&g.youtubeLinks.length>0&&g.youtubeLinks[0].trailer&&Object(i.jsx)("section",{className:"jsx-3115516384 card video-card",children:Object(i.jsx)(c.Suspense,{fallback:Object(i.jsx)(i.Fragment,{children:"Loading..."}),children:Object(i.jsx)(h,{id:g.youtubeLinks[0].trailer,windowWidth:p})})}),g.textContent&&g.textContent.length>0&&g.textContent[2]&&Object(i.jsx)("section",{className:"jsx-3115516384 card",children:Object(i.jsx)("p",{className:"jsx-3115516384",children:g.textContent[2]})}),g.textContent&&g.textContent.length>0&&g.textContent[3]&&Object(i.jsx)("section",{className:"jsx-3115516384 card",children:Object(i.jsx)("p",{className:"jsx-3115516384",children:g.textContent[3]})}),g.tweetLinks&&g.tweetLinks.length>0&&Object(i.jsx)("section",{className:"jsx-3115516384 card tweet-card",children:Object(i.jsx)(c.Suspense,{fallback:Object(i.jsx)(i.Fragment,{children:"Loading..."}),children:Object(i.jsx)(b,{id:g.tweetLinks[0],options:{width:"500"}})})}),g.textContent&&g.textContent.length>0&&g.textContent[4]&&Object(i.jsx)("section",{className:"jsx-3115516384 card",children:Object(i.jsx)("p",{className:"jsx-3115516384",children:g.textContent[4]})}),g.textContent&&g.textContent.length>0&&g.textContent[5]&&Object(i.jsx)("section",{className:"jsx-3115516384 card",children:Object(i.jsx)("p",{className:"jsx-3115516384",children:g.textContent[5]})}),g.youtubeLinks&&g.youtubeLinks.length>0&&g.youtubeLinks[1]&&g.youtubeLinks[1].trailer&&Object(i.jsx)("section",{className:"jsx-3115516384 card video-card",children:Object(i.jsx)(c.Suspense,{fallback:Object(i.jsx)(i.Fragment,{children:"Loading..."}),children:Object(i.jsx)(h,{id:g.youtubeLinks[1].trailer,windowWidth:p})})}),g.textContent&&g.textContent.length>0&&g.textContent[6]&&Object(i.jsx)("section",{className:"jsx-3115516384 card",children:Object(i.jsx)("p",{className:"jsx-3115516384",children:g.textContent[6]})}),"review"!==g.type&&g.secondaryImage&&Object(i.jsx)("section",{style:{flexBasis:"100%",textAlign:"center",width:"100%"},className:"jsx-3115516384 card",children:Object(i.jsx)("figure",{className:"jsx-3115516384",children:Object(i.jsx)("img",{src:g.secondaryImage,alt:g.heading,className:"jsx-3115516384 heroImage"})})}),g.textContent&&g.textContent.length>0&&g.textContent[7]&&Object(i.jsx)("section",{className:"jsx-3115516384 card",children:Object(i.jsx)("p",{className:"jsx-3115516384",children:g.textContent[7]})}),g.textContent&&g.textContent.length>0&&g.textContent[8]&&Object(i.jsx)("section",{className:"jsx-3115516384 card",children:Object(i.jsx)("p",{className:"jsx-3115516384",children:g.textContent[8]})}),g.textContent&&g.textContent.length>0&&g.textContent[9]&&Object(i.jsx)("section",{className:"jsx-3115516384 card",children:Object(i.jsx)("p",{className:"jsx-3115516384",children:g.textContent[9]})}),g.textContent&&g.textContent.length>0&&g.textContent[10]&&Object(i.jsx)("section",{className:"jsx-3115516384 card",children:Object(i.jsx)("p",{className:"jsx-3115516384",children:g.textContent[10]})})]})]}),Object(i.jsx)("aside",{className:"jsx-3115516384 sidebar",children:Object(i.jsxs)("div",{className:"jsx-3115516384 grid",children:[Object.keys(g).length>0&&k&&k.length>0&&Object(i.jsxs)("section",{className:"jsx-3115516384 card related-reviews-block",children:[Object(i.jsx)("h3",{className:"jsx-3115516384 related-reviews-heading",children:"Related Posts"}),k.map((function(e,t){var n=s[e]||null;return n?Object(i.jsx)("div",{className:"jsx-3115516384 movie-card",children:Object(i.jsxs)("div",{className:"jsx-3115516384 movie-card-container",children:[Object(i.jsx)("img",{src:n.posterImage||n.heroImage,alt:n.heading,className:"jsx-3115516384"}),Object(i.jsx)(l.a,{href:e,target:"_blank",children:Object(i.jsxs)("a",{className:"jsx-3115516384 movie-card-data",children:[Object(i.jsx)("h5",{className:"jsx-3115516384",children:n.heading}),Object(i.jsxs)("h6",{className:"jsx-3115516384",children:["Date: ",n.publishedDate]})]})})]})},t):null}))]}),g.socialTags&&g.socialTags.length>0&&Object(i.jsxs)("section",{className:"jsx-3115516384 card",children:[Object(i.jsx)("h3",{className:"jsx-3115516384 social-posts-heading",children:"Social Posts"}),Object(i.jsx)("div",{className:"jsx-3115516384 social-tags",children:g.socialTags.map((function(e,t){return e?Object(i.jsx)("span",{className:"jsx-3115516384 "+(e.media||""),children:Object(i.jsx)("a",{href:e.url,target:"_blank",className:"jsx-3115516384",children:e.content})},t):null}))})]}),g.movieGallery&&g.movieGallery.length>0&&Object(i.jsxs)("section",{className:"jsx-3115516384 card",children:[Object(i.jsx)("h3",{className:"jsx-3115516384 movie-gallery-heading",children:"Movie Gallery"}),Object(i.jsx)("div",{className:"jsx-3115516384 gallery-container",children:g.movieGallery.map((function(e,t){return e?Object(i.jsx)("div",{className:"jsx-3115516384 image-wrapper",children:Object(i.jsx)("img",{src:e,alt:g.heading,className:"jsx-3115516384"})},t):null}))})]})]})})]})]}),Object(i.jsx)(d.default,{}),Object(i.jsx)(a.a,{id:"3115516384",children:[".container.jsx-3115516384{min-height:100vh;padding:0 1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;width:90vw;max-width:90vw;}",".main.jsx-3115516384{padding:1rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}",".highlight-text.jsx-3115516384{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-3115516384 a.jsx-3115516384:hover,.title.jsx-3115516384 a.jsx-3115516384:focus,.title.jsx-3115516384 a.jsx-3115516384:active{-webkit-text-decoration:underline;text-decoration:underline;}",".title.jsx-3115516384,.subtitle.jsx-3115516384{margin:0;line-height:1.15;font-size:3.2rem;margin:0 auto;display:block;}",".subtitle.jsx-3115516384{margin-top:1.5rem;font-size:1.8rem;font-weight:400;}",".title.jsx-3115516384,.subtitle.jsx-3115516384,.description.jsx-3115516384{text-align:center;}",".description.jsx-3115516384{line-height:1.5;font-size:1.4rem;margin-top:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}",".description.jsx-3115516384>p.jsx-3115516384{padding-left:0.5rem;padding-right:0.5rem;}",".grid.jsx-3115516384{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:1.8rem;}",".sidebar.jsx-3115516384 .grid.jsx-3115516384,.related-reviews-heading.jsx-3115516384{margin-top:0;}",".card.jsx-3115516384{margin:0 0 3rem 0;padding:0;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;}",".card.video-card.jsx-3115516384{margin:0 auto 2rem;}",".card.tweet-card.jsx-3115516384{max-width:100%;width:500px;margin:0 auto;}",".main-container.jsx-3115516384{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:100%;}",".main-container.jsx-3115516384 .content.jsx-3115516384{-webkit-flex-basis:70%;-ms-flex-preferred-size:70%;flex-basis:70%;max-width:70%;padding:0 1rem;}",".main-container.jsx-3115516384 .sidebar.jsx-3115516384{-webkit-flex-basis:30%;-ms-flex-preferred-size:30%;flex-basis:30%;max-width:30%;}",".card.jsx-3115516384 h3.jsx-3115516384{margin:0rem 0 1rem;font-size:2.5rem;font-weight:600;}",".card.jsx-3115516384 p.jsx-3115516384{margin:0;font-size:2rem;line-height:1.5;}",".card.jsx-3115516384 .downloadBtn.jsx-3115516384{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;}",".card.jsx-3115516384 .downloadBtn.jsx-3115516384 button.jsx-3115516384{padding:15px 20px;border-radius:5px;outline:none;border:1px solid #000;background:#fff;color:#000;font-size:1.8rem;font-weight:bold;cursor:pointer;}",".card.jsx-3115516384 .downloadBtn.jsx-3115516384 button.jsx-3115516384:hover{-webkit-text-decoration:underline;text-decoration:underline;}",".card.jsx-3115516384 ul.jsx-3115516384{margin-top:2rem;}",".card.jsx-3115516384 ul.jsx-3115516384 li.jsx-3115516384{line-height:1.5;font-size:2rem;margin-left:2.5rem;}",".link.jsx-3115516384{-webkit-text-decoration:underline;text-decoration:underline;}",".movie-card.jsx-3115516384{margin-bottom:1rem;}",".movie-card-container.jsx-3115516384{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".movie-card-container.jsx-3115516384>img.jsx-3115516384{height:7rem;max-height:7rem;border-radius:50%;min-width:8rem;max-width:8rem;}",".movie-card-data.jsx-3115516384{padding-left:0.5rem;cursor:pointer;-webkit-transition:color .3s;transition:color .3s;}",".movie-card-data.jsx-3115516384:hover h5.jsx-3115516384{color:#CD5C5C;}",".movie-card-data.jsx-3115516384>h5.jsx-3115516384{font-size:2rem;line-height:2rem;padding-bottom:0.4rem;font-weight:600;}",".movie-card-data.jsx-3115516384>h6.jsx-3115516384{font-size:1.2rem;}",".heroImage.jsx-3115516384{max-width:100%;height:auto;max-height:500px;}",".social-tags.jsx-3115516384{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}",".social-tags.jsx-3115516384>span.jsx-3115516384{background:rgb(29,161,242);padding:5px 10px;border-radius:15px;color:#000;font-size:1.4rem;font-weight:600;margin:0 10px 10px 0;cursor:pointer;}",".social-tags.jsx-3115516384>span.facebook.jsx-3115516384{background:#1877f2;}",".social-tags.jsx-3115516384>span.pinterest.jsx-3115516384{background:#e60023;}",".social-tags.jsx-3115516384>span.youtube.jsx-3115516384{background:#f00;}",".social-tags.jsx-3115516384>span.instagram.jsx-3115516384{background:#405DE6;}",".social-tags.jsx-3115516384>span.jsx-3115516384>a.jsx-3115516384{color:#fff;}",".gallery-container.jsx-3115516384{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}",".gallery-container.jsx-3115516384>.image-wrapper.jsx-3115516384{-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;padding:0.5rem;overflow:hidden;}",".gallery-container.jsx-3115516384>.image-wrapper.jsx-3115516384>img.jsx-3115516384{width:100%;max-width:100%;min-height:100%;border-radius:0.5rem;max-height:150px;cursor:pointer;-webkit-transition:opacity 0.2s ease-in-out,-webkit-transform 0.4s ease-in;-webkit-transition:opacity 0.2s ease-in-out,transform 0.4s ease-in;transition:opacity 0.2s ease-in-out,transform 0.4s ease-in;}",".gallery-container.jsx-3115516384>.image-wrapper.jsx-3115516384>img.jsx-3115516384:hover{opacity:0.9;-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}","@media only screen and (max-width:1200px) and (min-width:768px){.main-container.jsx-3115516384>.content.jsx-3115516384{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%;}}","@media only screen and (max-width:768px){.title.jsx-3115516384{font-size:3.5rem;}.title.jsx-3115516384>span.jsx-3115516384{white-space:nowrap;}.description.jsx-3115516384{margin:0.8rem;}.description.jsx-3115516384 .code.jsx-3115516384{font-size:2.1rem;}.grid.jsx-3115516384{width:80vw;margin:0 auto;max-width:1000px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.card.jsx-3115516384{text-align:left;}.related-reviews-block.jsx-3115516384{-webkit-order:2;-ms-flex-order:2;order:2;}}","@media only screen and (max-width:1024px) and (min-width:768px){.container.jsx-3115516384{min-height:50vh;}}","@media only screen and (max-width:1150px){.container.jsx-3115516384{overflow:hidden;margin:0 auto;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0;width:100vw;}.main.jsx-3115516384{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;}.main-container.jsx-3115516384{-webkit-flex-basis:90%;-ms-flex-preferred-size:90%;flex-basis:90%;max-width:90%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.main-container.jsx-3115516384>.content.jsx-3115516384{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%;}.main-container.jsx-3115516384>.sidebar.jsx-3115516384{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%;}.title.jsx-3115516384{font-size:3.2rem;}.grid.jsx-3115516384{max-width:100%;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.card.jsx-3115516384{width:100%;max-width:100%;}iframe.jsx-3115516384{width:100%;max-width:100%;height:auto;}.card.jsx-3115516384 figure.jsx-3115516384,.card.jsx-3115516384 figure.jsx-3115516384 img.jsx-3115516384{width:100%;max-width:100%;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;}.social-posts-heading.jsx-3115516384,.related-reviews-heading.jsx-3115516384,.movie-gallery-heading.jsx-3115516384{text-align:center;}.social-tags.jsx-3115516384{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}"]})]})}},g6hJ:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[topic]",function(){return s("UcUd")}])}},[["g6hJ",1,2,0,3,4]]]);