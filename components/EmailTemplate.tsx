import { Html, Body, Container, Text, Heading } from "@react-email/components";
import * as React from "react";

export interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export default function EmailTemplate({ name, email, message }: EmailTemplateProps) {
    return (
        <Html>
            <Body style={{ backgroundColor: "#f6f9fc", padding: "20px" }}>
                <Container style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}>
                    <Heading>Hello 👋</Heading>
                    <Text>You have a new contact message:</Text>
                    <Text><strong>Name:</strong> {name}</Text>
                    <Text><strong>Email:</strong> {email}</Text>
                    <Text><strong>Message:</strong></Text>
                    <Text>{message}</Text>
                </Container>
            </Body>
        </Html>
    );
}
