const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');

//Function to add task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');

        li.textContent = taskText;

        //Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.backgroundColor = 'red';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        //Create edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.style.backgroundColor = 'green';
        editButton.style.color = 'white';

        //Edit button handler
        editButton.addEventListener('click', function(event) {
            event.stopPropagation();
            const input = document.createElement('input');
            input.value = li.firstChild.textContent;
            
            li.textContent = '';
            li.appendChild(input);

            //Create save button
            const saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            saveButton.style.color = 'black';
            saveButton.style.backgroundColor = 'rgba(0,0,0,0.1)';
            li.appendChild(saveButton);

            //Save changes
            saveButton.addEventListener('click', function() {
                li.textContent = input.value;
                li.appendChild(deleteButton);
                li.appendChild(editButton);
            });
        });

        //Appending edit and delete button
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        //Create a task
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

//Add button handler
addTaskButton.addEventListener('click', addTask);

//Enter button handler
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
