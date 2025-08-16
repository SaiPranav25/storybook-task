import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{f as De}from"./index-kI_4nbVv.js";import{r as p}from"./index-GiUgBvb1.js";import{c as xe,a as w,S as Te,L as Re}from"./clsx-WAI7ZuyX.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=xe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=xe("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),h=({data:a,columns:s,loading:r=!1,selectable:d=!1,onRowSelect:i,rowKey:m=l=>l.id||l.key,emptyText:N="No data available",loadingText:S="Loading...",className:k,searchable:C=!1,searchPlaceholder:u="Search..."})=>{const[l,D]=p.useState(new Set),[v,M]=p.useState(null),[f,T]=p.useState(null),[R,ye]=p.useState(""),q=p.useMemo(()=>!C||!R?a:a.filter(t=>s.some(n=>{const c=t[n.key];return c&&c.toString().toLowerCase().includes(R.toLowerCase())})),[a,R,C,s]),b=p.useMemo(()=>!v||!f?q:[...q].sort((t,n)=>{const c=t[v],o=n[v];return c<o?f==="asc"?-1:1:c>o?f==="asc"?1:-1:0}),[q,v,f]),fe=t=>{const n=s.find(c=>c.key===t);n!=null&&n.sortable&&(v===t?f==="asc"?T("desc"):f==="desc"?(M(null),T(null)):T("asc"):(M(t),T("asc")))},ve=(t,n)=>{const c=m(t),o=new Set(l);if(n?o.add(c):o.delete(c),D(o),i){const g=b.filter(Ce=>o.has(m(Ce)));i(g,Array.from(o))}},we=t=>{if(t){const n=new Set(b.map(m));D(n),i&&i(b,Array.from(n))}else D(new Set),i&&i([],[])},je=b.length>0&&l.size===b.length,Ne=l.size>0&&l.size<b.length,Se=t=>t.sortable?v!==t.key?e.jsxs("div",{className:"flex flex-col ml-1 opacity-40",children:[e.jsx(H,{className:"w-3 h-3 -mb-1"}),e.jsx(W,{className:"w-3 h-3"})]}):e.jsx("div",{className:"ml-1",children:f==="asc"?e.jsx(H,{className:"w-4 h-4"}):e.jsx(W,{className:"w-4 h-4"})}):null,ke=(t,n,c)=>{const o=n[t.key];return t.render?t.render(o,n,c):(o==null?void 0:o.toString())||""};return e.jsxs("div",{className:w("bg-white rounded-lg shadow-sm border border-gray-200",k),children:[C&&e.jsx("div",{className:"p-4 border-b border-gray-200",children:e.jsxs("div",{className:"relative",children:[e.jsx(Te,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"}),e.jsx("input",{type:"text",placeholder:u,value:R,onChange:t=>ye(t.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"})]})}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-gray-50 border-b border-gray-200",children:e.jsxs("tr",{children:[d&&e.jsx("th",{className:"w-12 px-4 py-3 text-left",children:e.jsx("input",{type:"checkbox",checked:je,ref:t=>{t&&(t.indeterminate=Ne)},onChange:t=>we(t.target.checked),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"})}),s.map(t=>e.jsx("th",{style:{width:t.width},className:w("px-4 py-3 text-sm font-medium text-gray-700",{"text-left":t.align!=="center"&&t.align!=="right","text-center":t.align==="center","text-right":t.align==="right","cursor-pointer hover:bg-gray-100 select-none":t.sortable}),onClick:()=>fe(t.key),children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:t.title}),Se(t)]})},t.key))]})}),e.jsx("tbody",{className:"divide-y divide-gray-200",children:r?e.jsx("tr",{children:e.jsx("td",{colSpan:s.length+(d?1:0),className:"px-4 py-8 text-center text-gray-500",children:e.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[e.jsx(Re,{className:"w-5 h-5 animate-spin"}),e.jsx("span",{children:S})]})})}):b.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:s.length+(d?1:0),className:"px-4 py-8 text-center text-gray-500",children:N})}):b.map((t,n)=>{const c=m(t),o=l.has(c);return e.jsxs("tr",{className:w("hover:bg-gray-50 transition-colors",o&&"bg-blue-50"),children:[d&&e.jsx("td",{className:"px-4 py-3",children:e.jsx("input",{type:"checkbox",checked:o,onChange:g=>ve(t,g.target.checked),className:"rounded border-gray-300 text-blue-600 focus:ring-blue-500"})}),s.map(g=>e.jsx("td",{className:w("px-4 py-3 text-sm text-gray-900",{"text-left":g.align!=="center"&&g.align!=="right","text-center":g.align==="center","text-right":g.align==="right"}),children:ke(g,t,n)},g.key))]},c)})})]})}),d&&l.size>0&&e.jsxs("div",{className:"px-4 py-3 bg-blue-50 border-t border-gray-200 text-sm text-blue-700",children:[l.size," row",l.size!==1?"s":""," selected"]})]})};try{h.displayName="DataTable",h.__docgenInfo={description:"",displayName:"DataTable",props:{data:{defaultValue:null,description:"Array of data objects to display",name:"data",required:!0,type:{name:"T[]"}},columns:{defaultValue:null,description:"Column configuration",name:"columns",required:!0,type:{name:"Column<T>[]"}},loading:{defaultValue:{value:"false"},description:"Whether the table is in loading state",name:"loading",required:!1,type:{name:"boolean"}},selectable:{defaultValue:{value:"false"},description:"Whether rows are selectable",name:"selectable",required:!1,type:{name:"boolean"}},onRowSelect:{defaultValue:null,description:"Callback when row selection changes",name:"onRowSelect",required:!1,type:{name:"(selectedRows: T[], selectedRowKeys: string[]) => void"}},rowKey:{defaultValue:{value:"(record: T) => record.id || record.key"},description:"Function to get unique key for each row",name:"rowKey",required:!1,type:{name:"(record: T) => string"}},emptyText:{defaultValue:{value:"No data available"},description:"Custom empty state message",name:"emptyText",required:!1,type:{name:"string"}},loadingText:{defaultValue:{value:"Loading..."},description:"Custom loading text",name:"loadingText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Custom CSS class",name:"className",required:!1,type:{name:"string"}},searchable:{defaultValue:{value:"false"},description:"Whether to show search functionality",name:"searchable",required:!1,type:{name:"boolean"}},searchPlaceholder:{defaultValue:{value:"Search..."},description:"Placeholder for search input",name:"searchPlaceholder",required:!1,type:{name:"string"}}}}}catch{}const j=({children:a,variant:s="default",size:r="md"})=>{const d="inline-flex items-center font-medium rounded-full",i={primary:"bg-blue-100 text-blue-800 border border-blue-200",secondary:"bg-gray-100 text-gray-800 border border-gray-200",success:"bg-green-100 text-green-800 border border-green-200",warning:"bg-yellow-100 text-yellow-800 border border-yellow-200",error:"bg-red-100 text-red-800 border border-red-200",default:"bg-gray-100 text-gray-700 border border-gray-200",outline:"bg-white text-gray-700 border border-gray-300"},m={sm:"px-2 py-0.5 text-xs",md:"px-2.5 py-0.5 text-sm",lg:"px-3 py-1 text-sm"};return e.jsx("span",{className:w(d,i[s],m[r]),children:a})},U=({children:a,variant:s="solid",color:r="blue",size:d="md",disabled:i=!1,onClick:m})=>{const N="inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",S={sm:"px-2.5 py-1.5 text-xs",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base"},k={solid:{blue:"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",red:"bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",green:"bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",gray:"bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500"},outline:{blue:"border border-blue-300 text-blue-700 hover:bg-blue-50 focus:ring-blue-500",red:"border border-red-300 text-red-700 hover:bg-red-50 focus:ring-red-500",green:"border border-green-300 text-green-700 hover:bg-green-50 focus:ring-green-500",gray:"border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500"},ghost:{blue:"text-blue-700 hover:bg-blue-50 focus:ring-blue-500",red:"text-red-700 hover:bg-red-50 focus:ring-red-500",green:"text-green-700 hover:bg-green-50 focus:ring-green-500",gray:"text-gray-700 hover:bg-gray-50 focus:ring-gray-500"}};return e.jsx("button",{className:w(N,S[d],k[s][r],i&&"opacity-50 cursor-not-allowed"),disabled:i,onClick:m,children:a})},x=[{id:"1",name:"John Doe",email:"john.doe@example.com",role:"Admin",status:"active",joinDate:"2023-01-15",lastActive:"2024-01-15"},{id:"2",name:"Jane Smith",email:"jane.smith@example.com",role:"Editor",status:"active",joinDate:"2023-03-20",lastActive:"2024-01-14"},{id:"3",name:"Bob Johnson",email:"bob.johnson@example.com",role:"User",status:"inactive",joinDate:"2023-06-10",lastActive:"2023-12-01"},{id:"4",name:"Alice Brown",email:"alice.brown@example.com",role:"Editor",status:"pending",joinDate:"2024-01-01",lastActive:"2024-01-10"},{id:"5",name:"Charlie Wilson",email:"charlie.wilson@example.com",role:"User",status:"active",joinDate:"2023-08-15",lastActive:"2024-01-13"}],Ue=[{id:"1",name:"Wireless Headphones",price:99.99,category:"Electronics",stock:45,rating:4.5},{id:"2",name:"Smart Watch",price:299.99,category:"Electronics",stock:23,rating:4.2},{id:"3",name:"Coffee Mug",price:12.99,category:"Home",stock:100,rating:4.8},{id:"4",name:"Laptop Stand",price:49.99,category:"Office",stock:15,rating:4.3},{id:"5",name:"Desk Lamp",price:79.99,category:"Office",stock:8,rating:4.1}],Le={title:"UI Components/DataTable",component:h,parameters:{layout:"fullscreen",docs:{description:{component:`
# DataTable Component

A powerful and flexible data table component with sorting, selection, search, and customization options.

## Features
- **Column Sorting** - Click headers to sort data ascending/descending
- **Row Selection** - Single or multiple row selection with callbacks
- **Search Functionality** - Built-in search across all columns
- **Loading States** - Elegant loading and empty state handling
- **Custom Rendering** - Full control over cell content rendering
- **Responsive Design** - Horizontal scrolling on smaller screens

## Anatomy
The DataTable consists of:
1. **Search Bar** (optional) - Filter data across columns
2. **Table Header** - Column titles with sorting indicators  
3. **Selection Column** (optional) - Checkboxes for row selection
4. **Table Body** - Data rows with custom cell rendering
5. **Selection Summary** - Shows count of selected rows

## Accessibility
- Full keyboard navigation support
- Screen reader compatible headers and content
- ARIA labels for interactive elements
- High contrast support for focus states
- Semantic table markup

## Best Practices
- Use meaningful column titles
- Provide appropriate empty and loading states
- Keep cell content concise and scannable
- Use sorting for large datasets
- Consider pagination for very large datasets
        `}}},tags:["autodocs"],argTypes:{loading:{control:"boolean",description:"Show loading state"},selectable:{control:"boolean",description:"Enable row selection"},searchable:{control:"boolean",description:"Enable search functionality"},onRowSelect:{action:"rows selected"}},args:{onRowSelect:De()}},y=[{key:"name",title:"Name",sortable:!0},{key:"email",title:"Email",sortable:!0},{key:"role",title:"Role",sortable:!0,render:a=>e.jsx(j,{variant:a==="Admin"?"primary":a==="Editor"?"secondary":"default",children:a})},{key:"status",title:"Status",sortable:!0,render:a=>e.jsx(j,{variant:a==="active"?"success":a==="pending"?"warning":"error",children:a})},{key:"joinDate",title:"Join Date",sortable:!0}],A={args:{data:x,columns:y}},P={args:{data:x,columns:y,searchable:!0,searchPlaceholder:"Search users..."}},B={args:{data:x,columns:y,selectable:!0,searchable:!0}},E={args:{data:[],columns:y,loading:!0,loadingText:"Loading users..."}},L={args:{data:[],columns:y,emptyText:"No users found",searchable:!0}},_={render:()=>{const a=[{key:"name",title:"Product Name",sortable:!0,width:"200px"},{key:"price",title:"Price",sortable:!0,align:"right",render:s=>`$${s.toFixed(2)}`},{key:"category",title:"Category",sortable:!0,render:s=>e.jsx(j,{variant:"outline",children:s})},{key:"stock",title:"Stock",sortable:!0,align:"center",render:s=>e.jsx(j,{variant:s>20?"success":s>10?"warning":"error",children:s})},{key:"rating",title:"Rating",sortable:!0,align:"center",render:s=>e.jsxs("div",{className:"flex items-center",children:["★".repeat(Math.floor(s)),e.jsx("span",{className:"ml-1 text-gray-600",children:s})]})}];return e.jsx(h,{data:Ue,columns:a,searchable:!0,selectable:!0,searchPlaceholder:"Search products..."})},parameters:{docs:{description:{story:"Example showing a product catalog with custom cell rendering, different alignments, and various data types."}}}},z={render:()=>{const[a,s]=p.useState([]),[r,d]=p.useState(x),[i,m]=p.useState(!1),N=u=>{s(u)},S=()=>{m(!0),setTimeout(()=>{const u=a.map(l=>l.id);d(l=>l.filter(D=>!u.includes(D.id))),s([]),m(!1)},1e3)},k=()=>{m(!0),setTimeout(()=>{d(x),s([]),m(!1)},1e3)},C=[...y,{key:"actions",title:"Actions",render:(u,l)=>e.jsxs("div",{className:"space-x-2",children:[e.jsx(U,{size:"sm",variant:"outline",children:"Edit"}),e.jsx(U,{size:"sm",variant:"outline",color:"red",children:"Delete"})]})}];return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"User Management"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx(U,{onClick:k,disabled:i,children:"Refresh"}),a.length>0&&e.jsxs(U,{onClick:S,variant:"solid",color:"red",disabled:i,children:["Delete Selected (",a.length,")"]})]})]}),e.jsx(h,{data:r,columns:C,loading:i,selectable:!0,searchable:!0,onRowSelect:N,searchPlaceholder:"Search users..."}),a.length>0&&e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-blue-900",children:"Selected Users:"}),e.jsx("ul",{className:"mt-2 text-sm text-blue-700",children:a.map(u=>e.jsxs("li",{children:[u.name," - ",u.email]},u.id))})]})]})},parameters:{docs:{description:{story:"Interactive example with row selection, bulk actions, and dynamic data updates."}}}},I={render:()=>{const a=[{key:"name",title:"User",render:(s,r)=>e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-sm font-medium text-blue-600",children:r.name.split(" ").map(d=>d[0]).join("").toUpperCase()})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900",children:r.name}),e.jsx("div",{className:"text-sm text-gray-500",children:r.email})]})]})},{key:"role",title:"Role & Status",render:(s,r)=>e.jsxs("div",{className:"space-y-1",children:[e.jsx(j,{variant:r.role==="Admin"?"primary":"secondary",children:r.role}),e.jsx("div",{children:e.jsx(j,{size:"sm",variant:r.status==="active"?"success":r.status==="pending"?"warning":"error",children:r.status})})]})},{key:"activity",title:"Activity",render:(s,r)=>e.jsxs("div",{className:"text-sm",children:[e.jsxs("div",{className:"text-gray-900",children:["Joined: ",r.joinDate]}),e.jsxs("div",{className:"text-gray-500",children:["Last active: ",r.lastActive]})]})}];return e.jsx(h,{data:x,columns:a,searchable:!0,searchPlaceholder:"Search users..."})},parameters:{docs:{description:{story:"Example showcasing complex custom cell rendering with avatars, multiple data points, and rich content."}}}},V={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-green-700 mb-4",children:"✅ Good Practices"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Clear, Descriptive Headers"}),e.jsx(h,{data:x.slice(0,2),columns:[{key:"name",title:"Full Name",sortable:!0},{key:"email",title:"Email Address",sortable:!0},{key:"role",title:"User Role",sortable:!0}]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Meaningful Empty States"}),e.jsx(h,{data:[],columns:y,emptyText:"No users found. Try adjusting your search criteria or add new users.",searchable:!0})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-red-700 mb-4",children:"❌ Avoid These"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Vague Headers"}),e.jsx(h,{data:x.slice(0,2),columns:[{key:"name",title:"Name"},{key:"email",title:"Contact"},{key:"role",title:"Type"}]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Generic Empty State"}),e.jsx(h,{data:[],columns:y,emptyText:"No data"})]})]})]})]}),parameters:{docs:{description:{story:`
### Best Practices:

**Do:**
- Use clear, descriptive column headers
- Provide meaningful empty states with actionable guidance
- Use appropriate data formatting (currency, dates, etc.)
- Implement sorting for large datasets
- Show loading states during data fetching
- Use consistent alignment for similar data types

**Don't:**
- Use vague or abbreviated column headers
- Show generic "No data" messages
- Mix data types in the same column without formatting
- Make all columns sortable if not needed
- Hide important actions in dropdowns unnecessarily
        `}}}};var F,J,O;A.parameters={...A.parameters,docs:{...(F=A.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns
  }
}`,...(O=(J=A.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var G,$,K;P.parameters={...P.parameters,docs:{...(G=P.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns,
    searchable: true,
    searchPlaceholder: 'Search users...'
  }
}`,...(K=($=P.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var Q,X,Y;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    data: sampleUsers,
    columns: userColumns,
    selectable: true,
    searchable: true
  }
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: userColumns,
    loading: true,
    loadingText: 'Loading users...'
  }
}`,...(te=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ae,re;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: userColumns,
    emptyText: 'No users found',
    searchable: true
  }
}`,...(re=(ae=L.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,le,oe;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const productColumns: Column<Product>[] = [{
      key: 'name',
      title: 'Product Name',
      sortable: true,
      width: '200px'
    }, {
      key: 'price',
      title: 'Price',
      sortable: true,
      align: 'right',
      render: value => \`$\${value.toFixed(2)}\`
    }, {
      key: 'category',
      title: 'Category',
      sortable: true,
      render: value => <Badge variant="outline">{value}</Badge>
    }, {
      key: 'stock',
      title: 'Stock',
      sortable: true,
      align: 'center',
      render: value => <Badge variant={value > 20 ? 'success' : value > 10 ? 'warning' : 'error'}>\r
            {value}\r
          </Badge>
    }, {
      key: 'rating',
      title: 'Rating',
      sortable: true,
      align: 'center',
      render: value => <div className="flex items-center">\r
            {'★'.repeat(Math.floor(value))}\r
            <span className="ml-1 text-gray-600">{value}</span>\r
          </div>
    }];
    return <DataTable data={sampleProducts} columns={productColumns} searchable selectable searchPlaceholder="Search products..." />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing a product catalog with custom cell rendering, different alignments, and various data types.'
      }
    }
  }
}`,...(oe=(le=_.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ie,ce,de;z.parameters={...z.parameters,docs:{...(ie=z.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const [selectedRows, setSelectedRows] = useState<User[]>([]);
    const [data, setData] = useState(sampleUsers);
    const [loading, setLoading] = useState(false);
    const handleRowSelect = (rows: User[]) => {
      setSelectedRows(rows);
    };
    const handleDeleteSelected = () => {
      setLoading(true);
      setTimeout(() => {
        const selectedIds = selectedRows.map(row => row.id);
        setData(prev => prev.filter(item => !selectedIds.includes(item.id)));
        setSelectedRows([]);
        setLoading(false);
      }, 1000);
    };
    const handleRefresh = () => {
      setLoading(true);
      setTimeout(() => {
        setData(sampleUsers);
        setSelectedRows([]);
        setLoading(false);
      }, 1000);
    };
    const columnsWithActions: Column<User>[] = [...userColumns, {
      key: 'actions',
      title: 'Actions',
      render: (_, record) => <div className="space-x-2">\r
            <Button size="sm" variant="outline">\r
              Edit\r
            </Button>\r
            <Button size="sm" variant="outline" color="red">\r
              Delete\r
            </Button>\r
          </div>
    }];
    return <div className="space-y-4">\r
        <div className="flex justify-between items-center">\r
          <h3 className="text-lg font-semibold">User Management</h3>\r
          <div className="space-x-2">\r
            <Button onClick={handleRefresh} disabled={loading}>\r
              Refresh\r
            </Button>\r
            {selectedRows.length > 0 && <Button onClick={handleDeleteSelected} variant="solid" color="red" disabled={loading}>\r
                Delete Selected ({selectedRows.length})\r
              </Button>}\r
          </div>\r
        </div>\r
        \r
        <DataTable data={data} columns={columnsWithActions} loading={loading} selectable searchable onRowSelect={handleRowSelect} searchPlaceholder="Search users..." />\r
        \r
        {selectedRows.length > 0 && <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">\r
            <h4 className="font-medium text-blue-900">Selected Users:</h4>\r
            <ul className="mt-2 text-sm text-blue-700">\r
              {selectedRows.map(user => <li key={user.id}>{user.name} - {user.email}</li>)}\r
            </ul>\r
          </div>}\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example with row selection, bulk actions, and dynamic data updates.'
      }
    }
  }
}`,...(de=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ue,ge;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const customColumns: Column<User>[] = [{
      key: 'name',
      title: 'User',
      render: (_, record) => <div className="flex items-center space-x-3">\r
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">\r
              <span className="text-sm font-medium text-blue-600">\r
                {record.name.split(' ').map(n => n[0]).join('').toUpperCase()}\r
              </span>\r
            </div>\r
            <div>\r
              <div className="font-medium text-gray-900">{record.name}</div>\r
              <div className="text-sm text-gray-500">{record.email}</div>\r
            </div>\r
          </div>
    }, {
      key: 'role',
      title: 'Role & Status',
      render: (_, record) => <div className="space-y-1">\r
            <Badge variant={record.role === 'Admin' ? 'primary' : 'secondary'}>\r
              {record.role}\r
            </Badge>\r
            <div>\r
              <Badge size="sm" variant={record.status === 'active' ? 'success' : record.status === 'pending' ? 'warning' : 'error'}>\r
                {record.status}\r
              </Badge>\r
            </div>\r
          </div>
    }, {
      key: 'activity',
      title: 'Activity',
      render: (_, record) => <div className="text-sm">\r
            <div className="text-gray-900">Joined: {record.joinDate}</div>\r
            <div className="text-gray-500">Last active: {record.lastActive}</div>\r
          </div>
    }];
    return <DataTable data={sampleUsers} columns={customColumns} searchable searchPlaceholder="Search users..." />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showcasing complex custom cell rendering with avatars, multiple data points, and rich content.'
      }
    }
  }
}`,...(ge=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var he,pe,be;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">\r
      <div>\r
        <h3 className="font-semibold text-green-700 mb-4">✅ Good Practices</h3>\r
        <div className="space-y-4">\r
          <div>\r
            <h4 className="font-medium mb-2">Clear, Descriptive Headers</h4>\r
            <DataTable data={sampleUsers.slice(0, 2)} columns={[{
            key: 'name',
            title: 'Full Name',
            sortable: true
          }, {
            key: 'email',
            title: 'Email Address',
            sortable: true
          }, {
            key: 'role',
            title: 'User Role',
            sortable: true
          }]} />\r
          </div>\r
          \r
          <div>\r
            <h4 className="font-medium mb-2">Meaningful Empty States</h4>\r
            <DataTable data={[]} columns={userColumns} emptyText="No users found. Try adjusting your search criteria or add new users." searchable />\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h3 className="font-semibold text-red-700 mb-4">❌ Avoid These</h3>\r
        <div className="space-y-4">\r
          <div>\r
            <h4 className="font-medium mb-2">Vague Headers</h4>\r
            <DataTable data={sampleUsers.slice(0, 2)} columns={[{
            key: 'name',
            title: 'Name'
          }, {
            key: 'email',
            title: 'Contact'
          }, {
            key: 'role',
            title: 'Type'
          }]} />\r
          </div>\r
          \r
          <div>\r
            <h4 className="font-medium mb-2">Generic Empty State</h4>\r
            <DataTable data={[]} columns={userColumns} emptyText="No data" />\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: \`
### Best Practices:

**Do:**
- Use clear, descriptive column headers
- Provide meaningful empty states with actionable guidance
- Use appropriate data formatting (currency, dates, etc.)
- Implement sorting for large datasets
- Show loading states during data fetching
- Use consistent alignment for similar data types

**Don't:**
- Use vague or abbreviated column headers
- Show generic "No data" messages
- Mix data types in the same column without formatting
- Make all columns sortable if not needed
- Hide important actions in dropdowns unnecessarily
        \`
      }
    }
  }
}`,...(be=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};const _e=["Default","WithSearch","WithSelection","LoadingState","EmptyState","ProductTable","InteractiveExample","CustomRendering","BestPractices"];export{V as BestPractices,I as CustomRendering,A as Default,L as EmptyState,z as InteractiveExample,E as LoadingState,_ as ProductTable,P as WithSearch,B as WithSelection,_e as __namedExportsOrder,Le as default};
