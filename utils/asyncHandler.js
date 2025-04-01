
export const asyncHandler = (fn) => {
    return async(req,res,next) => {
        try {
            await fn(req,res,next);
        } catch (error) {
            res.status(402).json({error:`${error.message}`})
        }
    }
}