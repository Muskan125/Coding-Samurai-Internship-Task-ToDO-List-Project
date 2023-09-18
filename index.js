let pendingTasks=0;
function addtask(){
    let task = document.getElementById("input_task").value;
     if (task.trim()!=="")
     {
        let table = document.querySelector(".tasktable table");
        let newRow = table.insertRow(table.rows.length);

        let cell1 = newRow.insertCell(0); 
        let cell2 = newRow.insertCell(1); 
        let cell3 = newRow.insertCell(2); 
        let cell4 = newRow.insertCell(3); 

        cell1.innerHTML = table.rows.length - 1;
        cell2.innerHTML = task;
        cell3.innerHTML = "Pending";
        cell4.innerHTML = '<button onclick="completeTask(this)">Complete</button>';

        document.getElementById("input_task").value="";

        pendingTasks++;
        displaymsg();
     }
    }
    function  completeTask(button)
    {
        let row = button.closest("tr");
        let status = row.cells[2];
        status.innerHTML= "Completed";
        let btn = row.cells[3];
        btn.innerHTML = '<button onclick="deleteTask(this)">Delete</button>'

        pendingTasks--;
        displaymsg();
    }
    function deleteTask(button)
    {
        let row = button.closest("tr");
        row.remove();
        updateSerialNumbers();
        displaymsg();
    }

    function displaymsg()
    {
        let msg = document.querySelector(".displaymsg p");
        msg.innerHTML = "You have "+pendingTasks+" task pending";
    }
    function updateSerialNumbers() {
        let table = document.querySelector(".tasktable table");
        let rows = table.rows;
        
        // Start from 1 to skip the header row
        for (let i = 1; i < rows.length; i++) {
            rows[i].cells[0].innerHTML = i;
        }
    }
    
   
    
    
    
    
    