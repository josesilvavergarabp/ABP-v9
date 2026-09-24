export const bloomVerbs=['identificar','describir','explicar','aplicar','analizar','comparar','organizar','diseñar','crear','evaluar','argumentar','producir','comunicar','proponer','transformar'];
export function normalizeGoal(text){return text?.trim().replace(/^[a-záéíóúñ]+\s+/i,'')||''}
