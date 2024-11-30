import React from "react";
import Whatsapp from "../../Components/Whatsapp";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import ScrollToTop from "../../Components/ScrollToTop";
import { Container } from "@radix-ui/themes";

function JuniorCyberSecurityAwarenessAssistant() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Whatsapp />
      <Container>
        <div className="pl-5 md:pl-0 pr-5 md:pr-0">
          <div className="pt-10 hidden md:grid grid-cols-4">
            <div className="col-span-1">
              <h1 className="font-semibold">Job Vacancy</h1>
              <h1 className="font-semibold">Position</h1>
              <h1 className="font-semibold">Employment Type</h1>
              <h1 className="font-semibold">Location</h1>
            </div>
            <div className="col-span-2">
              <p className="col-span-2">
                Junior Cyber Security Awareness Assistant (Casual) – Age (11-17)
              </p>

              <p className="col-span-2">Junior Cyber Security Assistant</p>

              <p className="col-span-2">Casual</p>

              <p className="col-span-2">
                NSW Central West Muslim Association (NSWCWMA), Dubbo, NSW 2830
              </p>
            </div>
            <div className="flex justify-end items-start">
              <a
                role="button"
                className="btn-sm flex justify-center items-center uppercase outline outline-1 md:px-10 hover:text-red-500 hover:outline-red-500 hover:bg-white text-gray-400 text-sm font-semibold bg-white rounded-none border-none"
                href="/Careers/JobApplication"
              >
                apply
              </a>
            </div>
          </div>
          <div className="md:hidden flex flex-col pt-5 gap-5">
            <div className="flex justify-end items-start">
              <a
                role="button"
                className="btn-sm flex justify-center items-center uppercase outline outline-1 md:px-10 hover:text-red-500 hover:outline-red-500 hover:bg-white text-gray-400 text-sm font-semibold bg-white rounded-none border-none"
                href="/Careers/JobApplication"
              >
                apply
              </a>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold">Job Vacancy</h1>
              <p className="col-span-2">
                Junior Cyber Security Awareness Assistant (Casual) – Age (11-17)
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold">Position</h1>
              <p className="col-span-2">Junior Cyber Security Assistant</p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold">Employment Type</h1>
              <p className="col-span-2">Casual</p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold">Location</h1>
              <p className="col-span-2">
                NSW Central West Muslim Association (NSWCWMA), Dubbo, NSW 2830
              </p>
            </div>
          </div>
          <div className="flex flex-col py-10 gap-5">
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold">About the Role</h1>
              <p className="col-span-2">
                We are seeking a proactive and detail-oriented Junior Cyber
                Security Assistant to support our Cyber Awareness project team.
                The role involves assisting the Team Lead in the delivery of
                cyber awareness programs, particularly targeting vulnerable
                groups such as children, elderly individuals, and diverse
                community members. This is a casual position, with working hours
                focused around school holidays and during event preparation.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold">Key Responsibilities</h1>
              <div className="col-span-2 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <h1 className="font-medium pl-5">Support and Coordination</h1>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Assist the Team Lead with event planning and execution for
                      Cyber Awareness programs.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Help prepare workshops and community events aimed at
                      educating young children about cyber security.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h1 className="font-medium pl-5">Marketing and Outreach</h1>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Coordinate outreach activities to engage children and
                      community groups.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Act as a community leader, fostering engagement and
                      promoting the initiative to a younger audience.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h1 className="font-medium pl-5">
                    Documentation and Office Administration
                  </h1>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Manage and maintain documentation related to project
                      activities.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Print, organise, and distribute educational materials.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Handle general office administration and ad-hoc tasks as
                      required.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h1 className="font-medium pl-5">Event Support</h1>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Assist during Cyber Awareness events, ensuring smooth
                      operations.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Set up and manage event logistics, including technical
                      equipment and registration.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h1 className="font-medium pl-5">
                    Helping with Acquittals & Reporting
                  </h1>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Helping with reporting and assistance to our Accountant
                      with reporting to government bodies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-semibold">Qualifications and Skills</h1>
              <div className="col-span-2 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>Basic computer and literacy skills are required.</p>
                  </div>
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      Strong communication and interpersonal skills to engage
                      with diverse community groups.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      Excellent organisational and administrative abilities.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      Proficiency in Microsoft Office Suite and basic document
                      management.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      Enthusiasm for learning and promoting cyber security
                      awareness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold">Working Hours and Compensation</h1>
              <div className="col-span-2 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      Hours will range from 8 to 15 hours per week, depending on
                      project requirements and event schedules.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      Casual pay rate of $11.25 per hour, inclusive of lodging.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      Minor wages will be paid and discussed during the
                      interview.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold">Additional Requirements</h1>
              <div className="col-span-2 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      A Tax File Number (TFN) and Superannuation account are
                      mandatory. Successful applicants who do not already have
                      these will be advised to arrange them.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      Written consent from both parents is required for
                      applicants under 18 years of age.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold">
                Benefits of Working with NSWCWMA
              </h1>
              <div className="col-span-2 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      Be part of a Registered Charity and Public Benevolent
                      Institute, contributing to meaningful community work.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      Access resources such as Virtual Reality, Projectors, and
                      Laptops for educational and supervised amusement purposes.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      Opportunity to become a future leader and attend committee
                      meetings to understand how management works.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      Gain exposure to government grants, high-end
                      professionalism, and collaboration with government and
                      non-government bodies.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      Opportunity to lead the NSWCWMA Young Wing, promoting
                      youth engagement and leadership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold">Interview Process</h1>
              <div className="col-span-2 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      Interviews will be conducted online or in person,
                      depending on the Project Lead’s availability.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      Interview Attire: Applicants are expected to wear a tie
                      for their interview.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-10 hidden md:grid grid-cols-4">
            <div className="col-span-1">
              <h1 className="font-semibold">Application Deadline</h1>
            </div>
            <div className="col-span-2">
              <p className="col-span-2">15/12/2024, 5:00 PM</p>
            </div>
            <div className="flex justify-end items-start">
              <a
                role="button"
                className="btn-sm flex justify-center items-center uppercase outline outline-1 md:px-10 hover:text-red-500 hover:outline-red-500 hover:bg-white text-gray-400 text-sm font-semibold bg-white rounded-none border-none"
                href="/Careers/JobApplication"
              >
                apply
              </a>
            </div>
          </div>

          <div className="md:hidden flex flex-col pb-5 gap-5">
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold">Job Vacancy</h1>
              <p className="col-span-2">
                Young Office Manager (Casual) – Age (11-17)
              </p>
            </div>
            <div className="flex justify-end items-start">
              <a
                role="button"
                className="btn-sm flex justify-center items-center uppercase outline outline-1 md:px-10 hover:text-red-500 hover:outline-red-500 hover:bg-white text-gray-400 text-sm font-semibold bg-white rounded-none border-none"
                href="/Careers/JobApplication"
              >
                apply
              </a>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default JuniorCyberSecurityAwarenessAssistant;
