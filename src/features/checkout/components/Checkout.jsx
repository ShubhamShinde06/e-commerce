import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementAsync, selectCount } from "../checkSlice";
import NavBar from "../../navBar/NavBar";

export default function Checkout() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <NavBar />
      <h1 className=" text-center text-black text-2xl font-bold">Checkout</h1>
      <div className="md:m-[20px] md:p-[50px] p-[20px] m-[10px] bg-[#F9FAFB] rounded-lg h-full md:flex gap-[80px] block">
        <div className="capitalize md:w-[50%]">
          <form action="">
            <h1 className="text-[20px] font-[500]">contact information</h1>
            <div className="mt-5 h-[130px]">
              <label
                htmlFor=""
                className=" font-semibold text-[15px] text-[#37416C]"
              >
                email address
              </label>
              <br />
              <input
                type="text"
                className="h-[38px] border-[#D1D5DB] w-full rounded-md shadow-md mt-2"
              />
            </div>
            <hr className="h-[2px] bg-[#D1D5DB]" />

            <h1 className="text-[20px] font-[500] mt-[50px]">
              Shipping information
            </h1>

            <div className="mt-5  flex gap-[20px]">
              <div className="w-[50%]">
                <label
                  htmlFor=""
                  className=" font-semibold text-[15px] text-[#37416C]"
                >
                  frist name
                </label>
                <br />
                <input
                  type="text"
                  className="h-[38px] border-[#D1D5DB] w-full rounded-md shadow-md mt-2"
                />
              </div>
              <div className="w-[50%]">
              <label
                htmlFor=""
                className=" font-semibold text-[15px] text-[#37416C]"
              >
                last name
              </label>
              <br />
              <input
                type="text"
                className="h-[38px] border-[#D1D5DB] w-full rounded-md shadow-md mt-2"
              />
              </div>
            </div>

            <div className="mt-8">
              <label
                htmlFor=""
                className=" font-semibold text-[15px] text-[#37416C]"
              >
                Company
              </label>
              <br />
              <input
                type="text"
                className="h-[38px] border-[#D1D5DB] w-full rounded-md shadow-md mt-2"
              />
            </div>

            <div className="mt-8">
              <label
                htmlFor=""
                className=" font-semibold text-[15px] text-[#37416C]"
              >
                address
              </label>
              <br />
              <input
                type="text"
                className="h-[38px] border-[#D1D5DB] w-full rounded-md shadow-md mt-2"
              />
            </div>

            <div className="mt-8">
              <label
                htmlFor=""
                className=" font-semibold text-[15px] text-[#37416C]"
              >
                Apartment, suite, etc.
              </label>
              <br />
              <input
                type="text"
                className="h-[38px] border-[#D1D5DB] w-full rounded-md shadow-md mt-2"
              />
            </div>

            <div className="mt-5  flex gap-[20px]">
              <div className="w-[50%]">
                <label
                  htmlFor=""
                  className=" font-semibold text-[15px] text-[#37416C]"
                >
                  City
                </label>
                <br />
                <input
                  type="text"
                  className="h-[38px] border-[#D1D5DB] w-full rounded-md shadow-md mt-2"
                />
              </div>
              <div className="w-[50%]">
              <label
                htmlFor=""
                className=" font-semibold text-[15px] text-[#37416C]"
              >
                Country
              </label>
              <br />
              <input
                type="text"
                className="h-[38px] border-[#D1D5DB] w-full rounded-md shadow-md mt-2"
              />
              </div>
            </div>

            <div className="mt-5  flex gap-[20px]">
              <div className="w-[50%]">
                <label
                  htmlFor=""
                  className=" font-semibold text-[15px] text-[#37416C]"
                >
                  State / Province
                </label>
                <br />
                <input
                  type="text"
                  className="h-[38px] border-[#D1D5DB] w-full rounded-md shadow-md mt-2"
                />
              </div>
              <div className="w-[50%]">
              <label
                htmlFor=""
                className=" font-semibold text-[15px] text-[#37416C]"
              >
               
                Postal code
              </label>
              <br />
              <input
                type="text"
                className="h-[38px] border-[#D1D5DB] w-full rounded-md shadow-md mt-2"
              />
              </div>
            </div>

            <div className="mt-8 h-[130px]">
              <label
                htmlFor=""
                className=" font-semibold text-[15px] text-[#37416C]"
              >
                Phone
              </label>
              <br />
              <input
                type="text"
                className="h-[38px] border-[#D1D5DB] w-full rounded-md shadow-md mt-2"
              />
            </div>

            <hr className="h-[2px]  bg-[#D1D5DB]" />

            <h1 className="text-[20px] font-[500] mt-[50px]">Payment</h1> 
            <div className="flex gap-[60px] items-center mt-5">
                <div className="flex items-center gap-2">
                    <input type="radio" id="html" name="fav_language" value="credit card" />
                    <label htmlFor="credit card" className=" font-semibold">Credit card</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="radio" id="html" name="fav_language" value="paypal" />
                    <label htmlFor="credit card" className=" font-semibold">PayPal</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="radio" id="html" name="fav_language" value="cod" />
                    <label htmlFor="credit card" className=" font-semibold">COD</label>
                </div>
            </div>

            <div className="mt-8">
              <label
                htmlFor=""
                className=" font-semibold text-[15px] text-[#37416C]"
              >
                Card number
              </label>
              <br />
              <input
                type="text"
                className="h-[38px] border-[#D1D5DB] w-full rounded-md shadow-md mt-2"
              />
            </div>

            <div className="mt-8">
              <label
                htmlFor=""
                className=" font-semibold text-[15px] text-[#37416C]"
              >
                Name on card
              </label>
              <br />
              <input
                type="text"
                className="h-[38px] border-[#D1D5DB] w-full rounded-md shadow-md mt-2"
              />
            </div>

            <div className="mt-5  flex gap-[20px]">
              <div className="w-[80%]">
                <label
                  htmlFor=""
                  className=" font-semibold text-[15px] text-[#37416C]"
                >
                  Expiration date (MM/YY)
                </label>
                <br />
                <input
                  type="text"
                  className="h-[38px] border-[#D1D5DB] w-full rounded-md shadow-md mt-2"
                />
              </div>
              <div className="w-[20%]">
              <label
                htmlFor=""
                className=" font-semibold text-[15px] text-[#37416C]"
              >
               
               CVC
              </label>
              <br />
              <input
                type="text"
                className="h-[38px] border-[#D1D5DB] w-full rounded-md shadow-md mt-2"
              />
              </div>
            </div>
          </form>
        </div>

        <div className="border-[#D1D5DB] bg-[#FFFFFF] border-[1px] rounded-lg p-[10px] py-[30px] md:w-[50%] h-full mt-[50px] md:mt-0">
            <h1 className="text-[20px] font-[500] ">Order summary</h1>
            <div className="h-[160px] p-[10px] mt-3 flex gap-6">
                <div className="w-[100px] h-[130px] border">

                </div>
                <div className="w-[70%]">
                    <h1 className=" font-semibold">Black Tee</h1>
                    <p className="text-[#374A83]">Black</p>
                    <p className="mb-[30px] text-[#374A83]">Large</p>
                   
                </div>
                <div>
                    <span className="font-bold">$32.00</span>
                </div>
            </div>

            <hr className="h-[2px]  bg-[#D1D5DB]" />
            <div className=" p-[10px] mt-3 flex gap-6">
                <div className="w-[90%]">
                    <h1 className="text-[gray]">Subtotal</h1>
                </div>
                <div>
                    <span className="font-bold">$32.00</span>
                </div>
            </div>
            <div className=" p-[10px] mt-3 flex gap-6">
                <div className="w-[90%]">
                    <h1 className="text-[gray]">Shipping</h1>
                </div>
                <div>
                    <span className="font-bold">$32.00</span>
                </div>
            </div>
            <div className=" p-[10px] mt-3 flex gap-6">
                <div className="w-[90%]">
                    <h1 className="text-[gray]">Taxes</h1>
                </div>
                <div>
                    <span className="font-bold">$32.00</span>
                </div>
            </div>

            <hr className="h-[2px] mt-[20px] bg-[#D1D5DB]" />
            <div className=" p-[10px] mt-3 flex gap-6">
                <div className="w-[90%]">
                    <h1 className="text-black font-semibold">Total</h1>
                </div>
                <div>
                    <span className="font-bold">$32.00</span>
                </div>
            </div>

            <hr className="h-[2px] mt-[20px] mb-[20px] bg-[#D1D5DB]" />
            <button
                type="button"
                className="w-full h-[50px] rounded-lg text-[white] bg-[#4F46E5] font-semibold"
            >
                Confirm order
            </button>

        </div>
      </div>
    </div>
  );
}
