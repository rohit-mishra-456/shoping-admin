import { useNavigate } from 'react-router-dom';
import { Lists } from '../../customComponents/lists.tsx';
import { useGetGiftBundlesQuery } from '../../queries/giftBundle.ts';
import { useGetGiftIdeasQuery } from '../../queries/giftIdeas.ts';
import { useGetOrdersQuery } from '../../queries/order.ts';
import { BsNutFill } from 'react-icons/bs';
 
export const LatestStats = () => {

    const navigate = useNavigate();
    // const handler = (key: string) => {
    //   let url = "/";
    //   if (key?.toLowerCase().includes("order")) url = "/bundles?p=1";
    //   console.log(key);
    //   navigate(url);
    // };


    const { data: giftBundlesData, isLoading, error } = useGetGiftBundlesQuery("");
    // const { data: giftIdeasData, isLoading, error } = useGetGiftIdeasQuery(null);
    // const { data, isLoading, error } = useGetOrdersQuery(null);
    // const { data, isLoading, error } = useGetGiftIdeasQuery(null);
    return (
        <>
            <Lists
                title='Gift Bundles'
                handler={() => {  }}
                data={giftBundlesData}
                isLoading={isLoading}
                error={error}
            />
            {/* <Lists />
            <Lists />
            <Lists /> */}
        </>
    )
}