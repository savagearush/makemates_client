import { Button } from '@/components/ui/button';
import axios from 'axios';
import React, { useRef, useState } from 'react'

function UpdateName({ value }: { value: string }) {

  const [input, setInput] = useState(value);
  const [edit, setEdit] = useState(false);
  const [defaultValue, setDefaultValue] = useState(value);
  const [error, setError] = useState(null);
  const nameRef = useRef<HTMLParagraphElement>(null);

  const handleUpdate = async () => {

    console.log("working")

    try {
      const response = await axios.post("http://localhost:5000/user/update", { key: "name", value: input }, { withCredentials: true })
      if (response.status === 200) {
        setDefaultValue(input);
      }
    } catch (err) {
      setError(err);
    }

    setEdit(!edit);
  }

  return (
    <div className='space-y-2 border-b-1 border-b-black flex items-center justify-between'>
      <label className='font-semibold text-md' htmlFor="name">Name</label>
      {!edit && <><p ref={nameRef} className=''>{defaultValue}</p><Button onClick={() => setEdit(prev => !prev)} variant={"link"}>Edit</Button></>}
      {edit && <><input type="text" name="name" onChange={(e) => setInput(e.target.value)} value={input} /><Button onClick={handleUpdate} variant={"link"}>Update</Button></>}
      {error && <p>{error}</p>}
    </div>

  )
}

export default UpdateName