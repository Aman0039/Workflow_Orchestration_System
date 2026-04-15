import { useState } from 'react'
import ShowProject from '../components/ShowProject';
import CreateProject from '../components/CreateProject';
import GroupProject from '../components/GroupProject';
import JoinViaInvite from '../components/JoinViaInvite';

const Dashboard = ({ setLoggedIn }) => {
  const [activeTab, setActiveTab] = useState('projects');


  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">Dashboard</h1>
            <p className="text-sm sm:text-base text-gray-600">Manage your projects and collaborate with others</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6 sm:mb-8 border-b-2 border-gray-200 overflow-x-auto">
          <div className="flex gap-2 sm:gap-4 min-w-max sm:min-w-0">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-3 sm:px-6 py-3 font-semibold text-sm sm:text-lg whitespace-nowrap transition-all duration-300 border-b-4 ${activeTab === 'projects'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
            >
              Show Projects
            </button>
            <button
              onClick={() => setActiveTab('create')}
              className={`px-3 sm:px-6 py-3 font-semibold text-sm sm:text-lg whitespace-nowrap transition-all duration-300 border-b-4 ${activeTab === 'create'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
            >
              Create Project
            </button>
            <button
              onClick={() => setActiveTab('groupProjects')}
              className={`px-3 sm:px-6 py-3 font-semibold text-sm sm:text-lg whitespace-nowrap transition-all duration-300 border-b-4 ${activeTab === 'group'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
            >
              Group Project
            </button>
            <button
              onClick={() => setActiveTab('join')}
              className={`px-3 sm:px-6 py-3 font-semibold text-sm sm:text-lg whitespace-nowrap transition-all duration-300 border-b-4 ${activeTab === 'join'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
            >
              Join via Invite
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-lg shadow-lg p-8">

          <ShowProject activeTab={activeTab} />

          <CreateProject activeTab={activeTab} />

          <GroupProject activeTab={activeTab} />

          {/* Join via Invite Section */}
          <JoinViaInvite activeTab={activeTab} />
        </div>
        <button
          onClick={handleLogout}
          className="w-full sm:w-auto mt-14 sm: bg-red-500/90 hover:bg-red-600/90 text-white font-bold py-2 px-6 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105"
        >
          Logout
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  )
}

export default Dashboard