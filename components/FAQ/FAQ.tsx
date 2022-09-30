import React, {useEffect, useState} from 'react';
import Accordion from './Accordion';
import {getFaqContent} from '../../contentful';

export interface FAQInput {
    question: string;
    answer: string;
}
export interface FAQInputs {
    data: FAQInput[];
}

const FAQ = () => {

    const [data, setData] = useState<FAQInput[]>([]);

    useEffect(() => {
        getFaqContent().then(items => {
            setData(items)
        });
    }, [])

    return (
        <div className="h-[100vh] flex flex-col self-stretch items-center py-[120px] px-[40px] min-h-[1374px] gap-10 md:min-h-[1152px] md:gap-16 md:px-[64px] lg:min-h-[1120px] lg:px-[80px]  xl:min-h-[1096px] xl:gap-16 bg-surface-300 snap-start">
            <h2 className="text-2xl font-secondary font-semibold text-primary text-center lg:text-3xl xl:text-4xl">Frequently Asked Questions</h2>
            {data.length > 0 &&
                <Accordion data={data}/>
            }
            
        </div>
    )
}

export default FAQ;