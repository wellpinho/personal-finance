'use client'

import { useEffect, useState } from "react";
import { ResumeItem } from "./resumeItem";

interface ITotals {
    up: number
    down: number
    total: number
    sxUp: string
    sxDown: string
}

export function Resume() {
    const [values, setValues] = useState<ITotals>({
        up: 1000,
        down: 999,
        total: 0,
        sxUp: '',
        sxDown: ''
    });

    useEffect(() => {
        setValues({
            up: values.up,
            down: values.down,
            total: values.up - values.down,
            sxUp: 'text-green-700',
            sxDown: 'text-red-400'
        });
    }, []);

    return (
        <div className="flex container mx-auto gap-5 mt-[-50px] justify-around">
            <ResumeItem title="Entradas" icon='up' textColor={values.sxUp} value={values.up} />
            <ResumeItem title="Saídas" icon='down' textColor={values.sxDown} value={values.down} />
            <ResumeItem title="Total" icon='' textColor={values.total > 0 ? values.sxUp : values.sxDown} value={values.total} />
        </div>
    );
}
