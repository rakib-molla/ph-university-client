import { TAcademicSemester } from "../../../types/academicManagement.type";
import { TQueryParm, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const academicDepartmentManagement = baseApi.injectEndpoints({
   endpoints: (builder)=>({
      getAllAcademicDepartment: builder.query({
         query:(args)=>{
            const params = new URLSearchParams();

            if(args){
               args.forEach((item: TQueryParm)=>{
                  params.append(item.name, item.value as string)
               })
            }

            return {
               url: '/academic-departments',
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
      addAllAcademicDepartment: builder.mutation({
         query:(data)=>({
            url: '/academic-departments/create-academic-department',
            method: 'POST',
            body: data
         })
      }),
   })
})

export const { useGetAllAcademicDepartmentQuery, useAddAllAcademicDepartmentMutation } = academicDepartmentManagement;

