
const GroupProject = ({ activeTab }) => {
    return (
        <>
            {/* Show Projects Section */}
            {activeTab === 'groupProjects' && (
                <div className="animate-fadeIn">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Group Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-indigo-400 hover:shadow-md transition-all duration-300 cursor-pointer">
                            <div className="text-center text-gray-500">
                                <p className="text-4xl mb-2">📁</p>
                                <p className="font-semibold">No projects yet</p>
                                <p className="text-sm text-gray-400">Join Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default GroupProject