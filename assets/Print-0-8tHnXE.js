import{_ as U,a9 as l}from"./index-17H2T6o5.js";import{v,a0 as r,a1 as f,a as u,a9 as b,ac as O,F as C,al as V,a2 as R,u as B,a3 as T,ad as _,r as n,c as P}from"./vue-fCD1IuHL.js";import"./jspdf-vYVYLNFZ.js";import"./lang-C1T9j7xW.js";const S={name:"BluetoothScanner"},F=Object.assign(S,{setup(Y){const x=n([]),I=n(!1),c=n(""),N=n("SFH-CC3-5281L"),w=n(""),s=n(""),E=n(""),g=n([{value:"0000fff0-0000-1000-8000-00805f9b34fb",label:"0000fff0-0000-1000-8000-00805f9b34fb"},{value:"49535343-fe7d-4ae5-8fa9-9fafd205e455",label:"49535343-fe7d-4ae5-8fa9-9fafd205e455"}]),y=P(()=>c.value==="0000fff0-0000-1000-8000-00805f9b34fb"?[{value:"0000fff1-0000-1000-8000-00805f9b34fb",label:"NOTIFY, INDICATE"},{value:"0000fff2-0000-1000-8000-00805f9b34fb",label:"WRITE, WRITE NO RESPONSE"}]:[{value:"49535343-1e4d-4bd9-ba61-23c647249616",label:"NOTIFY, INDICATE"},{value:"49535343-8841-43f4-a8d4-ecbe34729bb3",label:"WRITE, WRITE NO RESPONSE"}]);async function L(t,e,i,m){try{const p=await(await(await t.gatt.connect()).getPrimaryService(e)).getCharacteristic(i);await k(p,m)}catch(o){console.error("Error:",o)}}async function D(){try{const t=await navigator.bluetooth.requestDevice({filters:[{services:[c.value]}]}),e="! 0 200 200 400 1",i=`
        ! 0 200 50 400 1
        ENCODING GBK
        TEXT 24 0 30 40 你好，世界！
        FORM
        PRINT
      `,m=`
    ! 0 200 200 500 1
    B QR 10 100 M 2 U 10
    MA,QR code ABC123
    ENDQR
    T 4 0 10 400 QR code ABC123
    FORM
    PRINT `;s.value="",s.value+="> Name:             "+t.name,s.value+=`
> Id:             `+t.id,s.value+=`
> Connected:             `+t.gatt.connected;const o=l(`客户签收单
`)+`
`+l(`主体公司： 上海基量标准气体有限公司
`)+l(`订单编号： 12021155
`)+l(`订单类型： 销售订单
`)+l(`销售开票： 上海华谊能源化工有限公司
`)+l(`卸货地址： 上海华谊能源化工有限公司
`)+`卸货时间： 2024/11/2 9:00
`+l(`卸货人： 张子明
`)+`
`+l(`******卸货信息******
`)+l(`编码        名称                数量  单位
`)+`He-40-001  高纯氦，40L,99.99%  10   m³
E-He-40-001  高纯氦，40L,99.99%  50   CYL
E-O2-40-001  高纯氧，40L,99.99%  10   m³
E-O2-40-001  高纯氧，40L,99.99%  50   CYL

`+l(`******回瓶信息******
`)+l(`编码        名称                数量  单位
`)+`E-O2-40-001  高纯氧，40L,99.99%  50   CYL
E-He-40-001  高纯氦，40L,99.99%  50   CYL
E-O2-40-001  高纯氧，40L,99.99%  50   CYL
`+l(`******留存钢瓶信息******
`)+`
`+l(`实时欠瓶数: 55
`)+`
`+l(`客户签字:
`)+`
`+l("打印日期: 2024-11-24"),d=new TextEncoder("gbk").encode(i+"");await L(t,c.value,E.value,d)}catch(t){console.error("Error:",t)}}async function k(t,e){await t.writeValue(e)}return(t,e)=>{const i=v("el-button"),m=v("el-checkbox"),o=v("el-input"),d=v("el-option"),p=v("el-select");return r(),f("div",null,[u(i,{onClick:D},{default:b(()=>[...e[6]||(e[6]=[O("连接并打印",-1)])]),_:1}),u(m,{modelValue:I.value,"onUpdate:modelValue":e[0]||(e[0]=a=>I.value=a)},{default:b(()=>[...e[7]||(e[7]=[O("所有设备",-1)])]),_:1},8,["modelValue"]),u(o,{modelValue:N.value,"onUpdate:modelValue":e[1]||(e[1]=a=>N.value=a),placeholder:"Device Name"},null,8,["modelValue"]),u(o,{modelValue:w.value,"onUpdate:modelValue":e[2]||(e[2]=a=>w.value=a),placeholder:"Device Name Prefix"},null,8,["modelValue"]),u(p,{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=a=>c.value=a),placeholder:"Bluetooth Service",clearable:"",size:"large",style:{width:"240px"}},{default:b(()=>[(r(!0),f(C,null,V(g.value,a=>(r(),R(d,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),u(p,{modelValue:E.value,"onUpdate:modelValue":e[4]||(e[4]=a=>E.value=a),placeholder:"characteristic",clearable:"",size:"large",style:{width:"240px"}},{default:b(()=>[(r(!0),f(C,null,V(B(y),a=>(r(),R(d,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),e[8]||(e[8]=T("div",{style:{margin:"20px 0"}},null,-1)),u(o,{modelValue:s.value,"onUpdate:modelValue":e[5]||(e[5]=a=>s.value=a),autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Please input"},null,8,["modelValue"]),T("ul",null,[(r(!0),f(C,null,V(x.value,a=>(r(),f("li",{key:a.id},_(a.name||"未命名设备")+" ("+_(a.id)+")",1))),128))])])}}}),Q=U(F,[["__scopeId","data-v-d44fb276"]]);export{Q as default};
