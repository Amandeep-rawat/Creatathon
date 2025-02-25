import axios from "axios";

const LANGUAGE_VERSIONS:{[key:string]:string}={
  javascript:"18.15.0",
   typescript:"5.0.3"
}

const API = axios.create({ baseURL: "https://emkc.org/api/v2/piston" });

export async function POST(req: Request) {
    console.log("calling it ");
    
  try {
    const data = await req.json();
    console.log(data)
    const response = await API.post("/execute", {
      "language": data.language,
      "version": LANGUAGE_VERSIONS[data.language],
      "files": [
        {
          "content": data.sourceCode,
        },
      ],
    });
    console.log(response.data);
    
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
