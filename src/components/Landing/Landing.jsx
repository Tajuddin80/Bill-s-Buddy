import React from "react";
import google from "../../../src/assets/playstore.png";
import appstore from "../../../src/assets/appstore.png";
import heroImg from "../../../src/assets/background-1.svg";
import CountUp from "react-countup";
import ImageSwiper from "../../components/ImageSwiper/ImageSwiper";
import { useLoaderData } from "react-router";
import { Typewriter } from "react-simple-typewriter";
const Landing = () => {
  const data = useLoaderData();
  return (
    <div className="flex-col flex justify-center items-center mt-20 space-y-10">
      <h1 className=" md:text-[3.5rem] lg:text-[4.5rem] text-[3rem] text-center font-bold ">
        {" "}
        Discover more ways to manage your
      </h1>
      <div>
        <span className="font-[2rem]"
          style={{ color: "#ff5c15", fontWeight: "bold", fontSize: "3rem" }}
        >
          <Typewriter
            words={[
              "Pay-Airtime",
              "Pay-Data",
              "Pay-TV-Subscription",
              "Pay-Electricity-Token",
              "Pay-Gas",
              "Annual-Taxes",
              "Vehicle-Registration",
              "Medical-Bills",
              "Tuition",
              "Mobile-Phone",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>
      <div>
        <h4 className="md:text-2xl text-xl text-center px-2">
          Bill Buddy is your all-in-one bill management solution. Effortlessly
          handle subscriptions and <br /> automate payments, all while gaining
          valuable insights into your spending habits.
        </h4>
      </div>
      <div className="flex justify-center flex-wrap gap-4 mt-3">
        <div>
          <img src={google} alt="" />
        </div>
        <div>
          <img src={appstore} alt="" />
        </div>
      </div>
      <div className=" text-center mx-4 md:mx-auto">
        <img src={heroImg} alt="" />
      </div>
      <div className="flex flex-col gap-3 my-20">
        <h3 className="text-[#ff5c15] text-[3rem] font-normal mx-5 text-center">
          Simplify Your Bills, Amplify Your Life
        </h3>
        <h5 className="mx-5 text-2xl text-center">
          Simplify your bills and join the amplified life. Be part of those who
          took <br /> a step back and let Bill Buddy do all their bill
          managements.
        </h5>
      </div>

      {/* count up  */}

      <div className="stats-container flex  gap-20 flex-wrap justify-center">
        <div className="stat-box">
          <h2 className="text-[#ff5c15] text-5xl font-extrabold">
            <CountUp end={500} duration={20} />+
          </h2>
          <p className="text-2xl">App Downloads</p>
        </div>
        <div className="stat-box">
          <h2 className="text-[#ff5c15] text-5xl font-extrabold">
            <CountUp end={2900} duration={21} />+
          </h2>
          <p className="text-2xl">Completed Bills</p>
        </div>
        <div className="stat-box">
          <h2 className="text-[#ff5c15] text-5xl font-extrabold">
            <CountUp end={1100} duration={22} />+
          </h2>
          <p className="text-2xl">Scheduled Bills</p>
        </div>
      </div>

      {/* Image Swiper */}

      <div className="mt-20 w-11/12 mx-auto ">
        <ImageSwiper data={data}></ImageSwiper>
      </div>

      {/* Frequently Asked Questions */}
      <div className="my-20">
        <h3 className="text-center mb-3">
          <span className="md:text-[3rem] text-[2rem] font-bold  text-[#ff5c15]">
            Frequently Asked Questions
          </span>
          <span className="md:text-[3rem] text-[2rem] font-bold"> (FAQs) </span>
        </h3>
        <h5 className="text-2xl text-center">
          Need further support, kindly contact our
          <span className="  text-[#ff5c15]"> support</span> team for
          assistance.
        </h5>

        <div className=" w-11/12 mx-auto mt-25">
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-bold text-3xl">
              What is Bill Buddy?
            </div>
            <div className="collapse-content text-xl">
              Bill Buddy is a personal finance assistant designed to simplify
              your financial management. It helps you automate bill payments,
              track expenses, and gain better control over your finances.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-bold text-3xl">
              Is Bill Buddy secure?
            </div>
            <div className="collapse-content text-2xl">
              Yes, security is a top priority. Bill Buddy uses industry-standard
              encryption to protect your personal and financial information. We
              follow best practices to ensure your data is secure.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-bold text-3xl">
              What types of bills can I manage with Bill Buddy?
            </div>
            <div className="collapse-content text-2xl">
              You can manage various bills, including airtime, data
              subscriptions, electricity units, cable subscriptions, and more.
              Bill Buddy aims to cover a wide range of regular payments to
              streamline your financial management.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-bold text-3xl">
              Can I customize my bill payment schedule?
            </div>
            <div className="collapse-content text-2xl">
              Absolutely. Bill Buddy allows you to customize your bill payment
              schedule based on paydays or specific due dates. You have the
              flexibility to set it up according to your financial preferences.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-bold text-3xl">
              I forgot my password. What should I do?
            </div>
            <div className="collapse-content text-2xl">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-bold text-3xl">
              How do I update my profile information?
            </div>
            <div className="collapse-content text-2xl">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
