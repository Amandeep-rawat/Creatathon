"use client"
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { useState } from 'react';
import LanguageSelector from './LanguageSelector';
import OutPut from './Output';

const CodeEditor = () => {
    const [value,setValue]=useState('');
    const [language,setLanguage]=useState('javascript');
    const onSelect=(language:string)=>{
      console.log(language);
      
      setLanguage(language);
    }
    console.log("lang", language);
    
  return (
    <div className=' w-full p-2'>
        <h1 className='  font-bold text-1.5xl'>Your Code Editor is Here :</h1>
        <div className='flex items-center  bg-gray-900  p-2 justify-around'>
          <p  className='text-gray-400 mr-1 '>Language</p>
          <p className='text-gray-400 '>Output</p>
        </div>
        

      <LanguageSelector language={language} onSelect={onSelect}/>
        <div className='w-full overflow-x-hidden min-h-[100vh]  flex items-start justify-start'>

      <Editor onChange={(value) => setValue(value!)} theme='vs-dark' value={value} width={"70%"} className='mx-auto overflow-y-scroll h-full pt-2' height={"90vh"} language={language} defaultLanguage={language} defaultValue="// some comment" />;
        <OutPut value={value } language={language}/>
        </div>
        <button onClick={()=>alert("Your response is recorded.")} className="py-2 px-4 bg-blue-500 rounded-md text-white m-2">Submit</button>

    </div>
  );
}

export default CodeEditor;
