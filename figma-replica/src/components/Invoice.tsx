import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import * as Yup from 'yup';
import { TbReceipt } from "react-icons/tb";

const Invoice = () => {
    const [expenseFields, setExpenseFields] = useState<number[]>([]);
    const validationSchema = Yup.object({
        purchaseOrderNumber: Yup.string().required('Required'),
        invoiceNumber: Yup.string().required('Required'),
        vendor: Yup.string().required('Required'),
        invoiceDate: Yup.date().required('Required'),
        totalAmount: Yup.number().required('Required'),
        paymentTerms: Yup.string().required('Required'),
        invoiceDueDate: Yup.date().required('Required'),
        glPostDate: Yup.date().required('Required'),
        invoiceDescription: Yup.string().required('Required'),
        lineAmount: Yup.number().required('Required'),
        department: Yup.string().required('Required'),
        account: Yup.string().required('Required'),
        location: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        expenses: Yup.array(
            Yup.object({
              description: Yup.string().required('Description is required'),
              amount: Yup.number().required('Amount is required').positive(),
            })
          ),
    });

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="flex items-center gap-4 text-2xl font-semibold leading-8 mb-6"><span><TbReceipt size={24}/></span>Invoice Details</h1>

            <Formik
                initialValues={{
                    purchaseOrderNumber: '',
                    invoiceNumber: '',
                    vendor: '',
                    invoiceDate: '',
                    totalAmount: '0.00',
                    paymentTerms: '',
                    invoiceDueDate: '',
                    glPostDate: '',
                    invoiceDescription: '',
                    lineAmount: '',
                    department: '',
                    account: '',
                    location: '',
                    description: '',
                    expenses: []
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log('Form values:', values);
                }}
            >
                <Form>
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold leading-7 mb-4">General Information</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="purchaseOrderNumber">
                                    Purchase Order Number *
                                </label>
                                <Field
                                    as="select"
                                    name="purchaseOrderNumber"
                                    id="purchaseOrderNumber"
                                    className="w-full border rounded p-2"
                                >
                                    <option value="">Select PO Number</option>
                                    <option value="">Select PO Number</option>
                                    <option value="">Select PO Number</option>
                                    <option value="">Select PO Number</option>

                                    {/* Add options dynamically */}
                                </Field>
                                <ErrorMessage name="purchaseOrderNumber" component="div" className="text-red-500 text-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Invoice Details */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Invoice Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="invoiceNumber">
                                    Invoice Number *
                                </label>
                                <Field name="invoiceNumber" className="w-full border rounded p-2" />
                                <ErrorMessage name="invoiceNumber" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="invoiceDate">
                                    Invoice Date *
                                </label>
                                <Field name="invoiceDate" type="date" className="w-full border rounded p-2" />
                                <ErrorMessage name="invoiceDate" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="totalAmount">
                                    Total Amount *
                                </label>
                                <div className='relative'>


                                    <span className="absolute inset-y-0 left-0 px-3 border rounded-tl rounded-bl flex items-center bg-[#e7eaee] text-gray-500">
                                        $
                                    </span>
                                    <Field name="totalAmount" type="number" className="w-full border rounded pl-12 pr-2 py-2" />
                                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                                        USD
                                    </span>
                                </div>
                                <ErrorMessage name="totalAmount" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="paymentTerms">
                                    Payment Terms *
                                </label>
                                <Field as="select" name="paymentTerms" className="w-full border rounded p-2">
                                    <option value="">Select Vendor</option>
                                    <option value="">Select Vendor</option>

                                    <option value="">Select Vendor</option>
                                    <option value="">Select Vendor</option>

                                    {/* Add options dynamically */}
                                </Field>
                                <ErrorMessage name="paymentTerms" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="invoiceDueDate">
                                    Invoice Due Date *
                                </label>
                                <Field name="invoiceDueDate" type="date" className="w-full border rounded p-2" />
                                <ErrorMessage name="invoiceDueDate" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="glPostDate">
                                    GL Post Date *
                                </label>
                                <Field name="glPostDate" type="date" className="w-full border rounded p-2" />
                                <ErrorMessage name="glPostDate" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Other Fields */}
                        </div>
                        <div className='w-full mt-4'>
                            <label className="block text-sm font-medium mb-1 w-full" htmlFor="invoiceDescription">
                                Invoice Description *
                            </label>
                            <Field name="invoiceDescription" type="text" className="w-full border rounded p-2" />
                            <ErrorMessage name="invoiceDescription" component="div" className="text-red-500 text-sm" />
                        </div>
                    </div>

                    {/* Expense Details */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Expense Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="lineAmount">
                                    Line Amount *
                                </label>
                                <Field name="lineAmount" className="w-full border rounded p-2" />
                                <ErrorMessage name="lineAmount" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="department">
                                    Department *
                                </label>
                                <Field as="select" name="department" className="w-full border rounded p-2">
                                    <option value="">Select Department</option>
                                    <option value="">Select Department</option>
                                    <option value="">Select Department</option>
                                    <option value="">Select Department</option>

                                    {/* Add options dynamically */}
                                </Field>
                                <ErrorMessage name="department" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="account">
                                    Account *
                                </label>
                                <Field as="select" name="account" className="w-full border rounded p-2">
                                    <option value="">Select Department</option>
                                    <option value="">Select Department</option>
                                    <option value="">Select Department</option>
                                    <option value="">Select Department</option>

                                    {/* Add options dynamically */}
                                </Field>
                                <ErrorMessage name="account" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="location">
                                    Location *
                                </label>
                                <Field as="select" name="location" className="w-full border rounded p-2">
                                    <option value="">Select Department</option>
                                    <option value="">Select Department</option>
                                    <option value="">Select Department</option>
                                    <option value="">Select Department</option>

                                    {/* Add options dynamically */}
                                </Field>
                                <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
                            </div>
                            {/* Other Fields */}
                        </div>
                        <div className='w-full mt-4'>
                            <label className="block text-sm font-medium mb-1 w-full" htmlFor="description">
                                Description *
                            </label>
                            <Field name="description" type="text" className="w-full border rounded p-2" />
                            <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div className='flex mt-4 justify-end cursor-pointer'>
                            <div className='flex border rounded-sm gap-2 px-4 py-2'
                            onClick={() => {
                                setExpenseFields([...expenseFields, expenseFields.length]);
                                // setFieldValue('expenses', [
                                //   ...values.expenses,
                                //   { description: '', amount: '' },
                                // ]);
                              }}>
                            <span className='flex items-center'> <BiPlus />
                            </span>Add Expense Coding
                            </div>
                        </div>
                        <div className='mt-4'>
                {expenseFields.map((_, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 gap-4 mb-4 border p-4 rounded"
                  >
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor={`expenses[${index}].description`}
                      >
                        Expense Description *
                      </label>
                      <Field
                        name={`expenses[${index}].description`}
                        className="w-full border rounded p-2"
                      />
                      <ErrorMessage
                        name={`expenses[${index}].description`}
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor={`expenses[${index}].amount`}
                      >
                        Amount *
                      </label>
                      <Field
                        name={`expenses[${index}].amount`}
                        className="w-full border rounded p-2"
                        type="number"
                      />
                      <ErrorMessage
                        name={`expenses[${index}].amount`}
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                ))}
                </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default Invoice;
