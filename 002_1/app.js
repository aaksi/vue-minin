const App = {
  data(){
    return {
      placeholderString: 'Введите название заметки',
      title: 'Список заметок',
      inputValue : '',
      notes: ['Заметка 1', 'Заметка 2']
    }
  },
  methods:{
   
    addNewNote(){
      if(this.inputValue !== ''){
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    doubleCount(){
      return this.notes.length * 2
    },
    toUpperCase(item){
      return item.toUpperCase()
    },
    removeNote(i, $event){
      this.notes.splice(i, 1)
    }

  },
  computed: {
    doubleCountComputed(){
      return this.notes.length * 2
    },
  },
  watch:{
    inputValue(value){
      if(value.length > 10){
        this.inputValue = ' '
      }
      console.log('input value changed', value)
    }
  }

}

const app = Vue.createApp(App)
app.mount('#app')


