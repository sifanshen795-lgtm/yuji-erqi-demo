function t(r){return r.filter(e=>!(!e.field||e.type&&["checkbox","radio","seq"].includes(e.type)||e.slots)).map(e=>({label:e.title||"",prop:e.field}))}export{t};
