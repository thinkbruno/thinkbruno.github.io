import{M as e,N as t,O as n,T as r,_ as i,g as a,h as o,i as s,l as c,p as l,r as u,t as d,x as f,y as p}from"./language-BLi2vt9V-tYBVZdKk.js";function m(e){let t=`
  Nome: ${e.name}
  Projeto: ${e.project}
  Descrição: ${e.description}
  Prazo: ${e.deadline}
    `,n=`https://wa.me/5513981568095?text=${encodeURIComponent(t)}`;window.open(n,`_blank`)}var h={class:`budget`},g={class:`budget-container`},_={class:`budget-subtitle`},v={class:`budget-benefits`},y={class:`budget-form`},b=[`placeholder`],x={disabled:``,value:``},S={value:`landing`},C={value:`institutional`},w={value:`system`},T=[`placeholder`],E=[`placeholder`],D={class:`budget-divider`},O={href:`mailto:seu@email.com`,class:`budget-email`},k={class:`budget-preview`},A={__name:`Budget`,setup(A){let j=a(``),M=a(``),N=a(``),P=a(``),F=t(()=>`${f.t(`budget_msg_intro`)}

${f.t(`budget_name`)}: ${j.value||`-`}
${f.t(`budget_project`)}: ${M.value?f.t(`budget_project_${M.value}`):`-`}
${f.t(`budget_deadline`)}: ${P.value||`-`}

${f.t(`budget_description`)}:
${N.value||`-`}`);function I(){if(!j.value||!M.value){alert(f.t(`budget_error`));return}m({name:j.value,project:f.t(`budget_project_${M.value}`),description:F.value,deadline:P.value})}return(t,a)=>(d(),r(`section`,h,[n(`div`,g,[i(e,{name:`fade`,mode:`out-in`},{default:o(()=>[(d(),r(`div`,{key:c(f).current},[n(`h1`,null,u(c(f).t(`budget_title`)),1),a[4]||=n(`br`,null,null,-1),n(`p`,_,u(c(f).t(`budget_subtitle`)),1),n(`ul`,v,[n(`li`,null,`✔ `+u(c(f).t(`budget_benefit_1`)),1),n(`li`,null,`✔ `+u(c(f).t(`budget_benefit_2`)),1),n(`li`,null,`✔ `+u(c(f).t(`budget_benefit_3`)),1)]),n(`div`,y,[s(n(`input`,{"onUpdate:modelValue":a[0]||=e=>j.value=e,placeholder:c(f).t(`budget_name`)},null,8,b),[[p,j.value]]),s(n(`select`,{"onUpdate:modelValue":a[1]||=e=>M.value=e,class:`budget-select`},[n(`option`,x,u(c(f).t(`budget_project`)),1),n(`option`,S,u(c(f).t(`budget_project_landing`)),1),n(`option`,C,u(c(f).t(`budget_project_institutional`)),1),n(`option`,w,u(c(f).t(`budget_project_system`)),1)],512),[[l,M.value]]),s(n(`textarea`,{"onUpdate:modelValue":a[2]||=e=>N.value=e,placeholder:c(f).t(`budget_description`)},null,8,T),[[p,N.value]]),s(n(`input`,{"onUpdate:modelValue":a[3]||=e=>P.value=e,placeholder:c(f).t(`budget_deadline`)},null,8,E),[[p,P.value]]),n(`button`,{onClick:I},u(c(f).t(`budget_button`)),1),n(`span`,D,u(c(f).t(`budget_or`)),1),n(`a`,O,u(c(f).t(`budget_email`)),1),n(`pre`,k,``+u(F.value)+`
                        `,1)])]))]),_:1})])]))}};export{A as default};