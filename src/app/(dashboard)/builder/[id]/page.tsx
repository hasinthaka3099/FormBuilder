import React from 'react'
import { GetFormById } from '../../../../../actions/form';

async function BuilderPage({
    params,
}:{
    params: {
        id: string;
    }
}) {
    const {id} = params;
    const form = await GetFormById(Number(id)); 
    
    if(!form) {
        throw new Error("Form Not Found");
    }

    return <div>{form.name}</div>
  
}

export default BuilderPage;