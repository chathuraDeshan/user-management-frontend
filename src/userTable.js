import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

const UsersTable = ({rows, selectUser,deleteUser}) => {
    return(
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    rows.length > 0 ? rows.map(row =>(
                        <TableRow key={row.id}>
                            <TableCell component='th' scope="row">{row.id}</TableCell>
                            <TableCell component='th' scope="row">{row.name}</TableCell>
                            <TableCell>
                                <Button
                                    sx={{margin: '0px 10px'}}
                                    onClick={() => selectUser({id: row.id, name: row.nameS})}
                                >
                                    Update
                                </Button>

                                <Button
                                    sx={{margin: '0px 10px'}}
                                    onClick={() => deleteUser({id: row.id})}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                        
                    )) : (
                        <TableRow>
                            <TableCell component= 'th' scope="row">No Date</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </TableContainer>
    );
    
}

export default UsersTable;