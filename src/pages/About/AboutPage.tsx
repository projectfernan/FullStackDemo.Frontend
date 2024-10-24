const AboutPage = () => {
    return(
        <>
            <h5 className="mb-4 text-gray-800">About</h5>
            <div className="card mb-4">
                <div className="card-body">
                    <p>
                        Welcome to my full-stack code showcase! This project demonstrates my skills
                        in building end-to-end web applications, from front-end interfaces to
                        back-end services, using modern technologies. It is designed to highlight
                        my expertise in developing scalable, maintainable, and user-friendly
                        solutions, covering a wide range of functionality commonly required in web
                        applications.
                    </p>

                    <h4>Key Features</h4>
                    <ul>
                        <li>
                            <strong>Authentication and Authorization:</strong> This project includes
                            both JWT-based and basic authentication mechanisms to secure user sessions
                            and API endpoints.
                        </li>
                        <li>
                            <strong>CRUD Operations:</strong> Users can create, view, update, and
                            delete records, demonstrating full data management capabilities.
                        </li>
                        <li>
                            <strong>Form Validation and Submission:</strong> Utilizing react-hook-form
                            and Zod for form handling and validation, the forms in this project ensure
                            that all data entered is accurate before submission.
                        </li>
                        <li>
                            <strong>Pagination and Dynamic Table:</strong> Data is presented in a
                            paginated table with server-side pagination, making it easy to navigate
                            through large datasets.
                        </li>
                        <li>
                            <strong>Modular Components:</strong> The application is structured in a
                            way that allows for easy reuse of components across different sections of
                            the app.
                        </li>
                        <li>
                            <strong>Responsive Design:</strong> Built with Bootstrap and custom
                            styling to ensure the application is fully responsive across different
                            devices and screen sizes.
                        </li>
                    </ul>

                    <h4>Tech Stack</h4>
                    <div className="ml-4">
                        <h5>Front-End:</h5>
                        <ul>
                            <li>React (with hooks and TypeScript for type safety).</li>
                            <li>Bootstrap for styling.</li>
                            <li>Axios for handling HTTP requests.</li>
                        </ul>
                        <h5>Back-End:</h5>
                        <ul>
                            <li>ASP.NET Core for building RESTful APIs.</li>
                            <li>SQL Server for data management.</li>
                            <li>Dapper/Entity Framework for ORM and data handling.</li>
                        </ul>
                        <h5>Other Tools:</h5>
                        <ul>
                            <li>React Hook Form for form management.</li>
                            <li>Zod for form validation schema.</li>
                            <li>Log4net for logging events and errors.</li>
                            <li>Axios for HTTP requests (separate instances for bearer token and basic auth requests).</li>
                            <li>SQL Server Tool in Visual Studio for database management.</li>
                        </ul>

                        <h5>Architecture</h5>
                        <p>
                            This project follows a clean architecture, separating the concerns between
                            different layers of the application:
                        </p>
                        <ul>
                            <li>
                                <strong>Presentation Layer:</strong> React components, organized by
                                feature, handle the UI and user interactions.
                            </li>
                            <li>
                                <strong>Application Layer:</strong> This layer contains DTOs, form
                                validation logic, and service commands, managing business logic.
                            </li>
                            <li>
                                <strong>Data Layer:</strong> API services handle communication with the
                                back-end, while the back-end is responsible for managing data in the
                                database using a repository pattern.
                            </li>
                            <li>
                                <strong>Domain-Driven Design (DDD):</strong> The project is organized
                                using DDD principles, with a focus on maintaining a clear separation
                                between domain logic and infrastructure concerns.
                            </li>
                            <li>
                                <strong>Command Query Responsibility Segregation (CQRS): </strong> This architecture pattern is employed to separate read 
                                and write operations, enhancing scalability and performance by optimizing the handling of commands (updates) and queries (reads).
                            </li>
                        </ul>

                        <h5>Challenges and Solutions</h5>
                        <ul>
                            <li>
                                <strong>Pagination Management:</strong> Manually creating a paginated table using React's event handlers, 
                                along with useState and useEffect, provided a smoother user experience. This implementation effectively 
                                handled data display and navigation through the data set, allowing users to easily access and interact with content.
                            </li>
                            <li>
                                <strong>Component-Based Architecture: </strong> The application is structured using reusable components, 
                                promoting code reusability and maintainability. Each feature, such as forms, tables, buttons, and modals, 
                                is encapsulated within its own component.
                            </li>
                            <li>
                                <strong>Context for State Management: </strong> By implementing React Context, the application effectively evades prop drilling, 
                                allowing for easier state management across deeply nested components. This approach enhances code readability and maintainability 
                                by reducing the need to pass props through multiple layers of components.
                            </li>
                            <li>
                                <strong>Effect Management with useEffect</strong> This hook allowed for side effects management, such as data fetching and 
                                updates based on component lifecycle events, ensuring that the data displayed in the table remained synchronized with user interactions.
                            </li>
                            <li>
                                <strong>Form Validation:</strong> Using Zod allowed me to create a robust
                                validation schema that ensured data integrity, especially for fields that
                                are required across multiple steps of the form submission.
                            </li>
                            <li>
                                <strong>Authentication:</strong> Implementing both JWT and basic
                                authentication required careful separation of Axios instances for
                                different parts of the application. This ensured that each part of the app
                                could authenticate properly without mixing up credentials.
                            </li>
                        </ul>

                        <h5>Future Enhancements</h5>
                        <ul>
                            <li>
                                <strong>User Authentication with Login and Cookie Sessions: </strong> In the future, I plan to integrate a login system that utilizes 
                                cookie sessions for managing user authentication. This will enhance security and provide a more seamless user experience by 
                                maintaining session state across different parts of the application.
                            </li>
                            <li>
                                <strong>Role-Based Access Control:</strong> I would like to implement
                                role-based access, allowing users with different roles to have access to
                                different sections of the application.
                            </li>
                        </ul>

                        <h5>My Development Experience</h5>
                        <p>
                            This project is a culmination of my 12+ years of experience as a full-stack
                            developer, showcasing the best practices I’ve learned over the years. From
                            the front-end to the back-end, I have focused on creating a robust, scalable
                            solution that reflects my expertise in modern web development.
                        </p>
                        <p>
                            Through this project, I’ve utilized a wide range of tools and technologies
                            that I have grown proficient in, including React, ASP.NET, TypeScript, and
                            SQL Server. Each feature in this application represents a real-world
                            solution I have built for clients, and I am excited to share my work with
                            you.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage