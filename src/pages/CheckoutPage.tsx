export default function CheckoutPage() {
    return (
        <div className="container mx-auto p-4 flex flex-wrap justify-between h-full">
            <div className="p-4 w-full md:w-2/3 shadow">
                <h1 className="font-bold text-2xl mb-4">Profile Information</h1>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 p-4">
                        <label htmlFor="firstName" className="block mb-2">First Name</label>
                        <input type="text" id="firstName" name="firstName" className="w-full border p-2 rounded" />
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <label htmlFor="lastName" className="block mb-2">Last Name</label>
                        <input type="text" id="lastName" name="lastName" className="w-full border p-2 rounded" />
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 p-4">
                        <label htmlFor="email" className="block mb-2">Email address</label>
                        <input type="email" id="email" name="email" className="w-full border p-2 rounded" />
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <label htmlFor="phone" className="block mb-2">Phone number</label>
                        <input type="tel" id="phone" name="phone" className="w-full border p-2 rounded" />
                    </div>
                </div>
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
                        <label htmlFor="altPhone" className="block mb-2">Alternate Phone Number</label>
                        <input type="tel" id="altPhone" name="altPhone" className="w-full border p-2 rounded" />
                    </div>
                </div>
            </div>
            {/* Summary */}
            <div className="w-full md:w-1/3 mt-4">
                <div className="bg-white shadow-sm rounded-lg p-4">
                    <div className="text-center mb-4">
                        <h5 className="text-xl font-semibold">ORDER SUMMARY</h5>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Total Product :</span>
                        {/* <strong>{cartItems.reduce((total, item) => total + item.quantity, 0)}</strong> */}
                    </div>
                    <div className="flex justify-between mb-4">
                        <span>Subtotal :</span>
                        {/* <strong>{totalPrice.toLocaleString()} VND</strong> */}
                    </div>
                    <div className="flex justify-between mb-4">
                        <span>Delivery :</span>
                        <strong> Free</strong>
                    </div>
                    <div className="flex justify-between mb-4">
                        <span>Tax :</span>
                        <strong> Free</strong>
                    </div>
                    <hr />
                    <div className="flex justify-between my-4">
                        <span>Total :</span>
                        {/* <strong> {totalPrice.toLocaleString()}</strong> */}
                    </div>
                    <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                        Proceed to checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
