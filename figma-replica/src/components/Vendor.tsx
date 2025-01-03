import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { BiBuildings } from "react-icons/bi";
const Vendor: React.FC = () => {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const initialValues = {
        selectedVendor: "A - 1 Exterminators",
    };

    const handleSubmit = (values: { selectedVendor: string }) => {
        console.log("Selected Vendor:", values.selectedVendor);
    };

    const toggleDetails = () => {
        setIsDetailsVisible((prev) => !prev);
    };

    return (
        <div className="flex flex-col gap-8 w-full h-auto max-w-md bg-white p-6 rounded-md shadow-md">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span><BiBuildings /></span>
                </div>
                <h1 className="flex text-2xl font-semibold text-gray-800 leading-8">Vendor Details</h1>
            </div>

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue, values }) => (
                    <Form>
                        <div className="flex flex-col gap-8">
                            <h2 className="text-lg font-semibold text-gray-700">Vendor Information</h2>
                            <div className="flex flex-col gap-2">

                                <label htmlFor="vendor" className="block text-sm font-medium text-gray-700">
                                    Vendor <span className="text-red-500">*</span>
                                </label>

                                <Field
                                    as="select"
                                    id="vendor"
                                    name="selectedVendor"
                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFieldValue("selectedVendor", e.target.value)}
                                    value={values.selectedVendor}
                                >
                                    <option>A - 1 Exterminators</option>
                                    <option>B - 2 Services</option>
                                    <option>C - 3 Contractors</option>
                                </Field>

                                <ErrorMessage name="selectedVendor" component="div" className="text-red-500 text-sm mt-1" />

                                <p className="text-sm text-gray-600">550 Main St., Lynn</p>

                                <button
                                    type="button"
                                    onClick={toggleDetails}
                                    className="flex justify-center items-center text-blue-500 text-sm focus:outline-none hover:underline"
                                >
                                    {isDetailsVisible ? (
                                        <span>▲ Hide Vendor Details</span>
                                    ) : (
                                        <span>▼ View Vendor Details</span>
                                    )}
                                </button>
                            </div>
                            {isDetailsVisible && (
                                <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
                                    <p className="text-sm text-gray-600">
                                        Additional vendor details can be shown here.
                                    </p>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Vendor;
