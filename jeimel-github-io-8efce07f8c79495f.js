let S=0,X=`function`,O=128,$=`Object`,Q=null,T=`undefined`,Z=`boolean`,a1=4,_=`string`,U=`utf-8`,Y=`number`,R=1,N=Array,V=Error,a0=FinalizationRegistry,a2=Object,W=Uint8Array,P=undefined;var M=(async(b)=>{if(a!==P)return a;if(typeof b===T){b=new URL(`jeimel-github-io_bg.wasm`,import.meta.url)};const c=I();if(typeof b===_||typeof Request===X&&b instanceof Request||typeof URL===X&&b instanceof URL){b=fetch(b)};J(c);const {instance:d,module:e}=await H(await b,c);return K(d,e)});var g=(a=>{const b=c(a);f(a);return b});var L=(b=>{if(a!==P)return a;const c=I();J(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return K(d,b)});var p=((a,b)=>{a=a>>>S;return m.decode(o().subarray(a,a+ b))});var E=(()=>{if(D===Q||D.byteLength===S){D=new Uint32Array(a.memory.buffer)};return D});var w=((b,c,d,e)=>{const f={a:b,b:c,cnt:R,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===S){a.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=S;v.unregister(f)}}};g.original=f;v.register(g,f,f);return g});var F=((a,b)=>{a=a>>>S;const c=E();const d=c.subarray(a/a1,a/a1+ b);const e=[];for(let a=S;a<d.length;a++){e.push(g(d[a]))};return e});var B=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h72752f64eb628425(b,c,e(d))});var z=((c,d,e)=>{try{a._dyn_core__ops__function__Fn___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1aeb1f989278fafa(c,d,y(e))}finally{b[x++]=P}});var t=((a,b,c)=>{if(c===P){const c=r.encode(a);const d=b(c.length,R)>>>S;o().subarray(d,d+ c.length).set(c);q=c.length;return d};let d=a.length;let e=b(d,R)>>>S;const f=o();let g=S;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==S){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,R)>>>S;const b=o().subarray(e+ g,e+ d);const f=s(a,b);g+=f.written;e=c(e,d,g,R)>>>S};q=g;return e});var c=(a=>b[a]);var j=(()=>{if(i===Q||i.byteLength===S){i=new Float64Array(a.memory.buffer)};return i});var J=((a,b)=>{});var A=((b,c,d,e)=>{const f={a:b,b:c,cnt:R,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=S;try{return e(c,f.b,...b)}finally{if(--f.cnt===S){a.__wbindgen_export_2.get(f.dtor)(c,f.b);v.unregister(f)}else{f.a=c}}};g.original=f;v.register(g,f,f);return g});function G(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(e(b))}}var f=(a=>{if(a<132)return;b[a]=d;d=a});var u=(a=>{const b=typeof a;if(b==Y||b==Z||a==Q){return `${a}`};if(b==_){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==Q){return `Symbol`}else{return `Symbol(${b})`}};if(b==X){const b=a.name;if(typeof b==_&&b.length>S){return `Function(${b})`}else{return `Function`}};if(N.isArray(a)){const b=a.length;let c=`[`;if(b>S){c+=u(a[S])};for(let d=R;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>R){d=c[R]}else{return toString.call(a)};if(d==$){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return $}};if(a instanceof V){return `${a.name}: ${a.message}\n${a.stack}`};return d});var y=(a=>{if(x==R)throw new V(`out of js stack`);b[--x]=a;return x});var K=((b,c)=>{a=b.exports;M.__wbindgen_wasm_module=c;i=Q;k=Q;D=Q;n=Q;a.__wbindgen_start();return a});var H=(async(a,b)=>{if(typeof Response===X&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===X){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var h=(a=>a===P||a===Q);var o=(()=>{if(n===Q||n.byteLength===S){n=new W(a.memory.buffer)};return n});var C=((c,d,e)=>{try{a._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h86b5d89ccddaa427(c,d,y(e))}finally{b[x++]=P}});var I=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return e(b)});b.wbg.__wbindgen_object_drop_ref=(a=>{g(a)});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===Y?d:P;j()[a/8+ R]=h(e)?S:e;l()[a/a1+ S]=!h(e)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=p(a,b);return e(c)});b.wbg.__wbg_cachekey_b81c1aacc6a0645c=((a,b)=>{const d=c(b).__yew_subtree_cache_key;l()[a/a1+ R]=h(d)?S:d;l()[a/a1+ S]=!h(d)});b.wbg.__wbg_subtreeid_e80a1798fee782f9=((a,b)=>{const d=c(b).__yew_subtree_id;l()[a/a1+ R]=h(d)?S:d;l()[a/a1+ S]=!h(d)});b.wbg.__wbg_setsubtreeid_e1fab6b578c800cf=((a,b)=>{c(a).__yew_subtree_id=b>>>S});b.wbg.__wbg_setcachekey_75bcd45312087529=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>S});b.wbg.__wbindgen_jsval_eq=((a,b)=>{const d=c(a)===c(b);return d});b.wbg.__wbindgen_cb_drop=(a=>{const b=g(a).original;if(b.cnt--==R){b.a=S;return !0};const c=!1;return c});b.wbg.__wbg_setlistenerid_f2e783343fa0cec1=((a,b)=>{c(a).__yew_listener_id=b>>>S});b.wbg.__wbg_listenerid_6dcf1c62b7b7de58=((a,b)=>{const d=c(b).__yew_listener_id;l()[a/a1+ R]=h(d)?S:d;l()[a/a1+ S]=!h(d)});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new V();return e(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;l()[b/a1+ R]=g;l()[b/a1+ S]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(p(b,c))}finally{a.__wbindgen_free(d,e,R)}});b.wbg.__wbg_queueMicrotask_481971b0d87f3dd4=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6=(a=>{const b=c(a).queueMicrotask;return e(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===X;return b});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===_?e:P;var g=h(f)?S:t(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var i=q;l()[b/a1+ R]=i;l()[b/a1+ S]=g});b.wbg.__wbindgen_is_string=(a=>{const b=typeof c(a)===_;return b});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==Q;return d});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===P;return b});b.wbg.__wbindgen_in=((a,b)=>{const d=c(a) in c(b);return d});b.wbg.__wbindgen_error_new=((a,b)=>{const c=new V(p(a,b));return e(c)});b.wbg.__wbindgen_jsval_loose_eq=((a,b)=>{const d=c(a)==c(b);return d});b.wbg.__wbindgen_boolean_get=(a=>{const b=c(a);const d=typeof b===Z?(b?R:S):2;return d});b.wbg.__wbindgen_as_number=(a=>{const b=+c(a);return b});b.wbg.__wbindgen_number_new=(a=>{const b=a;return e(b)});b.wbg.__wbg_getwithrefkey_edc2c8960f0f1191=((a,b)=>{const d=c(a)[c(b)];return e(d)});b.wbg.__wbg_set_f975102236d3c502=((a,b,d)=>{c(a)[g(b)]=g(d)});b.wbg.__wbg_error_a526fb08a0205972=((b,c)=>{var d=F(b,c).slice();a.__wbindgen_free(b,c*a1,a1);console.error(...d)});b.wbg.__wbg_body_edb1908d3ceff3a1=(a=>{const b=c(a).body;return h(b)?S:e(b)});b.wbg.__wbg_createElement_8bae7856a4bb7411=function(){return G(((a,b,d)=>{const f=c(a).createElement(p(b,d));return e(f)}),arguments)};b.wbg.__wbg_createElementNS_556a62fb298be5a2=function(){return G(((a,b,d,f,g)=>{const h=c(a).createElementNS(b===S?P:p(b,d),p(f,g));return e(h)}),arguments)};b.wbg.__wbg_createTextNode_0c38fd80a5b2284d=((a,b,d)=>{const f=c(a).createTextNode(p(b,d));return e(f)});b.wbg.__wbg_instanceof_Window_f401953a2cf86220=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_5100775d18896c16=(a=>{const b=c(a).document;return h(b)?S:e(b)});b.wbg.__wbg_location_2951b5ee34f19221=(a=>{const b=c(a).location;return e(b)});b.wbg.__wbg_history_bc4057de66a2015f=function(){return G((a=>{const b=c(a).history;return e(b)}),arguments)};b.wbg.__wbg_innerWidth_758af301ca4baa3e=function(){return G((a=>{const b=c(a).innerWidth;return e(b)}),arguments)};b.wbg.__wbg_innerHeight_c1ef73925c3d3e9c=function(){return G((a=>{const b=c(a).innerHeight;return e(b)}),arguments)};b.wbg.__wbg_instanceof_Element_6945fc210db80ea9=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_namespaceURI_5235ee79fd5f6781=((b,d)=>{const e=c(d).namespaceURI;var f=h(e)?S:t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=q;l()[b/a1+ R]=g;l()[b/a1+ S]=f});b.wbg.__wbg_setinnerHTML_26d69b59e1af99c7=((a,b,d)=>{c(a).innerHTML=p(b,d)});b.wbg.__wbg_outerHTML_e073aa84e7bc1eaf=((b,d)=>{const e=c(d).outerHTML;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;l()[b/a1+ R]=g;l()[b/a1+ S]=f});b.wbg.__wbg_removeAttribute_1b10a06ae98ebbd1=function(){return G(((a,b,d)=>{c(a).removeAttribute(p(b,d))}),arguments)};b.wbg.__wbg_setAttribute_3c9f6c303b696daa=function(){return G(((a,b,d,e,f)=>{c(a).setAttribute(p(b,d),p(e,f))}),arguments)};b.wbg.__wbg_parentNode_6be3abff20e1a5fb=(a=>{const b=c(a).parentNode;return h(b)?S:e(b)});b.wbg.__wbg_parentElement_347524db59fc2976=(a=>{const b=c(a).parentElement;return h(b)?S:e(b)});b.wbg.__wbg_childNodes_118168e8b23bcb9b=(a=>{const b=c(a).childNodes;return e(b)});b.wbg.__wbg_lastChild_83efe6d5da370e1f=(a=>{const b=c(a).lastChild;return h(b)?S:e(b)});b.wbg.__wbg_nextSibling_709614fdb0fb7a66=(a=>{const b=c(a).nextSibling;return h(b)?S:e(b)});b.wbg.__wbg_setnodeValue_94b86af0cda24b90=((a,b,d)=>{c(a).nodeValue=b===S?P:p(b,d)});b.wbg.__wbg_textContent_8e392d624539e731=((b,d)=>{const e=c(d).textContent;var f=h(e)?S:t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=q;l()[b/a1+ R]=g;l()[b/a1+ S]=f});b.wbg.__wbg_cloneNode_e19c313ea20d5d1d=function(){return G((a=>{const b=c(a).cloneNode();return e(b)}),arguments)};b.wbg.__wbg_insertBefore_d2a001abf538c1f8=function(){return G(((a,b,d)=>{const f=c(a).insertBefore(c(b),c(d));return e(f)}),arguments)};b.wbg.__wbg_removeChild_96bbfefd2f5a0261=function(){return G(((a,b)=>{const d=c(a).removeChild(c(b));return e(d)}),arguments)};b.wbg.__wbg_addEventListener_4283b15b4f039eb5=function(){return G(((a,b,d,e,f)=>{c(a).addEventListener(p(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_removeEventListener_5d31483804421bfa=function(){return G(((a,b,d,e,f)=>{c(a).removeEventListener(p(b,d),c(e),f!==S)}),arguments)};b.wbg.__wbg_setchecked_931ff2ed2cd3ebfd=((a,b)=>{c(a).checked=b!==S});b.wbg.__wbg_value_47fe6384562f52ab=((b,d)=>{const e=c(d).value;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;l()[b/a1+ R]=g;l()[b/a1+ S]=f});b.wbg.__wbg_setvalue_78cb4f1fef58ae98=((a,b,d)=>{c(a).value=p(b,d)});b.wbg.__wbg_bubbles_abce839854481bc6=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_cancelBubble_c0aa3172524eb03c=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_58473fd5ae55f2cd=(a=>{const b=c(a).composedPath();return e(b)});b.wbg.__wbg_state_9cc3f933b7d50acb=function(){return G((a=>{const b=c(a).state;return e(b)}),arguments)};b.wbg.__wbg_replaceState_ec9431bea5108a50=function(){return G(((a,b,d,e,f,g)=>{c(a).replaceState(c(b),p(d,e),f===S?P:p(f,g))}),arguments)};b.wbg.__wbg_instanceof_ShadowRoot_9db040264422e84a=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_c667c7623404d6bf=(a=>{const b=c(a).host;return e(b)});b.wbg.__wbg_href_706b235ecfe6848c=function(){return G(((b,d)=>{const e=c(d).href;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;l()[b/a1+ R]=g;l()[b/a1+ S]=f}),arguments)};b.wbg.__wbg_pathname_5449afe3829f96a1=function(){return G(((b,d)=>{const e=c(d).pathname;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;l()[b/a1+ R]=g;l()[b/a1+ S]=f}),arguments)};b.wbg.__wbg_search_489f12953342ec1f=function(){return G(((b,d)=>{const e=c(d).search;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;l()[b/a1+ R]=g;l()[b/a1+ S]=f}),arguments)};b.wbg.__wbg_hash_553098e838e06c1d=function(){return G(((b,d)=>{const e=c(d).hash;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;l()[b/a1+ R]=g;l()[b/a1+ S]=f}),arguments)};b.wbg.__wbg_href_7bfb3b2fdc0a6c3f=((b,d)=>{const e=c(d).href;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;l()[b/a1+ R]=g;l()[b/a1+ S]=f});b.wbg.__wbg_pathname_c5fe403ef9525ec6=((b,d)=>{const e=c(d).pathname;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;l()[b/a1+ R]=g;l()[b/a1+ S]=f});b.wbg.__wbg_search_c68f506c44be6d1e=((b,d)=>{const e=c(d).search;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;l()[b/a1+ R]=g;l()[b/a1+ S]=f});b.wbg.__wbg_hash_cdea7a9b7e684a42=((b,d)=>{const e=c(d).hash;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;l()[b/a1+ R]=g;l()[b/a1+ S]=f});b.wbg.__wbg_sethash_9bacb48849d0016e=((a,b,d)=>{c(a).hash=p(b,d)});b.wbg.__wbg_new_67853c351755d2cf=function(){return G(((a,b)=>{const c=new URL(p(a,b));return e(c)}),arguments)};b.wbg.__wbg_newwithbase_6aabbfb1b2e6a1cb=function(){return G(((a,b,c,d)=>{const f=new URL(p(a,b),p(c,d));return e(f)}),arguments)};b.wbg.__wbg_value_d7f5bfbd9302c14b=((b,d)=>{const e=c(d).value;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;l()[b/a1+ R]=g;l()[b/a1+ S]=f});b.wbg.__wbg_setvalue_090972231f0a4f6f=((a,b,d)=>{c(a).value=p(b,d)});b.wbg.__wbg_crypto_566d7465cdbb6b7a=(a=>{const b=c(a).crypto;return e(b)});b.wbg.__wbg_process_dc09a8c7d59982f6=(a=>{const b=c(a).process;return e(b)});b.wbg.__wbg_versions_d98c6400c6ca2bd8=(a=>{const b=c(a).versions;return e(b)});b.wbg.__wbg_node_caaf83d002149bd5=(a=>{const b=c(a).node;return e(b)});b.wbg.__wbg_msCrypto_0b84745e9245cdf6=(a=>{const b=c(a).msCrypto;return e(b)});b.wbg.__wbg_require_94a9da52636aacbf=function(){return G((()=>{const a=module.require;return e(a)}),arguments)};b.wbg.__wbg_randomFillSync_290977693942bf03=function(){return G(((a,b)=>{c(a).randomFillSync(g(b))}),arguments)};b.wbg.__wbg_getRandomValues_260cc23a41afad9a=function(){return G(((a,b)=>{c(a).getRandomValues(c(b))}),arguments)};b.wbg.__wbg_get_bd8e338fbd5f5cc8=((a,b)=>{const d=c(a)[b>>>S];return e(d)});b.wbg.__wbg_length_cd7af8117672b8b8=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_e258087cd0daa0ea=((a,b)=>{const c=new Function(p(a,b));return e(c)});b.wbg.__wbg_call_27c0f87801dedf93=function(){return G(((a,b)=>{const d=c(a).call(c(b));return e(d)}),arguments)};b.wbg.__wbg_new_72fb9a18b5ae2624=(()=>{const a=new a2();return e(a)});b.wbg.__wbg_self_ce0dbfc45cf2f5be=function(){return G((()=>{const a=self.self;return e(a)}),arguments)};b.wbg.__wbg_window_c6fb939a7f436783=function(){return G((()=>{const a=window.window;return e(a)}),arguments)};b.wbg.__wbg_globalThis_d1e6af4856ba331b=function(){return G((()=>{const a=globalThis.globalThis;return e(a)}),arguments)};b.wbg.__wbg_global_207b558942527489=function(){return G((()=>{const a=global.global;return e(a)}),arguments)};b.wbg.__wbg_from_89e3fc3ba5e6fb48=(a=>{const b=N.from(c(a));return e(b)});b.wbg.__wbg_instanceof_ArrayBuffer_836825be07d4c9d2=(a=>{let b;try{b=c(a) instanceof ArrayBuffer}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_call_b3ca7c6051f9bec1=function(){return G(((a,b,d)=>{const f=c(a).call(c(b),c(d));return e(f)}),arguments)};b.wbg.__wbg_isSafeInteger_f7b04ef02296c4d2=(a=>{const b=Number.isSafeInteger(c(a));return b});b.wbg.__wbg_entries_95cc2c823b285a09=(a=>{const b=a2.entries(c(a));return e(b)});b.wbg.__wbg_is_010fdc0f4ab96916=((a,b)=>{const d=a2.is(c(a),c(b));return d});b.wbg.__wbg_resolve_b0083a7967828ec8=(a=>{const b=Promise.resolve(c(a));return e(b)});b.wbg.__wbg_then_0c86a60e8fcfe9f6=((a,b)=>{const d=c(a).then(c(b));return e(d)});b.wbg.__wbg_buffer_12d079cc21e14bdb=(a=>{const b=c(a).buffer;return e(b)});b.wbg.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb=((a,b,d)=>{const f=new W(c(a),b>>>S,d>>>S);return e(f)});b.wbg.__wbg_new_63b92bc8671ed464=(a=>{const b=new W(c(a));return e(b)});b.wbg.__wbg_set_a47bac70306a19a7=((a,b,d)=>{c(a).set(c(b),d>>>S)});b.wbg.__wbg_length_c20a40f15020d68a=(a=>{const b=c(a).length;return b});b.wbg.__wbg_instanceof_Uint8Array_2b3bbecd033d19f6=(a=>{let b;try{b=c(a) instanceof W}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_newwithlength_e9b4878cebadb3d3=(a=>{const b=new W(a>>>S);return e(b)});b.wbg.__wbg_subarray_a1f73cd4b5b42fe1=((a,b,d)=>{const f=c(a).subarray(b>>>S,d>>>S);return e(f)});b.wbg.__wbg_set_1f9b04f170055d33=function(){return G(((a,b,d)=>{const e=Reflect.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=u(c(d));const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;l()[b/a1+ R]=g;l()[b/a1+ S]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new V(p(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return e(b)});b.wbg.__wbindgen_closure_wrapper1137=((a,b,c)=>{const d=w(a,b,482,z);return e(d)});b.wbg.__wbindgen_closure_wrapper1471=((a,b,c)=>{const d=A(a,b,637,B);return e(d)});b.wbg.__wbindgen_closure_wrapper1509=((a,b,c)=>{const d=A(a,b,659,C);return e(d)});return b});var l=(()=>{if(k===Q||k.byteLength===S){k=new Int32Array(a.memory.buffer)};return k});var e=(a=>{if(d===b.length)b.push(b.length+ R);const c=d;d=b[c];b[c]=a;return c});let a;const b=new N(O).fill(P);b.push(P,Q,!0,!1);let d=b.length;let i=Q;let k=Q;const m=typeof TextDecoder!==T?new TextDecoder(U,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw V(`TextDecoder not available`)}};if(typeof TextDecoder!==T){m.decode()};let n=Q;let q=S;const r=typeof TextEncoder!==T?new TextEncoder(U):{encode:()=>{throw V(`TextEncoder not available`)}};const s=typeof r.encodeInto===X?((a,b)=>r.encodeInto(a,b)):((a,b)=>{const c=r.encode(a);b.set(c);return {read:a.length,written:c.length}});const v=typeof a0===T?{register:()=>{},unregister:()=>{}}:new a0(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});let x=O;let D=Q;export default M;export{L as initSync}