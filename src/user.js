import { Box } from "@mui/material";
import UserForm from "./userForm";
import UsersTable from "./userTable";
import  Axios  from "axios";
import { useEffect, useState } from "react";


const Users = () => {

    const [users, setUsers] = useState([]);
    const [suumitted, setSubmitted] = useState(false);
    const [selectUser, setSelectUser] = useState({});
    const [isEddit, setIsEddit] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
            .then(response => {
                setUsers(response.data || []);
            })
            .catch(error => {
                console.error("Axios Error: ", error );
            })
    }

    const addUser = (data) =>{
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
        }

        Axios.post('http://localhost:3001/api/addUser', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                isEddit(false);
            })
            .catch(error => {
                console.error("Axios Error: ", error );
            })
    }

    const updateUser = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
        }

        Axios.put('http://localhost:3001/api/updateUser', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                isEddit(false);
            })
            .catch(error => {
                console.error("Axios Error: ", error );
            })


    }

    const deleteUser = (data) => {
        

        Axios.delete('http://localhost:3001/api/deletUser', data)
            .then(() => {
                getUsers();
                
            })
            .catch(error => {
                console.error("Axios Error: ", error );
            })
        

    }


    return(

        <Box
            sx={{
                width: 'calc(100% - 100px)',
                margin: 'auto',
                marginTop: '100px',
            }}
        >
            <UserForm 
                addUser = {addUser}
                updateUser={updateUser}
                suumitted={suumitted}
                data={selectUser}
                isEddit={isEddit}
            />
            <UsersTable 
                rows={users}
                selectUser = { data => {
                    setSelectUser(data);
                    setIsEddit(true);
                    }
                }
                deleteUser={data => window.confirm('Are your Sure?') && deleteUser(data)}
            />
        </Box>
        
    );
}

export default Users;