"use client";

import { getUserDataById } from '@/axios.config';
import React, { useState } from 'react'
import ChangeDialogue from './_component/ChangeDialogue';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import UserInfo from './_component/UserInfo';
import UpdateName from './_component/updateName';


function Page() {

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserDataById,
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  const userInfo = [
    {
      label: "Name",
      value: data?.name,
      name: "name"
    },
    {
      label: "Email",
      value: data?.email,
      name: "email"
    },
    {
      label: "Password",
      value: data?.password,
      name: "password"
    },
    {
      label: "Mobile Number",
      value: data?.mobile_no,
      name: "mobile_number"
    },
    {
      label: "Country",
      value: data?.country,
      name: "country"
    },
    {
      label: "State",
      value: data?.state,
      name: "state"
    },
    {
      label: "City",
      value: data?.city,
      name: "city"
    },

  ]


  return (
    <div className='w-full flex justify-center bg-slate-200 rounded-md shadow-lg'>
      <div className=''></div>
      <div className='w-[500px] '>
        <UpdateName value={data.name} />

        {/* {userInfo.map(info => {
          return <UserInfo key={info.name} name={info.name} value={info.value} label={info.label} />;



        })} */}
      </div>
    </div>
  );
}


export default Page