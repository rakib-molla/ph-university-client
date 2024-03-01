import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
   endpoints: (builder)=>({
      // getAllStudent: builder.query({
      //    query:(args)=>{
      //       const params = new URLSearchParams();

      //       if(args){
      //          args.forEach((item: TQueryParm)=>{
      //             params.append(item.name, item.value as string)
      //          })
      //       }

      //       return {
      //          url: '/academic-departments',
      //          method: 'GET',
      //          params: params,
      //       }
      //    },

      //    transformResponse:(response: TResponseRedux<TAcademicSemester[]>)=>{
      //       // console.log("inside redux",response);
      //       return {
      //          data: response.data,
      //          meta: response.meta,
      //       }
      //    }
      // }),
      addStudent: builder.mutation({
         query: (data)=>({
            url: '/users/create-student',
            method: 'POST',
            body: data,
         })
      })
   })
})

export const { useAddStudentMutation} = userManagementApi 