 $(document).ready(function(){
	// AddTask Event
	$('#add-task-form').on('submit', function(e){
		addTask(e);
	});

	// Edit Event
	$('#edit-task-form').on('submit', function(e){
		updateTask(e);
	});

	// Remove task event
	$('#table-id').on('click','#remove-task', function(){
		id = $(this).data('id');
		removeTask(id);
	});

	// Clear tasks event
	$('#clear-tasks').on('click', function(){
		clearAllTasks();
	});

	displayTasks();

	// Function to display tasks
	function displayTasks(){
		var taskList =  JSON.parse(localStorage.getItem('tasks'));

		// Sort Tasks
		if(taskList != null){
			taskList = taskList.sort(sortByTime);
		}

		// Set Counter
		var i = 0;
		// Check tasks
		if(localStorage.getItem('tasks') != null){
			// Loop through and display
			$.each(taskList, function(key, value){
				$('#table-id').append('<tr id="'+ value.id +'">' +
										'<td>' + value.task + '</td>' +
										'<td>' + value.task_priority +'</td>'+
										'<td>' + value.task_date + '</td>' +
										'<td>' + value.task_time + '</td>' +
										'<td><a href="edit.html?id='+ value.id +'">Edit</a> | <a href="#" id="remove-task" data-id="'+ value.id +'">Remove</a></td>' +
										'</tr>'
										);
					 
	
		 
			})
		
		}
	}

	// Function to sort tasks
	function sortByTime(a, b){
		var aTime = a.task_date;
		var bTime = b.task_date;
		return ((aTime < bTime) ? 1 : ((aTime > bTime) ? -1 : 0));
	}


	// Function to add a task
	function addTask(e){
		// Add Unique ID
		var newDate = new Date();
		id = newDate.getTime();

		var task = $('#task').val();
		var task_priority = $('#priority').val();
		var task_date = $('#date').val();
		var task_time = $('#time').val();

		// Simple Validation
		if(task == ''){
			alert('Task is required');
			e.preventDefault();
		} else if(task_date == '') {
			alert('Date is required');
			e.preventDefault();
		} else if(task_time == ''){
			alert('Time is required');
			e.preventDefault();
		} else if(task_priority == ''){
			task_priority = 'normal';
		} else {
			tasks = JSON.parse(localStorage.getItem('tasks'));

			//Check Tasks
			if(tasks == null){
				tasks = [];
			}

			var taskList = JSON.parse(localStorage.getItem('tasks'));

			// New Task Object
			var new_task = {
				"id": id,
				"task": task,
				"task_priority": task_priority,
				"task_date": task_date,
				"task_time": task_time
			}

			tasks.push(new_task);
			localStorage.setItem('tasks', JSON.stringify(tasks));

			console.log('Task Added');
		}
		 
	}


	// Function to update tasks
	function updateTask(e){
		var id = $('#task_id').val();
		var task = $('#task').val();
		var task_priority = $('#priority').val();
		var task_date = $('#date').val();
		var task_time = $('#time').val();

		taskList = JSON.parse(localStorage.getItem('tasks'));

		for(var i=0; i < taskList.length; i++){
			if(taskList[i].id == id){
				taskList.splice(i,1)
			}
			localStorage.setItem('tasks', JSON.stringify(taskList));
		}

		// Simple Validation
		if(task == ''){
			alert('Task is required');
			e.preventDefault();
		} else if(task_date == '') {
			alert('Date is required');
			e.preventDefault();
		} else if(task_time == ''){
			alert('Time is required');
			e.preventDefault();
		} else if(task_priority == ''){
			task_priority = 'normal';
		} else {
			tasks = JSON.parse(localStorage.getItem('tasks'));

			//Check Tasks
			if(tasks == null){
				tasks = [];
			}

			var taskList = JSON.parse(localStorage.getItem('tasks'));

			// New Task Object
			var new_task = {
				"id": id,
				"task": task,
				"task_priority": task_priority,
				"task_date": task_date,
				"task_time": task_time
			}

			tasks.push(new_task);
			localStorage.setItem('tasks', JSON.stringify(tasks));
		}
	}

	// Function to remove task
	function removeTask(id){
		if(confirm('Are you sure you want to delete this task?')){
			var taskList = JSON.parse(localStorage.getItem('tasks'));

			for(var i=0; i < taskList.length; i++){
			if(taskList[i].id == id){
				taskList.splice(i,1)
			}
			localStorage.setItem('tasks', JSON.stringify(taskList));
		}

		location.reload();

		}
	}

	// Function to clear all tasks
	function clearAllTasks(){
		if(confirm('Do you want to clear all tasks?')){
			localStorage.clear();
			location.reload();
		}
	}
	
	
	
// AddTask 2 Event
	$('#add2-event-form').on('submit', function(e){
		addTask2(e);
	});

	// Edit Event
	$('#edit2-event-form').on('submit', function(e){
		updateTask2(e);
	});

	// Remove task event
	$('#table-id2').on('click','#remove-task', function(){
		id2 = $(this).data('id2');
		removeTask2(id2);
	});

	// Clear tasks event
	$('#clear-tasks2').on('click', function(){
		clearAllTasks2();
	});

	displayTasks2();

	// Function to display tasks
	function displayTasks2(){
		var taskList2 =  JSON.parse(localStorage.getItem('tasks2'));

		// Sort Tasks
		if(taskList2 != null){
			taskList2 = taskList2.sort(sortByTime);
		}

		// Set Counter
		var i = 0;
		// Check tasks
		if(localStorage.getItem('tasks2') != null){
			// Loop through and display
			$.each(taskList2, function(key, value){
				$('#table-id2').append('<tr id2="'+ value.id2 +'">' +
										'<td>' + value.task2 + '</td>' +
										 
										'<td>' + value.task_date2 + '</td>' +
										'<td>' + value.task_time2 + '</td>' +
										'<td><a href="edit2.html?id2='+ value.id2 +'">Edit</a> | <a href="#" id="remove-task" data-id2="'+ value.id2 +'">Remove</a></td>' +
										'</tr>');
			})
		}
	}

	// Function to sort tasks
	function sortByTime(a, b){
		var aTime = a.task_date;
		var bTime = b.task_date;
		return ((aTime < bTime) ? 1 : ((aTime > bTime) ? -1 : 0));
	}


	// Function to add a task
	function addTask2(e){
		// Add Unique ID
		var newDate = new Date();
		id2 = newDate.getTime()+1;

		var task2 = $('#task2').val();
		 
		var task_date2 = $('#date2').val();
		var task_time2 = $('#time2').val();

		// Simple Validation
		if(task2 == ''){
			alert('Task is required');
			e.preventDefault();
		} else if(task_date2 == '') {
			alert('Date is required');
			e.preventDefault();
		} else if(task_time2 == ''){
			alert('Time is required');
			e.preventDefault();
		}  else {
			tasks2 = JSON.parse(localStorage.getItem('tasks2'));

			//Check Tasks
			if(tasks2 == null){
				tasks2 = [];
			}

			var taskList2 = JSON.parse(localStorage.getItem('tasks2'));

			// New Task Object
			var new_task2 = {
				"id2": id2,
				"task2": task2,
				"task_date2": task_date2,
				"task_time2": task_time2
			}

			tasks2.push(new_task2);
			localStorage.setItem('tasks2', JSON.stringify(tasks2));

			console.log('Task Added');
		}
	}


	// Function to update tasks
	function updateTask2(e){
		var id2 = $('#task_id2').val();
		var task2 = $('#task2').val();
		var task_date2 = $('#date2').val();
		var task_time2 = $('#time2').val();

		taskList2 = JSON.parse(localStorage.getItem('tasks2'));

		for(var i=0; i < taskList2.length; i++){
			if(taskList2[i].id2 == id2){
				taskList2.splice(i,1)
			}
			localStorage.setItem('tasks2', JSON.stringify(taskList2));
		}

		// Simple Validation
		if(task2 == ''){
			alert('Task is required');
			e.preventDefault();
		} else if(task_date2 == '') {
			alert('Date is required');
			e.preventDefault();
		} else if(task_time2 == ''){
			alert('Time is required');
			e.preventDefault();
		}  else {
			tasks2 = JSON.parse(localStorage.getItem('tasks2'));

			//Check Tasks
			if(tasks2 == null){
				tasks2 = [];
			}

			var taskList = JSON.parse(localStorage.getItem('tasks'));

			// New Task Object
			var new_task2 = {
				"id2": id2,
				"task2": task2,
				 
				"task_date2": task_date2,
				"task_time2": task_time2
			}

			tasks2.push(new_task2);
			localStorage.setItem('tasks2', JSON.stringify(tasks2));
		}
	}

	// Function to remove task
	function removeTask2(id2){
		if(confirm('Are you sure you want to delete this task?')){
			var taskList2 = JSON.parse(localStorage.getItem('tasks2'));

			for(var i=0; i < taskList2.length; i++){
			if(taskList2[i].id2 == id2){
				taskList2.splice(i,1)
			}
			localStorage.setItem('tasks2', JSON.stringify(taskList2));
		}

		location.reload();

		}
	}

	// Function to clear all tasks
	function clearAllTasks2(){
		if(confirm('Do you want to clear all tasks?')){
			localStorage.clear();
			location.reload();
		}
	}	
	
	
	
	
	 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function getimage(){
		var pr =$("#priority").val();
		if(pr=="high")
		{
		$('#img-id').attr("src","images/high.jpg");	
		}
		
		
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});


// Function for getting single task
function getTask(){
	var $_GET = getQueryParams(document.location.search);
	id = $_GET['id'];

	var taskList = JSON.parse(localStorage.getItem('tasks'));

	for(var i=0; i < taskList.length; i++){
		if(taskList[i].id == id){
			$('#edit-task-form #task_id').val(taskList[i].id);
			$('#edit-task-form #task').val(taskList[i].task);
			$('#edit-task-form #priority').val(taskList[i].task_priority);
			$('#edit-task-form #date').val(taskList[i].task_date);
			$('#edit-task-form #time').val(taskList[i].task_time);
		}
	}
}

// Function to Get HTTP GET Requests
function getQueryParams(qs) {
    qs = qs.split("+").join(" ");
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
    }

    return params;
	
}
	
	
// Function for getting single task
function getTask2(){
	var $_GET = getQueryParams2(document.location.search);
	id2= $_GET['id2'];

	var taskList2 = JSON.parse(localStorage.getItem('tasks2'));

	for(var i=0; i < taskList2.length; i++){
		if(taskList2[i].id2 == id2){
			$('#edit2-event-form #task_id2').val(taskList2[i].id2);
			$('#edit2-event-form #task2').val(taskList2[i].task2);
			$('#edit2-event-form #date2').val(taskList2[i].task_date2);
			$('#edit2-event-form #time2').val(taskList2[i].task_time2);
		}
	}
}

// Function to Get HTTP GET Requests
function getQueryParams2(qs) {
    qs = qs.split("+").join(" ");
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
    }

    return params;
}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
