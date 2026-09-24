import React from 'react';
export default function Field({label,children,help}){return <label className="field"><span>{label}</span>{children}{help&&<small>{help}</small>}</label>}
