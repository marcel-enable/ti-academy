import React, {useState, useEffect} from 'react';
import Slider, {SliderItem} from './Slider';
import FeaturedContentBackground from '../../renderer/featuredContentBackground.svg';
import { gql, useQuery } from '@apollo/client';
import {getFeaturedContentImages} from '../../contentful';
import { useInView } from 'react-intersection-observer';

export interface ContentItem {
    title: string;
    ribbon: {label: string } | null;
    asset: string;
}


const FeaturedContent = () => {
    const { ref: featuredRef, inView: featuredVisible } = useInView();
    const [images, setImages] = useState<string[]>([]);
    // const query = gql`
    // query {
    //     CatalogContent(page: 1) {
    //       contentItems {
    //         title
    //         ribbon {
    //           label
    //         }
    //         asset
    //       }
    //     }
    //   }
    // `;

    // const { data } = useQuery(query);
    let data = {
        "CatalogContent": {
          "contentItems": [
            {
              "title": "Comprehensive Learning Path: Administrator",
              "ribbon": {
                "label": "Certificate Path"
              },
              "asset": ""
            },
            {
              "title": "Customer Education Certificate Program: Strategy",
              "ribbon": {
                "label": "Certificate Path"
              },
              "asset": ""
            },
            {
              "title": "Getting Started as a Content Author",
              "ribbon": {
                "label": "Certificate Path"
              },
              "asset": ""
            },
            {
              "title": "Getting Started as a Site Designer",
              "ribbon": {
                "label": "Certificate Path"
              },
              "asset": ""
            },
            {
              "title": " Office Hours: Integrations Series 1: Native Integrations (9/6/2022)",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": " Office Hours: Integrations Series: Native Integrations 2 (9/13/2022)",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": " Onboarding Training- Authoring",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": " Onboarding Training- Settings",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "2021 State of Customer Education Report",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "6 Principles to Building a Successful Customer Education Program",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Ad Page Type",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Adaptive Learning Paths",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Adaptive Learning Paths",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Admin View of a Custom Catalog Example",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Administrator Homepage Overview",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Administrator View and Setup of Panorama License Separation",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Administrator View of Landing Page Design",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Administrator View of Onboarding Survey",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Administrator View of Recommendation Assessments",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Advanced eCommerce Settings",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Alchemer (Survey Gizmo) and ILT/VILT Feature Updates",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Alchemer Configuration",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "An Overview of Bulk Creation of ILT and VILT Sessions",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Assessment Question Types",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Assessment Series: Reflections & Linked Reflections: August 31st, 2021",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Assessment Series: Surveys, Tally, and Alchemer: August 24th, 2021",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Assessments Reporting Explore",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Assignment Page Type",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Audio Page Type",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Automated Emails Overview",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Award Based Learning Paths",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Best Practices for Testing Content",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Best Practices in eCommerce for Articles, Courses, and Learning Paths",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Blueprinting & Storyboarding",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Bongo Completion Criteria",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Bulk Import Best Practices",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Bulk Purchases: Learner View and Setup",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "CSS and HTML Best Practices in Panorama",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "CSS: Introduction and Examples",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Catalog Design Best Practices",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Catalog Settings",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Central Asset Manager",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Certificate Setup Best Practices",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Certification and Transcript Fields",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Certify User API Endpoint",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Checkout Flow Enhancement",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Cognition 2020: The Customer Education Playbook",
              "ribbon": null,
              "asset": ""
            },
            {
              "title": "Collections: Introduction and Best Practices",
              "ribbon": null,
              "asset": ""
            }
          ]
        }
    }
    useEffect(() => {
        getFeaturedContentImages().then((response) => {
            setImages(response);
        });
    }, [])

    
   
    return (
        <section ref={featuredRef} className="featured-content h-[100vh] flex flex-col justify-center items-center relative gap-9 lg:gap-7 overflow-hidden snap-start">
            <h2 className="text-2xl font-secondary font-semibold text-primary text-center lg:text-4xl z-10">Featured Content</h2>
            {data?.CatalogContent?.contentItems && images.length > 0 &&
                <Slider>
                    {
                        data?.CatalogContent?.contentItems.map((item, idx) => {
                            const url = images[idx%images.length]
                            return <SliderItem imageUrl={`https:${url}`} data={item} index={idx} key={idx}/>
                        }
                        )
                    }
                </Slider>
            }
            <img src={FeaturedContentBackground} className={`${featuredVisible? 'lg:animate-slideDownSlow': ''} absolute bottom-0 z-0`}/>
        </section>
    )
}

export default FeaturedContent;