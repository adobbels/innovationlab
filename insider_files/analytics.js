!function(){function a(a){return"[object Array]"===Object.prototype.toString.call(a)}function b(b,c){var d,e,f;if("function"!=typeof b)throw"InvalidArgument: bad queue handler";if(c){if(!a(c))throw"InvalidArgument: bad queue backlog";f=c}else f=[];for(e=f.length,d=0;e>d;d+=1)b(f[d]);return this.push=function(a){b(a)},this}function c(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&("click"===b&&a.document&&(a=a.document),a.attachEvent("on"+b,c))}function d(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&("click"===b&&a.document&&(a=a.document),a.detachEvent("on"+b,c))}function e(a,b){var e,f,g;g=function(){"complete"===a.readyState&&f()},f=function(){e||(e=!0,d(a,"load",f),d(a,"readystatechange",g),b())},e=!1,c(a,"load",f),c(a,"readystatechange",g)}function f(a,b){var c,d,f;c=new Image(1,1),"function"==typeof b&&(d=!1,f=function(){d||(d=!0,c.onerror=null,b())},e(c,f),c.onerror=f,window.setTimeout(f,300)),c.src=a}function g(a){var b,c,d;return c=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,d={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},b=a.replace(c,function(a){var b=d[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}),'"'+b+'"'}function h(a){var b,c,d;if(window.JSON&&window.JSON.stringify)return JSON.stringify(a);b="{",d=0;for(c in a)a.hasOwnProperty(c)&&(d>0&&(b+=","),b+=g(c)+":"+g(a[c].toString()),d+=1);return b+="}"}function i(a){return a+"&bust="+Math.round(99999999*Math.random())}function j(a){var b,c;return b=new RegExp("(?:(?:^|.*;\\s*)"+a+"\\s*\\=\\s*([^;]*).*$)|^.*$"),c=document.cookie.replace(b,"$1"),""===c?null:c}function k(a,b,c){var d,e,f;c=c||7,e=(new Date).getTime()+864e5*c,f=new Date(e).toUTCString(),d=a+"="+b,d+=";expires="+f,document.cookie=d}function l(a,b,c,d){A[a]=A[a]||{},A[a].url=b,A[a].referrer=c,"function"==typeof d&&d()}function m(a,b,c,d){var e,g;e=h({Ba4:"tracking",Ba5:b,Ba6:c,Ba18:"PAGE_VIEW",Ba20:a,Ba26:"VDNASITETRACKING"}),e='{"esVDNAAppUserActionEvent":['+e+"]}",g=i("//vdna.exelator.com/VdnaRequestServlet?j=0&lb="+a+"&api_key="+a+"&e="+window.encodeURIComponent(e)+"&url="+window.encodeURIComponent(b)+"&rurl="+window.encodeURIComponent(c)),f(g,d)}function n(a,b,c,d,e){var g,j;g=h({Ba4:"tracking",Ba5:c,Ba6:d,Ba18:"INSERTED_INTO_"+b.toUpperCase(),Ba20:a,Ba26:"VDNASITETRACKING"}),g='{"esVDNAAppUserActionEvent":['+g+"]}",j=i("//ev.visualdna.com/events?b=GenericApp_v_0.1&enc=json&e="+window.encodeURIComponent(g)),f(j,e)}function o(a,b,c,d,e,g,j,k,l){var m,n,o;o="<ts>"+Math.round(c.getTime()/1e3)+"</ts><ad_size>"+d+"x"+e+"</ad_size><elements>"+g+"</elements>",o="<extradata>"+o+"</extradata>",m=h({Ba4:"adTargetingTag",Ba5:j,Ba6:k,Ba18:"AD_RECOMMENDATION",Ba20:a,Ba26:"AD",Ba27:b,Ba28:o}),m='{"esVDNAAppUserActionEvent":['+m+"]}",n=i("//ev.visualdna.com/events?b=GenericApp_v_0.1&enc=json&e="+window.encodeURIComponent(m)),f(n,l)}function p(a,b,c,d,e,g){var h,j,k=c&&("email"===c.src||"e"===c.partner_user_id_type);if(!k){if(h="//e.visualdna.com/conversion?",h+="api_key="+window.encodeURIComponent(a),h+="&id="+window.encodeURIComponent(b),c)for(j in c)c.hasOwnProperty(j)&&!/^(api_key|id|url|referrer|)$/.test(j)&&(h+="&"+window.encodeURIComponent(j)+"="+window.encodeURIComponent(c[j].toString()));d&&(h+="&url="+window.encodeURIComponent(d)),e&&(h+="&referrer="+window.encodeURIComponent(e)),f(i(h),g)}}function q(a,b,c,d,e){var g;j("vdnaSyncJS")!==c&&(d=d||7,k("vdnaSyncJS",c,d),g="//e.visualdna.com/import?",g+="api_key="+window.encodeURIComponent(a),g+="&id_space="+window.encodeURIComponent(b),g+="&partner_user_id="+window.encodeURIComponent(c),f(i(g),e))}function r(){var a,b;return a=navigator.userAgent,b=a&&!/AppleWebKit\/([^\s]*)/.test(a)&&!/Opera[\s\/]([^\s]*)/.test(a)&&/MSIE\s([^;]*)/.test(a)}function s(a){return a.split("#",1)[0]}function t(a,b){function c(a){window.location=a.href}var d,e;for(e=window.location.href,e=s(e),a=a||window.event,d=a.target||a.srcElement;d&&d.tagName&&"BODY"!==d.tagName.toUpperCase();){if("A"===d.tagName.toUpperCase()&&d.href&&!/^#|^javascript:/.test(d.href)&&s(d.href)!==e){if(r()||!a.preventDefault)return m(b,d.href,A[b].url||window.location.href),a.returnValue=!0,!0;a.preventDefault(),m(b,d.href,A[b].url||window.location.href,c(d))}d=d.parentNode}}function u(a){var b,c,d;if("object"==typeof a&&"string"==typeof a.apiKey&&(A[a.apiKey]=A[a.apiKey]||{},a.method&&"function"==typeof y[a.method])){for(b=[],b.push(a.apiKey),d=a.args&&a.args.length?a.args.length:0,c=0;d>c;c+=1)b.push(a.args[c]);y[a.method].apply(this,b),"setContext"!==a.method&&z(a.apiKey)}}function v(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function w(a){var b,c,d;if(a=a||window.event,c="w.visualdna.com",d=new RegExp("^https?:\\/\\/"+v(c)+"(:\\d+)?$"),d.test(a.origin)&&"undefined"!=typeof JSON)try{b=JSON.parse(a.data),b&&b.type&&"IDENTITY_SYNC"===b.type&&b.apiKey&&A[b.apiKey]&&b.partner&&n(b.apiKey,b.partner,A[b.apiKey].url||window.location.href,A[b.apiKey].referrer||document.referrer||"")}catch(e){}}var x,y,z,A;A={},y={},y.setContext=function(a,b,c){l(a,b,c)},y.trackFollowedLinksAsPageViews=function(a,b){c(b,"click",function(b){t(b,a)})},y.reportAdRecommendation=function(a,b,c,d,e,f,g,h){o(a,b,c,d,e,f,g||window.location.href,h||document.referrer)},y.reportPageView=function(a,b,c){b=b||A[a].url||window.location.href,c||""===c||(c=A[a].referrer||document.referrer),m(a,b,c,function(){})},y.reportConversion=function(a,b,c,d,e){d=d||A[a].url||window.location.href,e||""===e||(e=A[a].referrer||document.referrer),p(a,b,c,d,e,function(){})},y.reportSync=function(a,b,c,d){q(a,b,c,d,function(){})},z=function(){function a(a){var b,c,d;c=window.location.href.toString(),b=document.createElement("iframe"),b.title="VisualDNA Analytics",b.width="0",b.height="0",b.style.display="none",b.setAttribute("aria-hidden","true"),d="//w.visualdna.com/analytics/?api_key="+window.encodeURIComponent(a),d+="undefined"==typeof window.postMessage||"undefined"==typeof JSON||"function"!=typeof JSON.parse?"&url="+window.encodeURIComponent(c)+(document.referrer?"&referrer="+window.encodeURIComponent(document.referrer):""):"&post_message=1",b.src=d,document.body.insertBefore(b,document.body.firstChild)}var b;return b={},function(c){b[c]||(document.readyState&&"complete"!==document.readyState?e(window,function(){a(c)}):a(c),b[c]=!0)}}(),c(window,"message",w),window.VDNA=window.VDNA||{},x=window.VDNA,x.queue=x.queue||[],a(x.queue)&&(x.queue=new b(u,x.queue))}();