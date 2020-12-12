import { createStore } from "vuex";

const store = createStore({
   state() {
      return {
         memories: [
            {
               id: "m1",
               image:
                  "https://lh3.googleusercontent.com/proxy/4Q6XB-SYkq_WnT_hYt6JDWr6-YPb06L1c-nNBnxa4d0H8wh5tQ0pQc2j0RKoba5EuxZYH23FEdzZzTnaJUGEHEdQnTQkm1hTnJBeEQpMAyg-R7h3UPvuaFCBVO8Q-vE_wm2JuuBr25gbJ9EdxjxEweobpNZWU2ATAw",
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
});

export default store;
