import React from "react";
import Whatsapp from "../../Components/Whatsapp";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import ScrollToTop from "../../Components/ScrollToTop";
import { Container } from "@radix-ui/themes";

function YoungOfficeManager() {
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
                Young Office Manager (Casual) – Age (11-17)
              </p>

              <p className="col-span-2">Young Office Manager</p>

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
                Young Office Manager (Casual) – Age (11-17)
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold">Position</h1>
              <p className="col-span-2">Young Office Manager</p>
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
                We are seeking an enthusiastic and responsible Young Office
                Manager to join our team. This is an excellent opportunity for
                young individuals (minimum age: 11 years old) to develop
                leadership, organisational, and administrative skills. The Young
                Office Manager will play a key role in managing office
                operations, coordinating youth activities, and acting as an
                ambassador for Muslim youth in the Central West.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold">Key Responsibilities</h1>
              <div className="col-span-2 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <h1 className="font-medium pl-5">
                    Building and Maintenance Management
                  </h1>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Inspect the entire building regularly to identify
                      maintenance needs and potential issues.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Report problems and submit maintenance requests to the
                      management team for approval and guidance.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Maintain a comprehensive register for all maintenance
                      activities.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-medium pl-5">
                    Events and Catering Management
                  </h1>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Oversee and coordinate all events outside school hours.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Manage catering requirements for events and ensure all
                      arrangements are in place.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Help with youth events management and coordinate with
                      other young individuals for smooth execution.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-medium pl-5">
                    Office Management and Documentation
                  </h1>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Manage NSWCWMA office operations, including maintaining
                      documentation and organising receipts.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Familiarise yourself with grant registers and government
                      grant processes.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Learn and assist with the organisation&apos;s accounting
                      system and receipt management.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-medium pl-5">
                    Youth Club and Community Engagement
                  </h1>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Assist in the formation and support of young teams and the
                      Youth Club.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>
                      Act as an ambassador for Muslim youth in the Central West,
                      promoting engagement and participation in events.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-medium pl-5">Ad-hoc duties</h1>
                  <div className="flex gap-5 pl-10">
                    <p>•</p>
                    <p>Other ad-hoc duties</p>
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
                    <p>
                      Basic organisational and literacy skills are required.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      Strong communication and interpersonal skills, with the
                      ability to work collaboratively with young peers and
                      adults.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      A proactive attitude and a willingness to learn new
                      skills, including office management and grant processes.
                    </p>
                  </div>
                  <div className="flex gap-5 pl-5">
                    <p>•</p>
                    <p>
                      Interest in contributing to the community and promoting
                      youth engagement.
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

export default YoungOfficeManager;
