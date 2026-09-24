import { Document, Packer, Paragraph, HeadingLevel, Table, TableRow, TableCell, WidthType } from 'docx';
import { saveAs } from 'file-saver';
const p=t=>new Paragraph({text:String(t||'')});
export async function exportWord(data){
 const children=[new Paragraph({text:'PROYECTO ABP INTERDISCIPLINARIO',heading:HeadingLevel.TITLE}),p(''),new Paragraph({text:'1. Identificación del proyecto',heading:HeadingLevel.HEADING_1})];
 const fields=[['Nivel',data.input.levels.join(', ')],['Duración',`${data.input.classes} clases`],['Asignaturas',data.input.subjects.join(', ')],['Escuela',data.input.school],['Socios colaboradores',data.input.partners],['Responsable',data.input.responsible],['Colaboradores',data.input.collaborators],['Nombre',data.input.name]];
 fields.forEach(([a,b])=>children.push(new Paragraph({text:`${a}: ${b||'—'}`})));
 children.push(new Paragraph({text:'2. Descripción general',heading:HeadingLevel.HEADING_1}),p(data.project.description));
 [['3. Pregunta guía',data.project.question],['4. Problema o desafío',data.project.problem],['5. Propósito formativo',data.project.purpose],['6. Objetivo general',data.project.general]].forEach(([h,v])=>{children.push(new Paragraph({text:h,heading:HeadingLevel.HEADING_1}),p(v))});
 children.push(new Paragraph({text:'7. Objetivos específicos',heading:HeadingLevel.HEADING_1})); data.project.specifics.forEach((x,i)=>children.push(p(`${i+1}. ${x}`)));
 children.push(new Paragraph({text:'8. Objetivos curriculares',heading:HeadingLevel.HEADING_1}));
 data.oas.forEach(o=>{children.push(p(`${o.subject} — ${o.level}`));children.push(p(`OA: ${o.oa}`));children.push(p(`Indicadores: ${o.indicators.join('; ')}`));});
 children.push(new Paragraph({text:'9. Planificación clase a clase',heading:HeadingLevel.HEADING_1}));
 const rows=[new TableRow({children:['Clase','Fase','Asignaturas','Objetivo','Evidencia','Instrumento'].map(x=>new TableCell({children:[p(x)]}))})];
 data.classes.forEach(c=>rows.push(new TableRow({children:[String(c.id),c.phase,c.subjects.join(', '),c.objective,c.evidence,c.instrument].map(x=>new TableCell({children:[p(x)]}))})));
 children.push(new Table({rows,width:{size:100,type:WidthType.PERCENTAGE}}));
 children.push(new Paragraph({text:'10. Matriz de coherencia pedagógica',heading:HeadingLevel.HEADING_1}),p('Desafío → objetivo del proyecto → OA → actividad → evidencia → instrumento. Esta matriz debe revisarse antes de implementar el proyecto.'));
 const doc=new Document({sections:[{children}]}); const blob=await Packer.toBlob(doc); saveAs(blob,`${(data.input.name||'proyecto-abp').replace(/[^a-z0-9áéíóúñ]+/gi,'-')}.docx`);
}
