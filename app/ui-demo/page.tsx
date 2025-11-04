"use client";
import { useState } from "react";
import Card from "@/components/ui/Card";
import Alert from "@/components/ui/Alert";
import Modal from "@/components/ui/Modal";
import ToggleThemeButton from "@/components/buttons/ToggleThemeButton";

export default function DemoUI() {
    const [open, setOpen] = useState(false);

    return (
        <div className="space-y-4 p-6">
            <ToggleThemeButton />

            <Alert variant="success" message="Thành công!" />

            <Card title="Card Title">
                Nội dung trong card
            </Card>

            <button
                onClick={() => setOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Open Modal
            </button>

            <Modal open={open} onClose={() => setOpen(false)}>
                Đây là nội dung modal!
            </Modal>
        </div>
    );
}
