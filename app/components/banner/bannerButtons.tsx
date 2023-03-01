'use client';

import { useState } from "react";
import Link from 'next/link';
import InviteModal from "../../../components/inviteModal/modal";

export default function BannerButtons() {
    const [inviteModelOpen, setInviteModelOpen] = useState(false);

    return (
        <>
            {inviteModelOpen && <InviteModal setModal={setInviteModelOpen} />}

            <div className="flex gap-3 flex-col mx-auto">

                <div className="flex flex-row gap-3">
                    <button onClick={() => setInviteModelOpen(true)} className="cursor-pointer border-b-8 border-b-sky-600 hover:bg-sky-700 duration-150 rounded bg-sky-500 text-white font-semibold lg:w-44 w-36 h-12 items-center flex justify-center">Invite Me</button>
                    <a target="_blank" href="https://www.paypal.com/donate/?business=8RH6X55PX6RC8&no_recurring=0&item_name=If+you+like+and+support+Forestbot+and+want+to+see+him+continue+doing+what+he+does%2C+consider+dropping+a+donation.&currency_code=CAD" className="border-b-8 border-b-gray-700 hover:bg-gray-700 duration-200 rounded bg-gray-600 text-white font-semibold lg:w-44 w-36 h-12 items-center flex justify-center">Donate</a>
                </div>

                <Link href="/commands" className="cursor-pointer mx-auto border-b-8 border-b-lime-700 hover:bg-lime-700 duration-200 rounded bg-lime-500 text-white font-semibold lg:w-44 w-36 h-12 items-center flex justify-center">Commands</Link>

            </div>
        </>
    )
}