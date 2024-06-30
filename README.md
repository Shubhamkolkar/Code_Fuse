# CodeFuse - Online Collaborative Code Editor

Welcome to the collaborative code editor - CodeFuse ! This project allows multiple users to simultaneously collaborate, edit and run code in real-time with integrated compilaer within a web-based environment. It also shows stats such as CPU run time and Memory used by the code. 

## Features

- Real-time code editing: Changes made by one user are immediately visible to all other users in the same editing session.
- Syntax highlighting: Code is automatically formatted and color-coded to improve readability and comprehension.
- User management: The system handles user joining and leaving with editing sessions seamlessly.
- Persistent editor contents: User contributions are saved persistently, ensuring that no data is lost even after a page refresh.

  



## Technologies Used

- **Node.js**: Powers the backend server responsible for managing user connections and handling code synchronization.
- **Express.js**: Provides a robust framework for building web applications, facilitating routing and middleware functionality.
- **Socket.io**: Enables real-time bidirectional communication between clients and the server, essential for synchronizing code edits.
- **CodeMirror**: A versatile text editor library that supports syntax highlighting and other code editing features.
- **Tailwind**: The frontend components are developed using these standard web technologies - Tailwind, to create an intuitive user interface and enhance user experience.

## Setup Instructions

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Shubhamkolkar/Code_Fuse
    ```

2. Navigate to the project directory:

    ```bash
    cd TechTroppers
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    npm run dev
    ```

5. Open your web browser and navigate to `http://localhost:5173` to access the collaborative code editor.



## Note: Create the API key from: 
https://rapidapi.com/Glavier/api/online-code-compiler
and edit it in .env file under server


## Contributing

We welcome contributions from the community to enhance the functionality and features of our collaborative code editor. If you'd like to contribute, please follow these steps:

1. Fork the repository and create a new branch for your feature or bug fix:

    ```bash
    git checkout -b feature-name
    ```

2. Make your changes and ensure that the code adheres to our coding standards.

3. Commit your changes and push them to your fork:

    ```bash
    git commit -m "Description of changes"
    git push origin feature-name
    ```

4. Submit a pull request, detailing the changes made and the rationale behind them.

## Acknowledgments

We would like to express our gratitude to the creators and maintainers of the open-source libraries and technologies used in this project, without which this collaborative code editor would not have been possible. Thank you for your invaluable contributions to the developer community!
