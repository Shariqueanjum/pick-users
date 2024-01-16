import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:'user',
    initialState:{
        info:[
            {
                name:"Lila Schneider",
                email:"lilaschneider@gmail.com",
                icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWRdl_2WcZhAn-Hk46O4oz9hDpi3tZi0EKw&usqp=CAU",
                id:0
             },
            
             {
                name:"Velez Estes",
                email:"VelezEstes@gmail.com",
                icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWRdl_2WcZhAn-Hk46O4oz9hDpi3tZi0EKw&usqp=CAU",
                id:1
             },
            
             {
                name:"Rosario Ray",
                email:"RosarioRay@gmail.com",
                icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWRdl_2WcZhAn-Hk46O4oz9hDpi3tZi0EKw&usqp=CAU",
                id:2

             },
            
             {
                name:"Virginia Jordan",
                email:"VirginiaJordan@gmail.com",
                icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWRdl_2WcZhAn-Hk46O4oz9hDpi3tZi0EKw&usqp=CAU",
                id:3
             },
            
             {
                name:"Kristin Jacobs",
                email:"KristinJacobs@gmail.com",
                icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWRdl_2WcZhAn-Hk46O4oz9hDpi3tZi0EKw&usqp=CAU",
                id:4
             },
            
             {
                name:"Gillespie Moran",
                email:"GillespieMoran@gmail.com",
                icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWRdl_2WcZhAn-Hk46O4oz9hDpi3tZi0EKw&usqp=CAU",
                id:5
             },
            
             {
                name: "Joanne Cortez",
                email:"JoanneCortez@gmail.com",
                icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWRdl_2WcZhAn-Hk46O4oz9hDpi3tZi0EKw&usqp=CAU",
                id:6
             },
            
             {
                name:"Horne Lambert",
                email:"HorneLambert@gmail.com",
                icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWRdl_2WcZhAn-Hk46O4oz9hDpi3tZi0EKw&usqp=CAU",
                id:7
             },
            
             {
                name:"Shaffer Fry",
                email:"ShafferFry@gmail.com",
                icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWRdl_2WcZhAn-Hk46O4oz9hDpi3tZi0EKw&usqp=CAU",
                id:8
             },
            
             {
                name:"Josefina Raymond",
                email:"JosefinaRaymond@gmail.com",
                icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWRdl_2WcZhAn-Hk46O4oz9hDpi3tZi0EKw&usqp=CAU",
                id:9
             },
            
            
             {
                name:"Henson Olsen",
                email:"HensonOlsen@gmail.com",
                icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWRdl_2WcZhAn-Hk46O4oz9hDpi3tZi0EKw&usqp=CAU",
                id:10
             },
            
             {
                name:"Gayle Barry",
                email:"GayleBarry@gmail.com",
                icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWRdl_2WcZhAn-Hk46O4oz9hDpi3tZi0EKw&usqp=CAU",
                id:11
             }
        ]
    },
    reducers:{

        addUser:(state,action)=>{
          state.info.push(action.payload);
        },

        removeUser:(state,action)=>{
            const indexToRemove=state.info.findIndex(item=>item.id===action.payload)
            state.info.splice(indexToRemove,1);
        }
    }
})

export const{addUser , removeUser}=userSlice.actions;
export default userSlice.reducer;