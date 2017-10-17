document.addEventListener('DOMContentLoaded', function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      tasks: [
              'Take out the papers',
              'Take out the trash',
              'Spend some spending cash'
              ],
      newTask: ""
    },
    mounted: function() {

    },
    methods: {
      addTask: function() {
        if (this.newTask) {
          this.tasks.push(this.newTask);
          this.newTask = "";
        }
      },
      completeTask: function(inputTask) {
        var index = this.tasks.indexOf(inputTask);
        this.tasks.splice(index,1);
      }
    },
    computed: {
      
    }
  });
});