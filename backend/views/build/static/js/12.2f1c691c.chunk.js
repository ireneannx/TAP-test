(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[12],{156:function(e,a,t){"use strict";t.r(a);var n=t(17),r=t.n(n),c=t(28),s=t(4),o=t(23),l=t(24),m=t(26),i=t(25),u=t(27),p=t(0),d=t.n(p),b=t(215),f=t.n(b),h=t(49),v=t(13),E=t(98),g=t(8),y=(t(48),t(135),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),u=0;u<n;u++)l[u]=arguments[u];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(l)))).state={deadline:new Date,company_name:"",job_type:"",job_description:"",url:"",user_id:t.props.data.user._id,name:t.props.data.user.name},t.handleChange=function(e){t.setState(Object(s.a)({},e.target.name,e.target.value))},t.handleChange2=function(e){t.setState({deadline:e})},t.handleSubmit=function(){var e=Object(c.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t.props.addJob(t.state,t.props.history);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return d.a.createElement("div",{className:""},d.a.createElement("div",{className:"container contact",style:{marginTop:"5%",justifyContent:"center"}},d.a.createElement("form",{onSubmit:this.handleSubmit},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-3",style:{backgroundImage:"url('https://cms-assets.tutsplus.com/uploads/users/107/posts/26488/image/41-space-scrolling-background850.jpg')"}}),d.a.createElement("div",{className:"col-md-9"},d.a.createElement("div",{className:"contact-form"},d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{className:"control-label col-sm-2"},"Company"),d.a.createElement("div",{className:"col-sm-10"},d.a.createElement("input",{type:"text",name:"company_name",value:this.state.company_name,className:"form-control",placeholder:"enter company name",onChange:this.handleChange}))),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{className:"control-label col-sm-3"},"Available Position/s"),d.a.createElement("div",{className:"col-sm-10"},d.a.createElement("input",{type:"text",className:"form-control",value:this.state.job_type,name:"job_type",placeholder:"Eg: Front-end",onChange:this.handleChange}))),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{className:"control-label col-sm-3"},"Job Description"),d.a.createElement("div",{className:"col-sm-10"},d.a.createElement("textarea",{className:"form-control",rows:"5",id:"comment",name:"job_description",value:this.state.job_description,onChange:this.handleChange}))),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{className:"control-label col-sm-3"},"Application link"),d.a.createElement("div",{className:"col-sm-10"},d.a.createElement("input",{className:"form-control",placeholder:"Enter application url or company website",name:"url",onChange:this.handleChange,value:this.state.url}))),d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{className:"control-label col-sm-3"},"Deadline"),d.a.createElement("div",{className:"col-sm-10"},d.a.createElement(f.a,{className:"col-sm-3 form-group",selected:this.state.deadline,onChange:this.handleChange2,minDate:new Date}))),d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"col-sm-offset-2 col-sm-10"},d.a.createElement("button",{type:"submit",className:"btn btn-secondary"},"Submit"),d.a.createElement(h.b,{to:"/jobs"},d.a.createElement("button",{type:"button",className:"btn btn-danger",style:{marginLeft:"5px"}},"Cancel"))))))))))}}]),a}(p.Component));a.default=Object(v.b)((function(e){return{data:e.Auth.authData}}),(function(e){return Object(g.bindActionCreators)({addJob:E.a,getJobs:E.c},e)}))(y)},98:function(e,a,t){"use strict";t.d(a,"c",(function(){return l})),t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return i}));var n=t(17),r=t.n(n),c=t(28),s=t(11),o=t.n(s),l=function(){return function(){var e=Object(c.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/api/jobs");case 2:return t=e.sent,e.abrupt("return",a({type:"GET_JOBS",payload:t.data}));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},m=function(e,a){return function(){var t=Object(c.a)(r.a.mark((function t(n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("/api/jobs",e);case 2:return c=t.sent,a.push("/jobs"),t.abrupt("return",n({type:"ADD_JOB",payload:c.data}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},i=function(e,a){return function(t){return t({type:"ADD_ID_TO_JOB",JobId:e,UserId:a})}}}}]);
//# sourceMappingURL=12.2f1c691c.chunk.js.map