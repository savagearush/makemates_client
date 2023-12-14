import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { FormEvent, useRef } from "react";

function Signup() {
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = getArray(1950, 2023);
  const ref = useRef();

  const resetForm = () => {
    if (ref.current) ref.current.reset();
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <dialog id="signupModal" className="modal ">
      <form
        ref={ref}
        onSubmit={(e) => handleSubmit(e)}
        className="modal-box flex flex-col gap-6 bg-white backdrop-blur-lg rounded-md"
      >
        <div className="flex flex-col gap-1 justify-start">
          <div className="text-3xl">Sign Up</div>{" "}
          <p className="text-sm font-light">your mate is waiting...</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1 ">
            <label htmlFor="name" className="text-sm">
              Name :
            </label>
            <input
              type="text"
              name="name"
              className="w-full rounded-md placeholder:text-black/70 px-2 py-2  ring-1 bg-transparent text-black focus-within:ring-2"
              placeholder="Enter your full name"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label htmlFor="email" className="text-sm">
              Email Id :
            </label>
            <input
              type="text"
              name="email"
              className="w-full rounded-md placeholder:text-black/70 px-2 py-2 ring-1 bg-transparent text-black focus-within:ring-2"
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm">
              Password :
            </label>
            <input
              type="password"
              name="password"
              className="w-full rounded-md placeholder:text-black/70 px-2 py-2  ring-1 bg-transparent text-black focus-within:ring-2"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label htmlFor="email" className="text-sm">
                Date of Birth :
              </label>
              <div className="flex justify-between gap-4">
                <select
                  className="p-2 ring-1 bg-transparent text-sm text-black rounded-md"
                  name="day"
                  id="day"
                  placeholder="Day"
                >
                  <option selected disabled>
                    Day
                  </option>
                  {days.map((day, index) => {
                    return (
                      <option key={index} value={day}>
                        {day}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="p-2 bg-transparent ring-1 text-sm text-black rounded-md"
                  name="month"
                  id="months"
                >
                  <option selected disabled>
                    Month
                  </option>
                  {months.map((month, index) => {
                    return (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    );
                  })}
                </select>
                <select
                  className="p-2 ring-1 bg-transparent text-sm text-black rounded-md"
                  name="year"
                  id="year"
                >
                  <option selected disabled>
                    Year
                  </option>
                  {years.map((year, index) => {
                    return (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="gender" className="ml-2 text-sm font-light">
                Gender :
              </label>
              <select
                className="p-2 ring-1 bg-transparent text-sm text-black rounded-md"
                name="gender"
                id="gender"
              >
                <option selected disabled>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <Button
            type="submit"
            className="rounded-lg bg-green-400 hover:bg-green-300 text-black px-12 py-1 text-md font-bold"
          >
            Create Account
          </Button>
          <div className="modal-action">
            <form method="dialog" className="w-full">
              <Button
                onClick={resetForm}
                className="w-full rounded-lg placeholder:text-black/70 bg-blue-400 text-black px-12 py-1 text-md font-bold hover:bg-blue-300"
              >
                Cancel
              </Button>
            </form>
          </div>
        </div>
      </form>
    </dialog>
  );
}

const getArray = (start: number, end: number) => {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};

export default Signup;
