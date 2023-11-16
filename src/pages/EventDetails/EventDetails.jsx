import React, { useState } from "react";
import Profile from "../../components/Profile";
import Sidebar from "../../components/Sidebar";
import Image from "../../assets/members/1.png";
import eventDetails from "../../assets/event.png";
import Modal from "./Modal";
import Modals from "./Modal";
import { Button } from "flowbite-react";

const EventDetails = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="flex">
      <Sidebar />
      <Modals openModal={openModal} setOpenModal={setOpenModal} />
      <div className="w-full">
        <Profile />
        <div className="max-w-[1000px] w-full">
          <h1 className="text-[#1BB6ED] font-bold text-[24px] p-4">
            Event details
          </h1>
          <div className="p-6">
            <div className="w-full h-[300px]">
              <img
                src={eventDetails}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex justify-between mt-5">
                <h1 className="text-[24px] font-bold mb-1">
                  Lunch menu uptp 50%
                </h1>
                <div className="flex items-center gap-5">
                  <span className="flex items-center cursor-pointer">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="25px"
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M383.822 344.427c-16.045 0-31.024 5.326-41.721 15.979l-152.957-88.42c1.071-5.328 2.142-9.593 2.142-14.919 0-5.328-1.071-9.593-2.142-14.919l150.826-87.35c11.762 10.653 26.741 17.041 43.852 17.041 35.295 0 64.178-28.766 64.178-63.92C448 72.767 419.117 44 383.822 44c-35.297 0-64.179 28.767-64.179 63.92 0 5.327 1.065 9.593 2.142 14.919l-150.821 87.35c-11.767-10.654-26.741-17.041-43.856-17.041-35.296 0-63.108 28.766-63.108 63.92 0 35.153 28.877 63.92 64.178 63.92 17.115 0 32.089-6.389 43.856-17.042l151.891 88.421c-1.076 4.255-2.141 8.521-2.141 13.847 0 34.094 27.806 61.787 62.037 61.787 34.229 0 62.036-27.693 62.036-61.787.001-34.094-27.805-61.787-62.035-61.787z"></path>
                    </svg>
                  </span>
                  <button className="bg-[#E0F5FD] text-[#1BB6ED] py-2 px-6 rounded-lg font-semibold">
                    Join
                  </button>
                </div>
              </div>
              <p className="text-black font-semibold mb-1">B&F</p>
              <p className="text-[#828282] text-[14px] font-medium">
                3 hours | 12, june 2021, 10:00 am
              </p>
            </div>

            <div className="mb-3">
              <span className="block text-[16px] font-medium text-[#333333] mb-4">
                24 people has joined
              </span>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <img
                    src={Image}
                    alt=""
                    className="w-[40px] h-[40px] rounded-full object-cover"
                  />
                  <img
                    src={Image}
                    alt=""
                    className="w-[40px] h-[40px] rounded-full object-cover"
                  />
                  <img
                    src={Image}
                    alt=""
                    className="w-[40px] h-[40px] rounded-full object-cover"
                  />
                </div>
                <span className="w-[40px] h-[40px] text-[15px] rounded-full bg-[#1BB6ED] text-white flex items-center justify-center">
                  24+
                </span>

                <span
                  className="text-[15px] text-[#1BB6ED] cursor-pointer"
                  onClick={() => setOpenModal(true)}
                >
                  See all
                </span>
              </div>
            </div>

            <div className="mb-4 mt-8">
              <h3 className="text-[22px] font-semibold mb-1">Descriptions</h3>
              <p className="text-[#828282] text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, animi. Debitis aliquam fugiat quaerat alias ad
                numquam, hic natus deleniti molestiae voluptatem quam itaque
                placeat recusandae illum soluta exercitationem tenetur! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
                animi. Debitis aliquam fugiat quaerat alias ad numquam, hic
                natus deleniti molestiae voluptatem quam itaque placeat
                recusandae illum soluta exercitationem tenetur!
              </p>
            </div>
            <div>
              <div className="flex items-start gap-3">
                <span className="flex items-center mt-2">
                  <svg
                    stroke="currentColor"
                    fill="#828282"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M515.664-.368C305.76-.368 128 178.4 128 390.176c0 221.76 206.032 448.544 344.624 607.936.528.64 22.929 25.52 50.528 25.52h2.449c27.6 0 49.84-24.88 50.399-25.52 130.064-149.52 320-396.048 320-607.936C896 178.4 757.344-.368 515.664-.368zm12.832 955.552c-1.12 1.12-2.753 2.369-4.193 3.409-1.472-1.008-3.072-2.288-4.255-3.408l-16.737-19.248C371.92 785.2 192 578.785 192 390.176c0-177.008 148.224-326.56 323.664-326.56 218.528 0 316.336 164 316.336 326.56 0 143.184-102.128 333.296-303.504 565.008zm-15.377-761.776c-106.032 0-192 85.968-192 192s85.968 192 192 192 192-85.968 192-192-85.968-192-192-192zm0 320c-70.576 0-129.473-58.816-129.473-129.408 0-70.576 57.424-128 128-128 70.624 0 128 57.424 128 128 .032 70.592-55.903 129.408-126.527 129.408z"></path>
                  </svg>
                </span>
                <div>
                  <h3 className="text-[22px] font-semibold">
                    Commonwealth Club
                  </h3>
                  <small className="text-[#828282] font-medium">
                    110 The Embarcadero, San Fransisco
                  </small>
                </div>
              </div>
              <div className="mt-4 bg-white p-4 rounded-xl shadow-primary">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.330962747641!2d90.38113137630452!3d23.735574478680547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c8e1ea9fd1%3A0xa6e274882fdbce53!2sDhaka%20College!5e0!3m2!1sen!2sbd!4v1700029911453!5m2!1sen!2sbd"
                  width={"100%"}
                  style={{ border: "0", height: "300px", borderRadius: "16px" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
