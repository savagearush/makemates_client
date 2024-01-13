import { Button } from '@/components/ui/button'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image'
import React, { useState } from 'react'

function UpdateProfilePhoto({ value }: { value: string }) {
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState<string | StaticImport>("");


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFile = e.target.files ? e.target.files[0] : undefined;
        setFile(newFile);
        if (newFile) {
            const newPreviewUrl = URL.createObjectURL(newFile);
            setPreviewUrl(newPreviewUrl);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center'>

            <Image src={value !== null ? value : "/avatar.png"} alt="ProfileImage" width="100" height="100" className='rounded-full' />
            <input
                type="file"
                name="profile_image"
                hidden
                id="profile_image"
                onChange={handleFileChange}
                accept="image/png, image/jpeg, image/jpg"
            />

        </div>
    )
}

export default UpdateProfilePhoto