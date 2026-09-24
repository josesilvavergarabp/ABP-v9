import { curriculum } from '../data/curriculum';

const stop=new Set(['para','con','una','uno','los','las','del','por','que','como','desde','sobre','entre','proyecto','estudiantes','crear','hacer']);
function keywords(text=''){return [...new Set(text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').split(/[^a-z0-9ñ]+/).filter(w=>w.length>3&&!stop.has(w)))].slice(0,12)}
export function suggestCurriculum({levels,subjects,idea,description}){
 const keys=keywords(`${idea} ${description}`);
 return curriculum.filter(o=>levels.includes(o.level)&&subjects.includes(o.subject)).map(o=>{
   const hits=o.tags.filter(t=>keys.some(k=>t.includes(k)||k.includes(t))).length;
   return {...o,score:hits};
 }).sort((a,b)=>b.score-a.score).slice(0,8);
}
export function generateProject(input){
 const idea=input.idea?.trim()||'proyecto interdisciplinario';
 const product=input.product?.trim()||`Producto o resultado concreto asociado a ${idea}`;
 const challenge=input.challenge?.trim()||`¿Cómo podemos desarrollar ${idea} para responder a una necesidad o desafío relevante de nuestra comunidad educativa?`;
 return {
   description:`Proyecto interdisciplinario en el que las y los estudiantes desarrollan ${idea}, integrando aprendizajes de las asignaturas seleccionadas y produciendo ${product}. El trabajo se organiza en fases de exploración, diseño, desarrollo, revisión, comunicación y proyección.`,
   question:challenge,
   problem:`La comunidad educativa requiere comprender, abordar o transformar una situación vinculada con ${idea}. El desafío consiste en tomar decisiones, aplicar aprendizajes y construir una respuesta concreta que pueda ser compartida y evaluada.`,
   purpose:`Favorecer aprendizajes significativos mediante una experiencia situada en la que las y los estudiantes investiguen, colaboren, tomen decisiones, produzcan evidencias y comuniquen un resultado relacionado con ${idea}.`,
   general:`Diseñar y desarrollar ${product}, integrando aprendizajes de las asignaturas involucradas para responder al desafío planteado.`,
   specifics:[
    `Investigar y analizar información pertinente para comprender el desafío y fundamentar decisiones del proyecto.`,
    `Planificar y desarrollar acciones colaborativas que permitan construir, probar y mejorar el producto o resultado esperado.`,
    `Comunicar y evaluar el proceso y sus resultados mediante evidencias, reflexión y retroalimentación.`
   ]
 }
}
export function generateClasses(input,project,selectedOAs){
 const n=Math.max(1,Number(input.classes)||8); const phases=['Explorar y comprender','Investigar y planificar','Diseñar y desarrollar','Probar y mejorar','Comunicar y proyectar'];
 return Array.from({length:n},(_,i)=>({id:i+1,name:`Clase ${i+1}: ${phases[Math.min(phases.length-1,Math.floor(i/(n/phases.length)))]}`,phase:phases[Math.min(phases.length-1,Math.floor(i/(n/phases.length)))],subjects:selectedOAs.slice(0,3).map(x=>x.subject),objective:i<n-1?project.specifics[i%3]:`Comunicar y evaluar los resultados del proyecto.`,activities:['Activación de conocimientos previos','Trabajo colaborativo y desarrollo de una tarea auténtica','Registro de evidencias y cierre reflexivo'],evidence:i===n-1?project.general:'Evidencia de aprendizaje o avance del producto',instrument:i%3===0?'Lista de cotejo':i%3===1?'Rúbrica':'Registro de observación'}));
}
