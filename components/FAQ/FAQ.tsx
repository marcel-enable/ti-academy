import React, {useEffect, useState} from 'react';
import Accordion from './Accordion';
import {getFaqContent} from '../../contentful';
import Entry from 'contentful';

export interface FAQInput {
    question: string;
    answer: string;
}
export interface FAQInputs {
    data: FAQInput[];
}

const data:FAQInput[] = [
    {
        question: 'What is a MicroCourse?',
        answer: 'MicroCourses are a single lesson content type that allow you to create engaging, hyper-relevant content for your learners. They are quicker to develop, but have all of the same robust features as a regular course.'
    },
    {
        question: 'How do you use smart widgets in layouts and pages?',
        answer: 'MicroCourses are a single lesson content type that allow you to create engaging, hyper-relevant content for your learners. They are quicker to develop, but have all of the same robust features as a regular course.'
    },
    {
        question: 'How can I create your own dashboard in Reporting Hub?',
        answer: 'MicroCourses are a single lesson content type that allow you to create engaging, hyper-relevant content for your learners. They are quicker to develop, but have all of the same robust features as a regular course.'
    },
    {
        question: 'What is a Panorama and how do I configure one?',
        answer: 'MicroCourses are a single lesson content type that allow you to create engaging, hyper-relevant content for your learners. They are quicker to develop, but have all of the same robust features as a regular course.'
    },
    {
        question: 'How many Panoramas can I create for my organization?',
        answer: 'MicroCourses are a single lesson content type that allow you to create engaging, hyper-relevant content for your learners. They are quicker to develop, but have all of the same robust features as a regular course.'
    },
    
]
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