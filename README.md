# CampusConnect
This project is our first stab at software engineering. We are to build a web portal for a school to manage assignments, view announcements, interact with a simple forum, etc.

### Initial Planning 
#### Tech
Front end - Learn React
DB - MySQL
Backend - Python with Django

#### Checklist
Core capabilities:
- Login, signup, logout
- 3 user types
  - Student
    - View announcements, posts, assignments, grades, deadlines
    - Submit assignments
    - Post/reply questions on forum
  - Teacher
    - View announcements, posts, assignments, grades, deadlines
    - Create assignments
    - Update grades, deadlines
    - Reply to questions on forum
  - Admin
    - Can post announcements
    - Moderate forum

Pages:
- Log/signup/logout
- Dashboard
  - Student/Teacher
    - Upcoming assingments
    - Recent announcements
    - Forum activity
  - Admin
    - Recent announcements
    - Forum activity
- Announcements Board
  - All annoucements chronologically
  - Date and time of posting
  - User who posted
- Forum
  - All questions chronologically
  - User who posted
  - Comments

Database:
- Authentication table
  - Username (PK)
  - Email
  - Password
  - Account type
  - Classroom ID (FK)
- Announcement table
  - User who posted
  - Date/time
  - Title
  - Content
- Forum table
  - Same as announcement
- Forum reply table
  - User
  - Content
  - Related post (FK)
- Classroom Table
  - Class ID
  - Teacher
  - Description
- Assignments Table
  - Assignment ID (PK)
  - Classroom ID (FK)
  - Title
  - Description
  - Deadline
- Submissions table
  - Assignment ID (FK)
  - Submission ID (PK)
  - Student ID (FK)
  - Content
  - Grade 
     
