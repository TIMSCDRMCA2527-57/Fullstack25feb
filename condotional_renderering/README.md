# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify






















1️⃣ Demonstrate let, const, and var
Aim:

To understand the difference between var, let, and const in JavaScript.

Objective:

To demonstrate scope, reassignment, and redeclaration behavior of var, let, and const.

Program:
function variableDemo() {
    var a = 10;
    let b = 20;
    const c = 30;

    console.log("Initial values:", a, b, c);

    a = 15;   // allowed
    b = 25;   // allowed
    // c = 35; // Error: Assignment to constant variable

    console.log("After reassignment:", a, b, c);

    if (true) {
        var x = 100;   // function scoped
        let y = 200;   // block scoped
        const z = 300; // block scoped
    }

    console.log("var x:", x);
    // console.log("let y:", y); // Error
}
variableDemo();
2️⃣ Arrow Function
Aim:

To implement arrow functions in JavaScript.

Objective:

To understand concise syntax and lexical this.

Program:
const add = (a, b) => a + b;

console.log("Sum:", add(5, 3));
3️⃣ Template Literals
Aim:

To demonstrate template literals in JavaScript.

Objective:

To use string interpolation and multi-line strings.

Program:
const name = "John";
const age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);
4️⃣ Destructuring
Aim:

To demonstrate object, array, and function parameter destructuring.

Objective:

To extract values easily from objects and arrays.

Program:
Object:
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age);
Array:
const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log(first, second);
Function Parameter:
function display({ title, price }) {
    console.log(title, price);
}
display({ title: "Book", price: 500 });
5️⃣ Rest and Spread Operators
Aim:

To demonstrate rest and spread operators.

Objective:

To combine arrays and handle multiple arguments.

Program:
// Spread
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);

// Rest
function sum(...nums) {
    return nums.reduce((total, num) => total + num);
}
console.log(sum(1, 2, 3, 4));
React Programs
6️⃣ Props Example
Aim:

To demonstrate passing props in React.

Objective:

To pass and display data between components.

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return <Welcome name="React Student" />;
}

export default App;
7️⃣ Profile App (Avatar & Bio)
Aim:

To create reusable components.

Objective:

To implement component composition in React.

function Avatar() {
    return <img src="https://via.placeholder.com/100" alt="Profile" />;
}

function Bio() {
    return (
        <div>
            <h2>John Doe</h2>
            <p>Frontend Developer</p>
        </div>
    );
}

function Profile() {
    return (
        <div>
            <Avatar />
            <Bio />
        </div>
    );
}

export default Profile;
8️⃣ Button Click Addition
Aim:

To handle events in React.

Objective:

To perform addition using event handling.

import { useState } from "react";

function AddNumbers() {
    const [result, setResult] = useState(0);

    const handleClick = () => {
        setResult(5 + 3);
    };

    return (
        <div>
            <button onClick={handleClick}>Add</button>
            <h2>Result: {result}</h2>
        </div>
    );
}
export default AddNumbers;
9️⃣ Change Button Text
Aim:

To change state on button click.

Objective:

To dynamically update UI.

import { useState } from "react";

function ChangeText() {
    const [text, setText] = useState("Click Me");

    return (
        <button onClick={() => setText("Clicked!")}>
            {text}
        </button>
    );
}
export default ChangeText;
🔟 Add Item to Array
Aim:

To manage array state in React.

Objective:

To update list dynamically.

import { useState } from "react";

function ItemList() {
    const [items, setItems] = useState(["Item 1", "Item 2"]);

    const addItem = () => {
        setItems([...items, `Item ${items.length + 1}`]);
    };

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
export default ItemList;
1️⃣1️⃣ Toggle ON/OFF
Aim:

To use useState hook.

Objective:

To toggle between two states.

import { useState } from "react";

function Toggle() {
    const [status, setStatus] = useState("OFF");

    return (
        <div>
            <h2>{status}</h2>
            <button onClick={() => setStatus(status === "OFF" ? "ON" : "OFF")}>
                Toggle
            </button>
        </div>
    );
}
export default Toggle;
1️⃣2️⃣ Form with State
Aim:

To handle form input.

Objective:

To update and display user input dynamically.

import { useState } from "react";

function FormExample() {
    const [input, setInput] = useState("");

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <p>You typed: {input}</p>
        </div>
    );
}
export default FormExample;
1️⃣3️⃣ Key Press Counter
Aim:

To capture keyboard events.

Objective:

To count key presses using useState.

import { useState } from "react";

function KeyCounter() {
    const [count, setCount] = useState(0);

    return (
        <div
            tabIndex="0"
            onKeyDown={() => setCount(count + 1)}
            style={{ border: "1px solid black", padding: "20px" }}
        >
            <p>Key Press Count: {count}</p>
            <p>Click here and press keys</p>
        </div>
    );
}
export default KeyCounter;
1️⃣4️⃣ Counter with useEffect
Aim:

To demonstrate useEffect hook.

Objective:

To update derived state.

import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [double, setDouble] = useState(0);

    useEffect(() => {
        setDouble(count * 2);
    }, [count]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <h2>Double: {double}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
export default Counter;
1️⃣5️⃣ Context API Example
Aim:

To implement Context API.

Objective:

To share state between nested components.

import { createContext, useState, useContext } from "react";

const UserContext = createContext();

function Component1() {
    const [user] = useState("Alice");
    const [role] = useState("Admin");

    return (
        <UserContext.Provider value={{ user, role }}>
            <h2>Hello {user}</h2>
            <Component2 />
        </UserContext.Provider>
    );
}

function Component2() {
    const { user } = useContext(UserContext);
    return (
        <div>
            <p>User: {user}</p>
            <Component3 />
        </div>
    );
}

function Component3() {
    const { role } = useContext(UserContext);
    return <p>Role: {role}</p>;
}

export default Component1;
1️⃣6️⃣ Contact App using React Router
Aim:

To demonstrate routing in React.

Objective:

To navigate between pages using React Router.

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
    return <h2>Home Page</h2>;
}

function Contact() {
    return <h2>Contact Page</h2>;
}

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/contact">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}
export default App;
1️⃣7️⃣ Task Management App
Aim:

To build a basic task management application.

Objective:

To apply React fundamentals including state, events, and list rendering.

import { useState } from "react";

function TaskApp() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        setTasks([...tasks, task]);
        setTask("");
    };

    return (
        <div>
            <h2>Task Manager</h2>
            <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>{t}</li>
                ))}
            </ul>
        </div>
    );
}
export default TaskApp;
✅ Overall Aim of Assignment

To understand and implement modern JavaScript (ES6+) features and React fundamentals including components, props, state, hooks, context API, and routing.

✅ Overall Objective of Assignment

To gain hands-on experience with ES6+ syntax.

To build interactive React components.

To understand state management using hooks.

To implement routing and context API.

To develop real-world mini React applications.

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
