import mailSend from "../helpers/mail.helper.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createContact = asyncHandler(
    async (req, res, next) => {
        const { name, email, message } = req.body;
        console.log("contact ", req.body);
        if (
            [name, email].some((field) => {
                return !field || field.trim() === "";
            })
        ) {
            return res.status(400).json(
                new ApiResponse(400, null, "Name and email are required!")
            );
        }

        try {
            const mailResult = await mailSend({ name, email: email, message });

            if (mailResult.success) {
                return res
                    .status(200)
                    .json(new ApiResponse(200, null, mailResult.message || "Contact form submitted successfully!"));
            } else {
                return res
                    .status(500)
                    .json(new ApiResponse(500, null, mailResult.message || "Failed to send email. Please try again later."));
            }
        } catch (error) {
            return res
                .status(500)
                .json(new ApiResponse(500, null, "Something went wrong while processing your request."));
        }
    }
);

export { createContact };