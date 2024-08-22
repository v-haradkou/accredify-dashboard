export interface Document {
    id: number;
    status: string;
    document_name: string;
    issuer_name: string;
    issuer_logo_url: string;
    recipient_name: string;
    received_on: string;
    expire_at: string;
    created_at: string;
    updated_at: string;
    archived_at: string | null;
    deleted_at: string | null;
}
