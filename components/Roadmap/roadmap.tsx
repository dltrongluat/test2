import Image from "next/image";
import ChartCircle from "../../public/images/tokenomic/chart_circle.png"
import bgTop from "../../public/images/global/Newa.png"
import Leaves from "../../public/images/tokenomic/Split_Leaves.png"
import Grass from "../../public/images/tokenomic/grass.png"
import starIcon from "../../assets/starIcon.png";

const textShadow = 'rgba(0, 0, 0, 0.498039) -1px -1px 0px, rgba(0, 0, 0, 0.498039) -1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px -1px 0px'

const phase = [
    {
        id: 1,
        title: "Phase 1",
        list: [
            {
                id: 1,
                text: "Launch"
            },
            {
                id: 2,
                text: "CoinGecko/Coinmarketcap Listings"
            },
            {
                id: 3,
                text: "1,000+ Holders"
            },
            {
                id: 4,
                text: "Get $LADYS trending on twitter with unbridled memetic power"
            },

        ]
    },
    {
        id: 2,
        title: "Phase 2",
        list: [
            {
                id: 1,
                text: "Community Partnerships"
            },
            {
                text:"Milady Times digital newsletter"
            },
            {
                id: 2,
                text: "Formation of token gated discord group, Milady Palace for holders, more details TBA" 
            },
            {
                id: 3,
                text: "CEX Listings 10,000+ holders"
            },

        ]
    },
    {
        id: 3,
        title: "Phase 3",
        list: [
            {
                id: 1,
                text: "Milady Merchandise"
            },
            {
                id: 2,
                text: "Milady Academy"
            },
            {
                id: 3,
                text: "Milady Tools"
            },
            {
                id: 4,
                text: "T1 Exchange Listings 100,000+ holders"
            },
            {
                id: 5,
                text: "$LADYS becoming the quintessential token for internet spirituality"
            }

        ]
    },

]




const Roadmap = () => {
    return (
        <div id="roadmap" className="relative mb-[70px]">
            {/* <div className="absolute block  bottom-0 right-0">
                <Image src={Grass} />
            </div> */}
            <div className="w-full xl:w-[1228px] xl:max-w-[1228px] mx-auto px-[17px] xl:px-0 ">
                <h1 className="text-color_text text-center text-[56px] xl:text-[64px] font-bold font-font_primary">LADYS ROADMAP</h1>
                <div className="bg-[#fff] w-fit mx-auto text-[#1F1310] mt-10 font-text italic text-xl xl:text-2xl text-center p-8 border-solid border-[1px] border-border_color shadow-[4px_4px_0_#262626]">
                    <p className="font-medium">Phase 1: Launch</p>
                    <p className="font-medium">Phase 2: Vibe and HODL</p>
                    <p className="font-medium">Phase 3:  Milady Takeover</p>
                </div>
                <p className="w-full xl:w-4/5 mx-auto italic text-center text-xl xl:text-2xl text-color_text my-10 font-medium">
                    The path is never promised but it gets clearer with each step.  
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
                    {phase.map((item, index) => {
                        return (
                            <div key={index} className={`bg-[#fff] p-8 border-solid h-[312px] border-[1px] border-border_color shadow-[4px_4px_0_#262626]`}>
                                <h2 className="font-bold text-center text-2xl xl:text-[32px] text-color_text font-font_primary">{item.title}</h2>
                                <ul className={`list-disc text-color_text font-text text-base xl:text-xl font-medium italic mt-3 xl:mt-6`}>
                                    {item.list.map((des,index)=>(
                                        <li key={index}>{des.text}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div className="my-[56px] md:my-[80px] max-w-[217px] h-[91px] md:max-w-[265px] md:h-[114px] mx-auto">
                <Image src={starIcon} alt="star icon" />
            </div>
            {/* <div className="block relative w-full h-[12px] lg:h-[47px]">
                <Image layout="fill" src={bgTop} alt="bg-top" />
            </div> */}
        </div>
    )
}
export default Roadmap;