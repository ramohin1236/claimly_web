import { baseQueryWithAuth } from "@/lib/utils/baseQueryWithAuth";
import { TResponse } from "@/types/global";
import { createApi } from "@reduxjs/toolkit/query/react";


const claimlyGuidesApi = createApi({
    reducerPath: "claimlyGuidesApi",
    baseQuery: baseQueryWithAuth,
    tagTypes: ["ClaimlyGuides"],
    endpoints: (builder) => ({

        getClaimlyGuides: builder.query<TResponse<any>, void>({
            query: () => ({
                url: '/claimlyGuide',
                method: 'GET',
            }),
        }),

    }),
});



export const {
    useGetClaimlyGuidesQuery
} = claimlyGuidesApi;

export default claimlyGuidesApi;