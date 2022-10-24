import create from 'zustand';

const useProfileStore = create((set, get) => ({
   userProfile: null,

   setUserProfile: data =>
      set({
         userProfile: data,
      }),
}));

export default useProfileStore;
