"use client";

import React, { useEffect, useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { client } from "@/sanity/lib/client";

function ContactPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [contactData, setContactData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "contact"][0] {
        title,
        description,
        address,
        phone,
        hotline,
        workingHours
      }`;
      const data = await client.fetch(query);
      setContactData(data);
    };

    fetchData();
  }, []);

  if (!contactData) {
    return <div className="flex justify-center my-4">Loading...</div>;
  }

  const { title, description, address, phone, hotline, workingHours } =
    contactData;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mt-6 mb-20">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <p className="text-gray-600 mt-4">{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-8 ml-16">
          <div className="flex items-center gap-4">
            <MapPin size={24} className="text-gray-700" />
            <div>
              <h3 className="font-bold text-lg">Address</h3>
              <p className="text-gray-600">{address}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone size={24} className="text-gray-700" />
            <div>
              <h3 className="font-bold text-lg">Phone</h3>
              <p className="text-gray-600">
                {phone}
                <br />
                {hotline && `Hotline: ${hotline}`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Clock size={24} className="text-gray-700" />
            <div>
              <h3 className="font-bold text-lg">Working Hours</h3>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {workingHours.map((item: any, index: number) => (
                <p key={index} className="text-gray-600">
                  {item.day}: {item.hours}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="mx-6">
          <form className="space-y-6 gap-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 my-2"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 my-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 my-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0"
                placeholder="Subject"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 my-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full my-2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-12 py-2 text-white bg-PrimaryColor rounded-sm hover:bg-yellow-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
