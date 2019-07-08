$(function(){
    let newtodobox=$('#newtodo')
    let addtodobtn=$('#addtodo')
    let todolist=$('#todolist')
    addtodobtn.click(function(){
        let newtodo=newtodobox.val()
        console.log(newtodo)
    })
    })
    $.post(
        '/todos/',
        {task:newtodobox},
        function(data){
            for(todo of data){
                todolist.append("<li>"+todo.task+"</li>")
            }
        }
    )