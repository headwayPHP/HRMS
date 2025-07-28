'use client';
import { useState } from 'react';

const ConfirmModal = ({
    title = "Are you sure?",
    description = "This action cannot be undone.",
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
    triggerText = "Open Modal",
    children,
    buttonClass = "text-white bg-red-600 hover:bg-red-700"
}) => {
    const [open, setOpen] = useState(false);

    const handleConfirm = () => {
        setOpen(false);
        onConfirm?.();
    };

    return (
        <>
            <button
                type="button" // <-- Prevents form submit
                onClick={() => setOpen(true)}
                className={buttonClass}
            >
                {triggerText}
            </button>

            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-5 bg">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
                        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                        <p className="mt-2 text-sm text-gray-600">{description}</p>

                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                onClick={() => setOpen(false)}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                            >
                                {cancelText}
                            </button>
                            <button
                                type="button" // <-- Also prevents form submit
                                onClick={handleConfirm}
                                className={`px-4 py-2 rounded ${buttonClass}`}
                            >
                                {confirmText}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ConfirmModal;
