import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

function UserInfo({ name, value, label }: { name: string; value: string; label: string }) {
   

    if (value !== null && value !== undefined) {
        return (
            <div className='space-y-2 border-b-1 border-b-black flex items-center justify-between'>
                <label className='font-semibold text-md' htmlFor={name}>{label}</label>
                {!edit && <><p className=''> {value}</p><Button onClick={() => setEdit(prev => !prev)} variant={"link"}>Edit</Button></>}
                {edit && <><input type="text" name="name" onChange={(e) => setInput(e.target.value)} value={input} /><Button onClick={handleUpdate} variant={"link"}>Update</Button></>}
            </div>
        )
    } else {
        return (
            <div className='space-y-2 border-b-1 border-b-black flex items-center justify-between'>
                <label className='font-semibold text-md' htmlFor={name}>{label}</label>
                {!edit && <><p className=''> {value}</p><Button onClick={() => setEdit(prev => !prev)} variant={"link"}>Edit</Button></>}
                {edit && <><input type="text" name="name" onChange={(e) => setInput(e.target.value)} value={input} /><Button onClick={handleUpdate} variant={"link"}>Update</Button></>}
            </div>
        )
    }


}

export default UserInfo