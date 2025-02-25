"use client"
import { Loader2 } from 'lucide-react';
import React, { useState } from 'react';

interface RunOutput {
  output: string;
  stdout?: string;
}

interface APIResponse {
  run: RunOutput;
}

const Output = ({ value, language }: { value: string, language: string }) => {
  // Initial state ko typecast karte hain ya initial value dete hain.
  const [output, setOutput] = useState<RunOutput | null>(null);
  const [loading, setLoading] = useState(false);

  const runCode = async () => {
    setLoading(true);
    if (!value) return;
    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sourceCode: value,
          language: language,
        }),
      });
      const data: APIResponse = await response.json();
      console.log("frontend data", data);
      setOutput(data.run);
    } catch (error: any) {
      console.error('Error:', error);
      setOutput({ output: 'Error while running code' });
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className=" h-full flex flex-col overflow-x-hidden   py-1">
      <button disabled={loading}
        className="bg-blue-500 hover:bg-blue-700 text-white flex items-center justify-center w-fit font-bold py-2 px-3 text-sm rounded"
        onClick={runCode}
      >
        {
          loading ? (<Loader2 className='animate-spin'/>
          ):"Run Code"
        }
      </button>

      <div className=" mt-2 break-words overflow-x-hidden w-full h-full bg-gray-900 text-white p-2 rounded overflow-auto">
        <p className='w-full'>{output ? output.output : "Output  will be shown here..."}</p>
      </div>   
       </div>
  );
};

export default Output;
