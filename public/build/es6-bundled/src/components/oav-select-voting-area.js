define(["./oav-app.js"],function(_oavApp){"use strict";class OavSelectVotingArea extends _oavApp.PageViewElement{static get properties(){return{configFromServer:{type:Object},hasLoadedCss:Boolean}}static get styles(){return[_oavApp.OavShadowStyles,_oavApp.OavFlexLayout]}b64DecodeUnicode(str){return decodeURIComponent(atob(str).split("").map(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)}).join(""))}render(){if(this.hasLoadedCss){return _oavApp.html$1`${this.wide?_oavApp.html$1`${(0,_oavApp.unsafeHTML)(this.setupHTMLText(this.configFromServer.client_config.selectVotingAreaDesktopHTML))}`:_oavApp.html$1`${(0,_oavApp.unsafeHTML)(this.setupHTMLText(this.configFromServer.client_config.selectVotingAreaMobileHTML))}`}`}else{return _oavApp.html$1``}}renderText(){if(this.hasLoadedCss){return _oavApp.html$1`${(0,_oavApp.unsafeHTML)(this.setupHTMLText(this.getText()))}`}else{return _oavApp.html$1``}}getText(){return`
      `}setupHTMLText(text){text=this.b64DecodeUnicode(text);this.configFromServer.areas.forEach(area=>{let voterCount=0;if(this.configFromServer.area_voter_count&&this.configFromServer.area_voter_count[area.id]){voterCount=this.configFromServer.area_voter_count[area.id]}text=text.replace("ZZZareaCount"+area.id+"ZZZ",this.formatNumber(voterCount))});text=text.replace(/ZZZtotalVoterCountZZZ/g,this.formatNumber(this.configFromServer.total_voter_count));text=text.replace("ZZZmainInfoTextZZZ",this.localize("mainInfo"));text=text.replace("ZZZchoose_a_neighbourhood_2ZZZ",this.localize("choose_a_neighbourhood_2"));text=text.replace("ZZZselectAreaTextZZZ",this.localize("selectAreaInfo"));text=text.replace(/ZZZnumber_of_votersZZZ/g,this.localize("number_of_voters"));return text}setupEvents(){if(this.$$("#video"))this.$$("#video").addEventListener("playing",this._videoPlaying);this.$$("#languageSelection").addEventListener("click",this._languageSelection.bind(this));this.shadowRoot.querySelectorAll("a,area").forEach(node=>{const splitHref=node.href.split("/"),areaId=splitHref[splitHref.length-1];node.addEventListener("click",()=>{this._goToAreaId(areaId)});node.removeAttribute("href");node.style.cursor="pointer"})}_goToAreaId(areaId){const path="/area-ballot/"+areaId;window.history.pushState({},null,path);this.fire("location-changed",path)}removeEvents(){if(this.$$("#video"))this.$$("#video").removeEventListener("playing",this._videoPlaying);this.$$("#languageSelection").removeEventListener("click",this._languageSelection.bind(this));this.shadowRoot.querySelectorAll("a,area").forEach(node=>{node.removeEventListener("click",()=>{this._goToAreaId(null)})})}firstUpdated(){super.firstUpdated()}updated(update){super.updated(update);if(update.has("configFromServer")&&this.configFromServer){//const sheet = document.createElement('style');
//sheet.innerHTML = this.b64DecodeUnicode(this.configFromServer.client_config.selectVotingAreaCSS);
//   this.shadowRoot.appendChild(sheet);
this.hasLoadedCss=!0;setTimeout(()=>{this.setupEvents();const selectedLanguageDiv=this.$$("#"+this.language+"Language");if(selectedLanguageDiv){selectedLanguageDiv.classList.add("selectedLanguage")}setTimeout(()=>{this.requestUpdate()},1e3)})}}_languageSelection(event){this.$$("#languageSelection").removeEventListener("click",this._languageSelection.bind(this));this.language=event.target.id.split("Language")[0];this.fire("oav-set-locale",this.language);setTimeout(()=>{this.requestUpdate();this.$$("#languageSelection").addEventListener("click",this._languageSelection.bind(this))})}disconnectedCallback(){this.removeEvents();super.disconnectedCallback()}}window.customElements.define("oav-select-voting-area",OavSelectVotingArea)});