"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[778],{778:function(t,e,a){a.r(e),a.d(e,{default:function(){return F}});var n=a(434),s=a(995),c=a(286),r={List:"ContactList_List__gG+lN",contactListItem:"ContactList_contactListItem__3th7-",contactListBtn:"ContactList_contactListBtn__iwQAv"},o=a(184),i=function(){var t=(0,n.I0)(),e=(0,n.v9)(c.vp);return(0,o.jsx)("ul",{className:r.List,children:e.map((function(e){return(0,o.jsxs)("li",{className:r.contactListItem,children:[(0,o.jsx)("p",{className:r.ContactListItem,children:"".concat(e.name,": ").concat(e.number)}),(0,o.jsx)("button",{className:r.contactListBtn,onClick:function(){return a=e.id,void t((0,s.GK)(a));var a},type:"button",children:"Delete"})]},e.id)}))})},l=a(885),m=a(791),u="ContactsForm_contactsFormForm__VHUEu",d="ContactsForm_contactsFormLabel__77dd6",h="ContactsForm_contactsFormInput__V5sty",_="ContactsForm_Title__J1pwO",p="ContactsForm_contactsFormBtn__f7cKW",x=function(){var t=(0,m.useState)(""),e=(0,l.Z)(t,2),a=e[0],r=e[1],i=(0,m.useState)(""),x=(0,l.Z)(i,2),b=x[0],f=x[1],j=(0,n.I0)(),C=(0,n.v9)(c.K2),N=function(t){var e=t.currentTarget,a=e.name,n=e.value;switch(a){case"name":r(n);break;case"number":f(n)}};return(0,o.jsxs)("form",{className:u,onSubmit:function(t){if(C.some((function(t){return t.name.toLowerCase()===a.toLowerCase()}))||C.some((function(t){return t.number===b})))return alert("This contact has already been added!");t.preventDefault(),j((0,s.uK)({name:a,number:b})),t.target.reset()},children:[(0,o.jsxs)("label",{className:d,children:[(0,o.jsx)("h4",{className:_,children:"Name"}),(0,o.jsx)("input",{className:h,type:"text",name:"name",onChange:N,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,o.jsxs)("label",{className:d,children:[(0,o.jsx)("h4",{className:_,children:"Number"}),(0,o.jsx)("input",{className:h,type:"tel",name:"number",onChange:N,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,o.jsx)("br",{}),(0,o.jsx)("button",{className:p,type:"submit",children:"Add contact"})]})},b=a(2),f="Filter_filterLabel__+pnW-",j="Filter_filterInput__1Cysk",C="Filter_Paragraph__9lz+c",N=function(){var t=(0,n.I0)(),e=(0,n.v9)(c.zK);return(0,o.jsxs)("label",{className:f,children:[(0,o.jsx)("p",{className:C,children:"Find contacts by name"}),(0,o.jsx)("input",{className:j,type:"text",name:"filter",value:e,onChange:function(e){var a=e.currentTarget.value;t((0,b.e)(a))}})]})},v="Contacts_Section__Q79hL",L="Contacts_appTitle__nZEG3";function F(){var t=(0,n.I0)();return(0,m.useEffect)((function(){t((0,s.yF)())})),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("section",{className:v,children:(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:L,children:"Phonebook"}),(0,o.jsx)(x,{}),(0,o.jsx)("h2",{className:L,children:"Contacts"}),(0,o.jsx)(N,{}),(0,o.jsx)(i,{})]})})})}}}]);
//# sourceMappingURL=778.f955b9d0.chunk.js.map