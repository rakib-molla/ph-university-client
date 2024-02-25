import { TAcademicSemester } from "../../../types/academicManagement.type";
import { TQueryParm, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
   endpoints: (builder)=>({
      getAllSemester : builder.query({
         query: (args)=>{
            const params = new URLSearchParams();
            
            if(args){
               args.forEach((item: TQueryParm)=>{
                  params.append(item.name, item.value as string);
               })
            }
            
           return {
            url: '/academic-semesters',
            method: 'GET',
            params: params,
           }
         },
         transformResponse:(response: TResponseRedux<TAcademicSemester[]>)=>{
            // console.log("inside redux",response);
            return {
               data: response.data,
               meta: response.meta,
            }
         }
      }),
      addAcademicSemester : builder.mutation({
         query:(data)=>({
            url: '/academic-semesters/create-academic-semester',
            method: 'POST',
            body: data
         })
      })
   }),
});

export const {useGetAllSemesterQuery, useAddAcademicSemesterMutation } = academicManagementApi;