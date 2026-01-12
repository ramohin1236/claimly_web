import { baseQueryWithAuth } from "@/lib/utils/baseQueryWithAuth";
import { TResponse } from "@/types/global";
import { createApi } from "@reduxjs/toolkit/query/react";


const myProfileApi = createApi({
    reducerPath: "myProfileApi",
    baseQuery: baseQueryWithAuth,
    tagTypes: ["MyProfile"],
    endpoints: (builder) => ({
        getMyProfile: builder.query<TResponse<any>, void>({
            query: () => ({
                url: '/user/getMe',
                method: 'GET'

            }),
            providesTags: ["MyProfile"]
        }),
        updateProfile: builder.mutation<TResponse<any>, FormData>({
            query: (data) => ({
                url: '/user/updateMe',
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ["MyProfile"]
        }),
    }),
});



export const {
    useGetMyProfileQuery,
    useUpdateProfileMutation
} = myProfileApi;

export default myProfileApi;