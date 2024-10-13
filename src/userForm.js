import { Button, Grid2, Input, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const UserForm = ({addUser,updateUser,suumitted,data,isEddit}) => {

    const[id, setId] = useState(0);
    const[name, setName] = useState('');

    useEffect(() => {
        if(!suumitted){
            setId(0);
            setName('');
        }
    },[suumitted]);

    useEffect(() =>{
        if (data?.id && data.id !== 0){
            setId(data.id);
            setName(data.name);
        }
        }, [data]);

    return(
        <Grid2
            container
            spacing={2}
            sx={{
                backgroundColor: 'white',
                marginBottom : '30px',
                display : 'block',
            }}
        >
            <Grid2 item xs={12}>
                <Typography component={'h1'} sx={{ color: 'black'}}>User Form</Typography>
            </Grid2>

            <Grid2 item xs={12} sm={6} sx={{display: 'flex'}}>
                <Typography 
                    component={'label'} 
                    htmlFor="id"
                    sx={{
                        color: 'black',
                        marginRight : '20px',
                        fontSize : '16px',
                        width : '100px',
                        display : 'block',
                    }}
                >
                    ID
                </Typography>
                <Input
                    type="number"
                    id="id"
                    name="id"
                    sx={{
                        width : '400px'
                    }}
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
            </Grid2>

            <Grid2 item xs={12} sm={6} sx={{display: 'flex'}}>
                <Typography 
                    component={'label'} 
                    htmlFor="id"
                    sx={{
                        color: 'black',
                        marginRight : '20px',
                        fontSize : '16px',
                        width : '100px',
                        display : 'block',
                    }}
                >
                    Name
                </Typography>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    sx={{
                        width : '400px'
                    }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid2>

            <Button
                sx={{
                    margin : 'auto',
                    marginBottom : '20px',
                    backgroundColor: 'Blue',
                    color: 'black',
                    marginLeft : '15px',
                    marginTop : '20px',
                    '&:hover' : {
                        opacity : '0.7',
                        backgroundColor : 'Blue'
                    }
                }}

                onClick={() => isEddit? updateUser({id,name}) : addUser({id,name})}
            >
                {
                    isEddit ? 'Update' : 'Add'
                }
            </Button>

        </Grid2>
    );
}

export default UserForm;