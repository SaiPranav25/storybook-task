import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{f as je}from"./index-kI_4nbVv.js";import{r as d}from"./index-GiUgBvb1.js";import{c as u,a as n,L as Ne,S as Ie}from"./clsx-WAI7ZuyX.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=u("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=u("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=u("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=u("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=u("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),a=d.forwardRef(({value:r="",onChange:o,label:s,placeholder:c,helperText:i,errorMessage:l,disabled:t=!1,invalid:ne=!1,loading:p=!1,variant:de="outlined",size:ce="md",clearable:S=!1,showPasswordToggle:h=!1,leftIcon:D,rightIcon:E,type:pe="text",className:me,...ue},he)=>{const[P,ge]=d.useState(!1),[Ee,C]=d.useState(!1),m=ne||!!l,be=r.length>0,fe=h&&P?"text":pe,ye={sm:"h-8 text-sm px-3",md:"h-10 text-sm px-3",lg:"h-12 text-base px-4"},ve={filled:n("bg-gray-50 border-transparent","focus:bg-white focus:border-blue-500",m&&"bg-red-50 focus:bg-red-50 border-red-300 focus:border-red-500",t&&"bg-gray-100"),outlined:n("bg-white border-gray-300","focus:border-blue-500",m&&"border-red-300 focus:border-red-500",t&&"bg-gray-50"),ghost:n("bg-transparent border-transparent border-b-2 rounded-none border-b-gray-300","focus:border-b-blue-500",m&&"border-b-red-300 focus:border-b-red-500")},we=()=>{o&&o({target:{value:""},currentTarget:{value:""}})},xe=()=>{ge(!P)};return e.jsxs("div",{className:n("w-full",me),children:[s&&e.jsx("label",{className:n("block text-sm font-medium mb-1",m?"text-red-700":"text-gray-700",t&&"text-gray-400"),children:s}),e.jsxs("div",{className:"relative",children:[D&&e.jsx("div",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",children:D}),e.jsx("input",{ref:he,type:fe,value:r,onChange:o,placeholder:c,disabled:t,onFocus:()=>C(!0),onBlur:()=>C(!1),className:n("w-full border rounded-lg transition-all duration-200","focus:outline-none focus:ring-2 focus:ring-blue-500/20","placeholder-gray-400",ye[ce],ve[de],D&&"pl-10",(E||S||h||p)&&"pr-10",t&&"cursor-not-allowed opacity-60"),...ue}),e.jsxs("div",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1",children:[p&&e.jsx(Ne,{className:"w-4 h-4 text-gray-400 animate-spin"}),!p&&S&&be&&!t&&e.jsx("button",{type:"button",onClick:we,className:"text-gray-400 hover:text-gray-600 transition-colors",tabIndex:-1,children:e.jsx(De,{className:"w-4 h-4"})}),!p&&h&&e.jsx("button",{type:"button",onClick:xe,className:"text-gray-400 hover:text-gray-600 transition-colors",tabIndex:-1,children:P?e.jsx(Fe,{className:"w-4 h-4"}):e.jsx(Se,{className:"w-4 h-4"})}),!p&&!S&&!h&&E&&e.jsx("div",{className:"text-gray-400",children:E})]})]}),(i||l)&&e.jsx("div",{className:n("mt-1 text-xs",m?"text-red-600":"text-gray-500"),children:l||i})]})});a.displayName="InputField";try{a.displayName="InputField",a.__docgenInfo={description:"",displayName:"InputField",props:{}}}catch{}const Ve={title:"UI Components/InputField",component:a,parameters:{layout:"centered",docs:{description:{component:`
# InputField Component

A flexible and accessible input component with validation states, multiple variants, and extensive customization options.

## Features
- Multiple variants: filled, outlined, ghost
- Three sizes: small, medium, large  
- Validation states with error handling
- Loading state with spinner
- Optional clear button and password toggle
- Icon support (left and right)
- Full accessibility support
- Keyboard navigation

## Anatomy
The InputField component consists of:
1. **Label** (optional) - Descriptive text above the input
2. **Input Field** - The main text input element
3. **Icons** - Optional left/right icons for context
4. **Action Buttons** - Clear button, password toggle
5. **Helper/Error Text** - Guidance or validation feedback

## Accessibility
- Proper ARIA labels and descriptions
- Keyboard navigation support
- Focus management
- Screen reader compatible
- High contrast support
        `}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["filled","outlined","ghost"],description:"Visual style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the input field"},onChange:{action:"changed"}},args:{onChange:je()}},g={args:{placeholder:"Enter text..."}},b={args:{label:"Email Address",placeholder:"Enter your email",type:"email"}},f={args:{label:"Username",placeholder:"Enter username",helperText:"Must be at least 3 characters long"}},y={render:()=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsx(a,{variant:"outlined",label:"Outlined (default)",placeholder:"Outlined input"}),e.jsx(a,{variant:"filled",label:"Filled",placeholder:"Filled input"}),e.jsx(a,{variant:"ghost",label:"Ghost",placeholder:"Ghost input"})]}),parameters:{docs:{description:{story:"Three visual variants available: outlined, filled, and ghost."}}}},v={render:()=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsx(a,{size:"sm",label:"Small",placeholder:"Small input"}),e.jsx(a,{size:"md",label:"Medium (default)",placeholder:"Medium input"}),e.jsx(a,{size:"lg",label:"Large",placeholder:"Large input"})]}),parameters:{docs:{description:{story:"Three sizes available: small, medium, and large."}}}},w={render:()=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsx(a,{label:"Normal",placeholder:"Normal state",value:""}),e.jsx(a,{label:"With Value",value:"Sample text"}),e.jsx(a,{label:"Disabled",placeholder:"Disabled input",disabled:!0}),e.jsx(a,{label:"Loading",placeholder:"Loading...",loading:!0}),e.jsx(a,{label:"Error State",placeholder:"Invalid input",invalid:!0,errorMessage:"This field is required"})]}),parameters:{docs:{description:{story:"Different states: normal, filled, disabled, loading, and error."}}}},x={render:()=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsx(a,{label:"Search",placeholder:"Search...",leftIcon:e.jsx(Ie,{className:"w-4 h-4"})}),e.jsx(a,{label:"Email",placeholder:"Enter email",type:"email",leftIcon:e.jsx(F,{className:"w-4 h-4"})}),e.jsx(a,{label:"User Profile",placeholder:"Username",leftIcon:e.jsx(ie,{className:"w-4 h-4"}),rightIcon:e.jsx(F,{className:"w-4 h-4"})})]}),parameters:{docs:{description:{story:"InputField supports both left and right icons for enhanced UX."}}}},j={render:()=>{const[r,o]=d.useState("Text to clear"),[s,c]=d.useState("secretpassword");return e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsx(a,{label:"Clearable Input",value:r,onChange:i=>o(i.target.value),clearable:!0,placeholder:"Type something..."}),e.jsx(a,{label:"Password with Toggle",type:"password",value:s,onChange:i=>c(i.target.value),showPasswordToggle:!0,placeholder:"Enter password"})]})},parameters:{docs:{description:{story:"Interactive features: clearable input and password visibility toggle."}}}},N={render:()=>{const[r,o]=d.useState({name:"",email:"",password:"",confirmPassword:""}),[s,c]=d.useState({}),i=l=>{l.preventDefault();const t={};r.name||(t.name="Name is required"),r.email||(t.email="Email is required"),r.password||(t.password="Password is required"),r.password!==r.confirmPassword&&(t.confirmPassword="Passwords do not match"),c(t),Object.keys(t).length===0&&alert("Form submitted successfully!")};return e.jsxs("form",{onSubmit:i,className:"space-y-4 w-80",children:[e.jsx(a,{label:"Full Name",value:r.name,onChange:l=>o({...r,name:l.target.value}),placeholder:"Enter your full name",errorMessage:s.name,invalid:!!s.name,leftIcon:e.jsx(ie,{className:"w-4 h-4"})}),e.jsx(a,{label:"Email Address",type:"email",value:r.email,onChange:l=>o({...r,email:l.target.value}),placeholder:"Enter your email",errorMessage:s.email,invalid:!!s.email,leftIcon:e.jsx(F,{className:"w-4 h-4"})}),e.jsx(a,{label:"Password",type:"password",value:r.password,onChange:l=>o({...r,password:l.target.value}),placeholder:"Create a password",errorMessage:s.password,invalid:!!s.password,showPasswordToggle:!0}),e.jsx(a,{label:"Confirm Password",type:"password",value:r.confirmPassword,onChange:l=>o({...r,confirmPassword:l.target.value}),placeholder:"Confirm your password",errorMessage:s.confirmPassword,invalid:!!s.confirmPassword,showPasswordToggle:!0}),e.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors",children:"Submit"})]})},parameters:{docs:{description:{story:"Complete form example showing validation, different input types, and error handling."}}}},I={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"font-semibold text-green-700",children:"✅ Do's"}),e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsx(a,{label:"Clear, descriptive labels",placeholder:"Specific, helpful placeholder",helperText:"Provide helpful guidance"}),e.jsx(a,{label:"Appropriate Input Type",type:"email",placeholder:"user@example.com",leftIcon:e.jsx(F,{className:"w-4 h-4"})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"font-semibold text-red-700",children:"❌ Don'ts"}),e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsx(a,{placeholder:"Don't rely only on placeholders"}),e.jsx(a,{label:"vague",placeholder:"placeholder as label replacement",helperText:"Avoid overly technical language in helper text"})]})]})]}),parameters:{docs:{description:{story:`
### Do's:
- Always provide clear, descriptive labels
- Use appropriate input types (email, tel, password, etc.)
- Provide helpful placeholder text and guidance
- Show validation feedback immediately
- Use icons to provide context

### Don'ts:
- Don't rely solely on placeholders for labeling
- Don't use vague or unclear labels
- Don't show errors before user interaction
- Don't use overly technical language in helper text
        `}}}};var T,M,k;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(k=(M=g.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var V,A,z;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email'
  }
}`,...(z=(A=b.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var U,L,O;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Must be at least 3 characters long'
  }
}`,...(O=(L=f.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var _,q,W;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-80">\r
      <InputField variant="outlined" label="Outlined (default)" placeholder="Outlined input" />\r
      <InputField variant="filled" label="Filled" placeholder="Filled input" />\r
      <InputField variant="ghost" label="Ghost" placeholder="Ghost input" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Three visual variants available: outlined, filled, and ghost.'
      }
    }
  }
}`,...(W=(q=y.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var R,G,H;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-80">\r
      <InputField size="sm" label="Small" placeholder="Small input" />\r
      <InputField size="md" label="Medium (default)" placeholder="Medium input" />\r
      <InputField size="lg" label="Large" placeholder="Large input" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Three sizes available: small, medium, and large.'
      }
    }
  }
}`,...(H=(G=v.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var B,X,K;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-80">\r
      <InputField label="Normal" placeholder="Normal state" value="" />\r
      <InputField label="With Value" value="Sample text" />\r
      <InputField label="Disabled" placeholder="Disabled input" disabled />\r
      <InputField label="Loading" placeholder="Loading..." loading />\r
      <InputField label="Error State" placeholder="Invalid input" invalid errorMessage="This field is required" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different states: normal, filled, disabled, loading, and error.'
      }
    }
  }
}`,...(K=(X=w.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Z,J,Q;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-80">\r
      <InputField label="Search" placeholder="Search..." leftIcon={<Search className="w-4 h-4" />} />\r
      <InputField label="Email" placeholder="Enter email" type="email" leftIcon={<Mail className="w-4 h-4" />} />\r
      <InputField label="User Profile" placeholder="Username" leftIcon={<User className="w-4 h-4" />} rightIcon={<Mail className="w-4 h-4" />} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'InputField supports both left and right icons for enhanced UX.'
      }
    }
  }
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,$,ee;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [clearableValue, setClearableValue] = useState('Text to clear');
    const [passwordValue, setPasswordValue] = useState('secretpassword');
    return <div className="space-y-4 w-80">\r
        <InputField label="Clearable Input" value={clearableValue} onChange={e => setClearableValue(e.target.value)} clearable placeholder="Type something..." />\r
        <InputField label="Password with Toggle" type="password" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} showPasswordToggle placeholder="Enter password" />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive features: clearable input and password visibility toggle.'
      }
    }
  }
}`,...(ee=($=j.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,re,se;N.parameters={...N.parameters,docs:{...(ae=N.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.password) newErrors.password = 'Password is required';
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      setErrors(newErrors);
      if (Object.keys(newErrors).length === 0) {
        alert('Form submitted successfully!');
      }
    };
    return <form onSubmit={handleSubmit} className="space-y-4 w-80">\r
        <InputField label="Full Name" value={formData.name} onChange={e => setFormData({
        ...formData,
        name: e.target.value
      })} placeholder="Enter your full name" errorMessage={errors.name} invalid={!!errors.name} leftIcon={<User className="w-4 h-4" />} />\r
        <InputField label="Email Address" type="email" value={formData.email} onChange={e => setFormData({
        ...formData,
        email: e.target.value
      })} placeholder="Enter your email" errorMessage={errors.email} invalid={!!errors.email} leftIcon={<Mail className="w-4 h-4" />} />\r
        <InputField label="Password" type="password" value={formData.password} onChange={e => setFormData({
        ...formData,
        password: e.target.value
      })} placeholder="Create a password" errorMessage={errors.password} invalid={!!errors.password} showPasswordToggle />\r
        <InputField label="Confirm Password" type="password" value={formData.confirmPassword} onChange={e => setFormData({
        ...formData,
        confirmPassword: e.target.value
      })} placeholder="Confirm your password" errorMessage={errors.confirmPassword} invalid={!!errors.confirmPassword} showPasswordToggle />\r
        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">\r
          Submit\r
        </button>\r
      </form>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete form example showing validation, different input types, and error handling.'
      }
    }
  }
}`,...(se=(re=N.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,te,oe;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      <div className="space-y-2">\r
        <h3 className="font-semibold text-green-700">✅ Do's</h3>\r
        <div className="space-y-4 w-80">\r
          <InputField label="Clear, descriptive labels" placeholder="Specific, helpful placeholder" helperText="Provide helpful guidance" />\r
          <InputField label="Appropriate Input Type" type="email" placeholder="user@example.com" leftIcon={<Mail className="w-4 h-4" />} />\r
        </div>\r
      </div>\r
      \r
      <div className="space-y-2">\r
        <h3 className="font-semibold text-red-700">❌ Don'ts</h3>\r
        <div className="space-y-4 w-80">\r
          <InputField placeholder="Don't rely only on placeholders" />\r
          <InputField label="vague" placeholder="placeholder as label replacement" helperText="Avoid overly technical language in helper text" />\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: \`
### Do's:
- Always provide clear, descriptive labels
- Use appropriate input types (email, tel, password, etc.)
- Provide helpful placeholder text and guidance
- Show validation feedback immediately
- Use icons to provide context

### Don'ts:
- Don't rely solely on placeholders for labeling
- Don't use vague or unclear labels
- Don't show errors before user interaction
- Don't use overly technical language in helper text
        \`
      }
    }
  }
}`,...(oe=(te=I.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const Ae=["Default","WithLabel","WithHelperText","Variants","Sizes","States","WithIcons","InteractiveFeatures","FormExample","BestPractices"];export{I as BestPractices,g as Default,N as FormExample,j as InteractiveFeatures,v as Sizes,w as States,y as Variants,f as WithHelperText,x as WithIcons,b as WithLabel,Ae as __namedExportsOrder,Ve as default};
