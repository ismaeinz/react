import React, { createContext, useState } from 'react'

export const NameCtx=createContext();
NameCtx.displayName='NameCtx';
const NameCtxProvider=({children})=>{

    const [name,setName]=useState('IsmaeiN');
    return<NameCtx.Provider value={name}>
        {children}
    </NameCtx.Provider>
};
export default NameCtxProvider;
