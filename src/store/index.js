import { createStore } from "vuex";

const store = createStore({
   state() {
      return {
         memories: [
            {
               id: "m1",
               image:
                  "https://upload.wikimedia.org/wikipedia/commons/c/c5/Granite_Peak_Montana_2.jpg",
               title: "A trip into the mountains",
               description: "It was a really nice trip!",
            },
            {
               id: "m2",
               image:
                  "https://www.gearhartresort.com/wp-content/uploads/2019/06/image2.jpg",
               title: "Surfing the seaside",
               description: "Feeling the cool breeze~",
            },
            {
               id: "m3",
               image:
                  "https://www.bitemybun.com/wp-content/uploads/2020/06/Best-asian-food-to-try.jpeg",
               title: "Good eating",
               description: "Really tasty!",
            },
         ],
      };
   },
   getters: {
      memories(state) {
         return state.memories;
      },
      memory(state) {
         return (memoryId) => {
            return state.memories.find((memory) => memory.id === memoryId);
         };
      },
   },
   mutations: {
      addMemory(state, memoryData) {
         const newMemory = {
            id: new Date().toISOString(),
            title: memoryData.title,
            image: memoryData.image,
            description: memoryData.description,
         };

         state.memories.unshift(newMemory);
      },
   },
   actions: {
      addMemory(context, memoryData) {
         context.commit("addMemory", memoryData);
      },
   },
});

export default store;
