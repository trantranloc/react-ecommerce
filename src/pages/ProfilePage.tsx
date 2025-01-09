import React from "react";

export default function ProfilePage() {
    return (
        <div className="container mx-auto p-4 m-4 shadow">
            <h1 className="font-bold text-2xl mb-4">Profile Information</h1>
            <div className="flex">
                <div className="w-1/2 p-4">
                    <label htmlFor="firstName" className="block mb-2">First Name</label>
                    <input type="text" id="firstName" name="firstName" className="w-full border p-2 rounded" />
                </div>
                <div className="w-1/2 p-4">
                    <label htmlFor="lastName" className="block mb-2">Last Name</label>
                    <input type="text" id="lastName" name="lastName" className="w-full border p-2 rounded" />
                </div>
            </div>
            <div className="flex">
                <div className="w-1/2 p-4">
                    <label htmlFor="birthday" className="block mb-2">Birthday</label>
                    <input type="date" id="birthday" name="birthday" className="w-full border p-2 rounded" />
                </div>
                <div className="w-1/2 p-4">
                    <label htmlFor="gender" className="block mb-2">Gender</label>
                    <input type="text" id="gender" name="gender" className="w-full border p-2 rounded" />
                </div>
            </div>
            <div className="flex">
                <div className="w-1/2 p-4">
                    <label htmlFor="email" className="block mb-2">Email address</label>
                    <input type="email" id="email" name="email" className="w-full border p-2 rounded" />
                </div>
                <div className="w-1/2 p-4">
                    <label htmlFor="phone" className="block mb-2">Phone number</label>
                    <input type="tel" id="phone" name="phone" className="w-full border p-2 rounded" />
                </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded mx-3 my-4 ">
                Save Changes
            </button>
        </div>
    );
}
