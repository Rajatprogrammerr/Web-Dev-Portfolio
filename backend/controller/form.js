import Form from '../model/formModel.js';

export const formData = async (req, res) => {
    // Destructure the expected fields from the request body
    const { name, email, messages } = req.body;
    console.log('Received form data:', { name, email, messages });

    // Validate that all required fields are provided
    if (!name || !email || !messages) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    try {
        // If your model schema has a field called "message", map "messages" to it.
        // Otherwise, if your schema uses "messages", then pass it as is.
        const newForm = new Form({
            name,
            email,
            message: messages  // Change this to 'messages' if your schema expects that key.
        });
        await newForm.save();
        console.log('Created form:', newForm);
        res.status(201).json({ success: true, form: newForm });
    } catch (error) {
        console.error("Error in Create form:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
