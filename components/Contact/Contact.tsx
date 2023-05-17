import React from "react";
import Image from "next/image";
import Twitter from "../../public/images/contact/twitter.svg"
import Telegram from "../../public/images/contact/telegram.svg"
import Discord from "../../public/images/contact/discord.svg"
import Lady from "../../public/images/lady/Lady.svg"
import Link from "next/link";
import Sub from "../../public/images/claim/Subtract.svg"
import Square from "../../public/images/claim/Square.svg"
import Multi from "../../public/images/claim/Multi.svg"
const socials = [
    {
        id: 0,
        icon: Twitter,
        link: "https://twitter.com/miladymemecoin",
    },
    {
        id: 1,
        icon: Telegram,
        link: "https://t.me/miladymemecoin",
    },
    {
        id: 0,
        icon: Discord,
        link: "https://discord.com/invite/miladymemecoin",

    }
]

const Contact = () => {
    return (
        <div className="relative px-[17px] xl:px-0 mb-[48px] lg:mb-[80px]">
            <div className="w-full xl:w-[1228px] xl:max-w-[1228px] mx-auto xl:mb-[130px] xl:px-0 border-2 border-[#262626] rounded-tl-2xl rounded-tr-2xl shadow-[4px_4px_0_#121212]">
                <div className=" bg-[#EB94CD] py-[10px] px-6 flex justify-between items-center rounded-tl-2xl rounded-tr-2xl">
                    <div className="flex space-x-3">
                        <span className="inline-block w-4 h-4 bg-[#fff] rounded-full"></span>
                        <span className="inline-block w-4 h-4 bg-[#fff] rounded-full"></span>
                        <span className="inline-block w-4 h-4 bg-[#fff] rounded-full"></span>
                    </div>
                    <div className="flex space-x-3">
                        <div className="w-[19px] h-[19px]">
                            <Image src={Sub} alt="icon" width={19} height={19} />
                        </div>
                        <div className="w-[19px] h-[19px]">
                            <Image src={Square} alt="icon" width={19} height={19} />
                        </div>
                        <div className="w-[19px] h-[19px]">
                            <Image src={Multi} alt="icon" width={19} height={19} />
                        </div>
                    </div>
                </div>
                <div className="border-solid border-[1px] border-border_color py-12 px-8 bg-[#fff]">
                    <h1 className="text-color_text text-center text-[56px] xl:text-[64px] font-bold font-font_primary">CONTACT</h1>
                    <div className="w-full lg:w-fit mx-auto flex flex-col mt-8 xl:mt-[60px]">
                        <div className="mx-4 flex items-center justify-center font-font_primary">
                            <Image src={Lady} width={80} height={80} />
                            <span className="text-[#262626] text-[40px] xl:text-[48px] font-bold ml-4">Milady</span>
                        </div>
                        <div className="flex justify-center mt-8 space-x-6">
                            {socials.map((item, index) => {
                                return (
                                    <div className="w-10 h-10 lg:w-[64px] lg:h-[64px] cursor-pointer">
                                        <a target="_blank" href={item.link} key={index}>
                                            <Image src={item.icon} alt="icon" />
                                        </a>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                    <p className="text-color_text italic text-xl xl:text-[28px] text-center mt-8 w-full xl:w-[1140px] xl:leading-[44px]">
                    $LADYS coin has no association with Charlotte Fang or her creation Milady Maker. This token is simply paying homage to a NFT collection we all love and recognize.
                    </p>
                    <p className="text-color_text italic text-xl xl:text-[28px] text-center mt-8 w-full xl:w-[1140px] xl:leading-[44px]">
                        $LADYS is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Contact;
