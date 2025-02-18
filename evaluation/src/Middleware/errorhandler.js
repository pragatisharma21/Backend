

export const errorHandler = (err, req, res, next)=>{
    console.error(err);

    let statusCode = err.statusCode || 500;

    let message = err.message || "Something went wrong";

    if(process.env.NODE_ENV === "development"){
        return res.status(statusCode).json({
            success: false,
            message,
            stack: err.stack
        });
    }

    return res.status(statusCode).json({
        success: false,
        message
    })
}