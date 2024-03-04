import { TStudent } from "../../../types";
import { TQueryParm, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
   endpoints: (builder)=>({
      getAllStudent: builder.query({
         query:(args)=>{
            const params = new URLSearchParams();

            if(args){
               args.forEach((item: TQueryParm)=>{
                  params.append(item.name, item.value as string)
               })
            }

            return {
               url: '/students',
               method: 'GET',
               params: params,
            }
         },

         transformResponse:(response: TResponseRedux<TStudent[] >)=>{
            // console.log("inside redux",response);
            return {
               data: response.data,
               meta: response.meta,
            }
         }
      }),
      addStudent: builder.mutation({
         query: (data)=>({
            url: '/users/create-student',
            method: 'POST',
            body: data,
         })
      }),
      getAllFaculties: builder.query({
         query:(args)=>{
            const params = new URLSearchParams();

            if(args){
               args.forEach((item: TQueryParm)=>{
                  params.append(item.name, item.value as string)
               })
            }

            return {
               url: '/faculties',
               method: 'GET',
               params: params,
            }
         },

         transformResponse:(response: TResponseRedux<TStudent[] >)=>{
            // console.log("inside redux",response);
            return {
               data: response.data,
               meta: response.meta,
            }
         }
      }),
   })
})

export const {useGetAllStudentQuery, useAddStudentMutation, useGetAllFacultiesQuery} = userManagementApi 