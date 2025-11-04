interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                {children}
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
