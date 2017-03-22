<!DOCTYPE html>
<html>
    <head>
        <title>
            
        </title>
        <link rel="stylesheet" href="main.css">
        <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">
    </head>
    <body>
        <header>
            <h2>Checklist</h2>
        </header>
        <div>
             <p id="time"></p>
             <span id= "tasks">Incomplete task(s):  Complete tasks(s): </span>
        </div>
        <div class="contain">
                <button id="one" class="filter-all">All</button>
                <button id= "two" class="filter-complete">Complete</button>
                <button id= "three" class="filter-incomplete">Incomplete</button>
            </div>
        <section>
            <input type="text" placeholder="Add a To-Do">
            <ul class="todo">
            </ul>    
        </section>
        <script type="text/javascript" src="main.js"></script>
    </body>
</html>
