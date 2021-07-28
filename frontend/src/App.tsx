import React, { useState } from 'react';
import './App.css';
import Rate from './Rate';
import GraphqlProvider from './GraphqlProvider';

function App() {
  const [name, setName] = useState<string | undefined>('Nancy Astor')
  const [staged, setStaged] = useState<string>('Nancy Astor')
  const [code, setCode] = useState<number>(99202)

  return (
    <GraphqlProvider>
      <div className="App">
        <div className="flex relative ">
          <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </span>
          <input type="text" id="fullname" name="fullname" placeholder="Full Name" autoComplete="on"
            className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            list="patients"
            value={staged}
            onChange={(event) => setStaged(event.target.value)}
            onBlur={() => setName(staged)}
          />
        </div>

        {/* consider loading these values from db */}
        <select id="codes" name="codes" 
          value={code}
          onChange={(event) => setCode(parseInt(event.target.value, 10))}
          className="block w-full text-gray-700 my-4 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
            <option value="99202">99202</option>
            <option value="99203">99203</option>
            <option value="99204">99204</option>
            <option value="99213">99213</option>
            <option value="99214">99214</option>
            <option value="99215">99215</option>
        </select>
        {code && name ? <Rate name={name} code={code} /> : null}
      </div>
    </GraphqlProvider>
  );
}

export default App;
