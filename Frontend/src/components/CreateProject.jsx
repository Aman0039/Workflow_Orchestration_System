import React from 'react'

const CreateProject = ({activeTab}) => {
  return (
    <>
        {/* Create Project Section */}
          {activeTab === 'create' && (
            <div className="animate-fadeIn max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Create a New Project</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Name</label>
                  <input
                    type="text"
                    placeholder="Enter project name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea
                    placeholder="Describe your project"
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  Create Project
                </button>
              </form>
            </div>
          )}
    </>
  )
}

export default CreateProject