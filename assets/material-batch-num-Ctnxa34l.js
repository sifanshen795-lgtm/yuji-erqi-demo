const i=/^RM-\d{3}\d{6}$/,A="物料批号格式不正确，应为RM-料号(3位)+生产批号(6位)";function M(r){const t=String(r??"").trim();return t?i.test(t):!0}export{A as M,M as i};
