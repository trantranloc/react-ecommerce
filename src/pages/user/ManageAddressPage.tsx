export default function ManageAddressPage() {
    return (
        <div className="container mx-auto p-4 flex flex-wrap justify-between">
            <div className="p-4 w-full shadow-xl">
                <h1 className="font-bold text-2xl mb-4">Manage Address</h1>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 p-4">
                        <label htmlFor="region" className="block mb-2">County/Region *</label>
                        <input type="text" id="region" name="region" className="w-full border p-2 rounded" />
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <label htmlFor="city" className="block mb-2">Town/City *</label>
                        <input type="text" id="city" name="city" className="w-full border p-2 rounded" />
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 p-4">
                        <label htmlFor="streetAddress" className="block mb-2">Street Address *</label>
                        <input type="text" id="streetAddress" name="streetAddress" className="w-full border p-2 rounded" />
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <label htmlFor="postalCode" className="block mb-2">Postal Code *</label>
                        <input type="text" id="postalCode" name="postalCode" className="w-full border p-2 rounded" />
                    </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded mx-3 my-4">
                    Save Changes
                </button>
            </div>
        </div>
    );
}
