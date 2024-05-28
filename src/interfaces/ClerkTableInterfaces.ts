export interface MainColumns {
    key: React.Key;
    WaitingToAnotherSystem: string;
    WaitingToCustomer: string;
    treatment: number;
    deviation: {
        total: number;
        upTo7: number;
        upTo21: number;
        over21: number;
    };
    taskName: React.ReactNode;
    tasks: ClaimByActivity[]; // Add this line

}

export interface ClaimByActivity {
    key: React.Key;
    taskName: string;
    customer: string;
    clerks: string;
    status: string;
    priority: string;
    openingDate: Date | string;
    closingDate: Date | string;
    treatmentDuration: string;

}
