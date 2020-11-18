export interface IsaveBills{
    bill_id: number;
    client_name: string;
    rnc: string;
    description: string;
    quantity: number;
    article_id: number;
}

export interface IsaveBillsResponse{
    bill_id: number;
    client_name: string;
    rnc: string;
    date: number;
    description: string;
    quantity: number;
    article_id: number;
    sub_total: number;
    itbis: number;
    total: number;
}

export interface IdeleteBills{
    bill_id: number;
}