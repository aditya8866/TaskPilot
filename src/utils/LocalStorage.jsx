const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Complete report",
        "taskDescription": "Finish the quarterly financial report.",
        "taskDate": "2024-01-10",
        "category": "Finance"
      },
      {
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false,
        "taskTitle": "Update database",
        "taskDescription": "Perform maintenance on the employee database.",
        "taskDate": "2023-12-20",
        "category": "IT"
      }
    ],
    "taskCount": {
      "active": 1,
      "completed": 1,
      "newTask": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Neha",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Prepare slides",
        "taskDescription": "Create presentation slides for the marketing meeting.",
        "taskDate": "2024-01-05",
        "category": "Marketing"
      },
      {
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false,
        "taskTitle": "Client meeting",
        "taskDescription": "Attend the client onboarding meeting.",
        "taskDate": "2023-12-18",
        "category": "Client Relations"
      },
      {
        "active": false,
        "completed": false,
        "newTask": false,
        "failed": true,
        "taskTitle": "Debug code",
        "taskDescription": "Fix bugs in the new software release.",
        "taskDate": "2023-12-15",
        "category": "IT"
      }
    ],
    "taskCount": {
      "active": 1,
      "completed": 1,
      "newTask": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Rohit",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Team briefing",
        "taskDescription": "Conduct a briefing for the new project.",
        "taskDate": "2024-01-08",
        "category": "Management"
      },
      {
        "active": true,
        "completed": false,
        "newTask": false,
        "failed": false,
        "taskTitle": "Review documents",
        "taskDescription": "Review and approve the project documentation.",
        "taskDate": "2023-12-22",
        "category": "Administration"
      }
    ],
    "taskCount": {
      "active": 2,
      "completed": 0,
      "newTask": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Priya",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Submit expense report",
        "taskDescription": "File an expense report for the last month.",
        "taskDate": "2024-01-02",
        "category": "Finance"
      },
      {
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false,
        "taskTitle": "Organize workshop",
        "taskDescription": "Plan and organize a workshop on new tools.",
        "taskDate": "2023-12-18",
        "category": "Training"
      }
    ],
    "taskCount": {
      "active": 1,
      "completed": 1,
      "newTask": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Sakshi",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Create blog post",
        "taskDescription": "Write a blog post about industry trends.",
        "taskDate": "2024-01-15",
        "category": "Marketing"
      },
      {
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false,
        "taskTitle": "Attend seminar",
        "taskDescription": "Participate in the annual tech seminar.",
        "taskDate": "2023-12-12",
        "category": "Education"
      },
      {
        "active": false,
        "completed": false,
        "newTask": false,
        "failed": true,
        "taskTitle": "Resolve ticket",
        "taskDescription": "Resolve a high-priority customer ticket.",
        "taskDate": "2023-12-25",
        "category": "Customer Support"
      }
    ],
    "taskCount": {
      "active": 1,
      "completed": 1,
      "newTask": 1,
      "failed": 1
    }
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "Admin Bhaiya",
    "email": "admin@1.com",
    "password": "123"
  }
];

  
export const setLocalStorage=()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))

}
export const getLocalStorage=()=>{
    const Empdata=JSON.parse(localStorage.getItem("employees"))
    const Admindata=JSON.parse(localStorage.getItem("admin"))
    // console.log({Empdata,Admindata})
    return {Empdata,Admindata}
}