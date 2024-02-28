import { TAcademicSemester } from "../../../types/academicManagement.type";
import { TQueryParm, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";



const academicFacultyManagementApi = baseApi.injectEndpoints({
   endpoints: (builder)=>({
      getAllAcademicFaculty: builder.query({
         query:(args)=>{
            const params = new URLSearchParams();

            if(args){
               args.forEach((item: TQueryParm)=>{
                  params.append(item.name, item.value as string)
               })
            }

            return {
               url: '/academic-faculties',
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
      addAllAcademicFaculty: builder.mutation({
         query:(data)=>({
            url: '/academic-faculties/create-academic-faculty',
            method: 'POST',
            body: data
         })
      })
   })
})
 
export const { useGetAllAcademicFacultyQuery, useAddAllAcademicFacultyMutation } = academicFacultyManagementApi;
