(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"1ScA":function(e,t,n){"use strict";n.d(t,"a",function(){return useReflowFrameClassName});var a=n("s8DI"),c=n("QtlZ"),r=n("ILQF"),i=n("g6eD"),s=n("JBtm"),o=n.n(s),u=n("ERkP"),l=n("EQxi"),f=!1;function useReflowFrameClassName(){var e="";if(!f){var t=Object(l.f)(o.a.parse(document.location.search));e=(null===t||void 0===t?void 0:t.isXSScreenSize)?"widget--xs":"",f=!0}var n=Object(u.useState)(e),s=Object(a.a)(n,2),b=s[0],d=s[1],O=Object(u.useState)(void 0),j=Object(a.a)(O,2),h=j[0],v=j[1];return Object(u.useEffect)(function(){Object(r.c)({topic:"CONDUCTOR:reflowFrame",handler:function handler(e){var t=e.data;d(function(){return t.isXSScreenSize?"widget--xs":""}),c.a.dispatch(Object(i.d)(t.isXSScreenSize)),t.clientInnerHeight&&v(function(){return t.clientInnerHeight})}})},[]),{reflowFrameCX:b,clientInnerHeight:h}}},"2uLe":function(e,t,n){"use strict";var a=n("mj2O"),c=n.n(a),r=n("7SM1"),i=n("s8DI"),s=n("VkHq"),o=n("ILQF"),u=n("Hvhg"),l=n("2XY6"),f=n("ERkP"),b=n("uDfI"),d=n("vTYT"),O=n("hEj5");t.a=function useSetPreviewHeight(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=Object(O.a)(),t=Object(i.a)(e,2),n=t[0],a=t[1],j=Object(b.c)(function(e){return!!e.conversations.activeConversation}),h=Object(b.c)(u.c).showBranding,v=void 0!==h&&h,m=Object(s.a)().noPolicy,p=Object(b.c)(function(e){return e.session.gdpr}),g=p.hasConsent,w=p.declinedConsent,E=p.needsConsent,_=Object(b.c)(l.e),C=Object(f.useCallback)(function(){var e=0,t=!v&&m;return E&&(e+=40),w&&(e+=40),t&&!E&&(e+=18),g||(e+=t?14:7),e},[w,g,m,v,E]),S=Object(f.useCallback)(function(){return n?n.height:200},[n]);return{setChatHeight:Object(f.useCallback)(function(){var e=Object(r.a)(c.a.mark(function _callee(e){var t,n,a,r,i,s,u=arguments;return c.a.wrap(function _callee$(c){for(;;)switch(c.prev=c.next){case 0:if(t=u.length>1&&void 0!==u[1]&&u[1],!j||!g){c.next=3;break}return c.abrupt("return");case 3:if(n=S(),a=C(),r=_&&!g?130:155,"205px"!==(i=e?"".concat(n+r-a,"px"):"0px")){c.next=9;break}return c.abrupt("return");case 9:s=!E,Object(o.a)({topic:"set-frame-height",message:{height:i,name:d.d.CHAT,transition:s,transitionHeight:t}});case 11:case"end":return c.stop()}},_callee)}));return function(t){return e.apply(this,arguments)}}(),[j,g,E,C,S,_]),setPreviewRef:a,setSliderHeight:Object(f.useCallback)(Object(r.a)(c.a.mark(function _callee2(){var e;return c.a.wrap(function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:e=S(),_&&(e="calc(100% - 20px)"),Object(o.a)({topic:"set-frame-height",message:{height:"".concat(e+80,"px"),name:d.d.SLIDER,transition:!0,transitionHeight:!1}});case 3:case"end":return t.stop()}},_callee2)})),[S,_]),setEmailCaptureHeight:Object(f.useCallback)(Object(r.a)(c.a.mark(function _callee3(){var e;return c.a.wrap(function _callee3$(t){for(;;)switch(t.prev=t.next){case 0:e=S(),Object(o.a)({topic:"set-frame-height",message:{height:"".concat(e+35,"px"),name:d.d.EMAIL_CAPTURE,transition:!0,transitionHeight:!1}});case 2:case"end":return t.stop()}},_callee3)})),[S])}}},G5CQ:function(e,t,n){},Gxm1:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return o});var a=n("QtlZ"),c=n("LVcX"),r=n("0lfv"),i=n("CYoe"),s=function markTime(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();a.a.dispatch(Object(i.c)(e,t))},o=function measureTime(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),n=Object(c.a)(null,["metrics","timeByName",e],Object(a.b)());return n?(a.a.dispatch(Object(i.a)(e)),t-n):(Object(r.n)({type:"warn",data:['Tried to measure "'.concat(e,'" without mark')]}),null)}},SrLZ:function(e,t,n){"use strict";n.r(t);var a=n("jm9a"),c=n("mj2O"),r=n.n(c),i=n("7SM1"),s=n("s8DI"),o=n("OE2q"),u=n("O94r"),l=n.n(u),f=n("Rqwx"),b=n("fTFZ"),d=n("vkRn"),O=n("CwrG"),j=n("HXmn"),h=n("8eKL"),v=n("slYP"),m=n("BY8A"),p=n("+/Je"),g=n("Y0wo"),w=n("fw6E"),E=n("1b8i"),_=n("gRD2"),C=n("+qGC"),S=n("fpJs"),k=n("Sn8X"),A=n("fJrp"),y=n("1ScA"),T=n("VkHq"),L=n("GM2V"),H=n("lE29"),x=n("swFs"),I=n("+Kbs"),R=n("nQD+"),N=n("sxX9"),F=n("2uLe"),B=n("g6eD"),D=n("2XY6"),P=n("ERkP"),V=n.n(P),X=n("uDfI"),G=(n("SwvN"),function HeaderLayout(e){var t=e.chatHidden,n=Object(X.b)(),a=Object(H.a)(),c=a.backgroundStyles,r=a.conversationHeaderTextStyles,i=Object(X.c)(function(e){return e.session.gdpr}).hasConsent,o=Object(F.a)(),u=o.setChatHeight,f=o.setPreviewRef,b=Object(X.c)(function(e){return e.view}).chatOpen,d=Object(P.useState)(Object(X.c)(D.a)),O=Object(s.a)(d,2),j=O[0],h=O[1],v=Object(A.a)(j),m=j!==v;Object(P.useLayoutEffect)(function(){b&&!t&&u(b,m)},[b,t,u,m]);var p=Object(X.c)(D.a);Object(P.useEffect)(function(){p!==j&&h(p)},[p,j]);var g=N.a[j],w=j!==N.b.CONVERSATION;return V.a.createElement("header",{className:l()("drift-widget-header",{"drift-widget-header--collapsed":w,"drift-widget-header--gdpr-consent":!i})},V.a.createElement(x.a,{style:c}),V.a.createElement("div",{className:"drift-widget-header--content content--".concat(j)},V.a.createElement(g,{previewRef:f,resetChatHeight:function resetChatHeight(){u(b,!0)}})),V.a.createElement(R.a,{onClick:function doToggleChat(){n(Object(B.f)({chatOpen:!1}))},className:"drift-widget-close","aria-label":"Close Drift Widget messenger",style:r},V.a.createElement(I.j,{width:16,height:16})))}),M=n("ILQF"),Q=n("K7i0"),Y=n("bYXQ"),J=n("Hvhg"),U=n("pu/X"),$=n("da4L"),q=n("Gxm1"),z=n("LVcX"),Z=n("TbSn"),K=n("kNJ0"),W=n("oPI6"),ee=n("ADGC"),te=n("0lfv"),ne=n("VpmR"),ae=n("4c+F"),ce=n("HSQL"),re=(n("sXTY"),Object(P.lazy)(function(){return n.e(45).then(n.bind(null,"f2yG"))})),ie=null,se=function ChatLayout(){var e=Object(X.b)(),t=Object(ee.c)(),n=Object(y.a)(),c=Object(P.useState)(!0),u=Object(s.a)(c,2),f=u[0],x=u[1];Object(k.a)();var I=Object(X.c)(function(e){return e.view}),R=I.chatOpen,N=I.isChatTakeover,F=Object(X.c)(J.c).showBranding,B=void 0!==F&&F,W=Object(T.a)().noPolicy,ne=!B&&W;Object(P.useLayoutEffect)(function(){N&&R&&Object(M.a)({topic:"set-frame-width-and-height",message:{className:g.a,height:"100%",max:!0,name:"chat",width:"100%"}})},[N,R]);var se=Object(X.c)(function(e){return e.conversations.activeConversation}),oe=Object(_.a)().fetchMessages,ue=Object(A.a)(se),le=Object(X.c)(function(e){return e.conversations.conversations}),fe=Object(X.c)(function(e){return e.conversations.messages}),be=Object(X.c)(function(e){return Object(z.a)({},["conversations","messages",e.conversations.activeConversation],e)}),de=Object(X.c)(function(e){return Object(z.a)(!1,["conversations","conversationStatus",e.conversations.activeConversation,"permaclosed"],e)}),Oe=Object(P.useMemo)(function(){return Object($.r)(be)},[be]),je=Object(X.c)(function(e){return e.campaigns.activeCampaign}),he=Object(X.c)(function(e){return e.session.gdpr}).hasConsent,ve=Object(w.a)(),me=ve.conversationHistoryOpen,pe=ve.conversationHistoryEnabled,ge=Object(L.a)(),we=ge.sendTranscriptOpen,Ee=ge.sendTranscriptEnabled,_e=Object(H.a)().widgetBackgroundStyles;Object(P.useEffect)(function(){(function(){var t=Object(i.a)(r.a.mark(function _callee(){var t,n,a,c,i;return r.a.wrap(function _callee$(r){for(;;)switch(r.prev=r.next){case 0:if(t=!se||se===p.a,n=ue===se,a=!!le[se]&&!!fe[se],!(t||n||a||Object(Y.e)(se))){r.next=5;break}return r.abrupt("return");case 5:return r.prev=5,r.next=8,Object(o.h)(se);case 8:c=r.sent,i=c.data,e(Object(Q.h)({conversation:i})),oe({}),r.next=17;break;case 14:r.prev=14,r.t0=r.catch(5),Object(te.f)(U.a.MESSAGE.FETCH_MESSAGE_OR_ACTIVE_CONVO,r.t0,!0);case 17:case"end":return r.stop()}},_callee,null,[[5,14]])}));return function fetchInfoForActiveConversation(){return t.apply(this,arguments)}})()()},[se,e,oe,ue,le,fe]),Object(P.useEffect)(function(){R?(function(){var e=Object(i.a)(r.a.mark(function _callee2(){return r.a.wrap(function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)({topic:"focus-frame",message:{name:"chat"}});case 2:case"end":return e.stop()}},_callee2)}));return function focus(){return e.apply(this,arguments)}}()(),ie&&clearTimeout(ie),x(!1)):ie=setTimeout(function delaySetReflowHidden(){x(!0)},350)},[R]);var Ce=Object(P.useMemo)(function(){if(!he||!R)return!1;if(je&&je.id&&!se){var e=!!Object(z.a)(null,["attributes","cta"],je),t="CHAT_RESPONSE"!==Object(z.a)(null,["attributes","cta","CtaType"],je);if(e&&t)return!1}var n=Oe.length>0&&Oe.length<=2&&!Object($.e)(Oe[0]);return!N||n||Oe.length>2},[je,se,he,N,Oe,R]);Object(P.useEffect)(function(){Object(ce.b)("WIDGET_CHAT_FRAME.start")},[]);var Se=Object(P.useRef)(!1);Object(P.useEffect)(function(){if(!Se.current&&N&&Oe.length>0){var e=Object(q.b)("post_form_takeover_tti"),t=Object(q.b)("post_form_takeover_show");e&&Object(ae.d)("Post Form Takeover TTI",e),t&&Object(ae.d)("Post Form Takeover Show",t),Se.current=!0}},[N,Oe]);var ke=Object(P.useMemo)(function(){if(de)return b.a.UNAVAILABLE;var e=Object(Z.a)(Oe);if(!e)return b.a.AVAILABLE;var t=Object(K.a)(-2,Oe),n=Object($.e)(t)&&Object($.i)(e);return Object($.e)(e)||n||Object($.j)(e)?b.a.UNAVAILABLE_BUTTONS:Object($.o)(e)||Object($.o)(t)&&Object($.i)(e)?b.a.AVAILABLE_BUTTONS:b.a.AVAILABLE},[Oe,de]),Ae=ke===b.a.AVAILABLE||ke===b.a.AVAILABLE_BUTTONS,ye=Object(E.a)(Oe,se),Te=Object(P.useMemo)(function(){return Object($.c)(ye)},[ye]),Le=Object(C.b)(ye),He=Object(C.a)(ye),xe=!Object(te.m)(Le)&&Object(te.m)(He),Ie=Object(P.useMemo)(function(){return V.a.createElement(h.a,{messageGroups:Te,messages:ye,reflowHidden:f,disabled:me})},[Te,ye,f,me]),Re=Object(S.a)(),Ne=he&&(!!se||N),Fe=!Ce||!Ae,Be=Object(X.c)(D.a);return V.a.createElement("main",{className:l()("drift-widget-chat-layout",Object(a.a)({"drift-widget-chat-layout__takeover":N&&!t},n.reflowFrameCX,!!n)),"aria-live":"polite"},V.a.createElement(m.a,null),V.a.createElement("div",{className:l()("drift-widget-chat-wrapper","drift-widget-chat-wrapper__".concat(Be),{"drift-widget-chat-wrapper__open":R,"drift-widget-chat-wrapper__closed":!R,"drift-widget-chat-wrapper__reflow-hidden":f,"drift-widget-chat-wrapper__active-conversation":Ne,"drift-widget-chat-wrapper__no-footer-content":ne&&Fe,"drift-widget-chat-wrapper__mobile":t,"drift-widget-chat-wrapper__conversation-history":me})},V.a.createElement(G,{chatHidden:f}),!N&&pe&&V.a.createElement(d.a,null),!N&&Ee&&V.a.createElement("div",{className:l()("drift-widget-send-transcript-container",{"drift-widget-send-transcript-container--open":we}),"aria-hidden":!we},we&&V.a.createElement(re,{key:we.toString()})),Ne&&V.a.createElement("div",{className:l()("drift-widget-message-history",{"drift-widget-message-history--with-footer":Re,"drift-widget-message-history--no-composer":Fe}),style:_e},Ie,0===Oe.length&&V.a.createElement(j.a,{titleId:"ChatLayoutLoading"})),V.a.createElement("div",{className:"drift-widget-chat-bottom"},Ce&&V.a.createElement(b.b,{chatHidden:f,disabled:me||we}),!(me||we)&&V.a.createElement(O.a,null)),se&&xe&&V.a.createElement(v.a,{message:Le})))};t.default=function(e){var t=Object(P.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1],o=Object(X.c)(function(e){return e.view.initComplete}),u=Object(X.c)(function(e){return Object(z.a)("en",["embed","configuration","locale"],e)});return Object(P.useEffect)(function(){o&&!a&&function(){var e=Object(i.a)(r.a.mark(function _callee3(){return r.a.wrap(function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ne.b)(u);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),Object(te.n)({data:["i18n failed to load - ".concat(e.t0.message),e.t0],type:"warn",internal:!0});case 8:c(!0);case 9:case"end":return e.stop()}},_callee3,null,[[0,5]])}));return function runAsync(){return e.apply(this,arguments)}}()()},[o,a,u]),V.a.createElement(W.a,null,o&&a?V.a.createElement(se,e):V.a.createElement(f.a,null))}},SwvN:function(e,t,n){},hEj5:function(e,t,n){"use strict";var a=n("s8DI"),c=n("ERkP"),r=n("LaGA");t.a=function useResizeObserver(){var e=Object(c.useState)(),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(null),o=Object(a.a)(s,2),u=o[0],l=o[1],f=Object(c.useRef)(null),b=Object(c.useCallback)(function(){return f.current&&f.current.disconnect()},[]),d=Object(c.useCallback)(function(){u&&(f.current=new r.a(function(){return i(function getRectForRef(e){return e&&e.getBoundingClientRect()}(u))}),f.current.observe(u))},[u]);return Object(c.useLayoutEffect)(function(){return d(),function(){return b()}},[b,d]),[n,l]}},sXTY:function(e,t,n){},swFs:function(e,t,n){"use strict";var a=n("ERkP"),c=n.n(a);n("G5CQ");t.a=function TopLine(e){var t=e.style;return c.a.createElement("div",{className:"drift-widget-header-top-line",style:t})}}}]);