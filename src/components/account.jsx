import React from 'react';

const Account = () => {
    const [accountInfo, setAccountInfo] = React.useState({
        username: "",
        email: "",
        fullName: "",
        joinDate: "",
        accountType: "",
        score: 0
    });

    React.useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = localStorage.getItem('userId');
                const response = await fetch(`${import.meta.env.VITE_API_URL}/user/${userId}`);
                const data = await response.json();
                setAccountInfo({
                    username: data.username,
                    email: data.email,
                    fullName: data.full_name,
                    joinDate: data.created_at,
                    accountType: data.role,
                    score: data.score
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Account Information
                    </h2>
                </div>
                <div className="mt-8 space-y-6">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <p className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md bg-gray-50">
                            {accountInfo.username}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <p className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md bg-gray-50">
                            {accountInfo.email}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <p className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md bg-gray-50">
                            {accountInfo.fullName}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Join Date</label>
                        <p className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md bg-gray-50">
                            {accountInfo.joinDate}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Account Type</label>
                        <p className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md bg-gray-50">
                            {accountInfo.accountType}
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Score</label>
                        <p className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md bg-gray-50">
                            {accountInfo.score}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;