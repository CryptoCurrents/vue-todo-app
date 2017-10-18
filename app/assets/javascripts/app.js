document.addEventListener('DOMContentLoaded', function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      tasks: [
              {
                text: 'Take out the papers',
                priority: "9",
                completed: false
              },
              {
                text: 'Take out the trash',
                priority: "2",
                completed: false
              },
              {
                text: 'Spend some spending cash',
                priority: "10",
                completed: false
              }
              ],
      newTaskText: "",
      newTaskPriority: ""
    },
    mounted: function() {

    },
    methods: {
      addTask: function() {
        if (this.newTaskText && this.newTaskPriority) {
          var newTask = {
                          text: this.newTaskText,
                          priority: this.newTaskPriority,
                          completed: false
                        };
          this.tasks.push(newTask);
          this.newTaskText = "";
          this.newTaskPriority = "";
        }
      },
      completeTask: function(inputTask) {
        inputTask.completed = !inputTask.completed;
      },
      numberOfIncompleteTasks: function() {
        let count = 0;
        for(let task of this.tasks) {
          if (!task.completed) {
            count++;
          }
        }
        return count;
      },
      removeCompletedTasks: function() {
        let incompleteTasks = [];
        for(let task of this.tasks) {
          if (!task.completed) {
            incompleteTasks.push(task);
          }
        }
        this.tasks = incompleteTasks;
      }
    },
    computed: {
      
    }
  });
});


