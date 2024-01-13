"use client";
import { getUserDataById } from '@/axios.config';
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import UpdateName from './_component/UpdateName';
import UpdateBirthday from './_component/updateBirthday';
import UpdateEmail from './_component/updateEmail';
import UpdatePassword from './_component/updatePassword';
import UpdateMobile from './_component/updateMobile';
import UpdateProfilePhoto from './_component/UpdateProfilePhoto';


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


  return (
    <div className='w-full flex justify-center bg-slate-200 rounded-md shadow-lg'>
      <div className=''></div>
      <div className='w-[500px] '>

        <UpdateProfilePhoto value={data.img} />
        <UpdateName value={data.name} />
        <UpdateEmail value={data.email} />
        <UpdatePassword value={data.password} />
        <UpdateBirthday value={data.dob} />
        <UpdateMobile value={data.mobile_number} />
        {/* <UpdateCity value={data.city} /> */}
        {/* <UpdateState value={data.state} /> */}
        {/* <UpdateCountry value={data.country} /> */}
      </div>
    </div>
  );
}


export default Page