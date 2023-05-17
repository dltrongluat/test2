import Image from "next/image";
import aboutBanner from "../../assets/aboutBanner.png";
import aboutBannerMb from "../../assets/aboutBannerMb.png";
import leave5 from "../../assets/leave5.png";
import bgTop from "../../public/images/global/Newa.png";
import starIcon from "../../assets/starIcon.png";

const AboutPage = () => {
  return (
    <div id="about" className="w-full px-[16px] md:px-0 ">
      <div className="w-full max-w-[912px] bg-[#3333333] mx-auto">
        <div className="w-full mx-auto text-center">
          <div className="font-bold text-[40px] leading-[56px] md:text-[64px] md:leading-[64px] font-font_primary uppercase text-[#262626]">
            About
          </div>
          <div className="mt-[32px] font-normal text-[16px] leading-[24px] md:text-[20px] md:leading-[28px] text-[#262626] font-text font-style italic">
            Welcome to LADYS, the meme coin of Milady NFT collection. LADYS is the tokenisation of the fully memetically optimized white pill.
          </div>
          <div className="font-normal text-[16px] leading-[24px] md:text-[20px] md:leading-[28px] text-[#262626] mt-[16px] font-text font-style italic">
            LADYS is not another meme coin. LADYS is a self-organised meme coin. LADYS is the drip currency. LADYS is the points for karma, charm and beauty. LADYS is the accumulation of clout.
          </div>
          <div className="font-normal text-[16px] leading-[24px] md:text-[20px] md:leading-[28px] text-[#262626] mt-[16px] font-text font-style italic">
            Milady meme coin is LADYS, and LADYS is the meme coin for Milady.
          </div>
        </div>
        <div className=" hidden md:block mt-[48px]">
          <Image src={aboutBanner} alt="lady NFT" objectFit="cover" />
        </div>
        <div className="md:hidden mt-[32px] mx-auto max-w-[382px]">
          <Image src={aboutBannerMb} alt="lady NFT" objectFit="cover" />
        </div>
      </div>
      <div className="my-[56px] md:my-[80px] max-w-[217px] h-[91px] md:max-w-[265px] md:h-[114px] mx-auto">
        <Image src={starIcon} alt="star icon" />
      </div>
    </div>
  );
};
export default AboutPage;
