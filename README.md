Objective:
Your task is to develop a Task Tracker App using ReactJS. This app will allow users to add tasks, delete tasks, and mark tasks as completed. The interface should be intuitive, interactive, and responsive.

### starting the server

run npm install
run npm start

to start the server

### features

Add Task: Users should be able to enter a task name and add it to the task list.
Delete Task: Users should be able to remove tasks from the list by clicking a delete button.
Mark as Completed: Users should be able to mark a task as completed by clicking on it. Completed tasks should have a strike-through effect.
Live Task Updates: The task list should update in real time as users add or remove tasks.
State Management: Tasks should be stored in React’s local state (using useState hook).
UI Feedback: When a user interacts with the app, the UI should provide visual feedback (e.g., strike-through for completed tasks).


### Tech Stack:
ReactJS → For building the UI and handling state.
CSS → For styling and responsiveness.
React Hooks → useState for managing the task list.

### Development Guidelines:
Project Structure:


Follow the proper React folder structure (components folder for reusable components).
Keep the code modular and well-commented for clarity.
Functional Components:


Use React functional components instead of class-based components.
Manage the task state using the useState hook.
Handling User Inputs:


Use controlled components for input fields.
Handle form submission correctly to prevent page refresh.
Task List Rendering:


Use .map() function to render the task list dynamically.
Event Handling:


Implement click handlers for adding, deleting, and marking tasks as completed.


Additional Features:
🌟 Local Storage: Save tasks in the browser so they persist after page refresh.
🌟 Animations: Add fade-in effects when tasks are added/removed for a better user experience.
🌟 Dark Mode Toggle: Allow users to switch between light and dark modes.