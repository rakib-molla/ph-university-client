import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
   endpoints: (builder)=>({
      // getAllRegisterSemester : builder.query({
      //    query: (args)=>{
      //       const params = new URLSearchParams();
            
      //       if(args){
      //          args.forEach((item: TQueryParm)=>{
      //             params.append(item.name, item.value as string);
      //          })
      //       }
            
      //      return {
      //       url: '/academic-semesters',
      //       method: 'GET',
      //       params: params,
      //      }
      //    },
      //    transformResponse:(response: TResponseRedux<TAcademicSemester[]>)=>{
      //       // console.log("inside redux",response);
      //       return {
      //          data: response.data,
      //          meta: response.meta,
      //       }
      //    }
      // }),

      addRegisterSemester : builder.mutation({
         query:(data)=>({
            url: '/semester-registrations/create-semester-registration',
            method: 'POST',
            body: data
         })
      })
   }),
})

export const { useAddRegisterSemesterMutation } = courseManagementApi