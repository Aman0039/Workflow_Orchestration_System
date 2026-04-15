import React from 'react'

const JoinViaInvite = ({ activeTab }) => {
    return (
        <>
            {/* Join via Invite Section */}
            {activeTab === 'join' && (
                <div className="animate-fadeIn max-w-2xl">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Join via Invite</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Invite Code</label>
                            <input
                                type="text"
                                placeholder="Enter the invite code you received"
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Your Display Name</label>
                            <input
                                type="text"
                                placeholder="How should we call you?"
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                        >
                            Join Project
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}

export default JoinViaInvite