import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import ItemHistory from "./ItemHistory";
import InfiniteScroll from "react-infinite-scroll-component";
import { apiService } from "@/app/apiService";
import LoadMore from "components/Loading/Loadmore";
import { setTimeout } from "timers";
import ModalTransaction from "./ModalTransaction";
import { date } from "zod";

const History = ({ show, setShow, isSuccessBridge, icon, href }: any) => {
  const [showModal, setShowModal] = useState({});
  const { address } = useAccount();
  const [page, setPage] = useState(1);
  const [isMoreLoading, setIsMoreLoading] = useState(false);

  const [txHistory, setTxHistory] = useState([]);

  const getListHistoryByUser = async () => {
    fetchTxHistoryByWallet({ user_address: address });
  };

  const fetchTxHistoryByWallet = async (params: any) => {
    const querySize = {
      page: 1,
      page_size: 10,
    };

    const res: any = await apiService.getHistoryTransactions({
      ...querySize,
      ...params,
    });

    if (res && res.data && res.data?.items.length > 0) {
      setShow(true);
    }

    if (res && res.data) {
      setTxHistory(res.data?.items || []);
      return res.data;
    }
  };

  useEffect(() => {
    if (address) {
      fetchTxHistoryByWallet({ user_address: address });
    }
  }, [address]);

  useEffect(() => {
    if (isSuccessBridge && address) {
      setTimeout(() => {
        fetchTxHistoryByWallet({ user_address: address });
      }, 16000);
    }
  }, [isSuccessBridge]);

  useEffect(() => {
    if (show && address) {
      fetchTxHistoryByWallet({ user_address: address });
    }
  }, [show]);

  const fetchNewData = async () => {
    const querySize = {
      page: page,
      page_size: 10,
    };

    try {
      setIsMoreLoading(true);

      const res: any = await apiService.getHistoryTransactions({
        ...querySize,
        user_address: address,
      });

      if (res.data && res.data.items.length > 0) {
        setTxHistory((prevTx) => [...prevTx, ...res.data.items]);
      }

      setIsMoreLoading(false);
    } catch (error) {
      setIsMoreLoading(false);
      // setHasMore(false)
    }
  };

  useEffect(() => {
    if (address) {
      fetchNewData();
    }
  }, [page]);

  return (
    <>
      <InfiniteScroll
        dataLength={txHistory.length}
        next={() => {
          setPage((prevPage) => prevPage + 1);
        }}
        hasMore={true}
        loader={isMoreLoading && <LoadMore />}
        height={375}
      >
        <div className="px-[16px]">
          {txHistory?.map((history, index) => {
            return (
              <ItemHistory
                key={`${index}-${history._id}`}
                data={history}
                index={index}
                getListHistoryByUser={getListHistoryByUser}
                setShowModal={setShowModal}
              />
            );
          })}
        </div>
      </InfiniteScroll>
      {showModal && Object.keys(showModal).length > 0 && (
        <ModalTransaction setShowModal={setShowModal} showModal={showModal} />
      )}
    </>
  );
};
export default History;
