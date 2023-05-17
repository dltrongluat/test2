import Image from "next/image";
import Modal from 'react-modal';


import icOkx from "../../public/images/wallet/ic_wallet_okx.svg";
import icWallet from "../../public/images/wallet/ic_wallet.svg";

// Modal.setAppElement('#wallet-modal');
Modal.setAppElement('#__next')

const ModalWallet = ({ isOpenWallet, setIsOpenWallet, onOpen , onOpenOkx}) => {

    const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
    }

  return (

    <Modal
        isOpen={isOpenWallet}
        onRequestClose={()=>{setIsOpenWallet(false)}}
        style={customStyles}
        contentLabel="Example Modal"
    >
    <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="bg-[#FFFFFF]  w-[85vw]  md:w-[445px]  h-[225px] rounded-2xl text-center font-font_primary"
      >
            <button
                onClick={(e)=>{onOpenOkx()}}
                className="w-full h-[52px] flex items-center justify-center border-solid border-[1px] border-[#000000] shadow-[2px_2px_0px_#121212] mt-4 mb-[24px]"
            >
                 <div className="w-[32px] h-[32px] mr-[10px]">
                  <Image src={icOkx} alt="icon" />
                </div>
                <div className="font-bold text-[16px] leading-[24px] text-[#262626]">
                        OKX
                </div>
            </button>

            <button
                onClick={(e)=>{onOpen()}}
              className="w-full h-[52px] flex items-center justify-center border-solid border-[1px] border-[#000000] shadow-[2px_2px_0px_#121212] mb-[24px]"
            >
               <div className="w-[32px] h-[32px] mr-[10px]">
                  <Image src={icWallet} alt="icon" />
                </div>
                <div className="font-bold text-[16px] leading-[24px] text-[#262626]">
                    Wallet Connect
                </div>
            </button>

            <button
            onClick={() => setIsOpenWallet(false)}
            className="w-full h-[44px] bg-[#121212] text-[#FFFFFF] font-bold text-[16px] leading-[24px] shadow-[2px_2px_0px_#121212] border-solid border-[1px] border-[#FFFFFF]"
            >
            Close
            </button>
      </div>
    </Modal>
   
  );
};
export default ModalWallet;
