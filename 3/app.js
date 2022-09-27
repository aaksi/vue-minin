Vue.createApp({
  // data(){
  //   return{

  //   }
  // }

  data: () =>({
    myHtml: '<h1>Vue 3 App</h1>',
    title: 'Hello world!',
    person: {
      firstName: "Stas",
      lastName: "Ivanov",
      age: 25
    },
    items: [1,2,3]
  }),
  methods:{
    stopPropagation(event){
      event.stopPropagation()
    },
    addItem(){
      this.items.unshift(this.$refs.myInput.value)
    }
  },
  computed:{
    evenItems(){
      return this.items.filter(i=> i % 2 === 0)
    }
  }

}).mount('#app')
