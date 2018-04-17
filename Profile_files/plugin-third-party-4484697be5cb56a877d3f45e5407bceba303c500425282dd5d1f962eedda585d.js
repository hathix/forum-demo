define("discourse/plugins/discourse-staff-notes/discourse-staff-notes/lib/staff-notes",["exports","discourse/lib/show-modal","discourse/lib/load-script"],function(t,e,s){"use strict";function o(t,o,n,i){return i=i||{},(0,s.default)("defer/html-sanitizer-bundle").then(function(){return t.find("staff-note",{user_id:o}).then(function(t){var s=(0,e.default)("staff-notes",{model:t,title:"staff_notes.title",addModalBodyView:!0});return s.reset(),s.set("userId",o),s.set("callback",n),s.set("postId",i.postId),s})})}Object.defineProperty(t,"__esModule",{value:!0}),t.showStaffNotes=o}),Ember.TEMPLATES["javascripts/discourse-staff-notes/templates/connectors/admin-user-controls-after/add-staff-notes-button"]=Ember.HTMLBars.template({id:null,block:'{"statements":[[1,[33,["show-staff-notes"],null,[["show","count"],["showStaffNotes",[28,["staffNotesCount"]]]]],false],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"javascripts/discourse-staff-notes/templates/connectors/admin-user-controls-after/add-staff-notes-button"}}),Ember.TEMPLATES["javascripts/discourse-staff-notes/templates/connectors/user-profile-controls/show-notes-on-profile"]=Ember.HTMLBars.template({id:null,block:'{"statements":[[11,"li",[]],[13],[1,[33,["show-staff-notes"],null,[["show","count"],["showStaffNotes",[28,["staffNotesCount"]]]]],false],[14],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"javascripts/discourse-staff-notes/templates/connectors/user-profile-controls/show-notes-on-profile"}}),define("discourse/plugins/discourse-staff-notes/discourse-staff-notes/connectors/admin-user-controls-after/add-staff-notes-button",["exports","discourse/plugins/discourse-staff-notes/discourse-staff-notes/connectors/user-profile-controls/show-notes-on-profile"],function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e.default}),define("discourse/plugins/discourse-staff-notes/discourse-staff-notes/connectors/user-profile-controls/show-notes-on-profile",["exports","discourse/plugins/discourse-staff-notes/discourse-staff-notes/lib/staff-notes","discourse-common/lib/get-owner"],function(t,e,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={shouldRender:function(t,e){var s=e.siteSettings,o=e.currentUser;return s.staff_notes_enabled&&o&&o.staff},setupComponent:function(t,e){var s=t.model;e.set("staffNotesCount",s.get("staff_notes_count")||s.get("custom_fields.staff_notes_count")||0)},actions:{showStaffNotes:function(){var t=this,o=(0,s.getOwner)(this).lookup("store:main"),n=this.get("args.model");(0,e.showStaffNotes)(o,n.get("id"),function(e){return t.set("staffNotesCount",e)})}}}}),Ember.TEMPLATES["javascripts/components/show-staff-notes"]=Ember.HTMLBars.template({id:null,block:'{"statements":[[11,"a",[]],[15,"href",""],[15,"class","btn"],[5,["action"],[[28,[null]],"show"]],[13],[0,"\\n  "],[1,[33,["d-icon"],["pencil"],null],false],[0,"\\n"],[6,["if"],[[28,["showCount"]]],null,{"statements":[[0,"    "],[1,[33,["i18n"],["staff_notes.show"],[["count"],[[28,["count"]]]]],false],[0,"\\n"]],"locals":[]},{"statements":[[0,"    "],[1,[33,["i18n"],["staff_notes.title"],null],false],[0,"\\n"]],"locals":[]}],[14],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"javascripts/components/show-staff-notes"}}),Ember.TEMPLATES["javascripts/modal/staff-notes"]=Ember.HTMLBars.template({id:null,block:'{"statements":[[6,["d-modal-body"],null,[["class"],["staff-notes-modal"]],{"statements":[[6,["each"],[[28,["model"]]],null,{"statements":[[0,"    "],[11,"div",[]],[15,"class","staff-note"],[13],[0,"\\n      "],[11,"div",[]],[15,"class","posted-by"],[13],[0,"\\n"],[6,["user-link"],null,[["user"],[[28,["n","created_by"]]]],{"statements":[[0,"          "],[1,[33,["avatar"],[[28,["n","created_by"]]],[["imageSize"],["small"]]],false],[0,"\\n"]],"locals":[]},null],[0,"      "],[14],[0,"\\n      "],[11,"div",[]],[15,"class","note-contents"],[13],[0,"\\n        "],[11,"div",[]],[15,"class","note-info"],[13],[0,"\\n          "],[11,"span",[]],[15,"class","username"],[13],[1,[28,["n","created_by","username"]],false],[14],[0,"\\n          "],[11,"span",[]],[15,"class","post-date"],[13],[1,[33,["age-with-tooltip"],[[28,["n","created_at"]]],null],false],[14],[0,"\\n\\n"],[6,["if"],[[28,["n","can_delete"]]],null,{"statements":[[0,"            "],[11,"span",[]],[15,"class","controls"],[13],[0,"\\n              "],[1,[33,["d-button"],null,[["action","icon","class","title"],[[33,["action"],[[28,[null]],"removeNote",[28,["n"]]],null],"times","btn-small btn-danger","staff_notes.remove"]]],false],[0,"\\n            "],[14],[0,"\\n"]],"locals":[]},null],[0,"        "],[14],[0,"\\n\\n        "],[11,"div",[]],[15,"class","cooked"],[13],[0,"\\n          "],[1,[33,["cook-text"],[[28,["n","raw"]]],null],false],[0,"\\n        "],[14],[0,"\\n\\n"],[6,["if"],[[28,["n","post_id"]]],null,{"statements":[[0,"          "],[11,"a",[]],[15,"class","btn btn-small"],[16,"href",[28,["n","post_url"]],null],[13],[0,"\\n            "],[1,[33,["i18n"],["staff_notes.show_post"],null],false],[0,"\\n          "],[14],[0,"\\n"]],"locals":[]},null],[0,"      "],[14],[0,"\\n\\n      "],[11,"div",[]],[15,"class","clearfix"],[13],[14],[0,"\\n    "],[14],[0,"\\n"]],"locals":["n"]},null],[0,"\\n  "],[1,[33,["textarea"],null,[["value"],[[28,["newNote"]]]]],false],[0,"\\n  "],[1,[33,["d-button"],null,[["action","label","class","disabled"],["attachNote","staff_notes.attach","btn-primary",[28,["attachDisabled"]]]]],false],[0,"\\n"]],"locals":[]},null]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"javascripts/modal/staff-notes"}}),define("discourse/plugins/discourse-staff-notes/discourse/adapters/staff-note",["exports","discourse/adapters/rest","discourse/lib/ajax"],function(t,e,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e.default.extend({destroyRecord:function(t,e,o){var n=this.pathFor(t,e,o.get("id")),i=o.get("user_id");return(0,s.ajax)(n+"?user_id="+i,{method:"DELETE"})}})}),define("discourse/plugins/discourse-staff-notes/discourse/components/show-staff-notes",["exports","ember-addons/ember-computed-decorators"],function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,o,n;t.default=Ember.Component.extend((s=(0,e.default)("count"),o={tagName:"",showCount:function(t){return t&&t>0},actions:{show:function(){this.sendAction("show")}}},function(t,e,s,o,n){var i={};return Object.keys(o).forEach(function(t){i[t]=o[t]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=s.slice().reverse().reduce(function(s,o){return o(t,e,s)||s},i),n&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(n):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(t,e,i),i=null),i}(o,"showCount",[s],(n=Object.getOwnPropertyDescriptor(o,"showCount"),n=n?n.value:void 0,{enumerable:!0,configurable:!0,writable:!0,initializer:function(){return n}}),o),o))}),define("discourse/plugins/discourse-staff-notes/discourse/controllers/staff-notes",["exports","ember-addons/ember-computed-decorators","discourse/lib/ajax-error"],function(t,e,s){"use strict";function o(t,e,s,o,n){var i={};return Object.keys(o).forEach(function(t){i[t]=o[t]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=s.slice().reverse().reduce(function(s,o){return o(t,e,s)||s},i),n&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(n):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(t,e,i),i=null),i}Object.defineProperty(t,"__esModule",{value:!0});var n,i,r;t.default=Ember.Controller.extend((n=(0,e.on)("init"),i=(0,e.default)("newNote","saving"),r={newNote:null,saving:!1,user:null,reset:function(){this.setProperties({newNote:null,saving:!1,callback:null})},attachDisabled:function(t,e){return e||!t||0===t.length},_refreshCount:function(){var t=this.get("callback");t&&t(this.get("model.length"))},actions:{attachNote:function(){var t=this,e=this.store.createRecord("staff-note"),o=parseInt(this.get("userId"));this.set("saving",!0);var n={raw:this.get("newNote"),user_id:o},i=this.get("postId");i&&(n.post_id=parseInt(i)),e.save(n).then(function(){t.set("newNote",""),t.get("model").pushObject(e),t._refreshCount()}).catch(s.popupAjaxError).finally(function(){return t.set("saving",!1)})},removeNote:function(t){var e=this;bootbox.confirm(I18n.t("staff_notes.delete_confirm"),I18n.t("no_value"),I18n.t("yes_value"),function(o){o&&t.destroyRecord().then(function(){e.get("model").removeObject(t),e._refreshCount()}).catch(s.popupAjaxError)})}}},o(r,"reset",[n],Object.getOwnPropertyDescriptor(r,"reset"),r),o(r,"attachDisabled",[i],Object.getOwnPropertyDescriptor(r,"attachDisabled"),r),r))}),define("discourse/plugins/discourse-staff-notes/discourse/initializers/enable-staff-notes",["exports","discourse/lib/plugin-api","discourse-common/lib/icon-library","discourse/plugins/discourse-staff-notes/discourse-staff-notes/lib/staff-notes"],function(t,e,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"enable-staff-notes",initialize:function(t){var n=t.lookup("site-settings:main"),i=t.lookup("current-user:main");if(n.staff_notes_enabled&&i&&i.staff){var r=t.lookup("store:main");(0,e.withPluginApi)("0.8.15",function(t){function e(){var t=this;(0,o.showStaffNotes)(r,this.attrs.user_id,function(e){t.sendWidgetAction("refreshStaffNotes",e)},{postId:this.attrs.id})}t.attachWidgetAction("post","refreshStaffNotes",function(t){var e=this.model.get("user_custom_fields")||{};e.staff_notes_count=t,this.model.set("user_custom_fields",e)}),t.modifyClass("controller:user",{staffNotesCount:null,_modelChanged:function(){this.set("staffNotesCount",this.get("model.custom_fields.staff_notes_count")||0)}.observes("model").on("init"),actions:{showStaffNotes:function(){var t=this,e=this.get("model");(0,o.showStaffNotes)(r,e.get("id"),function(e){return t.set("staffNotesCount",e)})}}});var i=t.container.lookup("site:main").mobileView,a=i?"before":"after";t.decorateWidget("poster-name:"+a,function(t){if((t.attrs.userCustomFields||{}).staff_notes_count>0)return t.attach("staff-notes-icon")}),t.decorateWidget("post-admin-menu:after",function(t){return t.attach("post-admin-menu-button",{icon:"pencil",label:"staff_notes.attach",action:"showStaffNotes"})}),t.attachWidgetAction("post","showStaffNotes",e),t.createWidget("staff-notes-icon",{tagName:"span.staff-notes-icon",click:e,html:function(){return n.enable_emoji?this.attach("emoji",{name:"pencil"}):(0,s.iconNode)("sticky-note")}})})}}}}),Ember.TEMPLATES["javascripts/connectors/user-activity-bottom/user-voted-topics"]=Ember.HTMLBars.template({id:null,block:'{"statements":[[6,["if"],[[28,["siteSettings","voting_show_votes_on_profile"]]],null,{"statements":[[11,"li",[]],[13],[0,"\\n"],[6,["link-to"],["userActivity.votes"],null,{"statements":[[0,"    "],[11,"i",[]],[15,"class","glyph fa fa-heart"],[13],[14],[1,[33,["i18n"],["voting.vote_title_plural"],null],false],[0,"\\n"]],"locals":[]},null],[14],[0,"\\n"]],"locals":[]},null]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"javascripts/connectors/user-activity-bottom/user-voted-topics"}}),Ember.TEMPLATES["javascripts/connectors/extra-nav-item/votes"]=Ember.HTMLBars.template({id:null,block:'{"statements":[[11,"a",[]],[16,"title",[34,[[33,["I18n"],["voting.votes_nav_help"],null]]]],[16,"href",[34,[[28,["category","votesUrl"]]]]],[13],[1,[33,["I18n"],["voting.vote_title_plural"],null],false],[14],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"javascripts/connectors/extra-nav-item/votes"}}),define("discourse/plugins/discourse-voting/discourse/templates/connectors/extra-nav-item/votes",["exports"],function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={votedPath:function(){return"foobar"},path:function(t){if(t)return t.get("votesUrl")},displayName:function(){return I18n.t("voting.vote_title_plural")},setupComponent:function(t,e){var s=t.filterMode;s&&-1!==s.indexOf("votes",s.length-5)&&e.set("classNames",["active"])},shouldRender:function(t,e){var s=e.get("category");return!(!s||!s.get("can_vote"))}}}),Ember.TEMPLATES["javascripts/connectors/category-custom-settings/feature-voting-settings"]=Ember.HTMLBars.template({id:null,block:'{"statements":[[11,"section",[]],[15,"class","field"],[13],[0,"\\n  "],[11,"div",[]],[15,"class","enable-topic-voting"],[13],[0,"\\n    "],[11,"label",[]],[15,"class","checkbox-label"],[13],[0,"\\n      "],[1,[33,["input"],null,[["type","checked"],["checkbox",[28,["category","enable_topic_voting"]]]]],false],[0,"\\n      "],[1,[33,["i18n"],["voting.allow_topic_voting"],null],false],[0,"\\n    "],[14],[0,"\\n  "],[14],[0,"\\n"],[14],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"javascripts/connectors/category-custom-settings/feature-voting-settings"}}),Ember.TEMPLATES["javascripts/connectors/topic-above-post-stream/topic-title-voting"]=Ember.HTMLBars.template({id:null,block:'{"statements":[[6,["if"],[[28,["model","can_vote"]]],null,{"statements":[[6,["if"],[[28,["model","postStream","loaded"]]],null,{"statements":[[6,["if"],[[28,["model","postStream","firstPostPresent"]]],null,{"statements":[[0,"      "],[11,"div",[]],[15,"class","voting title-voting"],[13],[0,"\\n        "],[1,[33,["mount-widget"],null,[["widget","args"],["vote-box",[28,["model"]]]]],false],[0,"\\n      "],[14],[0,"\\n"]],"locals":[]},null]],"locals":[]},null]],"locals":[]},null]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"javascripts/connectors/topic-above-post-stream/topic-title-voting"}}),define("discourse/plugins/discourse-voting/discourse/pre-initializers/extend-category-for-voting",["exports","ember-addons/ember-computed-decorators","discourse/models/category","discourse/lib/plugin-api"],function(t,e,s,o){"use strict";function n(t,e,s,o,n){var i={};return Object.keys(o).forEach(function(t){i[t]=o[t]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=s.slice().reverse().reduce(function(s,o){return o(t,e,s)||s},i),n&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(n):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(t,e,i),i=null),i}function i(t){t.addPostClassesCallback(function(t){if(1===t.post_number&&t.can_vote)return["voting-post"]}),t.includePostAttributes("can_vote"),t.addTagsHtmlCallback(function(t){if(t.can_vote){var e=[],s=void 0;t.user_voted&&(s=" title='"+I18n.t("voting.voted")+"'");var o=t.user_voted?" voted":"";return e.push("<a href='"+t.get("url")+"' class='list-vote-count discourse-tag"+o+"'"+s+">"),e.push(I18n.t("voting.votes",{count:t.vote_count})),t.user_voted&&e.push("<i class='fa fa-star'></i>"),e.push("</a>"),e.length>0?e.join(""):void 0}},{priority:-100})}Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"extend-category-for-voting",before:"inject-discourse-objects",initialize:function(t){var r,a,l,u;(0,o.withPluginApi)("0.8.4",function(t){i(t)}),s.default.reopen((r=(0,e.default)("url"),a=(0,e.default)("custom_fields.enable_topic_voting"),l={votesUrl:function(t){return t+"/l/votes"},enable_topic_voting:{get:function(t){return"true"===t},set:function(t){return t=t?"true":"false",this.set("custom_fields.enable_topic_voting",t),t}}},n(l,"votesUrl",[r],Object.getOwnPropertyDescriptor(l,"votesUrl"),l),n(l,"enable_topic_voting",[a],(u=Object.getOwnPropertyDescriptor(l,"enable_topic_voting"),u=u?u.value:void 0,{enumerable:!0,configurable:!0,writable:!0,initializer:function(){return u}}),l),l))}}}),define("discourse/plugins/discourse-voting/discourse/widgets/vote-button",["exports","discourse/widgets/widget","discourse/lib/show-modal"],function(t,e,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,e.createWidget)("vote-button",{tagName:"div.vote-button",buildClasses:function(t){var e="";return e=t.closed?"voting-closed":t.user_voted?this.currentUser&&this.currentUser.votes_exceeded?"vote-limited nonvote":"vote":"nonvote",this.siteSettings.voting_show_who_voted&&(e+=" show-pointer"),e},html:function(t){I18n.t("voting.vote_title");return this.currentUser?t.closed?I18n.t("voting.voting_closed_title"):t.user_voted?I18n.t("voting.voted_title"):this.currentUser&&this.currentUser.votes_exceeded?I18n.t("voting.voting_limit"):I18n.t("voting.vote_title"):I18n.t("log_in")},click:function(){this.currentUser||(0,s.default)("login"),this.attrs.closed||!this.parentWidget.state.allowClick||this.attrs.user_voted||(this.parentWidget.state.allowClick=!1,this.parentWidget.state.initialVote=!0,this.sendWidgetAction("addVote")),(this.attrs.user_voted||this.currentUser.votes_exceeded)&&$(".vote-options").toggle()},clickOutside:function(){$(".vote-options").hide(),this.parentWidget.state.initialVote=!1}})}),define("discourse/plugins/discourse-voting/discourse/widgets/vote-box",["exports","discourse/widgets/widget","discourse/lib/ajax","discourse/widgets/raw-html","discourse/lib/ajax-error"],function(t,e,s,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,e.createWidget)("vote-box",{tagName:"div.voting-wrapper",buildKey:function(){return"vote-box"},buildClasses:function(){if(this.siteSettings.voting_show_who_voted)return"show-pointer"},defaultState:function(){return{allowClick:!0,initialVote:!1}},html:function(t,e){var s=this.attach("vote-count",t),n=this.attach("vote-button",t),i=this.attach("vote-options",t),r=[s,n,i];if(e.votesAlert>0){var a="<div class='voting-popup-menu vote-options popup-menu'>"+I18n.t("voting.votes_left",{count:e.votesAlert,path:this.currentUser.get("path")+"/activity/votes"})+"</div>";r.push(new o.default({html:a}))}return r},hideVotesAlert:function(){this.state.votesAlert&&(this.state.votesAlert=null,this.scheduleRerender())},click:function(){this.hideVotesAlert()},clickOutside:function(){this.hideVotesAlert()},addVote:function(){var t=this,e=this.attrs,o=this.state;return(0,s.ajax)("/voting/vote",{type:"POST",data:{topic_id:e.id}}).then(function(s){e.set("vote_count",s.vote_count),e.set("user_voted",!0),t.currentUser.set("votes_exceeded",!s.can_vote),s.alert&&(o.votesAlert=s.votes_left,t.scheduleRerender()),e.set("who_voted",s.who_voted),o.allowClick=!0}).catch(n.popupAjaxError)},removeVote:function(){var t=this,e=this.attrs,o=this.state;return(0,s.ajax)("/voting/unvote",{type:"POST",data:{topic_id:e.id}}).then(function(s){e.set("vote_count",s.vote_count),e.set("user_voted",!1),t.currentUser.set("votes_exceeded",!s.can_vote),e.set("who_voted",s.who_voted),o.allowClick=!0}).catch(n.popupAjaxError)}})}),define("discourse/plugins/discourse-voting/discourse/widgets/remove-vote",["exports","discourse/widgets/widget"],function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,e.createWidget)("remove-vote",{tagName:"div.remove-vote",buildClasses:function(){return"vote-option"},html:function(){return["Remove vote"]},click:function(){this.sendWidgetAction("removeVote")}})}),define("discourse/plugins/discourse-voting/discourse/widgets/vote-count",["exports","discourse/widgets/widget","virtual-dom","discourse/lib/ajax"],function(t,e,s,o){"use strict";function n(t){return{template:t.avatar_template,username:t.username,post_url:t.post_url,url:Discourse.getURL("/users/")+t.username.toLowerCase()}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,e.createWidget)("vote-count",{tagName:"div.vote-count-wrapper",buildKey:function(){return"vote-count"},buildClasses:function(){if(0===this.attrs.vote_count)return"no-votes"},defaultState:function(){return{whoVotedUsers:null}},html:function(t){var e=(0,s.h)("div.vote-count",t.vote_count.toString()),o=null;this.siteSettings.voting_show_who_voted&&this.state.whoVotedUsers&&this.state.whoVotedUsers.length>0&&(o=this.attach("small-user-list",{users:this.state.whoVotedUsers,addSelf:t.liked,listClassName:"regular-votes"}));var n=[e];return o&&n.push((0,s.h)("div.who-voted.popup-menu.voting-popup-menu",[o])),n},click:function(){if(this.siteSettings.voting_show_who_voted&&this.attrs.vote_count>0){if(null===this.state.whoVotedUsers)return this.getWhoVoted();$(".who-voted").toggle()}},clickOutside:function(){$(".who-voted").hide()},getWhoVoted:function(){var t=this;return(0,o.ajax)("/voting/who",{type:"GET",data:{topic_id:this.attrs.id}}).then(function(e){t.state.whoVotedUsers=e.map(n)})}})}),define("discourse/plugins/discourse-voting/discourse/widgets/vote-options",["exports","discourse/widgets/widget","virtual-dom"],function(t,e,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(0,e.createWidget)("vote-options",{tagName:"div.vote-options",buildClasses:function(){return"voting-popup-menu popup-menu hidden"},html:function(t){var e=[];return t.user_voted?e.push(this.attach("remove-vote",t)):this.currentUser&&this.currentUser.votes_exceeded&&!t.user_voted&&e.push([(0,s.h)("div",I18n.t("voting.reached_limit")),(0,s.h)("p",(0,s.h)("a",{href:this.currentUser.get("path")+"/activity/votes"},I18n.t("voting.list_votes")))]),e}})}),define("discourse/plugins/discourse-voting/discourse/feature-voting-route-map",["exports"],function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={resource:"user",path:"users/:username",map:function(){this.route("userActivity",{path:"activity",resetNamespace:!0},function(){this.route("votes")})}}}),define("discourse/plugins/discourse-voting/discourse/routes/user-activity-votes",["exports","discourse/routes/user-topic-list","discourse/models/user-action"],function(t,e,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e.default.extend({userActionType:s.default.TYPES.topics,model:function(){return this.store.findFiltered("topicList",{filter:"topics/voted-by/"+this.modelFor("user").get("username_lower")})}})});
//# sourceMappingURL=https://discourse-cdn.freetls.fastly.net/try/assets/plugin-third-party-4484697be5cb56a877d3f45e5407bceba303c500425282dd5d1f962eedda585d.js.map