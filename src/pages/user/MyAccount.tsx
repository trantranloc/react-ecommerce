import { useAuth } from "../../hooks/useAuth";

export default function MyAccount() {
    const { user } = useAuth();

    return (
        <div className="container mx-auto p-6 w-full">
            {/* Info Section */}
            <div className="flex">
                {/* Personal Profile */}
                <div className="flex w-full h-56 flex-col items-start p-6 m-4 shadow-lg bg-white rounded-lg">
                    <div className="flex justify-between w-full">
                        <h2 className="font-semibold text-2xl">Personal Profile</h2>
                        <button className="text-blue-500 hover:underline">Edit</button>
                    </div>
                    <p className="mt-4 text-lg font-medium">{user?.firstname}</p>
                    <p className="text-gray-600">{user?.email}</p>
                    <p className="text-gray-600">{user?.phone}</p>
                </div>

                {/* Shipping Address */}
                <div className="flex w-full h-56 flex-col items-start p-6 m-4 shadow-lg bg-white rounded-lg">
                    <div className="flex justify-between w-full">
                        <h2 className="font-semibold text-2xl">Shipping Address</h2>
                        <button className="text-blue-500 hover:underline">Edit</button>
                    </div>
                    <p className="mt-4 text-lg font-medium">Ralph Bohner</p>
                    <p className="text-gray-600">3891 Ranchview Dr.</p>
                    <p className="text-gray-600">Richardson, California</p>
                    <p className="text-gray-600">(123) 456-789</p>
                </div>
            </div>
        </div>
    );
}
