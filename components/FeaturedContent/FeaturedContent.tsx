import React from 'react';
import Slider, {SliderItem} from './Slider';
import FeaturedContentBackground from '../../renderer/featuredContentBackground.svg';
import { gql, useQuery } from '@apollo/client';
import { useInView } from 'react-intersection-observer';

export interface ContentItem {
    title: string;
    ribbon: {label: string } | null;
    asset: string;
}

const FeaturedContent = () => {
    const { ref: featuredRef, inView: featuredVisible } = useInView();
    const query = gql`
    query {
        CatalogContent(page: 1) {
          contentItems {
            title
            ribbon {
              label
            }
            asset
          }
        }
      }
    `;

    // const { data } = useQuery(query);
    const data = {
        "CatalogContent": {
          "contentItems": [
            {
              "title": "Comprehensive Learning Path: Administrator",
              "ribbon": {
                "label": "Certificate Path"
              },
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/e0ijatonjwuy-Detail-Image_Administrator.jpg"
            },
            {
              "title": "Customer Education Certificate Program: Strategy",
              "ribbon": {
                "label": "Certificate Path"
              },
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/q_100,a_exif,c_crop,x_0,y_112,w_1920,h_924/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/n7stsjb87mgi-CECPPhaseOne.png"
            },
            {
              "title": "Getting Started as a Content Author",
              "ribbon": {
                "label": "Certificate Path"
              },
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/qvn3l6hjda68-Catalog_800x385-Getting-Started-as-a-Content-Author.jpg"
            },
            {
              "title": "Getting Started as a Site Designer",
              "ribbon": {
                "label": "Certificate Path"
              },
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/02s0t8o455dd-Catalog_800x385-Getting-Started-as-a-Site-Designer.jpg"
            },
            {
              "title": " Office Hours: Integrations Series 1: Native Integrations (9/6/2022)",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/k2r4k4tg7ssh-2022-09-06_15-18-46.png"
            },
            {
              "title": " Office Hours: Integrations Series: Native Integrations 2 (9/13/2022)",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/k2r4k4tg7ssh-2022-09-06_15-18-46.png"
            },
            {
              "title": " Onboarding Training- Authoring",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/gitbyzr9enwp-800x385-Course-Authoring.jpg"
            },
            {
              "title": " Onboarding Training- Settings",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/y8gyi6z8zyxa-Settings.jpg"
            },
            {
              "title": "2021 State of Customer Education Report",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/6f75iuht9ebs-StateofCustomerEd_CatalogImage.png"
            },
            {
              "title": "6 Principles to Building a Successful Customer Education Program",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/bon67fhgi9ve-6PrinciplestoBuildingaSuccessfulCustomerEducationProgram.png"
            },
            {
              "title": "Ad Page Type",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/960hfx0121y8-AdPageType.png"
            },
            {
              "title": "Adaptive Learning Paths",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/9zy6vb51qp01-AdaptiveLearningPaths.png"
            },
            {
              "title": "Adaptive Learning Paths",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/jf0399bfql74-FeatureSpotlightALPThumbnail.png"
            },
            {
              "title": "Admin View of a Custom Catalog Example",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/6v9aq7224hgr-AdminViewofaCustomCatalogExample.png"
            },
            {
              "title": "Administrator Homepage Overview",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/d2ohmmdfyjb4-AdministratorHomepageOverview.png"
            },
            {
              "title": "Administrator View and Setup of Panorama License Separation",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/oogkzeltdq7p-AdministratorViewandSetupofPanoramaLicenseSeparation.png"
            },
            {
              "title": "Administrator View of Landing Page Design",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/7r89j9mm8v4q-AdministratorViewofLandingPageDesign.png"
            },
            {
              "title": "Administrator View of Onboarding Survey",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/mv40gkcwj8dj-AdministratorViewofOnboardingSurvey.png"
            },
            {
              "title": "Administrator View of Recommendation Assessments",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/7492aae5n5ob-AdministratorViewofRecommendationAssessments.png"
            },
            {
              "title": "Advanced eCommerce Settings",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/6z74j1sv91xb-AdvancedeCommerceSettings.png"
            },
            {
              "title": "Alchemer (Survey Gizmo) and ILT/VILT Feature Updates",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/06p1pq6d2o1t-AlchemerSurveyGizmoandILTVILTFeatureUpdates.png"
            },
            {
              "title": "Alchemer Configuration",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/vpxv0gt2load-AlchemerConfiguration.png"
            },
            {
              "title": "An Overview of Bulk Creation of ILT and VILT Sessions",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/isjp4caap9u8-AnOverviewofBulkCreationofILTandVILTSessions.png"
            },
            {
              "title": "Assessment Question Types",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/ysfu23noc86r-AssessmentQuestionTypes.png"
            },
            {
              "title": "Assessment Series: Reflections & Linked Reflections: August 31st, 2021",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/ajpn9vtv6ja5-2020-OfficeHours-Banner-KC.png"
            },
            {
              "title": "Assessment Series: Surveys, Tally, and Alchemer: August 24th, 2021",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/ajpn9vtv6ja5-2020-OfficeHours-Banner-KC.png"
            },
            {
              "title": "Assessments Reporting Explore",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/ofbb35d2r05f-AssessmentsReportingExplore.png"
            },
            {
              "title": "Assignment Page Type",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/7i4fmgmdj2wy-AssignmentPageType.png"
            },
            {
              "title": "Audio Page Type",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/o4zgha97tc8t-AudioPageType.png"
            },
            {
              "title": "Automated Emails Overview",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/qtc8w8jf9rhu-AutomatedEmailsOverview.png"
            },
            {
              "title": "Award Based Learning Paths",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/8i8k4bdlmq2b-AwardBasedLearningPaths.png"
            },
            {
              "title": "Best Practices for Testing Content",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/5h17o438gxkl-BestPracticesforTestingContent.png"
            },
            {
              "title": "Best Practices in eCommerce for Articles, Courses, and Learning Paths",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/esavuutcx52w-BestPracticesineCommerceforArticlesCoursesandLearningPaths.png"
            },
            {
              "title": "Blueprinting & Storyboarding",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/bgt4clexdbvo-BlueprintingandStoryboarding.png"
            },
            {
              "title": "Bongo Completion Criteria",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/9bbuq7mqsux7-BongoCompletionCriteria.png"
            },
            {
              "title": "Bulk Import Best Practices",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/kzr1ebd0s2jr-BulkImportBestPractices.png"
            },
            {
              "title": "Bulk Purchases: Learner View and Setup",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/4okmlqd6skek-BulkPurchases_LearnerViewandSetup.png"
            },
            {
              "title": "CSS and HTML Best Practices in Panorama",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/f1r4mezg7x2b-CSSandHTMLBestPracticesinPanorama.png"
            },
            {
              "title": "CSS: Introduction and Examples",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/9yjj0w4fh1h0-CSSIntroductionandExamples.png"
            },
            {
              "title": "Catalog Design Best Practices",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/10x51jxtxxzr-CatalogDesignBestPractices.png"
            },
            {
              "title": "Catalog Settings",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/lvyaj9hlsuaw-CatalogSettings.png"
            },
            {
              "title": "Central Asset Manager",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/lhyk1yq4mhl7-FeatureSpotlightCAMThumbnail.png"
            },
            {
              "title": "Certificate Setup Best Practices",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/0xa7xi1b8v35-CertificateSetupBestPractices.png"
            },
            {
              "title": "Certification and Transcript Fields",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/0v45qhxwidhm-CertificationandTranscriptFields.png"
            },
            {
              "title": "Certify User API Endpoint",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/ajzhh6xowk45-CertifyUserAPIEndpoint.png"
            },
            {
              "title": "Checkout Flow Enhancement",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/uuza4u76py45-ScreenShot2021-10-08at11.17.35AM.png"
            },
            {
              "title": "Cognition 2020: The Customer Education Playbook",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/une2hwsmbro2-TheCustomerEducationPlaybook_CognitionPresentation.png"
            },
            {
              "title": "Collections: Introduction and Best Practices",
              "ribbon": null,
              "asset": "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1/course-uploads/a6befdf5-930e-4572-b7ce-008caa9a78ba/9qoqswutboiu-CollectionsIntroandBestPractices.png"
            }
          ]
        }
    }
    
    return (
        <section ref={featuredRef} className="featured-content h-[100vh] flex flex-col justify-center items-center relative gap-9 lg:gap-7 overflow-hidden snap-start">
            <h2 className="text-2xl font-secondary font-semibold text-primary text-center lg:text-4xl z-10">Featured Content</h2>
            {data?.CatalogContent?.contentItems &&
                <Slider>
                    {
                        data?.CatalogContent?.contentItems.map((item, idx) => 
                            <SliderItem data={item} index={idx} key={idx}/>
                        )
                    }
                </Slider>
            }
            <img src={FeaturedContentBackground} className={`${featuredVisible? 'lg:animate-slideDownSlow': ''} absolute bottom-0 z-0`}/>
        </section>
    )
}

export default FeaturedContent;