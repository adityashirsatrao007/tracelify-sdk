import{r as e}from"./rolldown-runtime-Dw2cE7zH.js";import{I as t,K as n,O as r,V as i,W as a,X as o,c as s,m as c,s as l,t as u,z as d}from"./vendor-icons-Bp-vNo5g.js";import{a as f}from"./vendor-query-Cr6lA0Vx.js";import{a as p,t as m,u as h}from"./useFetch-COlHBshG.js";import{c as g,l as _}from"./vendor-router-Bv7TzWVW.js";import{n as v,t as y}from"./helpers-CVNFcQIj.js";var b=e(o(),1),x=f();function S({code:e,lang:n=`python`}){let[r,i]=(0,b.useState)(!1);return(0,x.jsxs)(`div`,{className:`group relative rounded-xl border border-white/[0.06] bg-black/50 overflow-hidden`,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between border-b border-white/[0.05] px-4 py-2`,children:[(0,x.jsx)(`span`,{className:`text-[10px] font-mono text-slate-600 uppercase tracking-wider`,children:n}),(0,x.jsxs)(`button`,{onClick:async()=>{await v(e),i(!0),setTimeout(()=>i(!1),2e3)},className:`flex items-center gap-1.5 text-[11px] text-slate-600 hover:text-slate-400 transition-colors`,children:[r?(0,x.jsx)(a,{className:`h-3 w-3 text-emerald-400`}):(0,x.jsx)(t,{className:`h-3 w-3`}),r?`Copied!`:`Copy`]})]}),(0,x.jsx)(`pre`,{className:`overflow-x-auto p-4 text-[12px] leading-6 text-slate-300 font-mono`,children:e})]})}function C({icon:e,title:t,children:n}){return(0,x.jsxs)(`div`,{className:`space-y-3`,children:[(0,x.jsxs)(`h3`,{className:`flex items-center gap-2 text-[13px] font-semibold text-slate-200`,children:[(0,x.jsx)(e,{className:`h-4 w-4 text-violet-400 shrink-0`}),t]}),n]})}function w({dsn:e}){return(0,x.jsxs)(`div`,{className:`space-y-6`,children:[(0,x.jsxs)(C,{icon:l,title:`Installation`,children:[(0,x.jsx)(S,{lang:`bash`,code:`pip install tracelify-sdk`}),(0,x.jsxs)(`p`,{className:`text-[12px] text-slate-500`,children:[`Or copy the `,(0,x.jsx)(`code`,{className:`bg-white/5 px-1 rounded text-violet-300`,children:`tracelify/`}),` folder directly into your project root.`]})]}),(0,x.jsx)(C,{icon:u,title:`Initialize`,children:(0,x.jsx)(S,{lang:`python`,code:`import tracelify

sdk = tracelify.Tracelify(
    dsn="${e}",
    release="1.0.0"
)

# Auto captures all unhandled exceptions — no extra setup needed`})}),(0,x.jsx)(C,{icon:d,title:`Capture Exceptions`,children:(0,x.jsx)(S,{lang:`python`,code:`try:
    result = 10 / 0
except Exception as e:
    sdk.capture_exception(e)

# Or with a custom level
sdk.capture_exception(e, level="warning")`})}),(0,x.jsx)(C,{icon:s,title:`Set User & Tags`,children:(0,x.jsx)(S,{lang:`python`,code:`sdk.set_user({"id": "user_123", "email": "user@example.com"})
sdk.set_tag("environment", "production")
sdk.set_tag("version", "2.1.0")`})}),(0,x.jsx)(C,{icon:r,title:`Breadcrumbs`,children:(0,x.jsx)(S,{lang:`python`,code:`sdk.add_breadcrumb("User clicked checkout button")
sdk.add_breadcrumb("Payment service called")
sdk.add_breadcrumb("Order created #4521")`})}),(0,x.jsx)(C,{icon:c,title:`Flush on Exit`,children:(0,x.jsx)(S,{lang:`python`,code:`# Ensure all events are sent before process exits
sdk.flush(timeout=5.0)`})})]})}function T({dsn:e}){return(0,x.jsxs)(`div`,{className:`space-y-6`,children:[(0,x.jsxs)(C,{icon:l,title:`Installation`,children:[(0,x.jsx)(`p`,{className:`text-[12px] text-slate-400`,children:`Add the SDK files to your project:`}),(0,x.jsx)(S,{lang:`bash`,code:`# Copy the SDK into your project
cp -r tracelify-cpp/include/ your-project/include/
cp -r tracelify-cpp/src/     your-project/src/`}),(0,x.jsxs)(`p`,{className:`text-[12px] text-slate-500 mt-2`,children:[`Add to your `,(0,x.jsx)(`code`,{className:`bg-white/5 px-1 rounded text-violet-300`,children:`CMakeLists.txt`}),`:`]}),(0,x.jsx)(S,{lang:`cmake`,code:`include_directories(include)
add_executable(myapp main.cpp src/tracelify.cpp)
target_link_libraries(myapp curl pthread)`})]}),(0,x.jsx)(C,{icon:u,title:`Initialize`,children:(0,x.jsx)(S,{lang:`cpp`,code:`#include "tracelify.h"

int main() {
    tracelify::Tracelify sdk(
        "${e}",
        "v1.0.0"           // release version
    );

    // Automatically installs global signal/crash handlers
    tracelify::Tracelify::init_global_handlers(&sdk);

    // ... your app code ...

    sdk.flush();  // send queued events before exit
    return 0;
}`})}),(0,x.jsx)(C,{icon:d,title:`Capture Exceptions`,children:(0,x.jsx)(S,{lang:`cpp`,code:`try {
    int result = 10 / 0;  // or any throwing operation
} catch (const std::exception& e) {
    sdk.capture_exception(e);
}`})}),(0,x.jsx)(C,{icon:s,title:`Set User & Tags`,children:(0,x.jsx)(S,{lang:`cpp`,code:`sdk.set_user({
    {"id",    "user_123"},
    {"email", "user@example.com"}
});

sdk.set_tag("environment", "production");
sdk.set_tag("version",     "2.1.0");`})}),(0,x.jsx)(C,{icon:r,title:`Breadcrumbs`,children:(0,x.jsx)(S,{lang:`cpp`,code:`sdk.add_breadcrumb("Request received");
sdk.add_breadcrumb("Database query started");
sdk.add_breadcrumb("Cache miss - fetching from DB");`})}),(0,x.jsx)(C,{icon:c,title:`Flush`,children:(0,x.jsx)(S,{lang:`cpp`,code:`// Blocks until all events are flushed (background thread)
sdk.flush();`})})]})}function E({dsn:e}){return(0,x.jsxs)(`div`,{className:`space-y-6`,children:[(0,x.jsxs)(C,{icon:l,title:`Installation (Maven)`,children:[(0,x.jsx)(S,{lang:`xml`,code:`<dependency>
  <groupId>com.tracelify</groupId>
  <artifactId>tracelify-java</artifactId>
  <version>1.0.0</version>
</dependency>`}),(0,x.jsxs)(`p`,{className:`text-[12px] text-slate-500 mt-2`,children:[`Or compile `,(0,x.jsx)(`code`,{className:`bg-white/5 px-1 rounded text-violet-300`,children:`Tracelify.java`}),` directly into your project.`]})]}),(0,x.jsx)(C,{icon:u,title:`Initialize`,children:(0,x.jsx)(S,{lang:`java`,code:`import com.tracelify.Tracelify;

public class App {
    public static void main(String[] args) {
        Tracelify sdk = new Tracelify(
            "${e}",
            "v1.0.0"           // release version
        );

        // Automatically installs JVM uncaught exception handler
        // ... your app code ...

        sdk.shutdown(); // flush and clean up executor
    }
}`})}),(0,x.jsx)(C,{icon:d,title:`Capture Exceptions`,children:(0,x.jsx)(S,{lang:`java`,code:`try {
    int result = 10 / 0;
} catch (Exception e) {
    sdk.captureException(e);
}`})}),(0,x.jsx)(C,{icon:s,title:`Set User & Tags`,children:(0,x.jsx)(S,{lang:`java`,code:`Map<String, Object> user = new HashMap<>();
user.put("id",    "user_123");
user.put("email", "user@example.com");
sdk.setUser(user);

sdk.setTag("environment", "production");
sdk.setTag("version",     "2.1.0");`})}),(0,x.jsx)(C,{icon:r,title:`Breadcrumbs`,children:(0,x.jsx)(S,{lang:`java`,code:`sdk.addBreadcrumb("Request received at /api/checkout");
sdk.addBreadcrumb("Payment service called");
sdk.addBreadcrumb("Order persisted to DB");`})}),(0,x.jsx)(C,{icon:c,title:`Flush & Shutdown`,children:(0,x.jsx)(S,{lang:`java`,code:`// Flush pending events and shut down the executor thread
sdk.flush();    // fire-and-forget async flush
sdk.shutdown(); // flush + await termination (use before JVM exit)`})})]})}var D=[{id:`python`,label:`Python`,icon:`🐍`},{id:`cpp`,label:`C++`,icon:`⚙️`},{id:`java`,label:`Java`,icon:`☕`}],O={python:`python`,django:`python`,flask:`python`,fastapi:`python`,javascript:`python`,react:`python`,node:`python`,java:`java`,cpp:`cpp`};function k(){let{orgId:e,projectId:t}=_(),r=g(),{data:a}=m(h.PROJECT(t),()=>p.getProject(t),{enabled:!!t}),{data:o=[]}=m(h.PROJECT_DSN(t),()=>p.listDsnKeys(t),{enabled:!!t}),s=new URL(`https://qualified-layers-enclosed-liability.trycloudflare.com`).host,c=(o[0]?.dsn??`<your-dsn>`).replace(`localhost:8000`,s),l=O[a?.platform]??`python`,[f,v]=(0,b.useState)(null),S=f??l;return(0,x.jsxs)(`div`,{className:`animate-fade-in space-y-6 max-w-3xl`,children:[(0,x.jsx)(`div`,{className:`flex items-start justify-between gap-4`,children:(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-2 text-[11px] text-slate-500 mb-2`,children:[(0,x.jsx)(`button`,{onClick:()=>r(`/orgs/${e}/projects`),className:`hover:text-slate-300 transition-colors`,children:`Projects`}),(0,x.jsx)(i,{className:`h-3 w-3`}),(0,x.jsx)(`button`,{onClick:()=>r(`/orgs/${e}/projects/${t}`),className:`hover:text-slate-300 transition-colors`,children:a?.name??`…`}),(0,x.jsx)(i,{className:`h-3 w-3`}),(0,x.jsx)(`span`,{className:`text-slate-400`,children:`Documentation`})]}),(0,x.jsxs)(`h1`,{className:`flex items-center gap-2.5 text-[20px] font-bold text-slate-100`,children:[(0,x.jsx)(n,{className:`h-5 w-5 text-violet-400`}),`SDK Documentation`]}),(0,x.jsxs)(`p`,{className:`mt-1 text-[13px] text-slate-500`,children:[`Integrate Tracelify into your `,(0,x.jsx)(`span`,{className:`text-violet-300 font-medium`,children:a?.name}),` project`]})]})}),c!==`<your-dsn>`&&(0,x.jsxs)(`div`,{className:`rounded-xl border border-violet-500/20 bg-violet-600/5 px-4 py-3 flex items-center gap-3`,children:[(0,x.jsx)(u,{className:`h-4 w-4 text-violet-400 shrink-0`}),(0,x.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,x.jsx)(`p`,{className:`text-[11px] text-slate-500 mb-0.5`,children:`Your DSN (pre-filled in snippets below)`}),(0,x.jsx)(`p`,{className:`text-[12px] font-mono text-violet-300 truncate`,children:c})]})]}),(0,x.jsx)(`div`,{className:`flex items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.02] p-1 w-fit`,children:D.map(e=>(0,x.jsxs)(`button`,{onClick:()=>v(e.id),className:y(`flex items-center gap-1.5 rounded-lg px-4 py-2 text-[12px] font-medium transition-all`,S===e.id?`bg-violet-600/20 text-violet-300 shadow-sm`:`text-slate-500 hover:text-slate-300`),children:[(0,x.jsx)(`span`,{children:e.icon}),e.label]},e.id))}),(0,x.jsxs)(`div`,{className:`rounded-xl border border-white/[0.06] bg-white/[0.015] p-6`,children:[S===`python`&&(0,x.jsx)(w,{dsn:c}),S===`cpp`&&(0,x.jsx)(T,{dsn:c}),S===`java`&&(0,x.jsx)(E,{dsn:c})]}),(0,x.jsxs)(`div`,{className:`flex items-center justify-between pt-2`,children:[(0,x.jsx)(`button`,{onClick:()=>r(`/orgs/${e}/projects/${t}`),className:`text-[12px] text-slate-500 hover:text-slate-300 transition-colors`,children:`← Back to project`}),(0,x.jsxs)(`button`,{onClick:()=>r(`/orgs/${e}/projects/${t}/issues`),className:`flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-[12px] font-semibold text-white hover:bg-violet-500 transition-colors`,children:[(0,x.jsx)(d,{className:`h-3.5 w-3.5`}),`View Issues`]})]})]})}export{k as default};