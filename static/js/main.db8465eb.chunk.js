(this.webpackJsonpchameleongame=this.webpackJsonpchameleongame||[]).push([[0],{46:function(e,t,a){e.exports=a(63)},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),s=a.n(o),l=a(11),c=a(12),i=a(14),u=a(13),p=a(8),d=a(21),m=a.n(d);a(55);m.a.initializeApp({apiKey:"AIzaSyCWG-Myx5ZGBTLwzn5w0kEQkxPoeoAcKpk",authDomain:"chameleongame-5ff8b.firebaseapp.com",databaseURL:"https://chameleongame-5ff8b.firebaseio.com",projectId:"chameleongame-5ff8b",storageBucket:"chameleongame-5ff8b.appspot.com",messagingSenderId:"84544178120",appId:"G-SPWH5N4X88"});var h=m.a.firestore(),y=a(6),f=a.n(y),b=a(45),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={loaded:0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new Date;f.a.load("db_update")===t.toISOString().split("T")[0]?(this.setState({loaded:100}),f.a.save("db_update",t.toISOString().split("T")[0],{path:"/"}),f.a.save("topics",f.a.load("topics"),{path:"/"}),console.log(f.a.load("topics")),this.props.setTopics(f.a.load("topics"))):h.collection("topics").get().then((function(a){var n={};for(var r in a.docs){var o=a.docs[r].data();n[o.topic]=o.words}e.setState({loaded:100}),f.a.save("db_update",t.toISOString().split("T")[0],{path:"/"}),f.a.save("topics",n,{path:"/"}),e.props.setTopics(n)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{now:this.state.loaded,label:this.state.loaded+"%"}))}}]),a}(n.Component),E=Object(p.b)((function(e){return{}}),(function(e){return{setTopics:function(t){return e({type:"set_topics",payload:t})}}}))(v),g=a(15),k=a(9),_=a(7),O=a(5),j=a(18),S=a(19),C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={player_name:"",session_key:"",error_message:""},n}return Object(c.a)(a,[{key:"joinGame",value:function(){var e=this;this.state.player_name?this.state.session_key?h.collection("sessions").where("key","==",this.state.session_key).get().then((function(t){1===t.docs.length?(h.collection("sessions").doc(t.docs[0].id).update({players:m.a.firestore.FieldValue.arrayUnion(e.state.player_name)}),e.props.setSession(t.docs[0].data().key,t.docs[0].id),e.props.setPlayer(e.state.player_name),f.a.save("session",{key:t.docs[0].data().key,db_id:t.docs[0].id}),f.a.save("player",e.state.player_name)):e.setState({error_message:"Session key does not exist."})})):this.setState({error_message:"Enter a session key."}):this.setState({error_message:"Enter a Name!"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.error_message?r.a.createElement(_.a,null,r.a.createElement(O.a,null,r.a.createElement(S.a,{variant:"danger"},this.state.error_message))):null,r.a.createElement(_.a,null,r.a.createElement(O.a,null,r.a.createElement(j.a.Label,null," Session Key: ")),r.a.createElement(O.a,null,r.a.createElement(j.a.Control,{onChange:function(t){return e.setState({session_key:t.target.value})}}))),r.a.createElement("br",null),r.a.createElement(_.a,null,r.a.createElement(O.a,null,r.a.createElement(j.a.Label,null," Player Name: ")),r.a.createElement(O.a,null,r.a.createElement(j.a.Control,{onChange:function(t){return e.setState({player_name:t.target.value})}}))),r.a.createElement("br",null),r.a.createElement(_.a,null,r.a.createElement(k.a,{onClick:function(){return e.joinGame()}},"Join Game")))}}]),a}(n.Component),M=Object(p.b)((function(e){return{}}),(function(e){return{setSession:function(t,a){return e({type:"set_session",payload:{key:t,db_id:a}})},setPlayer:function(t){return e({type:"set_player",payload:t})}}}))(C),w="ABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321",G=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={player_name:"",error_message:""},n}return Object(c.a)(a,[{key:"hostGame",value:function(){var e=this;if(this.state.player_name){var t=w[Math.floor(Math.random()*w.length)]+w[Math.floor(Math.random()*w.length)]+w[Math.floor(Math.random()*w.length)]+w[Math.floor(Math.random()*w.length)];h.collection("sessions").add({players:[this.state.player_name],key:t,stage:"lobby",round:{id:0,topic:"",word:"",chameleon:0}}).then((function(a){e.props.setSession(t,a.id),e.props.setPlayer(e.state.player_name),f.a.save("session",{key:t,db_id:a.id}),f.a.save("player",e.state.player_name)}))}else this.setState({error_message:"Enter a Name!"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.error_message?r.a.createElement(_.a,null,r.a.createElement(O.a,null,r.a.createElement(S.a,{variant:"danger"},this.state.error_message))):null,r.a.createElement(_.a,null,r.a.createElement(O.a,null,r.a.createElement(j.a.Label,null," Player Name: ")),r.a.createElement(O.a,null,r.a.createElement(j.a.Control,{onChange:function(t){return e.setState({player_name:t.target.value})}}))),r.a.createElement(_.a,null,r.a.createElement(k.a,{onClick:function(){return e.hostGame()}},"Host Game")))}}]),a}(n.Component),B=Object(p.b)((function(e){return{topics:e.topics}}),(function(e){return{setRoom:function(t){return e({type:"set_topics",payload:t})},setSession:function(t,a){return e({type:"set_session",payload:{key:t,db_id:a}})},setPlayer:function(t){return e({type:"set_player",payload:t})}}}))(G),D=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={mode:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=f.a.load("session"),t=f.a.load("player");e&&e.key&&e.db_id&&t&&(this.props.setSession(e),this.props.setPlayer(t))}},{key:"genBody",value:function(){var e=this;switch(this.state.mode){case"join":return r.a.createElement(g.a.Body,null,r.a.createElement(M,null));case"host":return r.a.createElement(g.a.Body,null,r.a.createElement(B,null));default:return r.a.createElement(g.a.Body,null,r.a.createElement(_.a,null,r.a.createElement(O.a,null),r.a.createElement(O.a,null,r.a.createElement(k.a,{variant:"success",onClick:function(){return e.setState({mode:"join"})}},"Join")),r.a.createElement(O.a,null),r.a.createElement(O.a,null,r.a.createElement(k.a,{variant:"warning",onClick:function(){return e.setState({mode:"host"})}},"Host")),r.a.createElement(O.a,null)))}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement(g.a.Header,null,"The Chameleon Game"),this.genBody(),r.a.createElement(g.a.Footer,null,""!==this.state.mode?r.a.createElement(k.a,{variant:"dark",onClick:function(){return e.setState({mode:""})}},"Back"):null)))}}]),a}(n.Component),I=Object(p.b)((function(e){return{}}),(function(e){return{setSession:function(t){return e({type:"set_session",payload:t})},setPlayer:function(t){return e({type:"set_player",payload:t})}}}))(D),P=a(38),T=a(44);function L(e){if(!e)return"";for(var t=e.toLowerCase().split(" "),a=0;a<t.length;a++)t[a]=t[a][0].toUpperCase()+t[a].slice(1);return t.join(" ")}var N=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.collection("sessions").doc(this.props.session.db_id).onSnapshot({includeMetadataChanges:!0},(function(t){t.exists?e.props.updateGame(t.data()):(f.a.remove("player"),f.a.remove("session"),e.props.clearGame())}))}},{key:"genBody",value:function(){switch(this.props.stage){case"lobby":return this.lobby();case"hints":return r.a.createElement(_.a,null,this.hints());default:return null}}},{key:"genFooter",value:function(){var e=this;switch(this.props.stage){case"lobby":return this.props.players[0]===this.props.player_name?r.a.createElement(_.a,null,r.a.createElement(O.a,null,r.a.createElement(k.a,{onClick:function(){var t=Object.keys(e.props.topics)[Math.floor(Math.random()*Object.keys(e.props.topics).length)],a=e.props.topics[t][Math.floor(Math.random()*e.props.topics[t].length)],n=Math.floor(Math.random()*e.props.players.length);console.log(a),console.log(t),h.collection("sessions").doc(e.props.session.db_id).update({stage:"hints","round.topic":t,"round.word":a,"round.chameleon":n})}},"Start Game")),r.a.createElement(O.a,null,r.a.createElement(k.a,{onClick:function(){h.collection("sessions").doc(e.props.session.db_id).delete()}},"End Game"))):r.a.createElement(k.a,{onClick:function(){console.log("LEAVE GAME")}},"Leave Game");case"hints":if(this.props.players[0]===this.props.player_name)return r.a.createElement(_.a,null,r.a.createElement(O.a,null,r.a.createElement(k.a,{onClick:function(){var t=Object.keys(e.props.topics)[Math.floor(Math.random()*Object.keys(e.props.topics).length)],a=e.props.topics[t][Math.floor(Math.random()*e.props.topics[t].length)],n=Math.floor(Math.random()*e.props.players.length);h.collection("sessions").doc(e.props.session.db_id).update({"round.id":e.props.round+1,"round.topic":t,"round.word":a,"round.chameleon":n})}},"Next Round")),r.a.createElement(O.a,null,r.a.createElement(k.a,{onClick:function(){h.collection("sessions").doc(e.props.session.db_id).update({stage:"lobby"})}},"Return to Lobby")));break;default:return null}}},{key:"lobby",value:function(){var e=[];for(var t in e.push(r.a.createElement(S.a,{variant:"info",key:"code"},"Room Code: "+this.props.session.key)),this.props.players)e.push(r.a.createElement(P.a.Item,{key:t,active:this.props.player_name===this.props.players[t]},this.props.players[t]));return e}},{key:"hints",value:function(){var e=[];return e.push(r.a.createElement(O.a,{key:"players"},this.props.players.map((function(e){return r.a.createElement(P.a.Item,{key:e},L(e))})))),e.push(r.a.createElement(O.a,{key:"board+role"},r.a.createElement(_.a,null,r.a.createElement(T.a,{bordered:!0,striped:!0},r.a.createElement("tbody",null,this.genBoard()))),r.a.createElement(S.a,{variant:"info"},this.props.role?"Secret Word: "+L(this.props.role):"You are the Chameleon!"),r.a.createElement(_.a,null))),e}},{key:"genBoard",value:function(){var e=this,t=[];t.push(r.a.createElement("tr",{key:"head"},r.a.createElement("th",{colSpan:"4"},L(this.props.topic))));var a=function(a){var n=r.a.createElement("tr",{key:"r"+a},[0,1,2,3].map((function(t){return r.a.createElement("td",{key:"i"+(4*a+t)},L(e.props.topics[e.props.topic][4*a+t]))})));t.push(n)};for(var n in[0,1,2,3])a(n);return t}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement(g.a.Header,null,L(this.props.stage)),r.a.createElement(g.a.Body,null,this.genBody()),r.a.createElement(g.a.Footer,null,this.genFooter())))}}]),a}(n.Component),x=Object(p.b)((function(e){return{session:e.session,player_name:e.player_name,stage:e.stage,players:e.players,topics:e.topics,topic:e.round.topic,role:e.round.role,round:e.round.id}}),(function(e){return{updateGame:function(t){return e({type:"update_game",payload:t})},clearGame:function(){return e({type:"clear_game",payload:null})}}}))(N),A=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossOrigin:"anonymous"}),r.a.createElement("button",{onClick:function(){return e.props.debug()}},"DEBUG"),this.props.db_updated?r.a.createElement(r.a.Fragment,null,this.props.session.key&&this.props.session.db_id?r.a.createElement(x,null):r.a.createElement(I,null)):r.a.createElement(E,null))}}]),a}(n.Component),F=Object(p.b)((function(e){return{db_updated:e.db_updated,session:e.session}}),(function(e){return{debug:function(){return e({type:"dump_store",payload:null})}}}))(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(26),R=a(20),W=a.n(R),U={player_name:"",players:[],db_updated:!1,topics:{},session:{key:"",db_id:""},stage:"",round:{id:0,topic:"",role:""}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dump_store":return console.log(e),e;case"set_topics":var a=W.a.cloneDeep(e);return console.log(t.payload),a.topics=t.payload,a.db_updated=!0,a;case"set_session":var n=W.a.cloneDeep(e);return n.session=t.payload,n;case"set_player":var r=W.a.cloneDeep(e);return r.player_name=t.payload,r;case"update_game":var o=W.a.cloneDeep(e);return o.stage=t.payload.stage,o.players=t.payload.players,o.round.id=t.payload.round.id,o.round.topic=t.payload.round.topic,t.payload.players[t.payload.round.chameleon]===e.player_name?o.round.role="":o.round.role=t.payload.round.word,o;case"clear_game":var s=W.a.cloneDeep(U);return s;default:return e}};a(62);var K,V=(K=window.REDUX_INITIAL_DATA,Object(H.b)(J,K));s.a.render(r.a.createElement(p.a,{store:V},r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.db8465eb.chunk.js.map