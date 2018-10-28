(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a(234)},227:function(e,t,a){},232:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(10),r=a.n(i),s=a(40),l=a.n(s),c=a(17),p=a(18),m=a(20),u=a(19),d=a(21),g=a(22),h=a(236),b=a(237),f=a(235),y=a(13),j=a(99),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).componentWillMount=function(){document.title=""},a.state={locations:[]},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(v,{google:this.props.google,destCoords:this.props.destCoords})}}]),t}(o.a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.loadMap(),this.loadMarkers()}},{key:"componentDidUpdate",value:function(){this.loadMap(),this.loadMarkers()}},{key:"loadMarkers",value:function(){this.props.google}},{key:"loadMap",value:function(){if(this.props&&this.props.google){var e=this.props.google,t=e.maps,a=this.refs.map,n=r.a.findDOMNode(a),o={lat:parseFloat(40.741669),lng:parseFloat(-73.82077)},i=Object.assign({},{center:o,zoom:14,mapTypeId:"roadmap"});this.map=new t.Map(n,i),new e.maps.Marker({position:o,icon:{url:"/my_location.png",anchor:new e.maps.Point(24,24),scaledSize:new e.maps.Size(24,24)},map:this.map}).setMap(this.map),(new e.maps.TrafficLayer).setMap(this.map)}}},{key:"loadExtras",value:function(){}},{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement("div",{ref:"map",style:{height:"300px"}},"loading map..."))}}]),t}(n.Component),O=Object(j.GoogleApiWrapper)({apiKey:"AIzaSyDbvmQGBFexX5Dk0nbbVJ-sIq3QOtprm7M"})(E),k=a(101),w=a.n(k),S=a(58),C="https://jobtogo-504b3.firebaseio.com/job.json",M={row:{margin:"1rem"},card:{borderColor:"black",boxShadow:"2px 4px 2px 1px rgba(44,44,44, 0.3)"}},x=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).componentWillMount=function(){w.a.get(C).then(function(t){e.setState({jobList:t.data}),console.log(e.state.jobList)})},e.state={jobList:""},e}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.jobList;return o.a.createElement("div",{className:"list-jobs-container"},Object.keys(e).map(function(t,a){var n;return e[t].requirement&&(n=e[t].requirement.map(function(e){return e})),o.a.createElement(h.a,{style:M.row},o.a.createElement(b.a,{title:e[t].title,style:M.card},"You will get paid by: $",o.a.createElement("b",null,e[t].pay),o.a.createElement("br",null),"Posted by: ",o.a.createElement("b",null,e[t].employer),o.a.createElement("br",null),e[t].detail,o.a.createElement("br",null),"Requirements:\xa0",n&&n.join(", "),o.a.createElement(z,{destCoords:e[t].location})))}))}}]),t}(n.Component),z=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).apply(this,arguments))).state={show:!1},["onClick"].forEach(function(t){return e[t]=e[t].bind(Object(g.a)(Object(g.a)(e)))}),e}return Object(d.a)(t,e),Object(p.a)(t,[{key:"onClick",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){return o.a.createElement("div",{className:"code-box-demo-wrapper"},o.a.createElement("p",{className:"buttons"},o.a.createElement(f.a,{style:{marginTop:10},onClick:this.onClick},o.a.createElement(y.a,{type:"down",theme:"outlined"}))),o.a.createElement(S.a,{transitionName:"fade",transitionAppear:!0},this.state.show?o.a.createElement(O,{key:"1"}):null))}}]),t}(n.Component),T=x,N=a(241),A=a(239),L=(a(98),a(107)),D=a.n(L),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={email:"",password:"",loading:!1},a.signin=a.signin.bind(Object(g.a)(Object(g.a)(a))),a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"signin",value:function(){var e=this.state,t=e.email,a=e.password;""!==t&&""!==a?l.a.auth().signInWithEmailAndPassword(t,a).then(function(e){e&&(window.location="/jobs",D.a.save("userEmail",t,{path:"/"}))}).catch(function(e){N.a.error(e.message)}):N.a.error("Looks like you're missing something.")}},{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password,i=t.loading;return o.a.createElement("div",{className:"signin"},o.a.createElement(b.a,{className:"signin-card",title:"Sign In"},o.a.createElement("div",null,o.a.createElement(A.a,{required:!0,size:"large",placeholder:"E-Mail",prefix:o.a.createElement(y.a,{type:"mail"}),style:{marginTop:10},type:"email",value:a,onChange:function(t){e.setState({email:t.target.value})}}),o.a.createElement(A.a,{required:!0,size:"large",placeholder:"Password",prefix:o.a.createElement(y.a,{type:"ellipsis"}),style:{marginTop:10},type:"password",value:n,onChange:function(t){e.setState({password:t.target.value})}}),o.a.createElement(f.a,{icon:"check-circle",size:"large",block:!0,style:{marginTop:10},onClick:this.signin,loading:i,type:"primary"},o.a.createElement("p",{style:{margin:0,display:"inline",marginLeft:10}},"Sign In")),o.a.createElement(f.a,{size:"large",block:!0,style:{marginTop:10},href:"/signup"},o.a.createElement("p",{style:{margin:0,display:"inline"}},"Don't have an account? Sign Up.")))))}}]),t}(n.PureComponent),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={email:null,name:null,password:null,loading:!1},a.signup=a.signup.bind(Object(g.a)(Object(g.a)(a))),a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"signup",value:function(){var e=this;this.setState({loading:!0});var t=this.state,a=t.name,n=t.password,o=t.email;return a&&n&&o?""===a||""===n||""===o?(N.a.error("Looks like you're missing something."),void this.setState({loading:!1})):void l.a.auth().createUserWithEmailAndPassword(o,n).catch(function(e){var t=e.message;console.log(t)}).then(function(t){t?(N.a.success("Signed Up. Redirecting.."),window.location="/jobs"):e.setState({loading:!1})}).catch(function(t){console.log("Signup Err",t),e.setState({loading:!1})}):(N.a.error("Looks like you're missing something."),void this.setState({loading:!1}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.loading;return o.a.createElement("div",{className:"signup"},o.a.createElement(b.a,{className:"signup-card",title:"Sign Up"},o.a.createElement("div",null,o.a.createElement(A.a,{size:"large",placeholder:"Full Name",prefix:o.a.createElement(y.a,{type:"user"}),style:{marginTop:10},value:a,onChange:function(t){e.setState({name:t.target.value})}}),o.a.createElement(A.a,{size:"large",placeholder:"E-Mail",prefix:o.a.createElement(y.a,{type:"mail"}),style:{marginTop:10},type:"email",onChange:function(t){e.setState({email:t.target.value})}}),o.a.createElement(A.a,{size:"large",placeholder:"Password",prefix:o.a.createElement(y.a,{type:"ellipsis"}),style:{marginTop:10},type:"password",onChange:function(t){e.setState({password:t.target.value})}}),o.a.createElement(f.a,{icon:"check-circle",size:"large",block:!0,style:{marginTop:10},onClick:this.signup,loading:n,type:"primary"},o.a.createElement("p",{style:{margin:0,display:"inline",marginLeft:10}},"Sign Up")))))}}]),t}(n.Component),W=a(109),G=a(240),P=(a(227),a(229),a(238)),q=a(243),B=a(242),R=G.a.Header,F=(G.a.Content,function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){a.props.isGeolocationAvailable?a.props.isGeolocationEnabled?a.props.positionError?console.log(a.props.positionError):(console.log(a.props),console.log(a.props.coords)):console.log("user rejected!"):console.log("does not support!")},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(P.a,null,o.a.createElement(q.a,null,o.a.createElement(B.a,{path:"/signup",component:U}),o.a.createElement(B.a,{path:"/",exact:!0,component:I}),o.a.createElement(B.a,{path:"/signin",component:I}),o.a.createElement("div",{className:"container-with-header"},o.a.createElement(R,{className:"App-header"},"Welcome to JobToGo"),o.a.createElement(B.a,{path:"/jobs",component:T}),o.a.createElement(B.a,{path:"/map",component:O})))))}}]),t}(n.Component)),J=Object(W.geolocated)({positionOptions:{enableHighAccuracy:!0},userDecisionTimeout:5e3})(F);a(232),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.initializeApp({apiKey:"AIzaSyB2kR8bG77BibtbSdkRZ_MTHS0gU8GD8zY",authDomain:"jobtogo-504b3.firebaseapp.com",databaseURL:"https://jobtogo-504b3.firebaseio.com",projectId:"jobtogo-504b3",storageBucket:"jobtogo-504b3.appspot.com",messagingSenderId:"837084623308"}),r.a.render(o.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[114,2,1]]]);
//# sourceMappingURL=main.b1a308fd.chunk.js.map