(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[11],{"9pre":function(e,t,a){a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return n}));const i=5,s="V_HLSV3_MOBILE",n=[0,.01,.02,.03,.04,.05,.06,.07,.08,.09,.1,.11,.12,.13,.14,.15,.16,.17,.18,.19,.2,.21,.22,.23,.24,.25,.26,.27,.28,.29,.3,.31,.32,.33,.34,.35,.36,.37,.38,.39,.4,.41,.42,.43,.44,.45,.46,.47,.48,.49,.5,.51,.52,.53,.54,.55,.56,.57,.58,.59,.6,.61,.62,.63,.64,.65,.66,.67,.68,.69,.7,.71,.72,.73,.74,.75,.76,.77,.78,.79,.8,.81,.82,.83,.84,.85,.86,.87,.88,.89,.9,.91,.92,.93,.94,.95,.96,.97,.98,.99,1]},Lic6:function(e,t,a){a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return h})),a.d(t,"a",(function(){return c}));var i=a("7w6Q"),s=a("Xy1J");const n=["isCellular","videoUrl","sessionMark"],r=["fatalError"];let l={},o="";const d=e=>{const{browserName:t,browserVersion:a,country:i,isAuthenticated:s,isBot:n,isSocialBot:r,view:d="unknown",viewParameter:h="unknown"}=e;o=(r?"socialBot":n&&"bot")||"nonbot";const c=(e=>{switch(e){case"BR":case"MX":case"AR":case"CL":case"CO":return"LatAm";case"US":return"US";default:return"OTHER"}})(i);l={browserName:t,browserVersion:(null==a?void 0:a.split(".")[0])||"0",isAuthenticated:s,region:c,view:d,viewParameter:h}};function h(e,t,a={}){const s=t?"hls":"nonHls",n={...a,...l},r=`web.video.${s}.${o}.${e}`;i.a.increment(r,1,n)}function c(e,t,a={}){const d=t?"hls":"nonHls",h=e.sessionMark===s.e?"sessionStart":"sessionEnd",c={...a,...l};if(Object.entries(e).forEach(([e,t])=>{const a=`web.video.${d}.${o}.${h}.${e}`,s=parseInt(t,10),l="number"==typeof s?s:-1;var u;if(!n.includes(e))if(r.includes(e)&&t)i.a.increment(a,1,c);else if(e.includes("Width")||e.includes("Height")){const e=(u=l)<0?"negative":0===u?"zero":u<200?"xs":u<400?"s":u<600?"m":u<800?"l":u<1e3?"xl":u<1200?"xxl":"over1200";i.a.increment(a,1,{dimensionBucket:e,...c})}else if("numberOfStalls"===e){let e=t;l>1e3?e="over1000":l>10?e="over10":l<0&&(e="negative"),i.a.increment(a,1,{numberOfStalls:e,...c})}else"screenPixelRatio"===e?i.a.increment(a,1,{screenPixelRatio:t||-1,...c}):l>=0?(0===l&&i.a.increment(a+".zero",1,c),i.a.timing(a,l,1),i.a.timing(a+"_with_tags",l,1,c)):l<0&&i.a.increment(a+".negative",1,c)}),e.sessionMark!==s.e){const{rebufferRate:t,startupLatencyMs:a,startupVariantWidth:s,startupPlayerWidth:n}=e,r=`web.video.${d}.${o}.${h}`;if(s&&n){const e=1.5*s>2*n;i.a.increment(`${r}.upscaled.${e?"good":"bad"}`,1,c)}"number"==typeof a&&i.a.increment(`${r}.startupLatency.${a<500?"good":"bad"}`,1,c),"number"==typeof t&&i.a.increment(`${r}.rebufferRate.${t<.01?"good":"bad"}`,1,c)}}},Xy1J:function(e,t,a){a.d(t,"e",(function(){return s})),a.d(t,"d",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return o})),a.d(t,"f",(function(){return d})),a.d(t,"g",(function(){return h}));var i=a("7Cbv");const s=1,n=2,r=1e3,l=1e3,o=1e3,d=Object.freeze({LOADING:0,PLAYING:1,PAUSED:2,SEEKING:3,STALLING:4,FAILED:5,ENDED:6});function h(e){return e+"-"+Object(i.a)()}},aFfM:function(e,t,a){var i=a("q1tI"),s=a("ulZh"),n=a.n(s),r=a("v/Q4"),l=a("U4JR"),o=a("pLLR"),d=a("n6mq"),h=a("Xy1J"),c=a("Lic6"),u=a("nKUr");function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class m extends i.PureComponent{constructor(...e){super(...e),p(this,"state",{canPlayVideo:!1,isManifestParsed:!1,playbackState:h.f.LOADING}),p(this,"firstFragBuffered",!1),p(this,"hasPlaybackStarted",!1),p(this,"hasVideoSessionStarted",!1),p(this,"hasVideoSessionEnded",!1),p(this,"hls",null),p(this,"fragStartupTime",{}),p(this,"lastLevelSwitchKbps",null),p(this,"lastStallTime",null),p(this,"videoSessionId",""),p(this,"videoVisibleTime",null),p(this,"playbackPerformance",{canPlayTime:null,downloadedKiloBytes:0,fatalErrorMsg:"",hasFatalError:!1,loadStartTime:null,numStalls:0,playbackStartTimestamp:null,segments:[],srcString:"string"==typeof this.props.src?this.props.src:this.props.src[0].src,totalStallDurationMs:0,videoCreatedTime:null}),p(this,"initializeHls",()=>{this.destroyHls();const{src:e,hlsConfig:t}=this.props,a=new n.a(t);a.loadSource(e),this.videoPlayerRef&&a.attachMedia(this.videoPlayerRef.video),a.on(n.a.Events.FRAG_BUFFERED,this.handleHlsFragBuffered),a.on(n.a.Events.FRAG_CHANGED,this.handleHlsFragChanged),a.on(n.a.Events.FRAG_LOADING,this.handleHlsFragLoading),a.on(n.a.Events.FRAG_LOADED,this.handleHlsFragLoaded),a.on(n.a.Events.MANIFEST_PARSED,()=>{this.setState({isManifestParsed:!0})}),a.on(n.a.Events.LEVEL_SWITCHED,this.handleHlsLevelSwitched),a.on(n.a.Events.ERROR,this.handleHlsError),this.hls=a}),p(this,"destroyHls",()=>{const{hls:e}=this;e&&e.destroy()}),p(this,"addSegment",e=>{const{segments:t}=this.playbackPerformance,a=t&&t[t.length-1];if(this.hls&&t.length&&a&&a.uri!==e.url){this.updateWatchDurationForCurrentSegment();const a=this.videoPlayerRef&&this.videoPlayerRef.video,i=this.hls&&this.hls.levels||{},s=this.hls&&"number"==typeof this.hls.currentLevel?i[this.hls.currentLevel]:{},n=this.fragStartupTime[e.url];let r=-1;n&&n.startLoadTime&&n.endLoadTime&&(r=n.endLoadTime-n.startLoadTime);const l={indicatedKbps:s.bitrate/h.a,duration:e.duration,level:e.level,lastStartPlayTime:this.getCurrentVideoTime(),numServerAddressChange:-1,observedKbps:this.hls&&this.hls.bandwidthEstimate/h.a||-1,playbackStartDate:Date.now(),serverAddress:"",sn:e.sn,sourceWidth:s.width,sourceHeight:s.height,startupTimeMs:r,switchBitrateKbps:this.lastLevelSwitchKbps||-1,uri:e.url,viewportWidth:a&&a.clientWidth||-1,viewportHeight:a&&a.clientHeight||-1,watchedDurationMs:0};t.push(l)}}),p(this,"initializeSegments",e=>{const{segments:t}=this.playbackPerformance;if(!t.length)if(this.hls&&"number"==typeof this.hls.currentLevel&&this.videoPlayerRef&&this.videoPlayerRef.video){if(!t.length){const a=this.videoPlayerRef&&this.videoPlayerRef.video,i=this.hls.levels[this.hls.currentLevel]||{},s=this.fragStartupTime[e.url];let n=-1;s&&s.startLoadTime&&s.endLoadTime&&(n=s.endLoadTime-s.startLoadTime),this.lastLevelSwitchKbps=this.hls.bandwidthEstimate/h.a;const r={indicatedKbps:i.bitrate/h.a,duration:e.duration,level:e.level,lastStartPlayTime:null,numServerAddressChange:-1,observedKbps:this.hls.bandwidthEstimate/h.a||-1,playbackStartDate:null,serverAddress:"",sn:e.sn,sourceWidth:i.width,sourceHeight:i.height,startupTimeMs:n,switchBitrateKbps:this.lastLevelSwitchKbps||-1,uri:e.url,viewportWidth:a.clientWidth,viewportHeight:a.clientHeight,watchedDurationMs:0};t.push(r)}}else Object(c.c)("initializeSegmentsFailed",!0)}),p(this,"getCurrentVideoTime",()=>this.videoPlayerRef&&this.videoPlayerRef.video?this.videoPlayerRef.video.currentTime*h.c:null),p(this,"handleCanPlayVideo",e=>{const{onReady:t,playing:a}=this.props,{canPlayVideo:i}=this.state;Object(c.c)("handleCanPlayVideo",!0,{firstCanPlayEvent:!i,playing:a}),i||(this.playbackPerformance.canPlayTime=new Date),this.setState({canPlayVideo:!0}),t&&t(e)}),p(this,"handleEnded",e=>{const{loop:t,onEnded:a}=this.props,{segments:i}=this.playbackPerformance,s=i&&i[i.length-1];t&&this.videoPlayerRef&&this.videoPlayerRef.video?(this.updateWatchDurationForCurrentSegment(),s&&(s.lastStartPlayTime=0),this.fragStartupTime={}):t||this.logPlaybackPerformance(h.d,{initiator:"videoEnded",loop:t}),this.setState({playbackState:h.f.ENDED}),a&&a(e)}),p(this,"handleHlsError",(e,t)=>{t.fatal&&(this.playbackPerformance.hasFatalError=!0,this.playbackPerformance.fatalErrorMsg=t.details),this.updateWatchDurationForCurrentSegment(),this.setState({playbackState:h.f.FAILED})}),p(this,"handleHlsFragBuffered",(e,t)=>{this.firstFragBuffered||(this.initializeSegments(t.frag),this.firstFragBuffered=!0)}),p(this,"handleHlsFragChanged",(e,t)=>{this.addSegment(t.frag)}),p(this,"handleHlsFragLoading",(e,t)=>{var a;const i=null===(a=t.frag)||void 0===a?void 0:a.url;i&&!this.fragStartupTime[i]&&(this.fragStartupTime[i]={startLoadTime:new Date})}),p(this,"handleHlsFragLoaded",(e,t)=>{var a;t.frag&&t.frag.loaded&&(this.playbackPerformance.downloadedKiloBytes+=t.frag.loaded/h.b);const i=null===(a=t.frag)||void 0===a?void 0:a.url;i&&this.fragStartupTime[i]&&this.fragStartupTime[i].startLoadTime&&(this.fragStartupTime[i].endLoadTime=new Date)}),p(this,"handleHlsLevelSwitched",()=>{this.hls&&this.hls.bandwidthEstimate&&(this.lastLevelSwitchKbps=this.hls.bandwidthEstimate/h.a)}),p(this,"handleLoadStart",()=>{this.playbackPerformance.loadStartTime=new Date}),p(this,"handlePlaying",()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];this.hasPlaybackStarted||(this.playbackPerformance.playbackStartTimestamp=Date.now(),this.hasPlaybackStarted=!0),this.initializeSegments(),t&&null===t.lastStartPlayTime&&(t.lastStartPlayTime=this.getCurrentVideoTime()),t&&null===t.playbackStartDate&&(t.playbackStartDate=Date.now()),this.updateStallDuration(),this.setState({playbackState:h.f.PLAYING})}),p(this,"handlePause",()=>{this.state.playbackState!==h.f.STALLING&&this.state.playbackState!==h.f.SEEKING&&(this.updateWatchDurationForCurrentSegment(),this.updateStallDuration()),this.setState({playbackState:h.f.PAUSED})}),p(this,"handleSeeking",()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&(t.lastStartPlayTime=null),this.state.playbackState!==h.f.ENDED&&this.setState({playbackState:h.f.SEEKING})}),p(this,"handleStalled",()=>{null===this.lastStallTime&&this.state.playbackState!==h.f.ENDED&&(this.lastStallTime=new Date,this.playbackPerformance.numStalls+=1),this.setState({playbackState:h.f.STALLING})}),p(this,"handleTimeUpdate",()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];this.state.playbackState===h.f.PLAYING&&(this.updateWatchDurationForCurrentSegment(),t&&null===t.lastStartPlayTime&&(t.lastStartPlayTime=this.getCurrentVideoTime()))}),p(this,"setVideoPlayerRef",e=>{const{setVideoRef:t}=this.props;if(e&&(t&&t(e),this.videoPlayerRef=e,this.videoPlayerRef.video)){const e=this.videoPlayerRef.video;e.addEventListener("loadstart",this.handleLoadStart),e.addEventListener("playing",this.handlePlaying),e.addEventListener("pause",this.handlePause),e.addEventListener("seeking",this.handleSeeking),e.addEventListener("stalled",this.handleStalled),e.addEventListener("timeupdate",this.handleTimeUpdate),e.addEventListener("waiting",this.handleStalled),e.readyState>=3&&(this.setState({canPlayVideo:!0}),this.playbackPerformance.canPlayTime=new Date)}}),p(this,"updateStallDuration",()=>{null!==this.lastStallTime&&(this.playbackPerformance.totalStallDurationMs+=new Date-this.lastStallTime,this.lastStallTime=null)}),p(this,"updateWatchDurationForCurrentSegment",()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1],a=t?t.lastStartPlayTime:null,i=this.getCurrentVideoTime();if(t&&null!==a&&"number"==typeof i&&"number"==typeof a){const e=i-a;e>0&&(t.watchedDurationMs+=e,t.lastStartPlayTime=null)}}),p(this,"logPlaybackPerformance",(e,t)=>{const{contextLogData:a,userId:i}=this.props,{canPlayTime:s,downloadedKiloBytes:n,hasFatalError:r,playbackStartTimestamp:o,segments:d,srcString:u,loadStartTime:p,numStalls:m}=this.playbackPerformance,b=this.videoPlayerRef&&this.videoPlayerRef.video,f=e===h.e,y=f&&!this.hasVideoSessionStarted,S=!f&&!this.hasVideoSessionEnded&&this.hasVideoSessionStarted;if(this.hls&&b&&(y||S)){var g;let y=-1;s&&p&&(y=s>p?s-p:0);let S=-1;s&&this.videoVisibleTime&&(S=s>this.videoVisibleTime?s-this.videoVisibleTime:0);const v={averageVideoKbps:-1,downloadedKiloBytes:n,isCellular:!1,fatalError:r,nativeVideoDurationMs:b.duration*h.c||-1,numberOfStalls:m,overallWatchedDurationMs:-1,rebufferRate:-1,playbackStartTimestamp:o||-1,segments:[],sessionMark:e,screenPixelRatio:null!==(g=window)&&void 0!==g&&g.devicePixelRatio?window.devicePixelRatio:-1,startupPlayerWidth:b.clientWidth,startupPlayerHeight:b.clientHeight,startupTimeMs:y,startupLatencyMs:S,startupVariantKbps:-1,startupVariantWatchedDurationMs:-1,startupVariantWidth:b.videoWidth,startupVariantHeight:b.videoHeight,videoUrl:u};if(f)this.videoSessionId=Object(h.g)(i);else if(d.length>0){const e=this.hls.levels,t=d[0];this.updateWatchDurationForCurrentSegment(),this.updateStallDuration();const a=d.reduce((t,a)=>t+(e[a.level]||{}).bitrate*(a.watchedDurationMs||0)/h.c,0),i=d.reduce((e,t)=>e+(t.watchedDurationMs||0),0);let s=null,n=0,r=0;do{n+=d[r].watchedDurationMs,s=s||d[r].level,r+=1}while(r<d.length&&d[r].level===s);v.startupVariantKbps=t.indicatedKbps,v.startupVariantWatchedDurationMs=n,v.startupVariantWidth=t.sourceWidth,v.startupVariantHeight=t.sourceHeight,v.overallWatchedDurationMs=i,i>0?(v.averageVideoKbps=a/(i/h.c),v.rebufferRate=this.playbackPerformance.totalStallDurationMs/i):0===i&&(v.averageVideoKbps=0,v.rebufferRate=0),v.segments=d}Object(c.a)(v,!0),Object(l.b)(3606,{...a,playback_session_id:this.videoSessionId,eventData:{videoPerformanceData:v}}),f?this.hasVideoSessionStarted=!0:(this.videoSessionId="",this.hasVideoSessionEnded=!0),Object(c.c)(f?"sessionStart":"sessionEnd",!0,t)}})}componentDidMount(){const{playing:e}=this.props;this.playbackPerformance.videoCreatedTime=new Date,this.initializeHls(),Object(c.c)("videoMounted",!0),e&&(this.videoVisibleTime=new Date,this.logPlaybackPerformance(h.e,{initiator:"mount"}))}componentDidUpdate(e,t){const{playing:a,src:i}=this.props;var s,n;(typeof(s=e.src)!=typeof(n=i)||(Array.isArray(n)?s.length!==n.length||n.some((e,t)=>!Array.isArray(s)||e.type!==s[t].type||e.src!==s[t].src):n!==s))&&this.initializeHls(),t.playbackState!==h.f.PAUSED&&t.playbackState!==h.f.SEEKING&&t.playbackState!==h.f.STALLING&&!1===e.playing&&a&&(this.videoVisibleTime=this.videoVisibleTime||new Date,this.logPlaybackPerformance(h.e,{initiator:"update"}))}componentWillUnmount(){const{loop:e}=this.props;this.logPlaybackPerformance(h.d,{initiator:"unmount",loop:e}),this.destroyHls()}render(){const{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:i,accessibilityPlayLabel:s,accessibilityUnmuteLabel:n,aspectRatio:r,captions:l,controls:o,loop:h,loopOveride:c,onDurationChange:p,onFullscreenChange:m,onLoadedChange:b,onPause:f,onPlay:y,onPlayheadDown:S,onPlayheadUp:g,onSeek:v,onTimeChange:P,onVolumeChange:L,playbackRate:w,playing:D,playsInline:E,poster:T,preload:k,src:V,volume:R}=this.props,{canPlayVideo:A,isManifestParsed:C}=this.state;return Object(u.jsx)(d.fb,{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:i,accessibilityPlayLabel:s,accessibilityUnmuteLabel:n,aspectRatio:r,captions:l,controls:o,loop:void 0===c?h:c,onDurationChange:p,onEnded:this.handleEnded,onFullscreenChange:m,onLoadedChange:b,onPause:f,onPlay:y,onPlayheadDown:S,onPlayheadUp:g,onReady:this.handleCanPlayVideo,onSeek:v,onTimeChange:P,onVolumeChange:L,playbackRate:w,playing:C&&A&&D,playsInline:E,poster:T,preload:k,ref:this.setVideoPlayerRef,src:V,volume:R})}}t.a=Object(i.memo)((function(e){const{country:t,isAuthenticated:a,isBot:i,isSocialBot:s,unauthId:n,userAgent:l}=Object(o.d)(),{browserName:d,browserVersion:h}=l,{contextLogData:p={}}=e,{view:b,viewParameter:f}=p,y=Object(r.a)(),S={browserName:d,browserVersion:h,country:t,isAuthenticated:a,isBot:i,isSocialBot:s,view:b,viewParameter:f};return Object(c.b)(S),Object(u.jsx)(m,{...e,userId:y.id||n})}))}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/11-77b59e1dc52ecf964c41.mjs.map