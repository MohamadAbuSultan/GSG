let tasks = [];
let nextId = 1;

function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        if (tasks.length > 0) {
            nextId = tasks[tasks.length - 1].id + 1;
        }
    }
    displayTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function displayTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        console.log("Current tasks:");
        tasks.forEach(task => {
            console.log(`[ID: ${task.id}] ${task.description} - Completed: ${task.completed}`);
        });
    }
}

function addTask(description) {
    const task = {
        id: nextId++,
        description: description,
        completed: false
    };
    tasks.push(task);
    saveTasks();
    console.log(`Task added: ${task.description} (ID: ${task.id})`);
}

function viewTasks() {
    displayTasks();
}

function toggleCompletion(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        console.log(`Task ID: ${task.id} marked as ${task.completed ? 'completed' : 'incomplete'}.`);
    } else {
        console.log(`Task with ID: ${id} not found.`);
    }
}

function removeTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        console.log(`Task removed: ${tasks[index].description} (ID: ${id})`);
        tasks.splice(index, 1);
        saveTasks();
    } else {
        console.log(`Task with ID: ${id} not found.`);
    }
}

function updateTask(id, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        console.log(`Task ID: ${task.id} updated from "${task.description}" to "${newDescription}"`);
        task.description = newDescription;
        saveTasks();
    } else {
        console.log(`Task with ID: ${id} not found.`);
    }
}

function searchTasks(keyword) {
    const results = tasks.filter(task => task.description.toLowerCase().includes(keyword.toLowerCase()));
    if (results.length > 0) {
        console.log("Search results:");
        results.forEach(task => {
            console.log(`[ID: ${task.id}] ${task.description} - Completed: ${task.completed}`);
        });
    } else {
        console.log(`No tasks found matching "${keyword}".`);
    }
}

function clearAllTasks() {
    tasks = [];
    nextId = 1;
    saveTasks();
    console.log("All tasks have been cleared.");
}

function main() {
    loadTasks();
    let running = true;

    while (running) {
        const choice = prompt(
            "Choose an option:\n1. Add Task\n2. View Tasks\n3. Toggle Task Completion\n4. Remove Task\n5. Update Task\n6. Search Tasks\n7. Clear All Tasks\n8. Exit",
            "1"
        );

        switch (choice) {
            case "1":
                const description = prompt("Enter task description:", "");
                if (description) addTask(description);
                break;

            case "2":
                viewTasks();
                break;

            case "3":
                const toggleId = parseInt(prompt("Enter task ID to toggle completion:", ""));
                toggleCompletion(toggleId);
                break;

            case "4":
                const removeId = parseInt(prompt("Enter task ID to remove:", ""));
                removeTask(removeId);
                break;

            case "5":
                const updateId = parseInt(prompt("Enter task ID to update:", ""));
                const newDescription = prompt("Enter new task description:", "");
                if (newDescription) updateTask(updateId, newDescription);
                break;

            case "6":
                const keyword = prompt("Enter keyword to search for tasks:", "");
                if (keyword) searchTasks(keyword);
                break;

            case "7":
                clearAllTasks();
                break;

            case "8":
                running = false;
                console.log("Exiting Task Manager.");
                break;

            default:
                console.log("Invalid option, please try again.");
                break;
        }
    }
}

main();
