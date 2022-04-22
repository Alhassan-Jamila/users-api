const yup = require("yup")

function validate(data){
    const userSchema=yup.object().shape({
        username:yup.string().required("please fill").min(2).max(50),
        email:yup.string().required("").min(8).max(30),
        password:yup.string().required().min(8).max(100)
    })
    return userSchema.validate(data);
}
module.exports= validate;