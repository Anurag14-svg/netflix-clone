(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(33),s=n.n(i),o=(n(46),n(41)),r=n(13),l=(n(47),n(6)),d=n.n(l),j=n(11),h=n(2),u=n(3),b=n(34),v=n.n(b).a.create({baseURL:"https://api.themoviedb.org/3"}),m=(n(66),n(0));var f=function(e){var t=e.title,n=e.fetchURL,a=e.isLarge,i=e.getMoviedata,s=e.margin,o=e.equalLength,r=Object(c.useState)([]),l=Object(h.a)(r,2),b=l[0],f=l[1],p=Object(u.f)();return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(n);case 2:return t=e.sent,f(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(m.jsxs)("div",{className:"row ".concat(s&&"removeMargin"),children:[Object(m.jsx)("h2",{children:t}),Object(m.jsx)("div",{className:"row_posters ".concat(o&&"equallength"),children:b.map((function(e){return Object(m.jsx)("img",{onClick:function(){return t=(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.original_name),n=e.backdrop_path,c=e.overview,i(t,n,c),void p.push("/film");var t,n,c},className:"row_poster ".concat(a&&"row_posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))})]})},p="ea7479c21e9be3689145860fe7650bf2",O={fetchTrending:"/discover/movie?api_key=".concat(p,"&with_network=213"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(p,"&with_network=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(p,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(p,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(p,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(p,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(p,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(p,"&with_genres=99"),searchAPI:"/search/movie?&api_key=".concat(p,"&query="),fetchTvShows:"/discover/tv?api_key=".concat(p,"&language=en-US&page=5")};n(76);var x=function(e){var t,n,a=Object(c.useState)([]),i=Object(h.a)(a,2),s=i[0],o=i[1],r=Object(u.f)();return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(O.fetchNetflixOriginals);case 2:return t=e.sent,o(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(m.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n            "https://image.tmdb.org/t/p/original/'.concat(null===s||void 0===s?void 0:s.backdrop_path,'"\n         )'),backgroundPosition:"top center"},children:[Object(m.jsxs)("div",{className:"bannercontent",children:[Object(m.jsx)("h1",{className:"banner_title",children:(null===s||void 0===s?void 0:s.title)||(null===s||void 0===s?void 0:s.name)||(null===s||void 0===s?void 0:s.original_name)}),Object(m.jsxs)("div",{className:"banner_buttons",children:[Object(m.jsx)("button",{onClick:function(){console.log("Movie Clicked"),r.push("./movie"),e.handleMoviePlay(s)},className:"banner_button",children:"Play"}),Object(m.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(m.jsx)("h1",{className:"banner_description",children:(t=null===s||void 0===s?void 0:s.overview,n=120,(null===t||void 0===t?void 0:t.length)>n?t.substr(0,n-1)+"...":t)})]}),Object(m.jsx)("div",{className:"banner_fadebottom"})]})};n(77);var g=function(e){var t=Object(c.useState)(""),n=Object(h.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(!1),o=Object(h.a)(s,2),r=o[0],l=o[1],b=Object(u.f)(),f=Object(c.useState)(""),p=Object(h.a)(f,2),x=p[0],g=p[1],w=Object(c.useState)(!1),N=Object(h.a)(w,2),y=N[0],S=N[1];Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(O.searchAPI+x);case 2:return t=e.sent,i(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[x]);var k=function(){window.scrollY>100?l(!0):l(!1)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",k),function(){window.removeEventListener("scroll",k)}}),[]),Object(m.jsxs)("div",{className:"nav ".concat(r&&"nav_bg"),children:[Object(m.jsx)("img",{onClick:function(){b.push("/profile"),console.log("Profile clicked")},className:"nav_avatar avatar",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"Avatar"}),Object(m.jsxs)("div",{className:"linksResponsive",children:[Object(m.jsx)("i",{onClick:function(){S(!1===y)},class:"fas fa-bars"}),Object(m.jsxs)("div",{className:"nav_links ".concat(y&&"MenuClicked"),children:[Object(m.jsx)("h3",{onClick:function(){b.push("/"),console.log("Home clicked")},children:"Home"}),Object(m.jsx)("h3",{onClick:function(e){console.log("tv clicked"),b.push("./tvshows")},children:"TV Shows"}),Object(m.jsx)("h3",{onClick:function(){b.push("./navmovie")},children:"Movies"})]})]}),Object(m.jsx)("div",{className:"searchabar",children:Object(m.jsx)("form",{className:"searchInput",onSubmit:function(t){t.preventDefault(),e.getSearchMovie(a),b.push("./searchedmovie")},children:Object(m.jsx)("input",{onChange:function(e){g(e.target.value)},type:"search",name:"",id:"",placeholder:"Search Movies",value:x})})}),Object(m.jsx)("img",{onClick:function(){b.push("/"),console.log("Home clicked")},className:"nav_logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"Netflix Logo"})]})};n(78);var w=function(){return Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsx)("p",{children:"Questions? Call 000-800-040-1843"}),Object(m.jsxs)("div",{className:"links",children:[Object(m.jsxs)("div",{className:"first",children:[Object(m.jsx)("p",{children:"FAQ"}),Object(m.jsx)("p",{children:"Investor Relations"}),Object(m.jsx)("p",{children:"Privacy"}),Object(m.jsx)("p",{children:"Speed Test"})]}),Object(m.jsxs)("div",{className:"second",children:[Object(m.jsx)("p",{children:"Help Centre"}),Object(m.jsx)("p",{children:"Jobs"}),Object(m.jsx)("p",{children:"Cookie Preferences"}),Object(m.jsx)("p",{children:"Legal Notices"})]}),Object(m.jsxs)("div",{className:"third",children:[Object(m.jsx)("p",{children:"Account"}),Object(m.jsx)("p",{children:"Ways to Watch"}),Object(m.jsx)("p",{children:"Corporate Information"}),Object(m.jsx)("p",{children:"Only on Netflix"})]}),Object(m.jsxs)("div",{className:"fourth",children:[Object(m.jsx)("p",{children:"Media Centre"}),Object(m.jsx)("p",{children:"Terms of Use"}),Object(m.jsx)("p",{children:"Contact Us"})]})]}),Object(m.jsxs)("select",{name:"",id:"",className:"langauge",children:[Object(m.jsx)("option",{value:"",children:"English"}),Object(m.jsx)("option",{value:"",children:"Hindi"})]}),Object(m.jsx)("p",{children:"Netflix India"})]})};var N=function(e){var t=function(t,n,c){e.gettingMoviedata(t,n,c)};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(g,{getSearchMovie:function(t){e.gettingSearchedMovieData(t)}}),Object(m.jsx)(x,{handleMoviePlay:function(t){e.handleMoviePlay(t)}}),Object(m.jsx)(f,{title:"Netflix Originals",fetchURL:O.fetchNetflixOriginals,isLarge:!0,getMoviedata:t}),Object(m.jsx)(f,{title:"Trending Now",fetchURL:O.fetchTrending,getMoviedata:t}),Object(m.jsx)(f,{title:"Top Rated",fetchURL:O.fetchTopRated,getMoviedata:t}),Object(m.jsx)(f,{title:"Action Movies",fetchURL:O.fetchActionMovies,getMoviedata:t}),Object(m.jsx)(f,{title:"Comedy Movies",fetchURL:O.fetchComedyMovies,getMoviedata:t}),Object(m.jsx)(f,{title:"Horror Movies",fetchURL:O.fetchHorrorMovies,getMoviedata:t}),Object(m.jsx)(f,{title:"Romance Movies",fetchURL:O.fetchRomanceMovies,getMoviedata:t}),Object(m.jsx)(f,{title:"Documentries",fetchURL:O.fetchDocumentaries,getMoviedata:t}),Object(m.jsx)(w,{})]})},y=n(12),S=(n(79),n(16));n(80);var k=function(e){var t=Object(c.useState)({username:"",password:""}),n=Object(h.a)(t,2),a=n[0],i=n[1];return Object(m.jsx)("div",{className:"signinScren",children:Object(m.jsxs)("form",{action:"",children:[Object(m.jsx)("p",{style:{textAlign:"left",color:"".concat(e.textcolor?"red":"green")},children:e.status}),Object(m.jsx)("h1",{children:"Sign In"}),Object(m.jsx)("input",{value:a.username,onChange:function(e){return i(Object(S.a)(Object(S.a)({},a),{},{username:e.target.value}))},type:"email",placeholder:"Email"}),Object(m.jsx)("input",{value:a.password,onChange:function(e){return i(Object(S.a)(Object(S.a)({},a),{},{password:e.target.value}))},type:"password",placeholder:"Password"}),Object(m.jsx)("button",{onClick:function(t){t.preventDefault(),e.handleSignInUser(a)},type:"submit",children:"Sign In"}),Object(m.jsxs)("h4",{children:[Object(m.jsx)("span",{className:"grayText",children:"New to Netflix?"})," ",Object(m.jsx)("span",{className:"SignUpLink",onClick:function(t){t.preventDefault(),e.handlenewUser(a)},children:"Sign Up now."})," "]})]})})};n(81),n(82),n(83);var M=function(e){var t=Object(c.useState)(!1),n=Object(h.a)(t,2),a=n[0],i=n[1];return Object(m.jsxs)("div",{className:"question ".concat(a&&"active"),children:[Object(m.jsxs)("div",{className:"headQuestion",onClick:function(e){i(!a)},children:[Object(m.jsx)("p",{children:e.title}),Object(m.jsx)("p",{className:"icon",children:"+"})]}),Object(m.jsx)("div",{className:"description ".concat(a&&"show"),children:Object(m.jsx)("p",{children:e.desc})})]})};var _=function(e){return Object(m.jsxs)("div",{className:"askedQuestion",children:[Object(m.jsx)("h1",{children:"Frequently Asked Questions"}),Object(m.jsx)(M,{title:"What is Netflix?",desc:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more \u2013 on thousands of internet-connected devices.\r You can watch as much as you want, whenever you want, without a single ad \u2013 all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"}),Object(m.jsx)(M,{title:"How much does Netflix cost?",desc:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from \u20b9 199 to \u20b9 799 a month. No extra costs, no contracts."}),Object(m.jsx)(M,{title:"Where can I watch?",desc:"Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."}),Object(m.jsx)(M,{title:"How do I cancel?",desc:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees \u2013 start or stop your account anytime."}),Object(m.jsx)(M,{title:"What can I watch on Netflix?",desc:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."}),Object(m.jsx)(M,{title:"Is Netflix good for kids?",desc:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.\r Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don\u2019t want kids to see."}),Object(m.jsxs)("div",{className:"bottom",children:[Object(m.jsx)("p",{children:"Ready to watch? Enter your email to create or restart your membership."}),Object(m.jsx)("div",{className:"loginScreenInput",children:Object(m.jsxs)("form",{children:[Object(m.jsx)("input",{type:"email",placeholder:"Email Address"}),Object(m.jsx)("button",{onClick:function(t){t.preventDefault(),e.getsigninStatus(true)},className:"getstartbtn secondStartBtn",children:"GET STARTTED"})]})})]})]})};var T=function(e){return Object(m.jsxs)("div",{className:"aboutapp",children:[Object(m.jsxs)("div",{className:"EnjoyonyourTv",children:[Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h1",{children:"Enjoy on your TV."}),Object(m.jsx)("p",{children:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."})]}),Object(m.jsx)("img",{src:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",alt:""})]}),Object(m.jsx)("div",{className:"borderbottom"}),Object(m.jsxs)("div",{className:"Downloadyourshows",children:[Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h1",{children:"Download your shows to watch offline."}),Object(m.jsx)("p",{children:"Save your favourites easily and always have something to watch."})]}),Object(m.jsx)("img",{src:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",alt:""})]}),Object(m.jsx)("div",{className:"borderbottom"}),Object(m.jsxs)("div",{className:"Watcheverywhere",children:[Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h1",{children:"Watch everywhere."}),Object(m.jsx)("p",{children:"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."})]}),Object(m.jsx)("img",{src:"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png",alt:""})]}),Object(m.jsx)("div",{className:"borderbottom"}),Object(m.jsxs)("div",{className:"Createprofilesforchildren",children:[Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h1",{children:"Create profiles for children."}),Object(m.jsx)("p",{children:"Send children on adventures with their favourite characters in a space made just for them\u2014free with your membership."})]}),Object(m.jsx)("img",{src:"https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf",alt:""})]}),Object(m.jsx)("div",{className:"borderbottom"}),Object(m.jsx)(_,{getsigninStatus:function(t){e.loginStatus(t)}}),Object(m.jsx)("div",{className:"borderbottom"}),Object(m.jsx)(w,{})]})};var C=function(e){var t=Object(c.useState)(!1),n=Object(h.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(!1),o=Object(h.a)(s,2),r=o[0],l=o[1],d=function(){window.scrollY>100?i(!0):i(!1)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",d),function(){window.removeEventListener("scroll",d)}}),[]),Object(m.jsxs)("div",{className:"loginScreen",children:[Object(m.jsxs)("div",{className:"login_bg",children:[Object(m.jsxs)("div",{className:"loginNav ".concat(a&&"loginNavBg"),children:[Object(m.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:""}),Object(m.jsxs)("div",{className:"right",children:[Object(m.jsxs)("select",{name:"",id:"",className:"langauge navlang",children:[Object(m.jsx)("option",{value:"",children:"English"}),Object(m.jsx)("option",{value:"",children:"Hindi"})]}),Object(m.jsx)("button",{onClick:function(){return l(!0)},className:"signbtn",children:"Sign In"})]})]}),Object(m.jsx)("div",{className:"bggradiant"}),Object(m.jsx)("div",{className:"loginBody",children:r?Object(m.jsx)(k,{handleSignInUser:function(t){e.handleUser(t)},handlenewUser:e.handleNewUser,status:e.status,textcolor:e.color}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Unlimited movies, TV shows and more."}),Object(m.jsx)("h2",{children:"Watch anywhere. Cancel anytime."}),Object(m.jsx)("h3",{children:"Ready to watch? Enter your email to create or restart your membership."}),Object(m.jsx)("div",{className:"loginScreenInput",children:Object(m.jsxs)("form",{children:[Object(m.jsx)("input",{type:"email",placeholder:"Email Address"}),Object(m.jsx)("button",{onClick:function(){return l(!0)},className:"getstartbtn",children:"GET STARTTED"})]})})]})}),r?null:Object(m.jsx)("div",{className:"borderbottom"})]}),r?null:Object(m.jsx)(T,{loginStatus:function(e){l(e),console.log(e)}})]})},L=(n(84),n(85),n(86),n(36)),R=n.n(L),A=n.p+"static/media/logo.fc313c45.jpg";var P=function(e){return Object(m.jsxs)("div",{className:"plan",children:[Object(m.jsxs)("div",{className:"planinfo",children:[Object(m.jsx)("h5",{children:e.name}),Object(m.jsx)("h6",{children:e.description})]}),Object(m.jsx)(R.a,{name:"Netflix",image:A,currency:"INR",amount:5e4,stripeKey:"pk_test_51JMWz6SFhgeh97RkLNLPXFvIwsQj9jE6G7VoP9s3MgkfecqdDmxffmHbtHFKyry5VB9d2ckYBGG85UBD6RTuNxCK00yfesV47u"})]})};var U=function(){return Object(m.jsxs)("div",{className:"plansScreen",children:[Object(m.jsx)(P,{name:"Basic",description:"720p"}),Object(m.jsx)(P,{name:"Standard",description:"1080p"}),Object(m.jsx)(P,{name:"Premium",description:"4k + HDR"})]})};var E=function(e){return Object(m.jsxs)("div",{className:"profileScreen",children:[Object(m.jsx)(g,{}),Object(m.jsxs)("div",{className:"profileScreenBody",children:[Object(m.jsx)("h1",{children:"Edit Profile"}),Object(m.jsxs)("div",{className:"info",children:[Object(m.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:""}),Object(m.jsxs)("div",{className:"details",children:[Object(m.jsx)("h2",{children:e.user}),Object(m.jsxs)("div",{className:"plans",children:[Object(m.jsx)("h3",{children:"Plans"}),Object(m.jsx)(U,{}),Object(m.jsx)("button",{onClick:function(){e.setLogoutThing(null)},className:"SignOut",children:"Sign Out"})]})]})]})]})]})};n(87);var I=function(e){var t,n,c=Object(u.f)(),a=function(t,n,c){e.datafromMovieScreenItself(t,n,c)};return Object(m.jsxs)("div",{className:"MovieScreen",children:[Object(m.jsx)(g,{getSearchMovie:function(t){e.gettingSearchedMovieData(t)}}),Object(m.jsxs)("div",{className:"movieScreen",children:[Object(m.jsxs)("header",{className:"movieScreenbanner",style:{backgroundSize:"cover",backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(e.moviedata.image?e.moviedata.image:"/7IGKrY1f1KfwMipx9wZC4NRgIdF.jpg",")"),backgroundPosition:"top center"},children:[Object(m.jsxs)("div",{className:"movieShow",children:[Object(m.jsx)("h1",{className:"name",children:e.moviedata.title?e.moviedata.title:"Fifty Shades of Grey"}),Object(m.jsxs)("div",{className:"moviebanner_buttons",children:[Object(m.jsx)("button",{onClick:function(){c.push("./movie"),e.getMoviedata(e.moviedata)},className:" banner_button",children:"Play"}),Object(m.jsx)("button",{className:" banner_button",children:"My List"})]}),Object(m.jsx)("h1",{className:"banner_description",children:(t=e.moviedata.desc?e.moviedata.desc:"When college senior Anastasia Steele steps in for her sick roommate to interview prominent businessman Christian Grey for their campus paper, little does she realize the path her life will take. Christian, as enigmatic as he is rich and powerful, finds himself strangely drawn to Ana, and she to him. Though sexually inexperienced, Ana plunges headlong into an affair -- and learns that Christian's true sexual proclivities push the boundaries of pain and pleasure.",n=150,(null===t||void 0===t?void 0:t.length)>n?t.substr(0,n-1)+"...":t)})]}),Object(m.jsx)("div",{className:"gradiant"})]}),Object(m.jsxs)("div",{className:"suggestion",children:[Object(m.jsx)(f,{title:"More like this",fetchURL:O.fetchActionMovies,isLarge:!0,getMoviedata:a}),Object(m.jsx)(f,{title:"Suggestions",fetchURL:O.fetchRomanceMovies,isLarge:!0,getMoviedata:a})]}),Object(m.jsx)(w,{})]})]})},D=n(37),W=n(40),V=n.n(W);var F=function(e){var t=Object(c.useState)(""),n=Object(h.a)(t,2),a=n[0],i=n[1];return V()(e.moviedataplay.name||e.moviedataplay.title||e.moviedataplay.original_name||"").then((function(e){var t=new URLSearchParams(new URL(e).search);i(t.get("v"))})).catch((function(e){return console.log(e)})),Object(m.jsxs)("div",{className:"movie",children:[Object(m.jsx)("div",{className:"trailer",children:a&&Object(m.jsx)(D.a,{videoId:a,opts:{height:"700",width:"100%",playerVars:{autoplay:1}}})}),Object(m.jsx)(w,{})]})};n(107);var H=function(e){var t=e.movieDATA,n=e.takingData,c=Object(u.f)();return Object(m.jsxs)("div",{className:"searchMovie",children:[Object(m.jsx)("h1",{children:"Searched Results:"}),Object(m.jsx)("div",{className:"setOfMovies",children:t.map((function(e){return Object(m.jsx)("img",{onClick:function(){return t=(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.original_name),a=e.backdrop_path,i=e.overview,n(t,a,i),void c.push("/film");var t,a,i},className:"movie_image",src:e.poster_path&&"https://image.tmdb.org/t/p/original/"+e.poster_path,alt:e.name},e.id)}))}),Object(m.jsx)("div",{className:"SearchRow",children:Object(m.jsx)(f,{title:"More like this",fetchURL:O.fetchActionMovies,isLarge:!0,getMoviedata:function(e,t,c){n(e,t,c)},margin:!0,equalLength:!0})}),Object(m.jsx)(w,{})]})};n(108);var B=function(e){var t=Object(u.f)(),n=Object(c.useState)([]),a=Object(h.a)(n,2),i=a[0],s=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(O.fetchTvShows);case 2:return t=e.sent,s(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(m.jsxs)("div",{className:"tvShows",children:[Object(m.jsx)("h1",{children:"Popular Tv Shows"}),Object(m.jsx)("div",{className:"tvShowsPoster",children:i.map((function(n){return Object(m.jsx)("img",{onClick:function(){return c=(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.original_name),a=n.backdrop_path,i=n.overview,e.gettingTvShowsData(c,a,i),void t.push("/film");var c,a,i},className:"show_poster",src:n.poster_path&&"https://image.tmdb.org/t/p/original/"+n.poster_path,alt:n.name},n.id)}))})]})};n(32);var q=function(e){var t=Object(u.f)(),n=Object(c.useState)([]),a=Object(h.a)(n,2),i=a[0],s=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(O.fetchTrending);case 2:return t=e.sent,s(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(m.jsxs)("div",{className:"navMovie",children:[Object(m.jsx)("h1",{children:"Popular Movies"}),Object(m.jsx)("div",{className:"tvShowsPoster",children:i.map((function(n){return Object(m.jsx)("img",{onClick:function(){return c=(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.original_name),a=n.backdrop_path,i=n.overview,e.gettingNavMoviesData(c,a,i),void t.push("./film");var c,a,i},className:"show_poster",src:n.poster_path&&"https://image.tmdb.org/t/p/original/"+n.poster_path,alt:n.name},n.id)}))})]})};var G=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),s=Object(r.a)(i,2),l=s[0],d=s[1],j=Object(c.useState)({title:"",image:"",desc:""}),h=Object(r.a)(j,2),b=h[0],v=h[1],f=Object(c.useState)(null),p=Object(r.a)(f,2),O=p[0],x=p[1],g=Object(c.useState)(null),w=Object(r.a)(g,2),S=w[0],k=w[1],M=Object(c.useState)(""),_=Object(r.a)(M,2),T=_[0],L=_[1],R=Object(c.useState)([]),A=Object(r.a)(R,2),P=A[0],U=A[1];Object(c.useEffect)((function(){console.log(n)}),[n]);var D=function(e){U(e)};return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(y.a,{children:n?Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{exact:!0,path:"/",children:Object(m.jsx)(N,{gettingMoviedata:function(e,t,n){v({title:e,image:t,desc:n})},handleMoviePlay:function(e){L(e)},gettingSearchedMovieData:D})}),Object(m.jsx)(u.a,{path:"/profile",children:Object(m.jsx)(E,{user:n,setLogoutThing:function(e){a(e)}})}),Object(m.jsx)(u.a,{path:"/film",children:Object(m.jsx)(I,{moviedata:b,datafromMovieScreenItself:function(e,t,n){v({title:e,image:t,desc:n})},getMoviedata:function(e){L(e)},gettingSearchedMovieData:D})}),Object(m.jsx)(u.a,{path:"/movie",children:Object(m.jsx)(F,{moviedataplay:T})}),Object(m.jsx)(u.a,{path:"/searchedmovie",children:Object(m.jsx)(H,{movieDATA:P,takingData:function(e,t,n){v({title:e,image:t,desc:n})}})}),Object(m.jsx)(u.a,{path:"/tvshows",children:Object(m.jsx)(B,{gettingTvShowsData:function(e,t,n){v({title:e,image:t,desc:n})}})}),Object(m.jsx)(u.a,{path:"/navmovie",children:Object(m.jsx)(q,{gettingNavMoviesData:function(e,t,n){v({title:e,image:t,desc:n})}})})]}):Object(m.jsx)(C,{handleUser:function(e){for(var t=0;t<l.length;t++)if(l[t].username===e.username&&l[t].password===e.password)return a(e.username),x(null),void k(null);x("Account Not Found"),k("red")},handleNewUser:function(e){for(var t=0;t<l.length;t++)if(l[t].username===e.username&&l[t].password===e.password)return x("Already Registered"),void k("red");d([].concat(Object(o.a)(l),[e])),x("Succefully Created an account"),k(null)},status:O,color:S})})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(G,{})}),document.getElementById("root")),K()},32:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},66:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.b4133637.chunk.js.map