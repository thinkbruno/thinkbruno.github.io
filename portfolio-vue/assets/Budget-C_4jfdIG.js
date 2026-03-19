import{D as e,E as t,M as n,P as r,a as i,c as a,f as o,i as s,k as c,l,m as u,n as d,t as f,x as p}from"./language-BLi2vt9V.js";function m(e){let t=`
  Nome: ${e.name}
  Projeto: ${e.project}
  Descrição: ${e.description}
  Prazo: ${e.deadline}
    `,n=`https://wa.me/5513981568095?text=${encodeURIComponent(t)}`;window.open(n,`_blank`)}var h={class:`budget`},g={class:`budget-container`},_={class:`budget-subtitle`},v={class:`budget-benefits`},y={class:`budget-form`},b=[`placeholder`],x={disabled:``,value:``},S={value:`landing`},C={value:`institutional`},w={value:`system`},T=[`placeholder`],E=[`placeholder`],D={class:`budget-divider`},O={href:`mailto:seu@email.com`,class:`budget-email`},k={class:`budget-preview`},A={__name:`Budget`,setup(A){let j=c(``),M=c(``),N=c(``),P=c(``),F=a(()=>`${f.t(`budget_msg_intro`)}

${f.t(`budget_name`)}: ${j.value||`-`}
${f.t(`budget_project`)}: ${M.value?f.t(`budget_project_${M.value}`):`-`}
${f.t(`budget_deadline`)}: ${P.value||`-`}

${f.t(`budget_description`)}:
${N.value||`-`}`);function I(){if(!j.value||!M.value){alert(f.t(`budget_error`));return}m({name:j.value,project:f.t(`budget_project_${M.value}`),description:F.value,deadline:P.value})}return(a,c)=>(p(),o(`section`,h,[l(`div`,g,[u(d,{name:`fade`,mode:`out-in`},{default:t(()=>[(p(),o(`div`,{key:n(f).current},[l(`h1`,null,r(n(f).t(`budget_title`)),1),c[4]||=l(`br`,null,null,-1),l(`p`,_,r(n(f).t(`budget_subtitle`)),1),l(`ul`,v,[l(`li`,null,`✔ `+r(n(f).t(`budget_benefit_1`)),1),l(`li`,null,`✔ `+r(n(f).t(`budget_benefit_2`)),1),l(`li`,null,`✔ `+r(n(f).t(`budget_benefit_3`)),1)]),l(`div`,y,[e(l(`input`,{"onUpdate:modelValue":c[0]||=e=>j.value=e,placeholder:n(f).t(`budget_name`)},null,8,b),[[i,j.value]]),e(l(`select`,{"onUpdate:modelValue":c[1]||=e=>M.value=e,class:`budget-select`},[l(`option`,x,r(n(f).t(`budget_project`)),1),l(`option`,S,r(n(f).t(`budget_project_landing`)),1),l(`option`,C,r(n(f).t(`budget_project_institutional`)),1),l(`option`,w,r(n(f).t(`budget_project_system`)),1)],512),[[s,M.value]]),e(l(`textarea`,{"onUpdate:modelValue":c[2]||=e=>N.value=e,placeholder:n(f).t(`budget_description`)},null,8,T),[[i,N.value]]),e(l(`input`,{"onUpdate:modelValue":c[3]||=e=>P.value=e,placeholder:n(f).t(`budget_deadline`)},null,8,E),[[i,P.value]]),l(`button`,{onClick:I},r(n(f).t(`budget_button`)),1),l(`span`,D,r(n(f).t(`budget_or`)),1),l(`a`,O,r(n(f).t(`budget_email`)),1),l(`pre`,k,``+r(F.value)+`
                        `,1)])]))]),_:1})])]))}};export{A as default};