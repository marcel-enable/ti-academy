import React,  {useState } from 'react';
import { FAQInputs } from './FAQ';

const Accordion = ({data}:FAQInputs) => {
    const [selected, setSelected]  = useState<number | null>(null);

    const toggle = (i: number) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    }

    return (
        <div className="flex flex-col items-start gap-8 ">
            {
                data.length && data.map((item, idx) => 
                    <div key={idx} className={`item w-full flex flex-col justify-center items-center pt-8 px-8 gap-8 bg-light-constant shadow-sm rounded-[32px] ${selected === idx ? 'border-[3px] border-brand-accent' : ''}`} >
                        <div className="title w-full flex items-center justify-between gap-2 md:gap-8 cursor-pointer" onClick={() => toggle(idx)}>
                            <div className="question text-lg font-bold font-primary text-text-color-primary md:text-xl lg:font-secondary lg:font-semibold lg:text-2xl ">{item.question}</div>

                            <button className={`transition-all ${selected === idx ? 'rotate-180': 'rotate-0'} caret-up flex items-center p-3 bg-light-constant rounded-full shadow-md text-brand-accent`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 15L12 7.5L19.5 15" stroke="#EA2B7B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin ="round"/>
                                </svg>
                            </button>
                        </div>
                        <div className={`content overflow-hidden max-h-0 transition-all ease-in-out duration-700 text-xl font-normal font-primary text-text-color-primary ${selected === idx ? 'h-auto max-h-[500px] pb-6 transition-all ease-in-out duration-700':''}`}>{item.answer}</div>
                    </div>
                )
            }
                
        </div>
        
    )
}

export default Accordion;