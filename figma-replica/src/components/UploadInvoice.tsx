import React, { useState } from "react";

const UploadInvoice = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
            console.log("Selected file:", event.target.files[0]);
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            setFile(event.dataTransfer.files[0]);
            console.log("Dropped file:", event.dataTransfer.files[0]);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="w-full max-w-md mx-auto p-6 bg-white border-2 border-dashed border-gray-300 rounded-lg shadow-lg text-center"
        >
            <div className="flex flex-col items-center">
                <div className="mb-4 w-full h-full max-w-80 max-h-80">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/16b9/71b5/374d35591cf107df0cbf15334675279b?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aZ0GxvOg7Vo9o8b02toN3CiLhkFgTsHFYl1YGJWOVMtBtI7o4yOQoPzhAxQZePyaiQ9nXAV2PqpCmeyq-kAWGVReyXpQGporZjNDlSDCuIzkfS1PF32Ed5tKD5vhy~50Y2TJbTxDotClJf6M~HJdykzk4aGUosVvJKHP3oeQoldsfEbUbBoLsuVBIEkFFADgt60uAuc32eDCDIAplRlb0WbO30Nsj4ewE8MS6YJPzFdrPs7swvK~~5uj9ndcTV0BNtE0Oszsk0jrECMqi9EGAbtbKCb5e0QUXfsNZDXUXwXmNrQqb7L3IGZ9LBOaFzHGdvwV7UKVpuNPHhWo99ir6g__"
                        alt="Upload Icon"
                        className="mx-auto"
                    />
                </div>
                <h3 className="text-lg font-medium text-gray-800">Upload Your Invoice</h3>
                <p className="text-sm text-gray-500">
                    To auto-populate fields and save time
                </p>
                <div className="my-6">
                    <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    >
                        Upload File
                        <input
                            id="file-upload"
                            type="file"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                        />
                    </label>
                </div>
                <p className="text-sm text-blue-500">
                    Click to upload or Drag and drop
                </p>
                {file && (
                    <p className="mt-4 text-sm text-green-500">
                        Selected File: {file.name}
                    </p>
                )}
            </div>
        </div>
    );
};

export default UploadInvoice;
