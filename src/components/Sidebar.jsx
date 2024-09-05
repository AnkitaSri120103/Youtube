import React from 'react';
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { CgPlayListSearch } from "react-icons/cg";
import { LiaVideoSolid } from "react-icons/lia";
import { MdWatchLater } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { IoMusicalNoteSharp } from "react-icons/io5";
import { IoFilmSharp } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { useUtils } from '../context/UtilsContext';

const Sidebar = () => {

    const { isSidebar, mobileShow, setMobileShow } = useUtils();

    const sidebarItems = [
        {
            groupName: "Home",
            groupItems: [
                { id: 1, name: "Home", icon: <GoHome /> },
                { id: 2, name: "Shorts", icon: <SiYoutubeshorts /> },
                { id: 3, name: "Subscription", icon: <MdOutlineSubscriptions /> },
            ],
        },
        {
            groupName: "You",
            groupItems: [
                { id: 1, name: "Your Channel", icon: <GoHome /> },
                { id: 2, name: "History", icon: <FaHistory /> },
                { id: 3, name: "Playlists", icon: <CgPlayListSearch /> },
                { id: 4, name: "Your videos", icon: <LiaVideoSolid /> },
                { id: 5, name: "Watch Later", icon: <MdWatchLater /> },
                { id: 6, name: "Liked videos", icon: <BiSolidLike /> },
            ],
        },
        {
            groupName: "Explore",
            groupItems: [
                { id: 1, name: "Trending", icon: <SiTrendmicro /> },
                { id: 2, name: "Shopping", icon: <HiOutlineShoppingBag /> },
                { id: 3, name: "Music", icon: <IoMusicalNoteSharp /> },
                { id: 4, name: "Films", icon: <PiFilmSlateLight /> },
                { id: 5, name: "Live", icon: <CgMediaLive /> },
                { id: 6, name: "Gaming", icon: <SiYoutubegaming /> },
                { id: 7, name: "News", icon: <FaRegNewspaper /> },
                { id: 8, name: "Sports", icon: <TfiCup /> },
                { id: 9, name: "Courses", icon: <SiStylelint /> },
                { id: 10, name: "Fashion & gadgets", icon: <PiLightbulbLight /> },
                { id: 11, name: "Podcast", icon: <MdPodcasts /> },
            ],
        },
        {
            groupName: "More from YouTube",
            groupItems: [
                { id: 1, name: "YouTube Premium", icon: <FaYoutube /> },
                { id: 2, name: "YouTube Studio", icon: <SiYoutubestudio /> },
                { id: 3, name: "YouTube Music", icon: <SiYoutubemusic /> },
                { id: 4, name: "YouTube Kids", icon: <SiYoutubekids /> },
            ],
        },
    ];

    const ModelOverlay = () => {
        return (
            <div className="fixed inset-0 bg-black/50 z-30" onClick={() => setMobileShow(false)}></div>
        );
    };

    return (
        <>
            <div className={`${mobileShow ? "fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%]" : "hidden"} xl:static xl:block xl:w-[25%] h-[calc(100vh-6.625rem)] px-2 lg:px-6 overflow-y-scroll overflow-x-hidden scrollbar-thin`}>
                <div className="space-y-3">
                    {sidebarItems.map((group, groupIndex) => (
                        <div key={groupIndex} className="mb-5">
                            <h1 className="font-bold">{group.groupName}</h1>
                            {group.groupItems.map((item) => (
                                <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1 my-3">
                                    <div className="text-xl cursor-pointer">{item.icon}</div>
                                    <span className="text-sm cursor-pointer">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <hr className="my-4" />
                <div className="text-xs font-semibold text-gray-500 space-y-2">
                    <p>About Press Copyright</p>
                    <p>Contact us Creators</p>
                    <p>Advertise Developers</p>
                    <p>Terms Privacy Policy & Safety</p>
                    <p>How YouTube Works</p>
                    <p>Test new features</p>
                </div>
                <p className="text-xs text-gray-800 mt-1">© 2024 clone by Ankita</p>
            </div>

            {mobileShow && <ModelOverlay />}
        </>
    );
};

export default Sidebar;
