type Invoice = {
    currency: 'USD';
    items: LineItem[];
    discounts?: Discount[];
    taxRate: number; // percentage, e.g. 8.25 means 8.25%
};

type LineItem = {
    id: string;
    description: string;
    quantity: number;
    unitPrice: number; // in dollars
};

type Discount =
    | {
        type: 'percentage';
        value: number; // e.g. 10 means 10% off
    }
    | {
        type: 'fixed';
        value: number; // flat dollar amount
    };

type InvoiceTotals = {
    subtotal: number;
    discountTotal: number;
    taxableAmount: number;
    tax: number;
    total: number;
};

function applyDiscounts(discounts: Discount[], discountPriorities: Discount['type'][], subtotal: number): {
    discountedTotal: number,
    discountAmount: number,
} {
    const { discountedTotal } = discountPriorities.reduce<{ discountedTotal: number }>((acc, curr) => {
        const matchingDiscount = discounts.find((discount) => discount.type === curr);
        
        if (matchingDiscount) {
            if (matchingDiscount.type === 'percentage') {
                const discountValue = (subtotal / 100) * matchingDiscount.value
                acc.discountedTotal = acc.discountedTotal - discountValue;
            }
            
            if (matchingDiscount.type === 'fixed') {
                acc.discountedTotal = acc.discountedTotal - matchingDiscount.value;
            }
        }
        
        return acc;
    }, { discountedTotal: subtotal });
    
    return {
        discountedTotal,
        discountAmount: parseFloat((subtotal - discountedTotal).toFixed(2)),
    };
}

function applyTax(totalAfterDiscounts: number, taxRate: number): { tax: number, total: number } {
    const taxAmount = (totalAfterDiscounts / 100) * taxRate;
    const taxedTotal = totalAfterDiscounts + taxAmount;
    
    return {
        tax: parseFloat(taxAmount.toFixed(2)),
        total: parseFloat(taxedTotal.toFixed(2)),
    };
}

function calculateInvoiceTotals(invoice: Invoice): InvoiceTotals {
    const {
        currency,
        items,
        taxRate,
        discounts = [],
    } = invoice;
    
    const discountPriority: Discount['type'][] = ['percentage', 'fixed'];
    const { subtotal } = items.reduce<{ subtotal: number }>((acc, curr) => {
        const { quantity, unitPrice } = curr;
        
        const total = unitPrice * quantity;
        acc.subtotal = acc.subtotal + total;
        
        return acc;
    }, { subtotal: 0 })
    
    const { discountAmount, discountedTotal } = applyDiscounts(discounts, discountPriority, subtotal);
    const { tax, total } = applyTax(discountedTotal, taxRate)
    
    
    return {
        subtotal,
        discountTotal: discountAmount,
        taxableAmount: discountedTotal,
        tax,
        total,
    }
}

const invoice: Invoice = {
    currency: 'USD',
    taxRate: 8.25,
    items: [
        { id: 'a', description: 'Widget', quantity: 2, unitPrice: 25.0 },
        { id: 'b', description: 'Gadget', quantity: 1, unitPrice: 15.5 }
    ],
    discounts: [
        { type: 'percentage', value: 10 },
        { type: 'fixed', value: 5 }
    ]
};

const result = calculateInvoiceTotals(invoice);
console.log(result);