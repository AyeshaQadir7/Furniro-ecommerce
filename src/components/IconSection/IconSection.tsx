import { BadgeCheck, Headset, Package, Trophy } from "lucide-react";
import React from "react";

function IconsSection() {
  return (
    <section className="w-full py-16 bg-gray-100 ">
      <div className="container flex justify-center mx-auto px-6 lg:px-12">
        {/* Icons Container */}
        <div className="flex flex-col lg:flex-row lg:space-x-16 space-y-12 lg:space-y-0">
          {/* Icon 1 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 text-center sm:text-left">
            <Trophy
              strokeWidth={1}
              className="text-4xl h-14 w-14 text-Gold mb-4 sm:mb-0"
            />
            <div>
              <h3 className="text-xl font-semibold">High Quality</h3>
              <p className="text-gray-600">Crafted from top material</p>
            </div>
          </div>

          {/* Icon 2 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 text-center sm:text-left">
            <BadgeCheck
              strokeWidth={1}
              className="text-4xl h-14 w-14 text-Gold mb-4 sm:mb-0"
            />
            <div>
              <h3 className="text-xl font-semibold">Warranty Protection</h3>
              <p className="text-gray-600">Over 2 years.</p>
            </div>
          </div>

          {/* Icon 3 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 text-center sm:text-left">
            <Package
              strokeWidth={1}
              className="text-4xl h-14 w-14 text-Gold mb-4 sm:mb-0"
            />
            <div>
              <h3 className="text-xl font-semibold">Free Shipping</h3>
              <p className="text-gray-600">Order over $150</p>
            </div>
          </div>

          {/* Icon 4 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 text-center sm:text-left">
            <Headset
              strokeWidth={1}
              className="text-4xl h-14 w-14 text-Gold mb-4 sm:mb-0"
            />
            <div>
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-600">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IconsSection;
