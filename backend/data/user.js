import bcrypt from 'bcryptjs'
const users = [
    {
        name :"Admin User",
        email:"admin@example.com",
        password:bcrypt.hashSync('13508421533',10),
        isAdmin:true,
    },
    {
        name :"Chen",
        email:"chen@example.com",
        password:bcrypt.hashSync('13508421533',10),
    },
    {
        name :"liu",
        email:"liu@example.com",
        password:bcrypt.hashSync('13508421533',10),
    },
]
export default users