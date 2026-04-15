import { useState } from 'react';
// import { ChevronDownCircle } from 'react-icons';

const ProjectCard = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const dummyTasks = [
    { id: 1, title: 'Task 1', status: 'In Progress' },
    { id: 2, title: 'Task 2', status: 'Completed' },
    { id: 3, title: 'Task 3', status: 'Pending' },
  ]

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6">
        <h2 className="text-2xl font-bold text-white mb-2">Sample Project</h2>
        <p className="text-blue-100 text-sm">This is a sample project description showcasing the project card component with tasks and interactive features.</p>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tasks Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 rounded-lg border border-blue-200 transition-all duration-200"
        >
          <span className="font-semibold text-gray-800">Tasks ({dummyTasks.length})</span>
          {/* <ChevronDownCircle
            size={20}
            className={`text-blue-600 transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          /> */}
          🔻
        </button>

        {/* Accordion - Tasks List */}
        {isExpanded && (
          <div className="mt-4 space-y-2 animate-in fade-in-50 duration-200">
            {dummyTasks.map((task) => (
              <div
                key={task.id}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{task.title}</h4>
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      task.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : task.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {task.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard