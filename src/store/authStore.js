import {create} from "zustand";

const useAuthStore = create ((set) => ({


    user:null,

    isAuthenthicated:false,

    login: () => {
        set({
            user:null,
            isAuthenthicated:true
        });
    },

    logout: () => {
        set({
            user:null,
            isAuthenthicated:false,

        })
    }

}))
export default useAuthStore;