import React from 'react';

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                "id": "1",
                "jobTitleName": "Developer",
                "firstName": "Ahmed",
                "lastName": "Ali",
                "preferredFullName": "Ahmed Ali",
                "employeeCode": "E1",
                "region": "CA",
                "phoneNumber": "408-1234567",
                "emailAddress": "ahmed.ali@gmail.com"
            }
        }
    }

    render() {
        return (
            Object.entries(this.state.user).map(([key, value]) => {
                return (
                    <ul>
                        <li>{key} : {value}</li>
                    </ul>
                )
            })
        )
    }
}

export default Profile;
