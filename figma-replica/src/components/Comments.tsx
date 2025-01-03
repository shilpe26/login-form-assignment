import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

interface CommentFormValues {
    comment: string;
}

const Comments = () => {
    const initialValues: CommentFormValues = {
        comment: "",
    };

    const validationSchema = Yup.object({
        comment: Yup.string()
            .required("Comment is required")
            .max(500, "Comment cannot exceed 500 characters"),
    });

    const handleSubmit = (
        values: CommentFormValues,
        { resetForm }: FormikHelpers<CommentFormValues>
    ) => {
        console.log("Form values submitted:", values);
        resetForm();
    };

    return (
        <div className="w-full max-w-md p-4 bg-white rounded-md shadow">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-4">
                            <label
                                htmlFor="comment"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Add a comment
                            </label>
                            <Field
                                as="textarea"
                                id="comment"
                                name="comment"
                                placeholder="Add a comment and use @Name to tag someone"
                                className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                            />
                            <ErrorMessage
                                name="comment"
                                component="div"
                                className="mt-1 text-sm text-red-500"
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="button"
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                            >
                                Save as Draft
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
                            >
                                Submit & New
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Comments;
